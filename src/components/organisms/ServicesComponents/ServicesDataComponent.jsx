import React from "react";
import { useRef, useState, useEffect } from "react";
import './services-components.scss';

import ServicesRow from "../../molecules/ServicesOrganisms/ServicesRow";
import GreenDynamicButton from "../../atoms/Buttons/GreenDynamicButton";

const ServicesDataComponent = (props) => {
    return (
        <div class="services-component">
            <div class="services-component__title">Data editor</div>
            <div class="services-component__list data">
                <ServicesRow rowName="Employee" firstDrop={true} firstText1="Department" firstText={["Первая", "Вторая", "Полный"]} secondDrop={true} secondText1="Choose an option" secondText={["Первая", "Вторая", "Полный"]} input={false} plusButton={false} date={false}></ServicesRow>
                <ServicesRow rowName="Edit field" firstDrop={true} firstText1="Department name" firstText={["Первая", "Вторая", "Полный"]} secondDrop={false} secondText1="Choose an option" secondText={["Первая", "Вторая", "Полный"]} input={true} plusButton={true} date={false}></ServicesRow>
                <ServicesRow rowName="" firstDrop={true} firstText1="Cluster" firstText={["Первая", "Вторая", "Полный"]} secondDrop={false} secondText1="Choose an option" secondText={["Первая", "Вторая", "Полный"]} input={true} plusButton={true} date={false}></ServicesRow>
                <ServicesRow rowName="" firstDrop={true} firstText1="Ext" firstText={["Первая", "Вторая", "Полный"]} secondDrop={false} secondText1="Choose an option" secondText={["Первая", "Вторая", "Полный"]} input={true} plusButton={true} date={false}></ServicesRow>
            </div>
            <div class="services-component__green-button data">
                <GreenDynamicButton width={269} text="Apply changes" handleClick={props.handleSearch}></GreenDynamicButton>
            </div>
        </div>
    )
}

export default ServicesDataComponent;