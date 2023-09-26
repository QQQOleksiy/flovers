import React from 'react';
import {useSelector} from "react-redux";

import css from './basket_side.module.css'
import {OneProductInBasket} from "../OneProductInBasket/OneProductInBasket";

const BasketSideComponent = () => {

    const {basket_open} = useSelector(state => state.flowerReducer);

    return (
        <div className={basket_open ? css.basket_container_open : css.basket_container_close}>
            <div className={css.basket_content}>
                <div className={css.basket_content_title}>
                    <div>Корзина</div>
                </div>

                <div className={css.spase_for_products}>
                    <OneProductInBasket/>
                    <OneProductInBasket/>
                </div>

                <div className={css.total}>
                    <div className={css.total_text}>Всего</div>
                    <div className={css.total_count}>2000</div>
                </div>
            </div>
            <div className={css.basket_button}>
                <div>Перейти к оплате</div>
            </div>
        </div>
    );
};

export {BasketSideComponent};