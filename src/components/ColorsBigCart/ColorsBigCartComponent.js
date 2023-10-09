import React from 'react';

import css from './ColorsBigCart.module.css'

import { OneProductInColorCart } from '../index'

const ColorsBigCart = ({open}) => {
    return (
        <>
            { open &&
                <div className={css.animate}>
                    <div className={css.container}>
                        <div className={css.basket_content}>
                            <div className={css.basket_content_title}>
                                <div>Цвета</div>
                            </div>

                            <div className={css.spase_for_products}>
                                <OneProductInColorCart/>
                                <OneProductInColorCart/>
                                <OneProductInColorCart/>
                                <OneProductInColorCart/>
                            </div>

                            <div className={css.total}>
                                <div className={css.total_text}>Всего</div>
                                <div className={css.total_count}>2000₽</div>
                            </div>
                            <div className={css.basket_button}>Продолжить</div>
                        </div>
                    </div>
                    <div className={css.blur_bg}></div>
                </div>
            }
        </>
    );
};

export {ColorsBigCart};