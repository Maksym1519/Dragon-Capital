import React from "react";
import { useRef, useState, useEffect } from "react";
import './services-row.scss';


import SearchInput from "../../atoms/Inputs/SearchInput";
import WhiteWithGreyBorderDrop from "../Dropdowns/WhiteWithGreyBorderDrop";

import calendarIcon from '../../../images/date-icon.svg';
import greenPlusIcon from '../../../images/green-pluc-icon.svg';

const ServicesRow = (props) => {
    return (
        <div class="services-row">
            <div class="services-row__row-name">
                {props.rowName}
            </div>
            <div class={props.firstDrop === false ? "services-row__drop-container first unactive" : "services-row__drop-container first"}>
                {props.firstDrop && (<WhiteWithGreyBorderDrop background="#FFF" width={209} text1={props.firstText1} text={props.firstText}></WhiteWithGreyBorderDrop>)}
            </div>
            <div class={props.secondDrop === false ? "services-row__drop-container second unactive" : "services-row__drop-container second"}>
                {props.secondDrop && (<WhiteWithGreyBorderDrop background="#FFF" width={303} text1={props.secondText1} text={props.secondText}></WhiteWithGreyBorderDrop>)}
            </div>
            {props.input && (
                <input type="text" className="services-row__input" placeholder="Write a text" />
            )}
            <div class={props.search === false ? "services-row__search-container unactive" : "services-row__search-container"}>
                {props.search && (
                    <SearchInput placeholder="Search for employee" width="303"></SearchInput>
                )}
            </div>
            {props.date && (
                <div class="services-row__date">
                    <div class="services-row__date-text">01.02.2020 - 07.02.2020</div>
                    <img src={calendarIcon} alt="" class="services-row__calendar-icon" />
                </div>
            )}
            {props.plusButton && (
                <img src={greenPlusIcon} alt="" class="services-row__plus-icon" />
            )}

        </div>
    )
}

export default ServicesRow;