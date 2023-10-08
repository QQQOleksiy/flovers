import React, {useEffect} from 'react';

import css from './ProductBigCard.module.css'

import { ColorSelect } from '../../components/index';

// Тествові картинки
import img1 from './img1.jfif'
import img2 from './img2.jfif'
import img3 from './img3.jfif'
import img4 from './img4.jfif'
import {useDispatch, useSelector} from "react-redux";
import {flowerAction} from "../../redux";
import {useParams} from "react-router-dom";


const ProductBigCard = () => {

    let {id: id_} = useParams();

    const dispatch = useDispatch();

    const {one_product} = useSelector(state => state.flowerReducer)

    const {name, volume, length, width, brand, orign_country, unit, weight} = one_product

    useEffect(() => {
        dispatch(flowerAction.getById(id_))

    },[dispatch, id_])

    console.log(one_product);

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
            <div className={css.product_card_text_template}>
                <span className={css.product_card_small_text}>Категории: “Осень 2023”, “Обёрточная бумага”</span>
                <h1 className={css.product_card_big_text}>{name}</h1>
                <div className={css.product_color_select_container}>
                    <ColorSelect/>
                </div>
                <div className={css.product_description}>
                    <span className={css.product_description_bold}>Размер:</span>
                    <span>{`${volume}x${length}x${width}`}</span>
                    <span className={css.product_description_bold}>Бренд:</span>
                    <span>{brand}</span>
                    <span className={css.product_description_bold}>Страна производитель:</span>
                    <span>{orign_country}</span>
                    <span className={css.product_description_bold}>Упаковка:</span>
                    <span>{unit}</span>
                    <span className={css.product_description_bold}>Измерения:</span>
                    <span>{`${volume}x${length}x${width}`}</span>
                    <span className={css.product_description_bold}>Вес:</span>
                    <span>{weight}</span>
                    <span className={css.product_description_bold}>Минимальный заказ: </span>
                    <span>1 коробка</span>
                </div>
                <div className={css.product_card_info}>
                    <div className={css.product_cart_btn}>Добавить в корзину</div>
                </div>
            </div>
        </div>
    );
};

export {ProductBigCard};