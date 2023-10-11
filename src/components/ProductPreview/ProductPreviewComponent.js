import React from 'react';

import css from './ProductPreview.module.css'

// Тествові картинки
// import img1 from './img1.jfif'
import img2 from './img2.jfif'
import img3 from './img3.jfif'
import img4 from './img4.jfif'
import {useNavigate} from "react-router-dom";


const ProductPreview = ({product}) => {

    const navigate = useNavigate();

    const {id, name, colors, main_photo_path} = product

    return (
        <div className={css.product_pre} onClick={() => navigate(`/item/${id}`)}>
           <img src={`http://45.132.105.143/images/${main_photo_path}`} className={css.product_big_image} alt=''/>
           <div className={css.product_container_small_images}>
                <img src={img2} className={css.product_small_image} alt=''/>
                <img src={img3} className={css.product_small_image} alt=''/>
                <div className={css.product_small_image} style={{position: 'relative'}}>
                    <span>+{colors.length} цветов</span>
                    <img src={img4} className={css.product_small_image} alt=''/>
                </div>
           </div>
           <h4 className={css.product_pre_text}>{name}</h4>
        </div>
    );
};

export {ProductPreview};