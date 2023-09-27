import React from 'react';

import css from './SimilarItems.module.css'

import { ScrollButtons, SimilarItemsCard } from '../../components/index';


const SimilarItems = () => {
    return (
        <div className={css.similar_container}>
            <h4 className={css.similar_text}>Похожие Товары</h4>
            <ScrollButtons/>
            <div className={css.similar_items_wrap}>
                <SimilarItemsCard/>
                <SimilarItemsCard/>
                <SimilarItemsCard/>
                <SimilarItemsCard/>
            </div>
        </div>
    );
};

export {SimilarItems};