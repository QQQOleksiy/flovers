import React from 'react';
import { ScrollButtons, ProductPreview, ProductBtnMore } from './../../components/index'

import css from './catalog_page_style.module.css'

const CatalogPage = () => {
    return (
        <div className={css.catalog_container}>
            <hr className={css.catalog_hr}/>
            <h4 className={css.catalog_big_text}>Бумага</h4>
            {/* Можно в отдельный компонент запихнуть */}
            <div>
                <ScrollButtons/>
                <div className={css.catalog_product_container}>
                    <ProductPreview/>
                    <ProductPreview/>
                    <ProductPreview/>
                </div>
                <ProductBtnMore/>
            </div>
            <hr className={css.catalog_hr}/>
            <h4 className={css.catalog_big_text}>Ленты</h4>
        </div>
    );
};

export default CatalogPage;