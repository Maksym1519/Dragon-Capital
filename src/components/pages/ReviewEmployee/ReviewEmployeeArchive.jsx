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

const ReviewEmployeeArchive = () => {

    return (
        <>
            <Header />
            <div class="p-wrapper">

                <div class="p-wrapper__page-container calendar">

                    <PageTitle text="Архів рев’ю"></PageTitle>

                    <ReviewSmallNav marginTop={51}></ReviewSmallNav>

                    <ReviewHead marginTop={45}></ReviewHead>

                    
                    
                    <div className="review-emp-archive">
                        <div className="review-emp-archive__box">
                            <div className="review-emp-archive__heading">1Н2020</div>
                            <div className="review-emp-archive__list">
                                <ReviewRow avatar1={employeeAvatar1} avatar2={employeeAvatar3} avatar3={employeeAvatar4} name1={"Alexander Shevchenko"} name2={"Светлана Жулявцева"} name3={"Николай Адокица"} button={true}></ReviewRow>
                                <ReviewRow avatar1={employeeAvatar3} avatar2={employeeAvatar1} avatar3={employeeAvatar4} name1={"Светлана Жулявцева"} name2={"Alexander Shevchenko"} name3={"Николай Адокица"} button={false}></ReviewRow>
                                <ReviewRow avatar1={employeeAvatar3} avatar2={employeeAvatar1} avatar3={employeeAvatar4} name1={"Светлана Жулявцева"} name2={"Alexander Shevchenko"} name3={"Николай Адокица"} button={false}></ReviewRow>
                            </div>
                        </div>
                        <div className="review-emp-archive__box second">
                            <div className="review-emp-archive__heading">2Н2019</div>
                            <div className="review-emp-archive__list">
                                <ReviewRow avatar1={employeeAvatar1} avatar2={employeeAvatar3} avatar3={employeeAvatar4} name1={"Alexander Shevchenko"} name2={"Светлана Жулявцева"} name3={"Николай Адокица"}button={true}></ReviewRow>
                            </div>
                        </div>
                        <div className="review-emp-archive__box">
                            <div className="review-emp-archive__heading">1Н2019</div>
                            <div className="review-emp-archive__list">
                                <ReviewRow avatar1={employeeAvatar1} avatar2={employeeAvatar3} avatar3={employeeAvatar4} name1={"Alexander Shevchenko"} name2={"Светлана Жулявцева"} name3={"Николай Адокица"}button={true}></ReviewRow>
                            </div>
                        </div>
                        <div className="review-emp-archive__box">
                            <div className="review-emp-archive__heading">2Н2018</div>
                            <div className="review-emp-archive__list">
                                <ReviewRow avatar1={employeeAvatar1} avatar2={employeeAvatar3} avatar3={employeeAvatar4} name1={"Alexander Shevchenko"} name2={"Светлана Жулявцева"} name3={"Николай Адокица"}button={true}></ReviewRow>
                            </div>
                        </div>
                        <div className="review-emp-archive__box">
                            <div className="review-emp-archive__heading">1Н2018</div>
                            <div className="review-emp-archive__list">
                                <ReviewRow avatar1={employeeAvatar1} avatar2={employeeAvatar3} avatar3={employeeAvatar4} name1={"Alexander Shevchenko"} name2={"Светлана Жулявцева"} name3={"Николай Адокица"}button={true}></ReviewRow>
                            </div>
                        </div>
                        <div className="review-emp-archive__box">
                            <div className="review-emp-archive__heading">2Н2017</div>
                            <div className="review-emp-archive__list">
                                <ReviewRow avatar1={employeeAvatar1} avatar2={employeeAvatar3} avatar3={employeeAvatar4} name1={"Alexander Shevchenko"} name2={"Светлана Жулявцева"} name3={"Николай Адокица"}button={true}></ReviewRow>
                            </div>
                        </div>
                    </div>

                    <Footer />
                </div>


            </div>

        </>
    );
};
export default ReviewEmployeeArchive;
