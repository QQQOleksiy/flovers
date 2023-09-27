import React from 'react';
import { CatalogProductCard } from './../../components/index'

import css from './catalog_page_style.module.css'

const CatalogPage = () => {
    return (
        <div className={css.catalog_container}>
            <CatalogProductCard/>
            <CatalogProductCard/>
            <CatalogProductCard/>
        </div>
    );
};

export default CatalogPage;