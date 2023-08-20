import './send-request.scss';
import { useRef, useState, useEffect } from "react";

import RequestTypeBlock from './RequestTypeBlock';
import RequestSearchBlock from './RequestSearchBlock';

import checkIcon from '../../../images/check-icon.svg';
import infoIcon from '../../../images/info-icon.svg';

const SendRequestRequest = (props) => {
    const [checkActive, setCheckActive] = useState(false);
    return (
        <div class="send-request-request">
            <RequestTypeBlock></RequestTypeBlock>
            <div class="send-request-request__line"></div>
            <RequestSearchBlock></RequestSearchBlock>
            <div class="send-request-request__line med"></div>
            <div class="send-request-request__numbers">
                <div class="send-request-request__box">
                    <div class="send-request-request__big-number">20</div>
                    <div class="send-request-request__text">отпускных <br /> осталось</div>
                </div>
                <div class="send-request-request__box">
                    <div class="send-request-request__big-number">5</div>
                    <div class="send-request-request__text">отпускных <br /> использовано</div>
                </div>
                <div class="send-request-request__box">
                    <div class="send-request-request__big-number">0</div>
                    <div class="send-request-request__text">больничных <br /> использовано</div>
                </div>
            </div>
            <div class="send-request-request__how-button">Как использовать отпуск?</div>
            <div class="send-request-request__line"></div>
            <textarea name="" id="" cols="30" rows="10" placeholder='Комментарий...' class="send-request-request__comment"></textarea>
            <div class="send-request-request__check" onClick={() => { if (checkActive === true) { setCheckActive(false) } else { setCheckActive(true) } }}>
                <div class={checkActive === true ? "send-request-request__checkbox active" : "send-request-request__checkbox"}>
                    <img src={checkIcon} alt="" class="send-request-request__check-icon" />
                </div>
                <div class="send-request-request__check-text">Не увеломлеять Head</div>
                <img src={infoIcon} alt="" class="send-request-request__info-icon" />
            </div>

            <div class="send-request-request__buttons">
                <div class="send-request-request__button cancel">Reset all</div>
                <div class="send-request-request__button">Отправить запрос</div>
            </div>

        </div>
    )
}

export default SendRequestRequest;