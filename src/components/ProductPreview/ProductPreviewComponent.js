import React from 'react';

import css from './ProductPreview.module.css'

// Тествові картинки
import img1 from './img1.jfif'
import img2 from './img2.jfif'
import img3 from './img3.jfif'
import img4 from './img4.jfif'


const ProductPreview = ({product}) => {

    const {name, colors} = product

    return (
        <div className={css.product_pre}>
           <img src={img1} className={css.product_big_image} alt=''/>
           <div className={css.product_container_small_images}>
                <img src={img2} className={css.product_small_image} alt=''/>
                <img src={img3} className={css.product_small_image} alt=''/>
                <div className={css.product_small_image} style={{position: 'relative'}}>
                    <span>+{} цветов</span>
                    <img src={img4} className={css.product_small_image} alt=''/>
                </div>
           </div>
           <h4 className={css.product_pre_text}>{name}</h4>
        </div>
    );
};

export {ProductPreview};