import React from "react";
import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import "./review-employee.scss";
import { useRef, useState, useEffect } from "react";
import Header from "../../organisms/Header";
import Footer from "../../organisms/Footer";
import PageTitle from "../../atoms/Headings/PageTitle";

import GreenDynamicButton from "../../atoms/Buttons/GreenDynamicButton";
import ReviewSmallNav from "../../organisms/Review/ReviewSmallNav";
import ReviewHead from "../../organisms/Review/ReviewHead";
import ReviewRow from "../../organisms/Review/ReviewRow";

import greenBackArrow from '../../../images/green-back-arrow.svg';

import employeeAvatar1 from '../../../images/employee-avatar-small-1.svg';
import employeeAvatar2 from '../../../images/employee-avatar-small-2.svg';
import employeeAvatar3 from '../../../images/employee-avatar-small-3.svg';
import employeeAvatar4 from '../../../images/employee-avatar-small-4.svg';
import employeeAvatar5 from '../../../images/employee-avatar-small-5.svg';
import employeeAvatar6 from '../../../images/employee-avatar-small-6.svg';

const ReviewEmployeeView = () => {

    return (
        <>
            <Header />
            <div class="p-wrapper">

                <div class="p-wrapper__page-container calendar">

                    <div class="review-emp-view-head__back-button">
                        <img src={greenBackArrow} alt="" class="review-emp-view-head__green-arrow" />
                        Назад
                    </div>

                    <PageTitle text="Рев’ю 1H2019"></PageTitle>


                    <ReviewSmallNav marginTop={38}></ReviewSmallNav>

                    <ReviewHead marginTop={57}></ReviewHead>

                    <div className="review-emp-view-rows">
                        <ReviewRow avatar1={employeeAvatar1} avatar2={employeeAvatar3} avatar3={employeeAvatar4} name1={"Alexander Shevchenko"} name2={"Светлана Жулявцева"} name3={"Николай Адокица"} button={true}></ReviewRow>
                    </div>


                    <Footer />
                </div>


            </div>

        </>
    );
};
export default ReviewEmployeeView;
