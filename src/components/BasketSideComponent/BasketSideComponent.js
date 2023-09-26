import React from 'react';

import css from './basket_side.module.css'

const BasketSideComponent = () => {
    return (
        <div className={css.basket_container}>
            <div>
                <div>
                    <div>Корзина</div>
                </div>
                <div>
                    <div>
                    </div>
                    <div></div>
                </div>
            </div>
            <div>
                <div>Перейти к оплате</div>
            </div>
        </div>
    );
};

export {BasketSideComponent};