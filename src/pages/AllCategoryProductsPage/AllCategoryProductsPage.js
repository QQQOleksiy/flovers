import React from 'react';
import { ProductPreview, ScrollButtons, Pagination } from './../../components/index'

import css from './all_category_products_page.module.css'

const CatalogPage = () => {
    return (
        <div className={css.catalog_container}>
            <hr className={css.catalog_product_hr}/>
            <h4 className={css.catalog_product_big_text}>Бумага</h4>
            <ScrollButtons/>
            <div className={css.catalog_products_container}>
                <ProductPreview/>
                <ProductPreview/>
                <ProductPreview/>
                <ProductPreview/>
                <ProductPreview/>
                <ProductPreview/>
                <ProductPreview/>
                <ProductPreview/>
                <ProductPreview/>
                <ProductPreview/>
                <ProductPreview/>
                <ProductPreview/>
            </div>
            <Pagination/>
        </div>
    );
};

export default CatalogPage;