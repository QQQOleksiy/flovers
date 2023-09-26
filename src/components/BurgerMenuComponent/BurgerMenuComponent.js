import React from 'react';
import {useSelector} from "react-redux";

import css from './burger_menu.module.css'

const BurgerMenuComponent = () => {

    const {burger_menu} = useSelector(state => state.flowerReducer);

    return (
        <div className={burger_menu ? css.burger_menu_container_open :css.burger_menu_container_close}>
            <div className={css.navigator}>
                <div className={css.product_text}>
                    <div>Товары</div>
                </div>
                <div className={css.landing}>
                    <div>Категории</div>
                    <div>Популярное</div>
                    <div>Сезоны</div>
                    <div>Коробки</div>
                    <div>Корзины </div>
                    <div>Аксессуары</div>
                </div>
            </div>
            <div className={css.down_buttons}>
                <div>Доставка и Оплата</div>
            </div>
            <div className={css.down_buttons}>
                <div>Контакты</div>
            </div>
        </div>
    );
};

export {BurgerMenuComponent};