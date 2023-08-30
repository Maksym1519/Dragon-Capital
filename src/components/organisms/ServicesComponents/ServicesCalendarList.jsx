


import React from "react";
import { useRef, useState, useEffect } from "react";
import './services-components.scss';

import ServicesRow from "../../molecules/ServicesOrganisms/ServicesRow";
import GreenDynamicButton from "../../atoms/Buttons/GreenDynamicButton";

import employeeAvatar1 from '../../../images/employee-avatar-small-1.svg';
import exportIcon from "../../../images/export-icon.svg";

const ServicesCalendarList = (props) => {
    return (
        <div class={props.calendarList === true ? "services-list calendar active" : "services-list calendar"}>
            <div class="services-list__head">
                <div class="services-list__title">Employees founded</div>
                <button class="services-list__export-button">
                    <img src={exportIcon} alt="" class="services-list__export-icon" />
                    Export to CSV
                </button>
            </div>

            <div class="services-list__list-head">
                <div class="services-list__head-item first">ФИО и должность</div>
                <div class="services-list__head-item second">Vacation dates</div>
                <div class="services-list__head-item">Cluster</div>
            </div>

            <div class="services-list__list">
                <div class="services-list__row">
                    <img src={employeeAvatar1} alt="" class="services-list__avatar" />
                    <div class="services-list__texts">
                        <div class="services-list__row-name">Alexander Shevchenko</div>
                        <div class="services-list__row-job">Marketing director</div>
                    </div>
                    <div class="services-list__date">02.02.2020 - 03.02.2020</div>
                    <div class="services-list__cluster">Dragon</div>
                </div>
                <div class="services-list__row">
                    <img src={employeeAvatar1} alt="" class="services-list__avatar" />
                    <div class="services-list__texts">
                        <div class="services-list__row-name">Alexander Shevchenko</div>
                        <div class="services-list__row-job">Marketing director</div>
                    </div>
                    <div class="services-list__date">02.02.2020 - 03.02.2020</div>
                    <div class="services-list__cluster">Dragon</div>
                </div>
                <div class="services-list__row">
                    <img src={employeeAvatar1} alt="" class="services-list__avatar" />
                    <div class="services-list__texts">
                        <div class="services-list__row-name">Alexander Shevchenko</div>
                        <div class="services-list__row-job">Marketing director</div>
                    </div>
                    <div class="services-list__date">02.02.2020 - 03.02.2020</div>
                    <div class="services-list__cluster">Dragon</div>
                </div>
                <div class="services-list__row">
                    <img src={employeeAvatar1} alt="" class="services-list__avatar" />
                    <div class="services-list__texts">
                        <div class="services-list__row-name">Alexander Shevchenko</div>
                        <div class="services-list__row-job">Marketing director</div>
                    </div>
                    <div class="services-list__date">02.02.2020 - 03.02.2020</div>
                    <div class="services-list__cluster">Dragon</div>
                </div>
                <div class="services-list__row">
                    <img src={employeeAvatar1} alt="" class="services-list__avatar" />
                    <div class="services-list__texts">
                        <div class="services-list__row-name">Alexander Shevchenko</div>
                        <div class="services-list__row-job">Marketing director</div>
                    </div>
                    <div class="services-list__date">02.02.2020 - 03.02.2020</div>
                    <div class="services-list__cluster">Dragon</div>
                </div>
                <div class="services-list__row">
                    <img src={employeeAvatar1} alt="" class="services-list__avatar" />
                    <div class="services-list__texts">
                        <div class="services-list__row-name">Alexander Shevchenko</div>
                        <div class="services-list__row-job">Marketing director</div>
                    </div>
                    <div class="services-list__date">02.02.2020 - 03.02.2020</div>
                    <div class="services-list__cluster">Dragon</div>
                </div>
                <div class="services-list__row">
                    <img src={employeeAvatar1} alt="" class="services-list__avatar" />
                    <div class="services-list__texts">
                        <div class="services-list__row-name">Alexander Shevchenko</div>
                        <div class="services-list__row-job">Marketing director</div>
                    </div>
                    <div class="services-list__date">02.02.2020 - 03.02.2020</div>
                    <div class="services-list__cluster">Dragon</div>
                </div>
                <div class="services-list__row">
                    <img src={employeeAvatar1} alt="" class="services-list__avatar" />
                    <div class="services-list__texts">
                        <div class="services-list__row-name">Alexander Shevchenko</div>
                        <div class="services-list__row-job">Marketing director</div>
                    </div>
                    <div class="services-list__date">02.02.2020 - 03.02.2020</div>
                    <div class="services-list__cluster">Dragon</div>
                </div>
                <div class="services-list__row">
                    <img src={employeeAvatar1} alt="" class="services-list__avatar" />
                    <div class="services-list__texts">
                        <div class="services-list__row-name">Alexander Shevchenko</div>
                        <div class="services-list__row-job">Marketing director</div>
                    </div>
                    <div class="services-list__date">02.02.2020 - 03.02.2020</div>
                    <div class="services-list__cluster">Dragon</div>
                </div>
                <div class="services-list__row">
                    <img src={employeeAvatar1} alt="" class="services-list__avatar" />
                    <div class="services-list__texts">
                        <div class="services-list__row-name">Alexander Shevchenko</div>
                        <div class="services-list__row-job">Marketing director</div>
                    </div>
                    <div class="services-list__date">02.02.2020 - 03.02.2020</div>
                    <div class="services-list__cluster">Dragon</div>
                </div>
                <div class="services-list__row">
                    <img src={employeeAvatar1} alt="" class="services-list__avatar" />
                    <div class="services-list__texts">
                        <div class="services-list__row-name">Alexander Shevchenko</div>
                        <div class="services-list__row-job">Marketing director</div>
                    </div>
                    <div class="services-list__date">02.02.2020 - 03.02.2020</div>
                    <div class="services-list__cluster">Dragon</div>
                </div>
                <div class="services-list__row">
                    <img src={employeeAvatar1} alt="" class="services-list__avatar" />
                    <div class="services-list__texts">
                        <div class="services-list__row-name">Alexander Shevchenko</div>
                        <div class="services-list__row-job">Marketing director</div>
                    </div>
                    <div class="services-list__date">02.02.2020 - 03.02.2020</div>
                    <div class="services-list__cluster">Dragon</div>
                </div>
                <div class="services-list__row">
                    <img src={employeeAvatar1} alt="" class="services-list__avatar" />
                    <div class="services-list__texts">
                        <div class="services-list__row-name">Alexander Shevchenko</div>
                        <div class="services-list__row-job">Marketing director</div>
                    </div>
                    <div class="services-list__date">02.02.2020 - 03.02.2020</div>
                    <div class="services-list__cluster">Dragon</div>
                </div>
                <div class="services-list__row">
                    <img src={employeeAvatar1} alt="" class="services-list__avatar" />
                    <div class="services-list__texts">
                        <div class="services-list__row-name">Alexander Shevchenko</div>
                        <div class="services-list__row-job">Marketing director</div>
                    </div>
                    <div class="services-list__date">02.02.2020 - 03.02.2020</div>
                    <div class="services-list__cluster">Dragon</div>
                </div>
                <div class="services-list__row">
                    <img src={employeeAvatar1} alt="" class="services-list__avatar" />
                    <div class="services-list__texts">
                        <div class="services-list__row-name">Alexander Shevchenko</div>
                        <div class="services-list__row-job">Marketing director</div>
                    </div>
                    <div class="services-list__date">02.02.2020 - 03.02.2020</div>
                    <div class="services-list__cluster">Dragon</div>
                </div>
            </div>

        </div>
    )
}

export default ServicesCalendarList;