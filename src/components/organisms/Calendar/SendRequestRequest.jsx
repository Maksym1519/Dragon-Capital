import './send-request.scss';
import { useRef, useState, useEffect } from "react";

import RequestTypeBlock from './RequestTypeBlock';
import RequestSearchBlock from './RequestSearchBlock';
import RequestDatesBlock from './RequestDatesBlock';

import checkIcon from '../../../images/check-icon.svg';
import infoIcon from '../../../images/info-icon.svg';


const SendRequestRequest = (props) => {
    const [checkActive, setCheckActive] = useState(false);

    
    return (
        <>
            <div className="send-request-request">
                <RequestTypeBlock></RequestTypeBlock>

                <div className="send-request-request__line"></div>

                <RequestSearchBlock></RequestSearchBlock>

                <div className="send-request-request__line med"></div>

                <div className="send-request-request__numbers">
                    <div className="send-request-request__box">
                        <div className="send-request-request__big-number">20</div>
                        <div className="send-request-request__text">отпускных <br /> осталось</div>
                    </div>
                    <div className="send-request-request__box">
                        <div className="send-request-request__big-number">5</div>
                        <div className="send-request-request__text">отпускных <br /> использовано</div>
                    </div>
                    <div className="send-request-request__box">
                        <div className="send-request-request__big-number">0</div>
                        <div className="send-request-request__text">больничных <br /> использовано</div>
                    </div>
                </div>
                <div className="send-request-request__how-button" onClick={()=>{props.setPopUpActive(true)}}>Как использовать отпуск?</div>


                <div className="send-request-request__line"></div>

                <RequestDatesBlock></RequestDatesBlock>

                
                <div className="send-request-request__line"></div>
                <textarea name="" id="" cols="30" rows="10" placeholder='Комментарий...' className="send-request-request__comment"></textarea>
                <div className="send-request-request__check" onClick={() => { if (checkActive === true) { setCheckActive(false) } else { setCheckActive(true) } }}>
                    <div className={checkActive === true ? "send-request-request__checkbox active" : "send-request-request__checkbox"}>
                        <img src={checkIcon} alt="" className="send-request-request__check-icon" />
                    </div>
                    <div className="send-request-request__check-text">Публичный комментарий</div>
                    <img src={infoIcon} alt="" className="send-request-request__info-icon" />
                </div>

                <div className="send-request-request__buttons">
                    <div className="send-request-request__button cancel">Reset all</div>
                    <div className="send-request-request__button" onClick={()=>{props.setRequestPopUpActive(true)}}>Отправить запрос</div>
                </div>

            </div>


        </>
    )
}

export default SendRequestRequest;