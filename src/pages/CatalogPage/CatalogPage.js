import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {flowerAction} from "../../redux";
import css from './catalog_page_style.module.css'
import {CatalogProductCard} from "../../components";

const CatalogPage = () => {

    const dispatch = useDispatch();

    const {categoryList} = useSelector(state => state.flowerReducer);

    useEffect(() =>{
        dispatch(flowerAction.getCategory())
        }, [dispatch])

    useEffect(() =>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
        dispatch(flowerAction.close_menu())
    }, [dispatch])

    return (
        <div className={css.catalog_container}>
            <h1>Каталог</h1>
            {
                categoryList.map((value, id) => {
                    return (
                        <div className={css.catalog_box}>
                            <hr />
                            <CatalogProductCard category={value} key={id} />
                        </div>
                    )
                })
            }
        </div>
    );
};

export default CatalogPage;