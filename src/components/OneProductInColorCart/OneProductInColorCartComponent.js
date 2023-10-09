import React from 'react';

import css from './OneProductInColorCart.module.css'

const OneProductInColorCart = () => {
    return (
        <div className={css.one_product_container}>
            <div className={css.first}>
                <div className={css.color_item} style={{backgroundColor: '#ccc'}}></div>
                Название цвета
            </div>
            <div className={css.second}>
                На складе: 
                <span className={109 != 0 ? css.on_sklad : css.no_on_sklad}>109</span>
            </div>
            <div className={css.third}>
                Кол-во: 
                <input className={css.form_input} type="number"/>
            </div>
            <div className={css.four}>
                <span className={css.price}>890₽</span>
                за шт.
            </div>
        </div>
    );
};

export {OneProductInColorCart};