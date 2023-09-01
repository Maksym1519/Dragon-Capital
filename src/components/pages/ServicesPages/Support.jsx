import React from "react";
import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import "./services.scss";
import { useRef, useState, useEffect } from "react";
import Header from "../../organisms/Header";
import Footer from "../../organisms/Footer";
import PageTitle from "../../atoms/Headings/PageTitle";

import SearchInput from "../../atoms/Inputs/SearchInput";

import SupportNotFakeTab from "../../organisms/ServicesComponents/SupportNotFakeTab";
import SupportFakeTab2 from "../../organisms/ServicesComponents/SupportFakeTab2";
import SupportFakeTab3 from "../../organisms/ServicesComponents/SupportFakeTab3";




const BigComponents = [SupportNotFakeTab, SupportFakeTab2, SupportFakeTab3];


const SupportPage = () => {
    const [currentComponent, setCurrentComponent] = useState(0);
    return (
        <>
            <Header />
            <div class="p-wrapper">

                <div class="p-wrapper__page-container calendar">

                    <PageTitle text="Support"></PageTitle>

                    <div class="support">

                        <div class="support__nav">
                            <div class="support__search-input">
                                <SearchInput placeholder="Найдите ответ" width={355}></SearchInput>
                            </div>
                            <div class={currentComponent === 0 ? "support__nav-button active" : "support__nav-button"} onClick={() => { setCurrentComponent(0) }}>
                                Календарь
                            </div>
                            <div class={currentComponent === 1 ? "support__nav-button active" : "support__nav-button"} onClick={() => { setCurrentComponent(1) }}>
                                Директория
                            </div>
                            <div class={currentComponent === 2 ? "support__nav-button active" : "support__nav-button"} onClick={() => { setCurrentComponent(2) }}>
                                Страховка
                            </div>
                            <div class={currentComponent === 3 ? "support__nav-button active" : "support__nav-button"} onClick={() => { setCurrentComponent(0) }}>
                                Мобильная связь
                            </div>
                            <div class={currentComponent === 4 ? "support__nav-button active" : "support__nav-button"} onClick={() => { setCurrentComponent(1) }}>
                                Страховка
                            </div>
                            <div class={currentComponent === 5 ? "support__nav-button active" : "support__nav-button"} onClick={() => { setCurrentComponent(2) }}>
                                Мобильная связь
                            </div>
                            <div class={currentComponent === 6 ? "support__nav-button active" : "support__nav-button"} onClick={() => { setCurrentComponent(2) }}>
                                Директория
                            </div>
                        </div>

                        <div class="support__contents">
                            {React.createElement(BigComponents[currentComponent], {

                            })}
                        </div>
                    </div>







                    <Footer />
                </div>


            </div>

        </>
    );
};
export default SupportPage;
