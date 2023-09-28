import React from 'react';

import css from './ProductBigCard.module.css'

import { ColorSelect } from '../../components/index';

// Тествові картинки
import img1 from './img1.jfif'
import img2 from './img2.jfif'
import img3 from './img3.jfif'
import img4 from './img4.jfif'


const ProductBigCard = () => {
    return (
        <div className={css.product_card_template}>
           <div className={css.product_card_image_template}>
                <img src={img1} className={css.product_card_big_image} alt=""/>
                <div className={css.product_card_small_images_template}>
                    <img src={img2} className={css.product_card_small_image} alt=""/>
                    <img src={img3} className={css.product_card_small_image} alt=""/>
                    <img src={img4} className={css.product_card_small_image} alt=""/>
                </div>
            </div>
        <div>
            <span className={css.product_card_small_text}>Категории: “Осень 2023”, “Обёрточная бумага”</span>
            <h1 className={css.product_card_big_text}>Обёрточная Бумага ALS</h1>
            <div className={css.product_color_select_container}>
                <ColorSelect/>
            </div>
            <div className={css.product_card_info}>
                TODO
            </div>
        </div>
        </div>
    );
};

export {ProductBigCard};