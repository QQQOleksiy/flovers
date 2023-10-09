import React, {useEffect} from 'react';

import { ProductBigCard, SimilarItems } from '../../components/index';

import css from './item_page_style.module.css'

const ItemPage = () => {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },[])

    return (
        <div className={css.catalog_container}>
            <ProductBigCard/>
            <SimilarItems count={4}/>
        </div>
    );
};

export default ItemPage;