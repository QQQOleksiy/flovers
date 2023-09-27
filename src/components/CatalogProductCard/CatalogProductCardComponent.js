import React from 'react';
import { useState } from 'react';

import css from './CatalogProductCard.module.css'

import { ScrollButtons, ProductPreview, ProductBtnMore } from './../index'

const CatalogProductCard = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div onClick={() => setOpen(!open)}>
                <hr className={css.catalog_product_hr}/>
                <h4 className={css.catalog_product_big_text}>Бумага</h4>
            </div>
            <div className={css.catalog_product_open_panel} style={open ? {maxHeight: 9999} : {maxHeight: 0}}>
                <ScrollButtons/>
                <div className={css.catalog_product_container}>
                    <ProductPreview/>
                    <ProductPreview/>
                    <ProductPreview/>
                </div>
                <ProductBtnMore/>
            </div>
        </>
    );
};

export {CatalogProductCard};