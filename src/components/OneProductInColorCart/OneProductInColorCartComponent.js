import React, { useState } from 'react';
import css from './OneProductInColorCart.module.css';

const OneProductInColorCart = ({ one_color, onUpdateCount }) => {

    const { color_id, product_id, color_name, photo_path, total, opt_price } = one_color;

    const initialCount = !isNaN(one_color.count) ? parseInt(one_color.count, 10) : 0;

    const [count, setCount] = useState(initialCount);

    const handleCountChange = (event) => {
        const newCount = event.target.value;
        if (!isNaN(newCount)) {
            setCount(parseInt(newCount, 10));
            onUpdateCount({ ...one_color, count: parseInt(newCount, 10) });
        }
    };

    return (
        <div className={css.one_product_container}>
            <div className={css.first}>
                <div className={css.color_item} style={{ backgroundColor: '#ccc' }}></div>
                {color_name}
            </div>
            <div className={css.second}>
                На складе:
                <span className={total ? css.on_sklad : css.no_on_sklad}>{total}</span>
            </div>
            <div className={css.third}>
                Кол-во:
                <input className={css.form_input} type="number" value={count.toString()} onChange={handleCountChange} />
            </div>
            <div className={css.four}>
                <span className={css.price}>{opt_price}₽</span>
                за шт.
            </div>
        </div>
    );
};

export { OneProductInColorCart };