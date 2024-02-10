import React, {useEffect} from 'react';


import css from './return.module.css'
import {flowerAction} from "../../redux";
import {useDispatch} from "react-redux";

const ReturnAndExchangePage = () => {

    let dispatch = useDispatch();

    useEffect(() =>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
        dispatch(flowerAction.close_menu())
    }, [dispatch])

    return (
        <div className={css.container}>
            <hr className={css.hr}/>
            <h4 className={css.big_text}>Возврат и Обмен</h4>

            <div className={css.text}>
                Уважаемые флористы и декораторы ПЕРВЫЙ флористический центр!
                <br/>
                <br/>
                Мы хотим обратить ваше внимание на важные аспекты, касающиеся возврата или обмена товара надлежащего качества. Мы считаем, что удовлетворенность наших клиентов - наш главный приоритет, и поэтому хотим предоставить вам полную информацию о ваших правах.
                <br/>
                <br/>
                В соответствии с действующим законодательством, вы имеете право отказаться от товара до его получения или в течение 7 дней после получения. Если вы решите отказаться от товара, необходимо сохранить его товарный вид, оригинальную упаковку и ярлыки. Это поможет нам обеспечить беспроблемный процесс возврата или обмена.
                <br/>
                <br/>
                Если товар не подошел вам по форме, размеру или другим параметрам, вы можете обменять его на аналогичный товар у нас. Мы постараемся максимально удовлетворить ваши потребности и предложить вам наилучшую альтернативу.
                <br/>
                <br/>
                Для процедуры возврата или обмена товара ненадлежащего качества, вам необходимо заполнить заявление о возврате или обмене. Пожалуйста, укажите причину возврата или обмена и приложите его к посылке с товаром. Мы также рекомендуем вам отправить посылку с использованием надежной службы доставки, чтобы избежать возможных проблем при транспортировке.
                <br/>
                <br/>
                После получения посылки с заявлением, мы проведем проверку товара и его соответствия нашим стандартам качества. В случае одобрения возврата или обмена, мы вернем вам стоимость товара или предложим альтернативный товар в кратчайшие сроки.
                <br/>
                <br/>
                Мы надеемся, что эта информация поможет вам быть в курсе ваших прав и сделает процесс возврата или обмена товара максимально простым и удобным для вас. Мы всегда готовы помочь вам и ответить на все ваши вопросы.
                <br/>
                <br/>
                С уважением,
                <br/>
                Оптовый склад для флористов и декораторов ПЕРВЫЙ флористический центр
            </div>
        </div>
    );
};

export default ReturnAndExchangePage;