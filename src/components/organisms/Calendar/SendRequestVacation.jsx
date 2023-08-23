import './send-request.scss';
import { useRef, useState, useEffect } from "react";

import RequestTypeBlock from './RequestTypeBlock';

import minusIcon from '../../../images/minus-icon.svg';
import plusIcon from '../../../images/dark-plus-icon.svg';

import Text17700 from '../../atoms/Text17700';
import Text15400С from '../../atoms/Text15400С';


import employeeAvatar1 from '../../../images/employee-avatar-small-1.svg';
import employeeAvatar2 from '../../../images/employee-avatar-small-2.svg';
import employeeAvatar3 from '../../../images/employee-avatar-small-3.svg';
import employeeAvatar4 from '../../../images/employee-avatar-small-4.svg';
import employeeAvatar5 from '../../../images/employee-avatar-small-5.svg';
import employeeAvatar6 from '../../../images/employee-avatar-small-6.svg';
import dropdownArrow from "../../../images/dropdown-arrow-down.svg";

import checkIcon from '../../../images/check-icon.svg';

const SendRequestVacation = (props) => {
    const [counter, setCounter] = useState(0);


    const [dropsActive, setDropsActive] = useState([false, false, false, false, false, false, false,]);
    const handleDropsClick = (index) => {
        const newActiveItems = dropsActive.map((item, i) => i === index ? !item : false);
        setDropsActive(newActiveItems);
    };



    const [buttonActive, setButtonActive] = useState([false, false, false, false, false, false, false,false, false, false, false, false, false, false,]);
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
        <div className="send-request-vacation">
            <RequestTypeBlock></RequestTypeBlock>

            <div className="send-request-vacation__line"></div>

            <div className="send-request-vacation__heading">Укажите количество дней</div>
            <div className="send-request-vacation__counter">
                <div
                    className="send-request-vacation__counter-button"
                    onClick={() => setCounter(prevCounter => prevCounter - 1)}
                >
                    <img src={minusIcon} alt="" className="send-request-vacation__counter-minus" />
                </div>
                <div className="send-request-vacation__counter-number">{counter}</div>
                <div
                    className="send-request-vacation__counter-button"
                    onClick={() => setCounter(prevCounter => prevCounter + 1)}
                >
                    <img src={plusIcon} alt="" className="send-request-vacation__counter-plus" />
                </div>
            </div>

            <div className="send-request-vacation__line"></div>

            <div className="send-request-vacation__heading">Выберите сотрудников</div>
            <div className="send-request-vacation__choose">
                <div className="calendar-find__dropdowns">
                    <div className="calendar-find__row drop" >
                        <div className="calendar-find__preview" onClick={() => { handleDropsClick(0); }}>
                            <Text17700 text="Administration"></Text17700>
                            <img src={dropdownArrow} alt="" className={dropsActive[0] === true ? " calendar-find__dropdown-arrow active" : "calendar-find__dropdown-arrow"} />
                        </div>
                        <div className={dropsActive[0] === true ? "calendar-find__dropdown active" : "calendar-find__dropdown"}>
                            <div className="calendar-find__link" onClick={()=>{handleButtonClick(0)}}>
                                <div className={buttonActive[0] === true ? "send-request-vacation__checkbox active" : "send-request-vacation__checkbox"}>
                                    <img src={checkIcon} alt="" className="send-request-vacation__check-icon" />
                                </div>

                                <img src={employeeAvatar1} alt="" className="calendar-find__avatar" />
                                <Text15400С text="Alexander Shevchenko"></Text15400С>
                            </div>
                            <div className="calendar-find__link" onClick={()=>{handleButtonClick(1)}}>
                                <div className={buttonActive[1] === true ? "send-request-vacation__checkbox active" : "send-request-vacation__checkbox"}>
                                    <img src={checkIcon} alt="" className="send-request-vacation__check-icon" />
                                </div>

                                <img src={employeeAvatar2} alt="" className="calendar-find__avatar" />
                                <Text15400С text="Natalia Petrenko"></Text15400С>
                            </div>
                            <div className="calendar-find__link" onClick={()=>{handleButtonClick(2)}}>
                                <div className={buttonActive[2] === true ? "send-request-vacation__checkbox active" : "send-request-vacation__checkbox"}>
                                    <img src={checkIcon} alt="" className="send-request-vacation__check-icon" />
                                </div>

                                <img src={employeeAvatar3} alt="" className="calendar-find__avatar" />
                                <Text15400С text="Olga Sumska"></Text15400С>
                            </div>
                            <div className="calendar-find__link" onClick={()=>{handleButtonClick(3)}}>
                                <div className={buttonActive[3] === true ? "send-request-vacation__checkbox active" : "send-request-vacation__checkbox"}>
                                    <img src={checkIcon} alt="" className="send-request-vacation__check-icon" />
                                </div>

                                <img src={employeeAvatar4} alt="" className="calendar-find__avatar" />
                                <Text15400С text="Valeriy Necheporenko"></Text15400С>
                            </div>
                            <div className="calendar-find__link" onClick={()=>{handleButtonClick(4)}}>
                                <div className={buttonActive[4] === true ? "send-request-vacation__checkbox active" : "send-request-vacation__checkbox"}>
                                    <img src={checkIcon} alt="" className="send-request-vacation__check-icon" />
                                </div>

                                <img src={employeeAvatar5} alt="" className="calendar-find__avatar" />
                                <Text15400С text="Alexander Shevchenko"></Text15400С>
                            </div>
                            <div className="calendar-find__link" onClick={()=>{handleButtonClick(5)}}>
                                <div className={buttonActive[5] === true ? "send-request-vacation__checkbox active" : "send-request-vacation__checkbox"}>
                                    <img src={checkIcon} alt="" className="send-request-vacation__check-icon" />
                                </div>

                                <img src={employeeAvatar6} alt="" className="calendar-find__avatar" />
                                <Text15400С text="Natalia Petrenko"></Text15400С>
                            </div>

                        </div>
                    </div>
                    <div className="calendar-find__row drop" >
                        <div className="calendar-find__preview" onClick={() => { handleDropsClick(1); }}>
                            <Text17700 text="Back office"></Text17700>
                            <img src={dropdownArrow} alt="" className={dropsActive[1] === true ? " calendar-find__dropdown-arrow active" : "calendar-find__dropdown-arrow"} />
                        </div>
                        <div className={dropsActive[1] === true ? "calendar-find__dropdown active" : "calendar-find__dropdown"}>
                            <div className="calendar-find__link" onClick={()=>{handleButtonClick(0)}}>
                                <div className={buttonActive[0] === true ? "send-request-vacation__checkbox active" : "send-request-vacation__checkbox"}>
                                    <img src={checkIcon} alt="" className="send-request-vacation__check-icon" />
                                </div>

                                <img src={employeeAvatar1} alt="" className="calendar-find__avatar" />
                                <Text15400С text="Alexander Shevchenko"></Text15400С>
                            </div>

                        </div>
                    </div>
                    <div className="calendar-find__row drop" >
                        <div className="calendar-find__preview" onClick={() => { handleDropsClick(2); }}>
                            <Text17700 text="Complience"></Text17700>
                            <img src={dropdownArrow} alt="" className={dropsActive[2] === true ? " calendar-find__dropdown-arrow active" : "calendar-find__dropdown-arrow"} />
                        </div>
                        <div className={dropsActive[2] === true ? "calendar-find__dropdown active" : "calendar-find__dropdown"}>
                            <div className="calendar-find__link" onClick={()=>{handleButtonClick(0)}}>
                                <div className={buttonActive[0] === true ? "send-request-vacation__checkbox active" : "send-request-vacation__checkbox"}>
                                    <img src={checkIcon} alt="" className="send-request-vacation__check-icon" />
                                </div>

                                <img src={employeeAvatar1} alt="" className="calendar-find__avatar" />
                                <Text15400С text="Alexander Shevchenko"></Text15400С>
                            </div>

                        </div>
                    </div>
                    <div className="calendar-find__row drop" >
                        <div className="calendar-find__preview" onClick={() => { handleDropsClick(3); }}>
                            <Text17700 text="Custody"></Text17700>
                            <img src={dropdownArrow} alt="" className={dropsActive[3] === true ? " calendar-find__dropdown-arrow active" : "calendar-find__dropdown-arrow"} />
                        </div>
                        <div className={dropsActive[3] === true ? "calendar-find__dropdown active" : "calendar-find__dropdown"}>
                            <div className="calendar-find__link" onClick={()=>{handleButtonClick(0)}}>
                                <div className={buttonActive[0] === true ? "send-request-vacation__checkbox active" : "send-request-vacation__checkbox"}>
                                    <img src={checkIcon} alt="" className="send-request-vacation__check-icon" />
                                </div>

                                <img src={employeeAvatar1} alt="" className="calendar-find__avatar" />
                                <Text15400С text="Alexander Shevchenko"></Text15400С>
                            </div>

                        </div>
                    </div>
                    <div className="calendar-find__row drop" >
                        <div className="calendar-find__preview" onClick={() => { handleDropsClick(4); }}>
                            <Text17700 text="Dragon Capital Partners"></Text17700>
                            <img src={dropdownArrow} alt="" className={dropsActive[4] === true ? " calendar-find__dropdown-arrow active" : "calendar-find__dropdown-arrow"} />
                        </div>
                        <div className={dropsActive[4] === true ? "calendar-find__dropdown active" : "calendar-find__dropdown"}>
                            <div className="calendar-find__link" onClick={()=>{handleButtonClick(0)}}>
                                <div className={buttonActive[0] === true ? "send-request-vacation__checkbox active" : "send-request-vacation__checkbox"}>
                                    <img src={checkIcon} alt="" className="send-request-vacation__check-icon" />
                                </div>

                                <img src={employeeAvatar1} alt="" className="calendar-find__avatar" />
                                <Text15400С text="Alexander Shevchenko"></Text15400С>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="send-request-vacation__line"></div>

            <div className="send-request-request__buttons transfer">



                <div className="send-request-request__button">Отправить запрос</div>
            </div>
        </div>
    );
}

export default SendRequestVacation;
