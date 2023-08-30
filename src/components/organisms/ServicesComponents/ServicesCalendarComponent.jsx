import React from "react";
import { useRef, useState, useEffect } from "react";
import './services-components.scss';

import ServicesRow from "../../molecules/ServicesOrganisms/ServicesRow";
import GreenDynamicButton from "../../atoms/Buttons/GreenDynamicButton";

const ServicesCalendarComponent = (props) => {
    return (
        <div class="services-component">
            <div class="services-component__title">Calendar</div>
            <div class="services-component__calendar-list first">
                <ServicesRow rowName="Type" firstDrop={true} firstText1="Vacation" firstText={["Первая", "Вторая", "Полный"]} secondDrop={false} secondText1="Choose an option" secondText={[]} input={false} plusButton={false} date={false}></ServicesRow>
            </div>
            <div class="services-component__calendar-list second">
                <ServicesRow rowName="Paid off" firstDrop={true} firstText1="Date" firstText={["Первая", "Вторая", "Полный"]} secondDrop={true} secondText1="Between dates" secondText={[]} input={false} plusButton={true} date={true}></ServicesRow>
                <ServicesRow rowName="" firstDrop={true} firstText1="Cluster" firstText={["Первая", "Вторая", "Полный"]} secondDrop={true} secondText1="Dragon" secondText={[]} input={false} plusButton={false} date={false}></ServicesRow>
            </div>
            <div class="services-component__calendar-list three">
                <ServicesRow rowName="Unpaid off" firstDrop={true} firstText1="Choose option" firstText={["Первая", "Вторая", "Полный"]} secondDrop={false} input={true} plusButton={false} date={false}></ServicesRow>
            </div>
            <div class="services-component__green-button calendar">
                <GreenDynamicButton width={269} text="Search" handleClick={props.handleSearch}></GreenDynamicButton>
            </div>
        </div>
    )
}

export default ServicesCalendarComponent;