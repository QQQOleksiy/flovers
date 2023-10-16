import React, {useEffect} from 'react';

import css from './cart_page_style.module.css'

import { BasketPageComponent, SimilarItems } from '../../components/index';

const CartPage = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },[])

    return (
        <div className={css.cart_container}>
            <BasketPageComponent/>
            <SimilarItems count={4}/>
        </div>
    );
};

export default CartPage;