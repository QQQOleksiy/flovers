import { useState} from 'react';

import css from './HomePopup.module.css'

            // передаси сюда назву і текст
const HomePopup = () => {
    const [open, setOpen] = useState(false)
   
    return (
        <div>
            <hr className={css.home_product_hr}/>
            <h4 className={css.home_product_big_text} onClick={() => setOpen(true)}>Доставка и Оплата</h4>

            { open &&
                <div className={css.animate}>
                    <div className={css.container}>
                        <div className={css.basket_content}>
                            <div className={css.basket_content_title}>
                                <div>Доставка и Оплата</div>
                            </div>

                            <div className={css.spase_for_products}>
                                {/* отут мапом по даних бахнеш */}
                                {Array(10).fill(null).map((index) => (
                                    <div className={css.one_product_container}>
                                        <div className={css.text_ab}>sdasd jlashdjkahs djkash jkdhasjk dbasnkd ashk gdhkasv sa dsjkfdga sjkdgashdjkas gsd</div>
                                    </div>
                                ))}
                            </div>

                            <div className={css.basket_button} onClick={() => setOpen(false)}>Продолжить</div>
                        </div>
                    </div>
                    <div className={css.blur_bg}></div>
                </div>
            }
        </div>
    );
};

export {HomePopup};