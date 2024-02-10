import React, {useEffect} from 'react';

import css from './delivery.module.css'
import {useDispatch} from "react-redux";
import {flowerAction} from "../../redux";

const DeliveryAndPaymentPage = () => {

    let dispatch = useDispatch();

    useEffect(() =>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
        dispatch(flowerAction.close_menu())
    }, [dispatch])

    return (
        <div className={css.container}>
            <hr className={css.hr}/>
            <h4 className={css.big_text}>Доставка и Оплата</h4>

            <div className={css.text}>
                Какой транспортной компанией отправляем груз? 📦
                <br/>
                <br/>
                ✅В Уссурийске работают 19 транспортных компаний, в том числе:
                <br/>
                <br/>
                Деловые Линии, ПЭК, КИТ, ЖелДорЭкспедиция, Байкал Сервис, Boxberry, DHL, DPD, Алтан, ВЛ Лоджистик, EasyWay, Грузовичкоф, Азбука Логистики, Рейл Континет, СДЭК, Транс-Вектор, Флагман Амур, Энергия, РЖД.
                <br/>
                <br/>
                Выберете свою любимую и мы оперативно отправим груз ☺️
            </div>
        </div>
    );
};

export default DeliveryAndPaymentPage;