import React from 'react';

import css from './square_color.module.css'

const SquareColor = ({one_color}) => {
    return (
        <div>
            <div className={css.color_item} style={{backgroundColor: '#ccc'}}></div>
        </div>
    );
};

export default SquareColor;