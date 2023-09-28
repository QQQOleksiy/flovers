import React from 'react';

import css from './ColorSelect.module.css'


const ColorSelect = () => {
    return (
        <div className={css.color_select_container}>
            <span className={css.color_select_text}>Выберете цвет:</span>
            <div className={css.color_select_items_container}>
                <div className={css.color_item} style={{backgroundColor: '#ccc'}}></div>
                <div className={css.color_item} style={{backgroundColor: '#ccc'}}></div>
                <div className={css.color_item} style={{backgroundColor: '#ccc'}}></div>
                <div className={css.color_item} style={{backgroundColor: '#ccc'}}></div>
                <div className={css.color_item} style={{backgroundColor: '#ccc'}}></div>
                <div className={css.color_item} style={{backgroundColor: '#ccc'}}></div>

                <div className={css.color_item} style={{backgroundColor: '#ccc'}}></div>
                <div className={css.color_item} style={{backgroundColor: '#ccc'}}></div>
                <div className={css.color_item} style={{backgroundColor: '#ccc'}}></div>
                <div className={css.color_item} style={{backgroundColor: '#ccc'}}></div>
                <div className={css.color_item} style={{backgroundColor: '#ccc'}}></div>
                <div className={css.color_item} style={{backgroundColor: '#ccc'}}></div>
            </div>
        </div>
    );
};

export {ColorSelect};