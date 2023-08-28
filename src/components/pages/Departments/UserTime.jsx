import React from "react";
import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import "./user-time.scss";
import { useRef, useState, useEffect } from "react";
import Header from "../../organisms/Header";
import Footer from "../../organisms/Footer";


import PageTitle from "../../atoms/Headings/PageTitle";

import greenBackArrow from '../../../images/green-back-arrow.svg';
import dropdownArrow from "../../../images/dropdown-arrow-down.svg";

import tableImg from "../../../images/user-table-img.jpg";



const UserTime = () => {


    return (
        <>
            <Header />
            <div class="p-wrapper">

                <div class="p-wrapper__page-container calendar">
                    {/* <img src={dragonBackground} alt="" class="p-wrapper__dragon-background" /> */}

                    <div class="user-time-page-head__back-button">
                        <img src={greenBackArrow} alt="" class="user-time-page-head__green-arrow" />
                        Назад в аккаунт
                    </div>
                    <div class="user-time-page-head">
                        <PageTitle text="Рабочее время сотрудника"></PageTitle>
                        <div class="user-time-page-head__controls">
                            <div class="user-time-page-head__month-text">Месяц:</div>
                            <div class="user-time-page-head__month">
                                Март
                                <img src={dropdownArrow} alt="" class="user-time-page-head__drop-arrow" />
                            </div>
                        </div>
                    </div>

                    <div class="user-time">
                        <div class="user-time__name">Александр Шевченко</div>
                        <div class="user-time__id">Пропуск №3234145</div>
                        <img src={tableImg} alt="" class="user-time__table-img" />
                    </div>

                    



                    <Footer />
                </div>


            </div>



        </>
    );
};
export default UserTime;
