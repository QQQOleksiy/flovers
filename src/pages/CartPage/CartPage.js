import React from 'react';

import css from './cart_page_style.module.css'

import { BasketPageComponent, SimilarItems } from '../../components/index';

const CartPage = () => {
    return (
        <div className={css.cart_container}>
            <BasketPageComponent/>
            <SimilarItems/>
        </div>
    );
};

export default CartPage;