import './send-request.scss';
import { useRef, useState, useEffect } from "react";

import RequestSearchBlock from './RequestSearchBlock';

const SendRequestTransfer = (props) => {

    return (
        <div className="send-request-request">
            <RequestSearchBlock></RequestSearchBlock>
            <div className="send-request-request__line"></div>
            <div className="send-request-request__title">Выберите даты</div>
            
            <div className="send-request-request__line"></div>
            <div className="send-request-request__buttons transfer">
                
                <div className="send-request-request__button">Отправить запрос</div>
            </div>
        </div>
    )
}

export default SendRequestTransfer;