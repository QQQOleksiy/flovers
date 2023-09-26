import React from 'react';

import css from './ScrollButtons.module.css'


const ScrollButtons = () => {
    return (
        <div className={css.scroll_btns_main}>
           <div className={css.scroll_btns_flex}>
                <div className={css.scroll_btns_btn}>Сезон “Лето 2023”</div>
                <div className={css.scroll_btns_btn}>День матери</div>
                <div className={css.scroll_btns_btn}>Новинки</div>
                <div className={css.scroll_btns_btn}>Новогодние</div>
                <div className={css.scroll_btns_btn}>Корзины</div>
                <div className={css.scroll_btns_btn}>Крафты</div>
                <div className={css.scroll_btns_btn}>не видно</div>
           </div>
           <div>
                {/* TODO кнопка для скрола */}
           </div>
        </div>
    );
};

export {ScrollButtons};