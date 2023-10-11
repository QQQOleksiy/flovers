import React from 'react';

import css from './SimilarItemsCard.module.css'
// import image from './img1.jfif'
import {useNavigate} from "react-router-dom";

const SimilarItemsCard = ({card}) => {

    const navigate = useNavigate();

    const {id, name, main_photo_path} = card;

    return (
        <div className={css.similar_item_container} onClick={() => navigate(`/item/${id}`)}>
            <img src={`http://45.132.105.143/images/${main_photo_path}`} className={css.similar_item_image} alt=""/>
            <span className={css.similar_item_title_text}>{name}</span>
        </div>
    );
};

export {SimilarItemsCard};