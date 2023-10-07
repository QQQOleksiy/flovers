import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {flowerAction} from "../../redux";
import { CatalogProductCard } from './../../components/index'
import css from './catalog_page_style.module.css'

const CatalogPage = () => {

    const dispatch = useDispatch();

    const {category} = useSelector(state => state.flowerReducer);

    useEffect(() =>{
        dispatch(flowerAction.getCategory())

        }, [dispatch])

    return (
        <div className={css.catalog_container}>
            {
                category.map(value => <CatalogProductCard category={value}/>)
            }
        </div>
    );
};

export default CatalogPage;