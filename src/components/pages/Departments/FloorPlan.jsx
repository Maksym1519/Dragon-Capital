import React from "react";
import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import "./floor-plan.scss";
import { useRef, useState, useEffect } from "react";
import Header from "../../organisms/Header";
import Footer from "../../organisms/Footer";



import PageTitle from "../../atoms/Headings/PageTitle";

import WhiteWithGreyBorderDrop from "../../molecules/Dropdowns/WhiteWithGreyBorderDrop";

import FloorPlanEmployee from "../../organisms/FloorPlan/FloorPlanEmployee";
import FloorPlanSetEmployee from "../../organisms/FloorPlan/FloorPlanSetEmployee";
import FloorPlanMeet from "../../organisms/FloorPlan/FloorPlanMeet";

import crossPop from "../../../images/popUp-cross.svg";
import floorPlanImg from '../../../images/floor-plan-main-img.png';


const BigComponents = [FloorPlanEmployee, FloorPlanSetEmployee, FloorPlanMeet];

const FloorPlan = (props) => {
    const [currentComponent, setCurrentComponent] = useState(0);
    const [popUpActive, setPopUpActive] = useState(false);
    return (
        <>
            <Header />
            <div class="p-wrapper">

                <div class="p-wrapper__page-container floor-plan-container">

                    <PageTitle text="Рассадка сотрудников"></PageTitle>

                    <div class="floor-drop">
                        <div class="floor-drop__text">Выберите этаж</div>
                        <WhiteWithGreyBorderDrop background='#FFFFFF' width={150} text1="6 этаж" text={["5 этаж", "4 этаж", "3 этаж", "2 этаж", "1 этаж"]}></WhiteWithGreyBorderDrop>
                    </div>

                    <div class="floor-info">
                        <div class="floor-info__box">
                            <div class="floor-info__dot green"></div>
                            <div class="floor-info__text">В офисе</div>
                        </div>
                        <div class="floor-info__box">
                            <div class="floor-info__dot red"></div>
                            <div class="floor-info__text">Отсутствует</div>
                        </div>
                        <div class="floor-info__box">
                            <div class="floor-info__dot blue"></div>
                            <div class="floor-info__text">Свободное место</div>
                        </div>
                    </div>

                    <div class="floor-plan">
                        <div class="floor-plan__image-wrapper">
                            <div class="floor-plan__link to-emp" onClick={() => { setCurrentComponent(0) }}></div>
                            <div class="floor-plan__link to-set-emp" onClick={() => { setCurrentComponent(1) }}></div>
                            <div class="floor-plan__link to-meet" onClick={() => { setCurrentComponent(2) }}></div>
                            <img src={floorPlanImg} alt="" class="floor-plan__main-img" />
                        </div>

                        {React.createElement(BigComponents[currentComponent], {
                            setPopUpActive: setPopUpActive,
                        })}
                    </div>


                    <Footer />
                </div>


            </div>




            <div class={popUpActive === true ? " floor-plan-popup active" : "floor-plan-popup"}>
                <div class="floor-plan-popup__box">
                    <img src={crossPop} alt="" class="floor-plan-popup__cross" onClick={() => { setPopUpActive(false) }} />
                    <div class="floor-plan-popup__title">Как забронировать переговорную</div>
                    <div class="floor-plan-popup__texts">
                        <div class="floor-plan-popup__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </div>
                        <div class="floor-plan-popup__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </div>
                    </div>
                    <div class="floor-plan-popup__heading">Телефон ресепшн:</div>
                    <div class="floor-plan-popup__number">
                    +38 044 123 34 45
                    </div>
                    <div class="floor-plan-popup__number">
                        304
                        <div class="floor-plan-popup__number-type">(внутренний)</div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default FloorPlan;
