import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

import {OneProductInBasket} from "../OneProductInBasket/OneProductInBasket";
import css from './basket_side.module.css'
import {flowerAction} from "../../redux";

const BasketSideComponent = () => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const {basket_open} = useSelector(state => state.flowerReducer);

    const {products_in_basket} = useSelector(state => state.flowerReducer)

    const totalCost = products_in_basket.reduce((total, product) => {
        const productCost = product.opt_price * product.count;
        return total + productCost;
    }, 0);

    return (
        <div className={basket_open ? css.basket_container_open : css.basket_container_close}>
            <div className={css.basket_content}>
                <div className={css.basket_content_title}>
                    <div>Корзина</div>
                </div>

                <div className={css.spase_for_products}>
                    {
                        products_in_basket.map(value => <OneProductInBasket product={value}/>)
                    }
                </div>

                <div className={css.total}>
                    <div className={css.total_text}>Всего</div>
                    <div className={css.total_count}>{totalCost}</div>
                </div>
            </div>
            <div className={css.basket_button}  onClick={() => {navigate('/cart'); dispatch(flowerAction.open_basket())}}>
                <div>Перейти к оплате</div>
            </div>
        </div>
    );
};

export {BasketSideComponent};