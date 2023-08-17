import { useRef, useState, useEffect } from "react";

import "./white-with-grey-border-drop.scss";
import dropdownArrow from "../../../images/dropdown-arrow-down.svg";
import "../../../fonts.scss"

const WhiteWithGreyBorderDrop = (props) => {
    const [dropActive, setDropActive] = useState(false);
    const [selectedText, setSelectedText] = useState(props.text1);

    const handleRowClick = (text) => {
        setSelectedText(text);
        setDropActive(false);
    };

    return (
        <>
            <div className="w-g-b-dropdown" style={{ width: props.width, background: props.background }}>
                <div className="w-g-b-dropdown__preview" onClick={() => setDropActive(!dropActive)}>
                    {selectedText}
                    <img src={dropdownArrow} alt="" className={dropActive ? "w-g-b-dropdown__drop-arrow active" : "w-g-b-dropdown__drop-arrow"} />
                </div>
                <div className={dropActive ? "w-g-b-dropdown__drop active" : "w-g-b-dropdown__drop"}>
                    {props.text.map((item, index) => (
                        <div key={index} className="w-g-b-dropdown__row" onClick={() => handleRowClick(item)}>{item}</div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default WhiteWithGreyBorderDrop;
