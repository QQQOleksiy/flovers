import React from 'react';

import css from './BasketPage.module.css'
import {OneProductInBigCart} from "../index";

import { useState } from 'react';
import {useSelector} from "react-redux";

const BasketPageComponent = () => {
    const [step, setStep] = useState(0);

    const {products_in_basket} = useSelector(state => state.flowerReducer)

    const totalCost = products_in_basket.reduce((total, product) => {
        const productCost = product.opt_price * product.count;
        return total + productCost;
    }, 0);

    return (
        <div>
            {
                step === 0 && (
                <>
                    <div className={css.basket_container}>
                        <div className={css.basket_content}>
                            <div className={css.basket_content_title}>
                                <div>Корзина</div>
                                <svg width={81} height={24} style={{marginLeft: 30}} viewBox="0 0 81 22" fill="none" xmlns="http://www.w3.org/2000/svg" > <circle cx={11} cy={11} r={9} fill="#D9D9D9" stroke="#1F1F1F" strokeWidth={4} /> <circle cx={70} cy={11} r={9} stroke="#1F1F1F" strokeWidth={4} /> <line x1="21.2715" y1="11.1714" x2="60.3572" y2="11.1714" stroke="#1F1F1F" strokeWidth={4} strokeDasharray="8 8" /> </svg>
                            </div>

                            <div className={css.spase_for_products}>
                                {
                                    products_in_basket.map(value => <OneProductInBigCart product={value}/>)
                                }
                            </div>

                            <div className={css.total}>
                                <div className={css.total_text}>Всего</div>
                                <div className={css.total_count}>{totalCost}₽</div>
                            </div>
                        </div>
                    </div>
                    <div className={css.basket_continue_btn} onClick={() => products_in_basket.length > 0 ? setStep(step+1) : null}>Продолжить</div>
                </>
                )
            }
            {
                step === 1 && (
                <>
                    <div className={css.basket_container}>
                        <div className={css.basket_content}>
                            <div className={css.basket_content_title}>
                                <div>Корзина</div>
                                <svg width={81} height={24} style={{marginLeft: 30}} viewBox="0 0 81 22" fill="none" xmlns="http://www.w3.org/2000/svg" > <circle cx={11} cy={11} r={9} fill="#1F1F1F" stroke="#1F1F1F" strokeWidth={4} /> <circle cx={70} cy={11} r={9} fill="#D9D9D9" stroke="#1F1F1F" strokeWidth={4} /> <line x1="21.2715" y1="11.1714" x2="60.3572" y2="11.1714" stroke="#1F1F1F" strokeWidth={4} strokeDasharray="8 8" /> </svg>
                            </div>

                            <div className={css.spase_for_products}>
                                <div className={css.form_background}>
                                    <span className={css.form_text}>Ваше Имя:</span>
                                    <input className={css.form_input} type="text"/>
                                </div>
                                <div className={css.form_background}>
                                    <span className={css.form_text}>Номер телефона:</span>
                                    <input className={css.form_input} type="tel"/>
                                </div>
                                <div className={css.form_background}>
                                    <span className={css.form_text}>Название компании:</span>
                                    <input className={css.form_input} type="text"/>
                                </div>
                            </div>
                            <div className={css.form_tips_text}>
                                <span className={css.form_top_tip}>Заполните поля выше.</span>
                                <span className={css.form_bottom_tip}>Наш менеджер подтвердит заказ и свяжется с вами.</span>
                            </div>
                            <div className={css.basket_continue_btn} onClick={() => setStep(step+1)}>Оформить Заказ</div>
                        </div>
                    </div>
                </>
                )
            }
            {
                step === 2 && (
                <>
                    <div className={css.basket_container}>
                        <div className={css.basket_content}>
                            <div className={css.basket_content_title}>
                                <div>Корзина</div>
                                <svg width={81} height={24} style={{marginLeft: 30}} viewBox="0 0 81 22" fill="none" xmlns="http://www.w3.org/2000/svg" > <circle cx={11} cy={11} r={9} fill="#1F1F1F" stroke="#1F1F1F" strokeWidth={4} /> <circle cx={70} cy={11} r={9} fill="#1F1F1F" stroke="#1F1F1F" strokeWidth={4} /> <line x1="21.2715" y1="11.1714" x2="60.3572" y2="11.1714" stroke="#1F1F1F" strokeWidth={4} strokeDasharray="8 8" /> </svg>
                            </div>

                            <div className={css.form_tips_text}>
                                <span className={css.final_tip}>Заказ оформлен!<br/>Ожидайте, наш менеджер свяжется с вами.</span>
                            </div>
                        </div>
                    </div>
                    <div className={css.final_order_btn}>
                        <div className={css.invoice_btn}>Расходная накладная</div>
                        <div className={css.to_home_btn} onClick={() => setStep(0)}>Вернуться на Главную</div>
                    </div>
                </>
                )
            }
        </div>
    );
};

export {BasketPageComponent};