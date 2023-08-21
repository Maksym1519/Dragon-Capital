import React from "react";
import './send-request.scss';
import { useRef, useState, useEffect } from "react";
import BlockHeading from '../../atoms/Headings/BlockHeading';


import SendRequestRequest from './SendRequestRequest';
import SendRequestTransfer from './SendRequestTransfer';
import SendRequestVacation from './SendRequestVacation';



const BigComponents = [SendRequestRequest, SendRequestTransfer, SendRequestVacation];

const SendRequest = (props) => {
    const [currentComponent, setCurrentComponent] = useState(0);
    return (
        <div className="send-request">
            <BlockHeading text="Отправить запрос"></BlockHeading>


            <div className="send-request__container">
                <div className="send-request__nav">
                    <div className={currentComponent === 0 ? "send-request__nav-button active" : "send-request__nav-button"} onClick={() => { setCurrentComponent(0) }}>
                        Запрос
                    </div>
                    <div className={currentComponent === 1 ? "send-request__nav-button active" : "send-request__nav-button"} onClick={() => { setCurrentComponent(1) }}>
                        Перенос больничных
                    </div>
                    <div className={currentComponent === 2 ? "send-request__nav-button active" : "send-request__nav-button"} onClick={() => { setCurrentComponent(2) }}>
                        Add vacation
                    </div>
                </div>

                {React.createElement(BigComponents[currentComponent], {
                    components: currentComponent,
                    setPopUpActive: props.setPopUpActive,
                })}
            </div>
        </div>
    )
}

export default SendRequest;