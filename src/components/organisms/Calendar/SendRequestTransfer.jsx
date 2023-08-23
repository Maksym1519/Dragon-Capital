import './send-request.scss';
import { useRef, useState, useEffect } from "react";

import RequestSearchBlock from './RequestSearchBlock';
import checkIcon from '../../../images/check-icon.svg';
const SendRequestTransfer = (props) => {

    const [buttonActive, setButtonActive] = useState([false, false, false]);
    const handleButtonClick = (index) => {
        const newActiveItems = buttonActive.map((item, i) => {
            if (i === index) {
                return !item; // Toggle the value
            } else {
                return item; // Keep the value as is
            }
        });
        setButtonActive(newActiveItems);
    };
    

    return (
        <div className="send-request-request">
            <RequestSearchBlock></RequestSearchBlock>
            <div className="send-request-request__line"></div>
            <div className="send-request-transfer__title">Выберите даты</div>
            <div className="send-request-transfer__checks">
                <div className="send-request-transfer__check" onClick={() => { handleButtonClick(0) }}>
                    <div className={buttonActive[0] === true ? "send-request-transfer__checkbox active" : "send-request-transfer__checkbox"}>
                        <img src={checkIcon} alt="" className="send-request-transfer__check-icon" />
                    </div>
                    <div className="send-request-transfer__check-text">14.05.2019</div>
                </div>
                <div className="send-request-transfer__check" onClick={() => { handleButtonClick(1) }}>
                    <div className={buttonActive[1] === true ? "send-request-transfer__checkbox active" : "send-request-transfer__checkbox"}>
                        <img src={checkIcon} alt="" className="send-request-transfer__check-icon" />
                    </div>
                    <div className="send-request-transfer__check-text">15.05.2019</div>
                </div>
                <div className="send-request-transfer__check" onClick={() => { handleButtonClick(2) }}>
                    <div className={buttonActive[2] === true ? "send-request-transfer__checkbox active" : "send-request-transfer__checkbox"}>
                        <img src={checkIcon} alt="" className="send-request-transfer__check-icon" />
                    </div>
                    <div className="send-request-transfer__check-text">16.05.2019</div>
                </div>
            </div>
            <div className="send-request-request__line"></div>
            <div className="send-request-request__buttons transfer">

                <div className="send-request-request__button">Отправить запрос</div>
            </div>
        </div>
    )
}

export default SendRequestTransfer;