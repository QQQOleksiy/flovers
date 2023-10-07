import React from 'react';
import { useState } from 'react';

import css from './CatalogProductCard.module.css'

import { ScrollButtons, ProductPreview, ProductBtnMore } from './../index'

const CatalogProductCard = ({category}) => {
    const [open, setOpen] = useState(false);

    const {name, type, data} = category

    return (
        <>
            <div onClick={() => setOpen(!open)}>
                <hr className={css.catalog_product_hr}/>
                <h4 className={css.catalog_product_big_text}>{name}</h4>
            </div>
            <div className={css.catalog_product_open_panel} style={{maxHeight: open ? 999 : 0 }}>
                <ScrollButtons/>
                <div className={css.catalog_product_container}>
                    {
                        data.map(value => <ProductPreview product={value} key={value.id}/>)
                    }
                </div>
                <ProductBtnMore/>
            </div>
        </>
    );
};

export {CatalogProductCard};