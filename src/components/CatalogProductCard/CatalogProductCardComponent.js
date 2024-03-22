import React, {useEffect, useRef} from 'react';
import { useState } from 'react';

import css from './CatalogProductCard.module.css'
import {useNavigate} from "react-router-dom";


const CatalogProductCard = ({category}) => {
    const [isSubcategoriesVisible, setSubcategoriesVisible] = useState(false);
    const [subcategoriesHeight, setSubcategoriesHeight] = useState(0);
    const subcategoriesRef = useRef(null);

    const navigate = useNavigate();

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
                            navigate(`/catalog/${value.subcategory_name}`);
                        }}
                    >
                        {value.subcategory_name}
                    </div>
                ))}
            </div>
        </div>
    );
};

export {CatalogProductCard};