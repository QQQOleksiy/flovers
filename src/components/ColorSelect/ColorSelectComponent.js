import React from 'react';

import css from './ColorSelect.module.css'
import SquareColor from "../SquareColor/SquareColor";


const ColorSelect = ({colors}) => {

    const colorsArray = [...colors];

    return (
        <div className={css.color_select_container}>
            <span className={css.color_select_text}>Выберете цвет:</span>
            <div className={css.color_select_items_container}>
                {
                    colorsArray.map((value, id) => <SquareColor one_color={value} key={id}/>)
                }
            </div>
        </div>
    );
};

export {ColorSelect};