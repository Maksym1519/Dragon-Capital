import React from "react";
import { useRef, useState, useEffect } from "react";
import './services-components.scss';

import ServicesRow from "../../molecules/ServicesOrganisms/ServicesRow";
import GreenDynamicButton from "../../atoms/Buttons/GreenDynamicButton";


import employeeAvatar1 from '../../../images/employee-avatar-small-1.svg';
import employeeAvatar3 from '../../../images/employee-avatar-small-3.svg';
import employeeAvatar4 from '../../../images/employee-avatar-small-4.svg';

import redCross from '../../../images/red-cross.svg';

const ServicesAccountChangesComponent = (props) => {
    return (
        <div class="services-component">
            <div class="services-component__title">Account changes</div>
            <div class="services-component__list changes">
                <ServicesRow rowName="Employee" firstDrop={true} firstText1="Equals to" firstText={["Первая", "Вторая", "Полный"]} secondDrop={false} secondText1="Choose an option" secondText={["Первая", "Вторая", "Полный"]} search={true} input={false} plusButton={false} date={false}></ServicesRow>
                <ServicesRow rowName="Status" firstDrop={true} firstText1="New" firstText={["Первая", "Вторая", "Полный"]} secondDrop={false} secondText1="Choose an option" secondText={["Первая", "Вторая", "Полный"]} search={false} input={false} plusButton={false} date={false}></ServicesRow>
                <ServicesRow rowName="Change author" firstDrop={true} firstText1="Multiple selection" firstText={["Первая", "Вторая", "Полный"]} secondDrop={false} secondText1="Choose an option" secondText={["Первая", "Вторая", "Полный"]} search={true} input={false} plusButton={false} date={false}></ServicesRow>
                <div className="services-component__chosen-employees">
                    <div className="services-component__chosen-row">
                        <img src={employeeAvatar1} alt="" className="services-component__avatar" />
                        <div className="services-component__chosen-name">Alexander Shevchenko</div>
                        <img src={redCross} alt="" className="services-component__red-cross" />
                    </div>
                    <div className="services-component__chosen-row">
                        <img src={employeeAvatar3} alt="" className="services-component__avatar" />
                        <div className="services-component__chosen-name">Olga Sumska</div>
                        <img src={redCross} alt="" className="services-component__red-cross" />
                    </div>
                    <div className="services-component__chosen-row">
                        <img src={employeeAvatar4} alt="" className="services-component__avatar" />
                        <div className="services-component__chosen-name">Valeriy Necheporenko</div>
                        <img src={redCross} alt="" className="services-component__red-cross" />
                    </div>
                </div>
                <ServicesRow rowName="Timestamp of change" firstDrop={true} firstText1="Date range" firstText={["Первая", "Вторая", "Полный"]} secondDrop={true} secondText1="Choose an option" secondText={["Первая", "Вторая", "Полный"]} search={true} input={false} plusButton={false} date={false}></ServicesRow>
            </div>
            <div class="services-component__green-button changes">
                <GreenDynamicButton width={269} text="Search" handleClick={props.handleSearch}></GreenDynamicButton>
            </div>
        </div>
    )
}

export default ServicesAccountChangesComponent;