import React from 'react';

import css from './SimilarItemsCard.module.css'
import img from './img1.jfif'

const SimilarItemsCard = ({card}) => {

    const {id, name, main_photo_path} = card;

    return (
        <div className={css.similar_item_container}>
            <img src={img} className={css.similar_item_image} alt=""/>
            <span className={css.similar_item_title_text}>{name}</span>
        </div>
    );
};

export {SimilarItemsCard};