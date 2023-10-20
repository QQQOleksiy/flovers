import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

import css from './burger_menu.module.css'
import {flowerAction} from "../../redux";
import MenuOnePositionComponent from "../MenuOnePositionComponent/MenuOnePositionComponent";

const BurgerMenuComponent = () => {

    let navigate = useNavigate();

    const dispatch = useDispatch();

    const {category} = useSelector(state => state.flowerReducer);

    useEffect(() =>{
        dispatch(flowerAction.getCategory())
    }, [dispatch])

    const {burger_menu} = useSelector(state => state.flowerReducer);

    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight, // Прокручує до кінця сторінки
            behavior: 'smooth', // Додає плавний ефект
        });
    };

    return (
        <div className={burger_menu ? css.burger_menu_container_open : css.burger_menu_container_close}>
            <div className={css.navigator}>
                <div className={css.product_text}>
                    <div>Товары</div>
                </div>
                <div className={css.landing}>
                    {category.map((value, id) => <MenuOnePositionComponent category={value} key={id}/>)}
                </div>
            </div>
            <div className={css.down_buttons}  onClick={() => navigate('/delivery')}>
                <div>Доставка и Оплата</div>
            </div>
            <div className={css.down_buttons}  onClick={scrollToBottom}>
                <div>Контакты</div>
            </div>
        </div>
    );
};

export {BurgerMenuComponent};