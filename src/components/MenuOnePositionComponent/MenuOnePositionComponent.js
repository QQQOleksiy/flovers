import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import css from './menu_one_product.module.css';
import { flowerAction } from '../../redux';

const MenuOnePositionComponent = ({ category }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isSubcategoriesVisible, setSubcategoriesVisible] = useState(false);
    const [subcategoriesHeight, setSubcategoriesHeight] = useState(0);
    const subcategoriesRef = useRef(null);

    useEffect(() => {
        setSubcategoriesHeight(isSubcategoriesVisible ? subcategoriesRef.current.scrollHeight : 0);
    }, [isSubcategoriesVisible]);

    const handleProductTextClick = () => {
        setSubcategoriesVisible(!isSubcategoriesVisible);
    };

    return (
        <div>
            <div className={css.product_text} onClick={handleProductTextClick}>
                {category.super_category_name}
            </div>
            <div
                className={css.subcategories}
                ref={subcategoriesRef}
                style={{ height: subcategoriesHeight }}
            >
                {category.subcategories.map((value, index) => (
                    <div
                        key={index}
                        className={css.one_category}
                        onClick={() => {
                            navigate(`/catalog/${value.subcategory_name}?page=1`);
                            dispatch(flowerAction.open_menu());
                        }}
                    >
                        {value.subcategory_name}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MenuOnePositionComponent;