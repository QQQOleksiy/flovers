import React, {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";

import css from './burger_menu.module.css'
import {flowerAction} from "../../redux";
import MenuOnePositionComponent from "../MenuOnePositionComponent/MenuOnePositionComponent";
import {useClickOutside} from "../../hooks/useClickOutside";

const BurgerMenuComponent = () => {
    let menuRef = useRef(null);

    const dispatch = useDispatch();
    const { category, burger_menu} = useSelector(state => state.flowerReducer);

    useClickOutside(menuRef, () => dispatch(flowerAction.close_menu()))

    let navigate = useNavigate();

    useEffect(() =>{
        dispatch(flowerAction.getCategory())
    }, [dispatch])

    const scrollToBottom = () => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
        });
    };

    return (
        <div className={burger_menu ? css.burger_menu_container_open : css.burger_menu_container_close} ref={menuRef}>
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