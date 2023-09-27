import React from 'react';

import css from './item_page_style.module.css'

import { ProductBigCard, SimilarItems } from '../../components/index';

const ItemPage = () => {
    return (
        <div className={css.catalog_container}>
            <ProductBigCard/>
            <SimilarItems/>
        </div>
    );
};

export default ItemPage;