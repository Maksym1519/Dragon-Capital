import React from "react";
import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import "./review-employee.scss";
import { useRef, useState, useEffect } from "react";
import Header from "../../organisms/Header";
import Footer from "../../organisms/Footer";
import PageTitle from "../../atoms/Headings/PageTitle";

import GreenDynamicButton from "../../atoms/Buttons/GreenDynamicButton";

const ReviewEmployeeMain = () => {

    return (
        <>
            <Header />
            <div class="p-wrapper">

                <div class="p-wrapper__page-container calendar">



                    <div class="review-emp-main-head">
                        <PageTitle text="Ревью"></PageTitle>
                        <div className="review-emp-main-head__button">
                            <GreenDynamicButton text="Розпочати нове рев’ю" width={211}></GreenDynamicButton>
                        </div>
                    </div>

                    <div class="review-list">
                        <div class="review-list__item">

                            <div class="review-list__text">2H2020</div>
                            <div class="review-list__status">Активно</div>
                        </div>
                        <div class="review-list__item">

                            <div class="review-list__text">2H2018</div>
                            <div class="review-list__status">Активно</div>
                        </div>
                        <div class="review-list__item">

                            <div class="review-list__text">1H2018</div>
                            <div class="review-list__status">Активно</div>
                        </div>
                        <div class="review-list__item">

                            <div class="review-list__text">2H2017</div>
                            <div class="review-list__status">Активно</div>
                        </div>
                        <div class="review-list__item">

                            <div class="review-list__text">1H2017</div>
                            <div class="review-list__status">Активно</div>
                        </div>
                        <div class="review-list__item">

                            <div class="review-list__text">2H2016</div>
                            <div class="review-list__status">Активно</div>
                        </div>
                        <div class="review-list__item">

                            <div class="review-list__text">1H2016</div>
                            <div class="review-list__status">Активно</div>
                        </div>
                        <div class="review-list__item">

                            <div class="review-list__text">2H2015</div>
                            <div class="review-list__status">Активно</div>
                        </div>
                        <div class="review-list__item">

                            <div class="review-list__text">1H2015</div>
                            <div class="review-list__status">Активно</div>
                        </div>
                        <div class="review-list__item">

                            <div class="review-list__text">2H2014</div>
                            <div class="review-list__status">Активно</div>
                        </div>
                        <div class="review-list__item">

                            <div class="review-list__text">1H2014</div>
                            <div class="review-list__status">Активно</div>
                        </div>
                    </div>







                    <Footer />
                </div>


            </div>

        </>
    );
};
export default ReviewEmployeeMain;
