import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

import { flowerAction } from "../../redux";
import css from './price_list_page_style.module.css'
import PriceOnePositionComponent from "./PriceOnePositionComponent/PriceOnePositionComponent";

const PriceListPage = () => {

    const dispatch = useDispatch();

    const { categoryList } = useSelector(state => state.flowerReducer);

    useEffect(() => {
        dispatch(flowerAction.getCategoryList())
    }, [dispatch])

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        dispatch(flowerAction.close_menu())
    }, [dispatch])

    return (
        <div className={css.catalog_container}>
            {
                categoryList.map((value, id) => {
                    return (
                        <div className={css.catalog_box}>
                            <hr />
                            <PriceOnePositionComponent category={value} key={id} />
                        </div>
                    )
                })
            }
        </div>
    );
};

export default PriceListPage;