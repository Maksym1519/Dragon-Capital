import React from "react";
import { useRef, useState, useEffect } from "react";
import './services-components.scss';

import ServicesRow from "../../molecules/ServicesOrganisms/ServicesRow";
import GreenDynamicButton from "../../atoms/Buttons/GreenDynamicButton";

import employeeAvatar1 from '../../../images/employee-avatar-small-1.svg';
import exportIcon from "../../../images/export-icon.svg";

const ServicesEmployeeList = (props) => {
    return (
        <div class={props.employeeList === true ? "services-list active" : "services-list"}>
            <div class="services-list__head">
                <div class="services-list__title">Employees founded</div>
                <button class="services-list__export-button">
                    <img src={exportIcon} alt="" class="services-list__export-icon" />
                    Export to CSV
                </button>
            </div>

            <div class="services-list__list-head">
                <div class="services-list__head-item first">ФИО и должность</div>
                <div class="services-list__head-item second">Phone number</div>
                <div class="services-list__head-item">Hiring date</div>
            </div>

            <div class="services-list__list">
                <div class="services-list__row">
                    <img src={employeeAvatar1} alt="" class="services-list__avatar" />
                    <div class="services-list__texts">
                        <div class="services-list__row-name">Alexander Shevchenko</div>
                        <div class="services-list__row-job">Marketing director</div>
                    </div>
                    <div class="services-list__date">+38 (050) 123-45-67</div>
                    <div class="services-list__cluster">21.01.2020</div>
                </div>
                <div class="services-list__row">
                    <img src={employeeAvatar1} alt="" class="services-list__avatar" />
                    <div class="services-list__texts">
                        <div class="services-list__row-name">Alexander Shevchenko</div>
                        <div class="services-list__row-job">Marketing director</div>
                    </div>
                    <div class="services-list__date">+38 (050) 123-45-67</div>
                    <div class="services-list__cluster">21.01.2020</div>
                </div>
                <div class="services-list__row">
                    <img src={employeeAvatar1} alt="" class="services-list__avatar" />
                    <div class="services-list__texts">
                        <div class="services-list__row-name">Alexander Shevchenko</div>
                        <div class="services-list__row-job">Marketing director</div>
                    </div>
                    <div class="services-list__date">+38 (050) 123-45-67</div>
                    <div class="services-list__cluster">21.01.2020</div>
                </div>
                <div class="services-list__row">
                    <img src={employeeAvatar1} alt="" class="services-list__avatar" />
                    <div class="services-list__texts">
                        <div class="services-list__row-name">Alexander Shevchenko</div>
                        <div class="services-list__row-job">Marketing director</div>
                    </div>
                    <div class="services-list__date">+38 (050) 123-45-67</div>
                    <div class="services-list__cluster">21.01.2020</div>
                </div>
                <div class="services-list__row">
                    <img src={employeeAvatar1} alt="" class="services-list__avatar" />
                    <div class="services-list__texts">
                        <div class="services-list__row-name">Alexander Shevchenko</div>
                        <div class="services-list__row-job">Marketing director</div>
                    </div>
                    <div class="services-list__date">+38 (050) 123-45-67</div>
                    <div class="services-list__cluster">21.01.2020</div>
                </div>
                <div class="services-list__row">
                    <img src={employeeAvatar1} alt="" class="services-list__avatar" />
                    <div class="services-list__texts">
                        <div class="services-list__row-name">Alexander Shevchenko</div>
                        <div class="services-list__row-job">Marketing director</div>
                    </div>
                    <div class="services-list__date">+38 (050) 123-45-67</div>
                    <div class="services-list__cluster">21.01.2020</div>
                </div>
                <div class="services-list__row">
                    <img src={employeeAvatar1} alt="" class="services-list__avatar" />
                    <div class="services-list__texts">
                        <div class="services-list__row-name">Alexander Shevchenko</div>
                        <div class="services-list__row-job">Marketing director</div>
                    </div>
                    <div class="services-list__date">+38 (050) 123-45-67</div>
                    <div class="services-list__cluster">21.01.2020</div>
                </div>
                <div class="services-list__row">
                    <img src={employeeAvatar1} alt="" class="services-list__avatar" />
                    <div class="services-list__texts">
                        <div class="services-list__row-name">Alexander Shevchenko</div>
                        <div class="services-list__row-job">Marketing director</div>
                    </div>
                    <div class="services-list__date">+38 (050) 123-45-67</div>
                    <div class="services-list__cluster">21.01.2020</div>
                </div>
                <div class="services-list__row">
                    <img src={employeeAvatar1} alt="" class="services-list__avatar" />
                    <div class="services-list__texts">
                        <div class="services-list__row-name">Alexander Shevchenko</div>
                        <div class="services-list__row-job">Marketing director</div>
                    </div>
                    <div class="services-list__date">+38 (050) 123-45-67</div>
                    <div class="services-list__cluster">21.01.2020</div>
                </div>
                <div class="services-list__row">
                    <img src={employeeAvatar1} alt="" class="services-list__avatar" />
                    <div class="services-list__texts">
                        <div class="services-list__row-name">Alexander Shevchenko</div>
                        <div class="services-list__row-job">Marketing director</div>
                    </div>
                    <div class="services-list__date">+38 (050) 123-45-67</div>
                    <div class="services-list__cluster">21.01.2020</div>
                </div>
                <div class="services-list__row">
                    <img src={employeeAvatar1} alt="" class="services-list__avatar" />
                    <div class="services-list__texts">
                        <div class="services-list__row-name">Alexander Shevchenko</div>
                        <div class="services-list__row-job">Marketing director</div>
                    </div>
                    <div class="services-list__date">+38 (050) 123-45-67</div>
                    <div class="services-list__cluster">21.01.2020</div>
                </div>
                <div class="services-list__row">
                    <img src={employeeAvatar1} alt="" class="services-list__avatar" />
                    <div class="services-list__texts">
                        <div class="services-list__row-name">Alexander Shevchenko</div>
                        <div class="services-list__row-job">Marketing director</div>
                    </div>
                    <div class="services-list__date">+38 (050) 123-45-67</div>
                    <div class="services-list__cluster">21.01.2020</div>
                </div>
                <div class="services-list__row">
                    <img src={employeeAvatar1} alt="" class="services-list__avatar" />
                    <div class="services-list__texts">
                        <div class="services-list__row-name">Alexander Shevchenko</div>
                        <div class="services-list__row-job">Marketing director</div>
                    </div>
                    <div class="services-list__date">+38 (050) 123-45-67</div>
                    <div class="services-list__cluster">21.01.2020</div>
                </div>
                <div class="services-list__row">
                    <img src={employeeAvatar1} alt="" class="services-list__avatar" />
                    <div class="services-list__texts">
                        <div class="services-list__row-name">Alexander Shevchenko</div>
                        <div class="services-list__row-job">Marketing director</div>
                    </div>
                    <div class="services-list__date">+38 (050) 123-45-67</div>
                    <div class="services-list__cluster">21.01.2020</div>
                </div>
                <div class="services-list__row">
                    <img src={employeeAvatar1} alt="" class="services-list__avatar" />
                    <div class="services-list__texts">
                        <div class="services-list__row-name">Alexander Shevchenko</div>
                        <div class="services-list__row-job">Marketing director</div>
                    </div>
                    <div class="services-list__date">+38 (050) 123-45-67</div>
                    <div class="services-list__cluster">21.01.2020</div>
                </div>
                <div class="services-list__row">
                    <img src={employeeAvatar1} alt="" class="services-list__avatar" />
                    <div class="services-list__texts">
                        <div class="services-list__row-name">Alexander Shevchenko</div>
                        <div class="services-list__row-job">Marketing director</div>
                    </div>
                    <div class="services-list__date">+38 (050) 123-45-67</div>
                    <div class="services-list__cluster">21.01.2020</div>
                </div>
            </div>

        </div>
    )
}

export default ServicesEmployeeList;