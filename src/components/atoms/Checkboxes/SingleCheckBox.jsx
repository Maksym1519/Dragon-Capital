import './single-checkbox.scss';
import { useRef, useState, useEffect } from "react";
import greenArrow from '../../../images/green-arrow-down.svg';
import checkIcon from '../../../images/check-icon.svg';
import infoIcon from '../../../images/info-icon.svg';

const SingleCheckBox = (props) => {
    const [checkActive, setCheckActive] = useState(false);
    return (
        <div className="single-check__check" onClick={() => { if (checkActive === true) { setCheckActive(false) } else { setCheckActive(true) } }}>
            <div className={checkActive === true ? "single-check__checkbox active" : "single-check__checkbox"}>
                <img src={checkIcon} alt="" className="single-check__check-icon" />
            </div>
            <div className="single-check__check-text">{props.text}</div>
            <img src={infoIcon} alt="" className="single-check__info-icon" />
        </div>
    )
}

export default SingleCheckBox;