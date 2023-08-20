import './send-request.scss';
import { useRef, useState, useEffect } from "react";

import SearchInput from '../../atoms/Inputs/SearchInput';


import employeeAvatar3 from '../../../images/employee-avatar-small-3.svg';
import redCross from '../../../images/red-cross.svg';
import checkIcon from '../../../images/check-icon.svg';
import infoIcon from '../../../images/info-icon.svg';
const RequestSearchBlock = (props) => {
    const [buttonActive, setButtonActive] = useState([true, false, false, false, false, false]);
    const handleButtonClick = (index) => {
        const newActiveItems = buttonActive.map((item, i) => i === index ? !item : false);
        setButtonActive(newActiveItems);
    };

    const [checkActive, setCheckActive] = useState(false);

    return (
        <div className="request-search-block">
            <div className="request-search-block__heading">
                Сотрудник
            </div>
            <SearchInput width={521} placeholder="Search by name"></SearchInput>
            <div className="request-search-block__chosen">
                <img src={employeeAvatar3} alt="" className="request-search-block__avatar" />
                <div className="request-search-block__name">Anastasia Adokitsa</div>
                <img src={redCross} alt="" className="request-search-block__cross" />
            </div>

            <div className="request-search-block__check" onClick={() => { if (checkActive === true) { setCheckActive(false) } else { setCheckActive(true) } }}>
                <div className={checkActive === true ? "request-search-block__checkbox active" : "request-search-block__checkbox"}>
                    <img src={checkIcon} alt="" className="request-search-block__check-icon" />
                </div>
                <div className="request-search-block__check-text">Не увеломлеять Head</div>
                <img src={infoIcon} alt="" className="request-search-block__info-icon" />
            </div>

        </div>
    )
}

export default RequestSearchBlock;