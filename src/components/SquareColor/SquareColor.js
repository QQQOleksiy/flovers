import React from 'react';

import css from './square_color.module.css'

const SquareColor = ({one_color}) => {
    return (
        <div>
            <img src={`http://45.132.105.143/images/${one_color.photo_path}`} className={css.color_item} alt={one_color.photo_path}/>
        </div>
    );
};

export default SquareColor;