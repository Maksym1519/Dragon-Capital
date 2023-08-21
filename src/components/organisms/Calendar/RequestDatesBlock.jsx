import './send-request.scss';
import { useRef, useState, useEffect } from "react";

import WhiteWithGreyBorderDrop from '../../molecules/Dropdowns/WhiteWithGreyBorderDrop';

import dateIcon from '../../../images/date-icon.svg';
import redCross from '../../../images/red-cross.svg';

const RequestDatesBlock = (props) => {

    return (
        <div className="request-dates-block">
            <div className="request-dates-block__title">Выберите дату</div>
            <div className="request-dates-block__date">
                14.05.19
                <img src={dateIcon} alt="" className="request-dates-block__date-icon" />
            </div>
            <div className="request-dates-block__list">
                <div className="request-dates-block__row">
                    <div className="request-dates-block__text">Среда <br /> 14.05.2019</div>
                    <WhiteWithGreyBorderDrop background='#FBFBFB' width={185} text1="Вторая половина..." text={["Первая", "Вторая", "Полный"]}></WhiteWithGreyBorderDrop>
                    <WhiteWithGreyBorderDrop background='#FBFBFB' width={155} text1="За свой счет" text={["В счет отпуска", "За свой счет"]}></WhiteWithGreyBorderDrop>
                    <img src={redCross} alt="" className="request-dates-block__red-cross" />
                </div>
                <div className="request-dates-block__row">
                    <div className="request-dates-block__text">Четверг <br />15.05.2019</div>
                    <WhiteWithGreyBorderDrop background='#FBFBFB' width={185} text1="Полный день" text={["Первая", "Вторая", "Полный"]}></WhiteWithGreyBorderDrop>
                    <WhiteWithGreyBorderDrop background='#FBFBFB' width={155} text1="В счет отпуска" text={["В счет отпуска", "За свой счет"]}></WhiteWithGreyBorderDrop>
                    <img src={redCross} alt="" className="request-dates-block__red-cross" />
                </div>
                <div className="request-dates-block__row">
                    <div className="request-dates-block__text">Пятница <br />16.05.2019</div>
                    <WhiteWithGreyBorderDrop background='#FBFBFB' width={185} text1="Полный день" text={["Первая", "Вторая", "Полный"]}></WhiteWithGreyBorderDrop>
                    <WhiteWithGreyBorderDrop background='#FBFBFB' width={155} text1="За свой счет" text={["В счет отпуска", "За свой счет"]}></WhiteWithGreyBorderDrop>
                    <img src={redCross} alt="" className="request-dates-block__red-cross" />
                </div>
                <div className="request-dates-block__row">
                    <div className="request-dates-block__text">Понедельник <br />20.05.2019</div>
                    <WhiteWithGreyBorderDrop background='#FBFBFB' width={185} text1="Первая половина..." text={["Первая", "Вторая", "Полный"]}></WhiteWithGreyBorderDrop>
                    <WhiteWithGreyBorderDrop background='#FBFBFB' width={155} text1="В счет отпуска" text={["В счет отпуска", "За свой счет"]}></WhiteWithGreyBorderDrop>
                    <img src={redCross} alt="" className="request-dates-block__red-cross" />
                </div>
            </div>
        </div>
    )
}

export default RequestDatesBlock;