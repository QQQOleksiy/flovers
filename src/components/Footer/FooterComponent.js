import React from 'react';

import css from './footer.module.css'
import {Link, useNavigate} from "react-router-dom";

const FooterComponent = () => {

    let navigate = useNavigate();

    return (
        <footer className={css.footer}>
            <div className={css.main_container}>
                <div className={css.text_container}>
                    <div className={css.upper_text}>Свяжитесь с нами</div>
                    <div className={css.lower_text}>Пожалуйста, свяжитесь с нами используя номер телефона или email
                        ниже.
                    </div>
                    <div className={css.contacts}>
                        <div>
                            <div className={css.email_text}>Email</div>
                            <a href="mailto:sinowrap@mail.ru" className={css.email}>
                                1florcentre@list.ru
                            </a>
                        </div>
                        <div>
                            <div className={css.number_text}>Номер телефона</div>
                            <div className={css.number}>Моб: +7 963 568-11-11</div>
                            <div className={css.number}>Instagram: 1florcentre</div>
                            <Link className={css.number} to={'https://t.me/Florcentre_bot'}>Telegram</Link><div></div>
                            <Link className={css.number} to={'https://wa.me/79635681111'}>WhatsApp</Link>
                        </div>
                        <div>
                            <div className={css.number_text}>Адрес</div>
                            <div className={css.number}>Уссурийск, ул. Льва Толстого 19/1</div>
                        </div>
                        <div>
                            <div className={css.number_text}>Режим работы</div>
                            <div className={css.number}>Пн-Сб: 10:00-18:00</div>
                            <div className={css.number}>Вс: Выходной</div>
                        </div>
                    </div>
                </div>
                <div className={css.obrabotka_data} onClick={() => navigate('/terms')}>
                    Политика в отношении обработки персональных данных
                </div>
                <div className={css.text_popusk}>COPYRIGHT © 2022 1florcentre.ru Вся информация и материалы, размещенные на
                    данном веб-сайте защищены авторским правом
                </div>
            </div>

        </footer>
    );
};

export {FooterComponent};