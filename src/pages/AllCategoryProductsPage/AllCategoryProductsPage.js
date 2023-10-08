import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useLocation, useParams} from "react-router-dom";

import {flowerAction} from "../../redux";
import { ProductPreview, Pagination } from './../../components/index'
import css from './all_category_products_page.module.css'

const CatalogPage = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const page = searchParams.get('page');

    let {product_type} = useParams();

    const dispatch = useDispatch();

    const {all_with_paginate} = useSelector(state => state.flowerReducer);


    useEffect(() =>{
        dispatch(flowerAction.getAll([page, product_type]))

    }, [dispatch, product_type, page])

    console.log(all_with_paginate);

    return (
        <div className={css.catalog_container}>
            <hr className={css.catalog_product_hr}/>
            <h4 className={css.catalog_product_big_text}>Бумага</h4>
            {/*<ScrollButtons/>*/}
            <div className={css.catalog_products_container}>
                {all_with_paginate.length > 0 ? (
                    all_with_paginate.map((product, id) => <ProductPreview product={product} key={id} />)
                ) : (
                    <div>Loading...</div>
                )}
            </div>
            <Pagination/>
        </div>
    );
};

export default CatalogPage;