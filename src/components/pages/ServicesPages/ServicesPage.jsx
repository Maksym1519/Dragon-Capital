import React from "react";
import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import "./services.scss";
import { useRef, useState, useEffect } from "react";
import Header from "../../organisms/Header";
import Footer from "../../organisms/Footer";
import PageTitle from "../../atoms/Headings/PageTitle";

import SearchInput from "../../atoms/Inputs/SearchInput";

import serviceFakeTab3 from "../../organisms/ServicesComponents/SupportFakeTab3";

import ServicesEmployeeList from "../../organisms/ServicesComponents/ServicesEmployeeList";
import ServicesCalendarList from "../../organisms/ServicesComponents/ServicesCalendarList";
import ServicesChangesList from "../../organisms/ServicesComponents/ServicesChangesList";

import ServicesEmployeeComponent from "../../organisms/ServicesComponents/ServicesEmployeesComponent";
import ServicesCalendarComponent from "../../organisms/ServicesComponents/ServicesCalendarComponent";
import ServicesAccountChangesComponent from "../../organisms/ServicesComponents/ServicesAccountChangesComponent";
import ServicesDataComponent from "../../organisms/ServicesComponents/ServicesDataComponent";
import Assistants from "../../organisms/ServicePage/Assistants";
import Roles from "../../organisms/ServicePage/Roles";
const BigComponents = [Roles, ServicesEmployeeComponent, ServicesCalendarComponent, Assistants, ServicesAccountChangesComponent, ServicesDataComponent];


const ServicesPage = () => {
    const [currentComponent, setCurrentComponent] = useState(0);

    const [employeeList, setEmployeeList] = useState(false);
    const [calendarList, setCalendarList] = useState(false);
    const [changesList, setChangesList] = useState(false);

    const handleSearch = () => {
        if (currentComponent === 0) {
            console.log(0);
            setEmployeeList(true);
            setCalendarList(false);
            setChangesList(false);
        } else if (currentComponent === 1) {
            setEmployeeList(true);
            setCalendarList(false);
            setChangesList(false);
        } else if (currentComponent === 2) {
            setEmployeeList(false);
            setCalendarList(true);
            setChangesList(false);
        } else if (currentComponent === 4) {
            setEmployeeList(false);
            setCalendarList(false);
            setChangesList(true);
        }
    }


    return (
        <>
            <Header />
            <div class="p-wrapper">

                <div class="p-wrapper__page-container calendar">

                    <PageTitle text="Сервисная страница"></PageTitle>

                    <div class="service">

                        <div class="service__nav">
                            <div class={currentComponent === 0 ? "service__nav-button active" : "service__nav-button"} onClick={() => { setCurrentComponent(0) }}>
                                Roles
                            </div>
                            <div class={currentComponent === 1 ? "service__nav-button active" : "service__nav-button"} onClick={() => { setCurrentComponent(1) }}>
                                Employees
                            </div>
                            <div class={currentComponent === 2 ? "service__nav-button active" : "service__nav-button"} onClick={() => { setCurrentComponent(2) }}>
                                Calendar
                            </div>
                            <div class={currentComponent === 3 ? "service__nav-button active" : "service__nav-button"} onClick={() => { setCurrentComponent(3) }}>
                                Assistants
                            </div>
                            <div class={currentComponent === 4 ? "service__nav-button active" : "service__nav-button"} onClick={() => { setCurrentComponent(4) }}>
                                Account changes
                            </div>
                            <div class={currentComponent === 5 ? "service__nav-button active" : "service__nav-button"} onClick={() => { setCurrentComponent(5) }}>
                                Data editor
                            </div>
                        </div>

                        <div class="service__contents">
                            {React.createElement(BigComponents[currentComponent], {
                                components: currentComponent,
                                handleSearch: handleSearch
                            })}
                        </div>
                    </div>



                    <ServicesEmployeeList currentComponent={currentComponent} employeeList={employeeList}></ServicesEmployeeList>
                    <ServicesCalendarList currentComponent={currentComponent} calendarList={calendarList}></ServicesCalendarList>
                    <ServicesChangesList currentComponent={currentComponent} changesList={changesList}></ServicesChangesList>


                    <Footer />
                </div>


            </div>

        </>
    );
};
export default ServicesPage;
