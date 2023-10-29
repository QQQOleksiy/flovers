import React from 'react';

import css from './square_color.module.css'

const SquareColor = ({one_color}) => {
    return (
        <div>
            <img src={`https://www.sinowrap.online/static/${one_color.photo_path}`} className={css.color_item} alt={one_color.photo_path}/>
        </div>
    );
};

export default SquareColor;