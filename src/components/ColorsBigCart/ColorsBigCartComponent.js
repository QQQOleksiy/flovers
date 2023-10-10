import React, {useEffect, useState} from 'react';

import css from './ColorsBigCart.module.css'

import { OneProductInColorCart } from '../index'

const ColorsBigCart = ({ open, setOpen, colors }) => {
    const [updatedColors, setUpdatedColors] = useState(colors);

    useEffect(() => {
        setUpdatedColors(colors);
    }, [colors]);

    const handleUpdateCount = (updatedColor) => {
        const updatedColorsArray = updatedColors.map((color) =>
            color.color_id === updatedColor.color_id ? updatedColor : color
        );

        setUpdatedColors(updatedColorsArray);
    };

    return (
        <div>
            { open &&
                <div className={css.animate}>
                    <div className={css.container}>
                        <div className={css.basket_content}>
                            <div className={css.basket_content_title}>
                                <div>Цвета</div>
                            </div>

                            <div className={css.spase_for_products}>
                                {updatedColors.map((value, index) => (
                                    <OneProductInColorCart one_color={value} key={index} onUpdateCount={handleUpdateCount} />
                                ))}
                            </div>

                            <div className={css.total}>
                                <div className={css.total_text}>Всего</div>
                                <div className={css.total_count}>2000₽</div>
                            </div>
                            <div className={css.basket_button} onClick={() => setOpen()}>Продолжить</div>
                        </div>
                    </div>
                    <div className={css.blur_bg}></div>
                </div>
            }
        </div>
    );
};

export {ColorsBigCart};