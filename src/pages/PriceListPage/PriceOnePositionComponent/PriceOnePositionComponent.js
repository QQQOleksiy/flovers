import React, { useState, useRef, useEffect } from 'react';
import css from './price_one_product.module.css';

const PriceOnePositionComponent = ({ category }) => {
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
                            const subcategoryName = value.subcategory_name.replace(/[\s,]+/g, '_'); // Заміна пробілів та ком на підкреслення
                            window.location.href = `http://89.105.201.25/${subcategoryName}.xlsx`;
                        }}
                    >
                        {value.subcategory_name}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PriceOnePositionComponent;