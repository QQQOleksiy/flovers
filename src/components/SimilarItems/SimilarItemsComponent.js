import React, {useEffect} from 'react';

import css from './SimilarItems.module.css'

import { ScrollButtons, SimilarItemsCard } from '../../components/index';
import {useDispatch, useSelector} from "react-redux";
import {flowerAction} from "../../redux";


const SimilarItems = () => {

    const dispatch = useDispatch();

    const {similarItem} = useSelector(state => state.flowerReducer)

    useEffect(() => {
        dispatch(flowerAction.getSimilar())

    },[dispatch])


    return (
        <div className={css.similar_container}>
            <h4 className={css.similar_text}>Похожие Товары</h4>
            <ScrollButtons/>
            <div className={css.similar_items_wrap}>
                {
                    similarItem.map(value => <SimilarItemsCard card={value} key={value.id}/>)
                }
            </div>
        </div>
    );
};

export {SimilarItems};