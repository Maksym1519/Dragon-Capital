


import React from "react";
import { useRef, useState, useEffect } from "react";
import './services-components.scss';

import ServicesRow from "../../molecules/ServicesOrganisms/ServicesRow";
import GreenDynamicButton from "../../atoms/Buttons/GreenDynamicButton";

import employeeAvatar1 from '../../../images/employee-avatar-small-1.svg';
import exportIcon from "../../../images/export-icon.svg";

const ServicesChangesList = (props) => {
    return (
        <div class={props.changesList === true ? "services-list changes active" : "services-list changes"}>
            <div class="services-list__head">
                <div class="services-list__title">Results founded</div>
                <button class="services-list__export-button">
                    <img src={exportIcon} alt="" class="services-list__export-icon" />
                    Export to CSV
                </button>
            </div>

            <div class="services-list__list-head changes">
                <div class="services-list__head-item changes1">Событие</div>
                <div class="services-list__head-item changes2">Старое значение</div>
                <div class="services-list__head-item changes3">Новое значение</div>
                <div class="services-list__head-item changes4">Кто внес изменения</div>
                <div class="services-list__head-item changes5">Дата</div>
            </div>

            <div class="services-list__list changes">
                <div class="services-list__row changes">
                    <div className="services-list__event">Смена фамилии</div>
                    <div className="services-list__item changes2">Василенко</div>
                    <div className="services-list__item changes3">Шевченко</div>
                    <div className="services-list__item changes4">Ярослав Кошевой</div>
                    <div className="services-list__item changes5">21.04.2019</div>
                </div>
                <div class="services-list__row changes">
                    <div className="services-list__event">Смена рабочего телефона</div>
                    <div className="services-list__item changes2">+38 (050) 123-45-67</div>
                    <div className="services-list__item changes3">Шевченко</div>
                    <div className="services-list__item changes4">Ярослав Кошевой</div>
                    <div className="services-list__item changes5">21.04.2019</div>
                </div>
                <div class="services-list__row changes">
                    <div className="services-list__event">Смена email</div>
                    <div className="services-list__item changes2">vasilenko@dragon-capital.com</div>
                    <div className="services-list__item changes3">shevchenko@dragon-capital.com</div>
                    <div className="services-list__item changes4">Ярослав Кошевой</div>
                    <div className="services-list__item changes5">21.04.2019</div>
                </div>
                <div class="services-list__row changes">
                    <div className="services-list__event">Смена фамилии</div>
                    <div className="services-list__item changes2">Василенко</div>
                    <div className="services-list__item changes3">Шевченко</div>
                    <div className="services-list__item changes4">Ярослав Кошевой</div>
                    <div className="services-list__item changes5">21.04.2019</div>
                </div>
                <div class="services-list__row changes">
                    <div className="services-list__event">Смена рабочего телефона</div>
                    <div className="services-list__item changes2">+38 (050) 123-45-67</div>
                    <div className="services-list__item changes3">+38 (095) 765-43-21</div>
                    <div className="services-list__item changes4">Ярослав Кошевой</div>
                    <div className="services-list__item changes5">21.04.2019</div>
                </div>
                <div class="services-list__row changes">
                    <div className="services-list__event">Смена email</div>
                    <div className="services-list__item changes2">vasilenko@dragon-capital.com</div>
                    <div className="services-list__item changes3">shevchenko@dragon-capital.com</div>
                    <div className="services-list__item changes4">Ярослав Кошевой</div>
                    <div className="services-list__item changes5">21.04.2019</div>
                </div>
                <div class="services-list__row changes">
                    <div className="services-list__event">Смена рабочего телефона</div>
                    <div className="services-list__item changes2">+38 (050) 123-45-67</div>
                    <div className="services-list__item changes3">+38 (095) 765-43-21</div>
                    <div className="services-list__item changes4">Ярослав Кошевой</div>
                    <div className="services-list__item changes5">21.04.2019</div>
                </div>
                <div class="services-list__row changes">
                    <div className="services-list__event">Смена email</div>
                    <div className="services-list__item changes2">vasilenko@dragon-capital.com</div>
                    <div className="services-list__item changes3">shevchenko@dragon-capital.com</div>
                    <div className="services-list__item changes4">Ярослав Кошевой</div>
                    <div className="services-list__item changes5">21.04.2019</div>
                </div>

            </div>

        </div>
    )
}

export default ServicesChangesList;