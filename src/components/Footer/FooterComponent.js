import React from 'react';

import css from './footer.module.css'

const FooterComponent = () => {
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
                            <div className={css.email}>our mail domen.</div>
                        </div>
                        <div>
                            <div className={css.number_text}>Номер телефона</div>
                            <div className={css.number}>номер</div>
                        </div>
                    </div>
                </div>
                <div className={css.text_popusk}>COPYRIGHT © 2022 SINOWRAP.RU Вся информация и материалы, размещенные на
                    данном веб-сайте защищены авторским правом
                </div>
            </div>

        </footer>
    );
};

export {FooterComponent};