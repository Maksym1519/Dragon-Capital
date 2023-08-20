import './send-request.scss';
import { useRef, useState, useEffect } from "react";



const RequestTypeBlock = (props) => {
    const [buttonActive, setButtonActive] = useState([true, false, false, false, false, false]);
	const handleButtonClick = (index) => {
		const newActiveItems = buttonActive.map((item, i) => i === index ? !item : false);
		setButtonActive(newActiveItems);
    };
    
    return (
        <div className="request-type-block">
            <div className="request-type-block__heading">
                Выберите тип запроса
            </div>
            <div className="request-type-block__buttons">
                <div className={buttonActive[0] === true ? "request-type-block__button active" : "request-type-block__button"} onClick={()=>{handleButtonClick(0)}}>Выходной</div>
                <div className={buttonActive[1] === true ? "request-type-block__button active" : "request-type-block__button"} onClick={()=>{handleButtonClick(1)}}>Больничный</div>
                <div className={buttonActive[2] === true ? "request-type-block__button active" : "request-type-block__button"} onClick={()=>{handleButtonClick(2)}}>Командировка</div>
                <div className={buttonActive[3] === true ? "request-type-block__button active" : "request-type-block__button"} onClick={()=>{handleButtonClick(3)}}>Учеба</div>
                <button className={buttonActive[4] === true ? "request-type-block__button active" : "request-type-block__button"} onClick={()=>{handleButtonClick(4)}}>Встреча</button>
                <button className={buttonActive[5] === true ? "request-type-block__button active" : "request-type-block__button"} onClick={()=>{handleButtonClick(5)}}>Работа на выходных</button>
            </div>
        </div>
    )
}

export default RequestTypeBlock;