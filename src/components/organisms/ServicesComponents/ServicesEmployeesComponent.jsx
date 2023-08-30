import React from "react";
import { useRef, useState, useEffect } from "react";
import './services-components.scss';

import ServicesRow from "../../molecules/ServicesOrganisms/ServicesRow";
import GreenDynamicButton from "../../atoms/Buttons/GreenDynamicButton";

const ServicesEmployeeComponent = (props) => {
    return (
        <div class="services-component">
            <div class="services-component__title">Employees</div>
            <div class="services-component__list">
                <ServicesRow rowName="First name" firstDrop={true} firstText1="Equals to" firstText={["Первая", "Вторая", "Полный"]} secondDrop={true} secondText1="Choose an option" secondText={["Первая", "Вторая", "Полный"]} input={false} plusButton={true} date={false}></ServicesRow>
                <ServicesRow rowName="Last name" firstDrop={true} firstText1="Search by" firstText={["Первая", "Вторая", "Полный"]} secondDrop={false} secondText1="Write a text" secondText={["Первая", "Вторая", "Полный"]} input={true} plusButton={true} date={false}></ServicesRow>
                <ServicesRow rowName="Age" firstDrop={true} firstText1="Choose option" firstText={["Первая", "Вторая", "Полный"]} secondDrop={false} input={false} plusButton={false} date={false}></ServicesRow>
                <ServicesRow rowName="Domains" firstDrop={true} firstText1="Choose option" firstText={["Первая", "Вторая", "Полный"]} secondDrop={false} input={false} plusButton={false} date={false}></ServicesRow>
                <ServicesRow rowName="Photo" firstDrop={true} firstText1="Choose option" firstText={["Первая", "Вторая", "Полный"]} secondDrop={false} input={false} plusButton={false} date={false}></ServicesRow>
                <ServicesRow rowName="Phone number" firstDrop={true} firstText1="Drop down list" firstText={["Первая", "Вторая", "Полный"]} secondDrop={true} secondText1="Choose an option" secondText={["Первая", "Вторая", "Полный"]} input={false} plusButton={true} date={false}></ServicesRow>
                <ServicesRow rowName="" firstDrop={true} firstText1="Exclude" firstText={["Первая", "Вторая", "Полный"]} secondDrop={false} secondText1="Write a text" secondText={["Первая", "Вторая", "Полный"]} input={true} plusButton={true} date={false}></ServicesRow>
                <ServicesRow rowName="CLuster" firstDrop={true} firstText1="Choose option" firstText={["Первая", "Вторая", "Полный"]} secondDrop={false} input={false} plusButton={false} date={false}></ServicesRow>
                <ServicesRow rowName="Birthday" firstDrop={true} firstText1="Choose option" firstText={["Первая", "Вторая", "Полный"]} secondDrop={false} input={false} plusButton={false} date={false}></ServicesRow>
                <ServicesRow rowName="Hiring date" firstDrop={true} firstText1="Equals to year" firstText={["Первая", "Вторая", "Полный"]} secondDrop={false} secondText1="Write a text" secondText={["Первая", "Вторая", "Полный"]} input={true} plusButton={true} date={false}></ServicesRow>
            </div>
            <div class="services-component__green-button">
                <GreenDynamicButton width={269} text="Find employees" handleClick={props.handleSearch}></GreenDynamicButton>
            </div>
        </div>
    )
}

export default ServicesEmployeeComponent;