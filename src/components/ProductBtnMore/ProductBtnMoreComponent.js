import React from 'react';

import css from './ProductBtnMore.module.css'


const ProductBtnMore = () => {
    return (
        <div className={css.container_more_btn}>
           <div className={css.product_more_btn}>Посмотреть Ещё</div>
        </div>
    );
};

export {ProductBtnMore};