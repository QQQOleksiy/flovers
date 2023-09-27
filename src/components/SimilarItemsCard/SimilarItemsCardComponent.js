import React from 'react';

import css from './SimilarItemsCard.module.css'
import img from './img1.jfif'

const SimilarItemsCard = () => {
    return (
        <div className={css.similar_item_container}>
            <img src={img} className={css.similar_item_image} alt=""/>
            <span className={css.similar_item_title_text}>Обёрточная Бумага ALS</span>
        </div>
    );
};

export {SimilarItemsCard};