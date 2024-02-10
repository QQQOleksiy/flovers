import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";

import css from './terms.module.css'
import {flowerAction} from "../../redux";

const TermsOfUsePage = () => {

    let dispatch = useDispatch();

    useEffect(() =>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
        dispatch(flowerAction.close_menu())
    }, [dispatch])

    return (
        <div className={css.container}>
            <hr className={css.hr}/>
            <h4 className={css.big_text}>Пользовательское соглашение</h4>

            <div className={css.text}>
                Настоящее Пользовательское Соглашение (Далее Соглашение) регулирует отношения между ИП И Татьяна Консоповна (далее Оптовый склад для флористов или Администрация) с одной стороны и пользователем сайта с другой.
                Сайт Оптовый склад для флористов ПЕРВЫЙ флористический центр не является средством массовой информации.
                <br/>
                <br/>
                Используя сайт, Вы соглашаетесь с условиями данного соглашения.
                Если Вы не согласны с условиями данного соглашения, не используйте сайт Оптовый склад для флористов ПЕРВЫЙ флористический центр!
                <br/>
                <br/>
                Предмет соглашения
                Администрация предоставляет пользователю право на размещение на сайте следующей информации:
                <br/>
                <br/>
                Предмет соглашения
                Администрация предоставляет пользователю право на размещение на сайте следующей информации:
                <br/>
                - Текстовой информации
                <br/>
                <br/>
                Права и обязанности сторон
                Пользователь имеет право:
                <br/>
                - осуществлять поиск информации на сайте
                <br/>
                - получать информацию на сайте
                <br/>
                - комментировать контент, выложенный на сайте
                <br/>
                - копировать информацию на другие сайты с указанием источника
                <br/>
                - требовать от администрации скрытия любой информации о пользователе
                <br/>
                - использовать информацию сайта в личных некоммерческих целях
                <br/>
                - использовать информацию сайта в коммерческих целях с разрешения Администрации
                <br/>
                <br/>
                Администрация имеет право:
                <br/>
                - по своему усмотрению и необходимости создавать, изменять, отменять правила
                <br/>
                - ограничивать доступ к любой информации на сайте
                <br/>
                - создавать, изменять, удалять информацию
                <br/>
                - удалять учетные записи
                <br/>
                - отказывать в регистрации без объяснения причин
                <br/>
                <br/>
                Пользователь обязуется:
                <br/>
                - обеспечить достоверность предоставляемой информации
                <br/>
                - обеспечивать сохранность личных данных от доступа третьих лиц
                <br/>
                - обновлять Персональные данные, предоставленные при регистрации, в случае их изменения
                <br/>
                - не нарушать работоспособность сайта
                <br/>
                - не создавать несколько учётных записей на Сайте, если фактически они принадлежат одному и тому же лицу
                <br/>
                - не передавать в пользование свою учетную запись и/или логин и пароль своей учетной записи третьим лицам
                <br/>
                - не регистрировать учетную запись от имени или вместо другого лица за исключением случаев, предусмотренных законодательством РФ
                <br/>
                - не использовать скрипты (программы) для автоматизированного сбора информации и/или взаимодействия с Сайтом и его Сервисами
                <br/>
                <br/>
                Администрация обязуется:
                <br/>
                - поддерживать работоспособность сайта за исключением случаев, когда это невозможно по независящим от Администрации причинам.
                <br/>
                - осуществлять разностороннюю защиту учетной записи Пользователя
                <br/>
                - защищать информацию, распространение которой ограничено или запрещено законами путем вынесения предупреждения либо удалением учетной записи пользователя, нарушившего правила
                <br/>
                - предоставить всю доступную информацию о Пользователе уполномоченным на то органам государственной власти в случаях, установленных законом
                <br/>
                Ответственность сторон<br/>
                - администрация не несет никакой ответственности за услуги, предоставляемые третьими лицами<br/>
                - в случае возникновения форс-мажорной ситуации (боевые действия, чрезвычайное положение, стихийное бедствие и т. д.) Администрация не гарантирует сохранность информации, размещённой Пользователем, а также бесперебойную работу информационного ресурса
                <br/>
                <br/>
                Условия действия Соглашения<br/>
                Данное Соглашение вступает в силу при любом использовании данного сайта.
                Соглашение перестает действовать при появлении его новой версии.
                Администрация оставляет за собой право в одностороннем порядке изменять данное соглашение по своему усмотрению.
                При изменении соглашения, в некоторых случаях, администрация может оповестить пользователей удобным для нее способом.
            </div>
        </div>
    );
};

export default TermsOfUsePage;