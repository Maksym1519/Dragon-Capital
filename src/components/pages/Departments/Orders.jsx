import React from "react";
import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import "./orders.scss";
import { useRef, useState, useEffect } from "react";
import Header from "../../organisms/Header";
import Footer from "../../organisms/Footer";


import PageTitle from "../../atoms/Headings/PageTitle";

import SearchInput from "../../atoms/Inputs/SearchInput";
import DateInput from "../../atoms/Inputs/DateInput";

import dropdownArrow from "../../../images/dropdown-arrow-down.svg";
import exportIcon from "../../../images/export-icon.svg";
import editIcon from "../../../images/edit-icon.svg";
import redCross from "../../../images/red-cross.svg";

import employeeAvatar1 from '../../../images/employee-avatar-small-1.svg';
import employeeAvatar2 from '../../../images/employee-avatar-small-2.svg';
import employeeAvatar3 from '../../../images/employee-avatar-small-3.svg';
import employeeAvatar4 from '../../../images/employee-avatar-small-4.svg';
import employeeAvatar5 from '../../../images/employee-avatar-small-5.svg';
import employeeAvatar6 from '../../../images/employee-avatar-small-6.svg';

import applicationAvatar from '../../../images/application-avatar.png';


const Orders = () => {


    return (
        <>
            <Header />
            <div class="p-wrapper">

                <div class="p-wrapper__page-container calendar">
                    {/* <img src={dragonBackground} alt="" class="p-wrapper__dragon-background" /> */}


                    <div class="orders-page-head">
                        <PageTitle text="Список заявок"></PageTitle>
                        <div class="orders-page-head__controls">
                            <div class="orders-page-head__month-text">Месяц:</div>
                            <div class="orders-page-head__month">
                                Март
                                <img src={dropdownArrow} alt="" class="orders-page-head__drop-arrow" />
                            </div>
                            <div class="orders-page-head__show-button">Показать все</div>
                            <button class="orders-page-head__export-button">
                                <img src={exportIcon} alt="" class="orders-page-head__export-icon" />
                                Export data
                            </button>
                        </div>
                    </div>

                    <div class="orders-search">
                        <SearchInput width={778} placeholder="Поиск по таблице"></SearchInput>
                        <div class="orders-search__date-container">
                            <DateInput width={114} placeholder="С даты"></DateInput>
                            <div class="orders-search__dash"></div>
                            <DateInput width={113} placeholder="По дату"></DateInput>
                        </div>
                    </div>


                    <div class="orders">

                        <div class="orders__left">
                            <div class="orders-head">
                                <div class="orders-head__heading first">Тип заявки</div>
                                <div class="orders-head__heading second">№</div>
                                <div class="orders-head__heading third">Дней</div>
                                <div class="orders-head__heading fourth">Сотрудник</div>
                                <div class="orders-head__heading fifth">Статус</div>
                            </div>

                            <div class="orders-list">

                                <div class="orders-list__row dark-grey">
                                    <div class="orders-list__color-tap orange"></div>
                                    <div class="orders-list__row-name">Vacation</div>
                                    <div class="orders-list__row-number">3777</div>
                                    <div class="orders-list__days">7,5</div>
                                    <div class="orders-list__employee">
                                        <img src={employeeAvatar2} alt="" class="orders-list__employee-avatar" />
                                        Olga Sumska
                                    </div>
                                    <div class="orders-list__status new">Новая</div>
                                </div>

                                <div class="orders-list__row  white">
                                    <div class="orders-list__color-tap pink"></div>
                                    <div class="orders-list__row-name">Study leave</div>
                                    <div class="orders-list__row-number">3777</div>
                                    <div class="orders-list__days">7,5</div>
                                    <div class="orders-list__employee">
                                        <img src={employeeAvatar3} alt="" class="orders-list__employee-avatar" />
                                        Natalia Petrenko
                                    </div>
                                    <div class="orders-list__status new-yellow">Новая</div>
                                </div>

                                <div class="orders-list__row white">
                                    <div class="orders-list__color-tap azure"></div>
                                    <div class="orders-list__row-name">Work on holiday</div>
                                    <div class="orders-list__row-number">3777</div>
                                    <div class="orders-list__days">7,5</div>
                                    <div class="orders-list__employee">
                                        <img src={employeeAvatar4} alt="" class="orders-list__employee-avatar" />
                                        Valeriy Necheporenko
                                    </div>
                                    <div class="orders-list__status new-yellow">Новая</div>
                                </div>

                                <div class="orders-list__row grey">
                                    <div class="orders-list__color-tap green"></div>
                                    <div class="orders-list__row-name">Business trip</div>
                                    <div class="orders-list__row-number">3777</div>
                                    <div class="orders-list__days">7,5</div>
                                    <div class="orders-list__employee">
                                        <img src={employeeAvatar1} alt="" class="orders-list__employee-avatar" />
                                        Alexander Shevchenko
                                    </div>
                                    <div class="orders-list__status completed">Утверждено Head`ом</div>
                                </div>

                                <div class="orders-list__row grey">
                                    <div class="orders-list__color-tap blue"></div>
                                    <div class="orders-list__row-name">Sick leave</div>
                                    <div class="orders-list__row-number">3777</div>
                                    <div class="orders-list__days">7,5</div>
                                    <div class="orders-list__employee">
                                        <img src={employeeAvatar4} alt="" class="orders-list__employee-avatar" />
                                        Valeriy Necheporenko
                                    </div>
                                    <div class="orders-list__status cancelled">Удалено</div>
                                </div>
                                <div class="orders-list__row grey">
                                    <div class="orders-list__color-tap green"></div>
                                    <div class="orders-list__row-name">Business trip</div>
                                    <div class="orders-list__row-number">3777</div>
                                    <div class="orders-list__days">7,5</div>
                                    <div class="orders-list__employee">
                                        <img src={employeeAvatar1} alt="" class="orders-list__employee-avatar" />
                                        Alexander Shevchenko
                                    </div>
                                    <div class="orders-list__status completed">Утверждено HR`ом</div>
                                </div>
                                <div class="orders-list__row grey">
                                    <div class="orders-list__color-tap azure"></div>
                                    <div class="orders-list__row-name">Work on holiday</div>
                                    <div class="orders-list__row-number">3777</div>
                                    <div class="orders-list__days">7,5</div>
                                    <div class="orders-list__employee">
                                        <img src={employeeAvatar4} alt="" class="orders-list__employee-avatar" />
                                        Valeriy Necheporenko
                                    </div>
                                    <div class="orders-list__status completed">Утверждено HR`ом</div>
                                </div>
                                <div class="orders-list__row grey">
                                    <div class="orders-list__color-tap orange"></div>
                                    <div class="orders-list__row-name">Vacation</div>
                                    <div class="orders-list__row-number">3777</div>
                                    <div class="orders-list__days">7,5</div>
                                    <div class="orders-list__employee">
                                        <img src={employeeAvatar2} alt="" class="orders-list__employee-avatar" />
                                        Olga Sumska
                                    </div>
                                    <div class="orders-list__status cancelled">Удалено</div>
                                </div>
                                <div class="orders-list__row grey">
                                    <div class="orders-list__color-tap blue"></div>
                                    <div class="orders-list__row-name">Sick leave</div>
                                    <div class="orders-list__row-number">3777</div>
                                    <div class="orders-list__days">7,5</div>
                                    <div class="orders-list__employee">
                                        <img src={employeeAvatar4} alt="" class="orders-list__employee-avatar" />
                                        Valeriy Necheporenko
                                    </div>
                                    <div class="orders-list__status cancelled">Отказано</div>
                                </div>
                                <div class="orders-list__row grey">
                                    <div class="orders-list__color-tap pink"></div>
                                    <div class="orders-list__row-name">Study leave</div>
                                    <div class="orders-list__row-number">3777</div>
                                    <div class="orders-list__days">7,5</div>
                                    <div class="orders-list__employee">
                                        <img src={employeeAvatar3} alt="" class="orders-list__employee-avatar" />
                                        Natalia Petrenko
                                    </div>
                                    <div class="orders-list__status completed">Утверждено HR`ом</div>
                                </div>

                            </div>

                            <button className="orders__show-button">Show more</button>
                        </div>

                        <div class="orders__application">
                            <div class="orders-application">
                                <div class="orders-application__head">
                                    <div class="orders-application__title">Заявка №3777</div>
                                    <div class="orders-application__status">Утверждено<br /> Head`ом</div>
                                </div>
                                <div class="orders-application__line"></div>
                                <div class="orders-application__upper">
                                    <img src={applicationAvatar} alt="" class="orders-application__avatar" />
                                    <div class="orders-application__texts">
                                        <div class="orders-application__name">Alexander Shevchenko</div>
                                        <div class="orders-application__partners">Dragon Capital Partners</div>
                                        <div class="orders-application__show-button">Показать контакты</div>
                                    </div>
                                </div>
                                <div class="orders-application__line mid"></div>
                                <div class="orders-application__stats">
                                    <div class="orders-application__row">
                                        <div class="orders-application__row-name">
                                            Дата заявки
                                        </div>
                                        <div class="orders-application__row-value">
                                            <div class="orders-application__row-value-content">
                                                10.04.2019    10:23
                                            </div>
                                        </div>
                                    </div>
                                    <div class="orders-application__row">
                                        <div class="orders-application__row-name">
                                            Ответ на заявку
                                        </div>
                                        <div class="orders-application__row-value">
                                            <div class="orders-application__row-value-content">
                                                11.04.2019    13:17
                                            </div>
                                        </div>
                                    </div>
                                    <div class="orders-application__row">
                                        <div class="orders-application__row-name">
                                            Проверено
                                        </div>
                                        <div class="orders-application__row-value">
                                            <div class="orders-application__row-value-content">
                                                Ольга Шевченко
                                            </div>
                                        </div>
                                    </div>
                                    <div class="orders-application__row">
                                        <div class="orders-application__row-name">
                                            Тип заявки
                                        </div>
                                        <div class="orders-application__row-value">
                                            <div class="orders-application__row-value-content">
                                                Отпуск
                                            </div>
                                        </div>
                                    </div>
                                    <div class="orders-application__row">
                                        <div class="orders-application__row-name">
                                            Дней
                                        </div>
                                        <div class="orders-application__row-value">
                                            <div class="orders-application__row-value-content">
                                                3,5
                                            </div>
                                        </div>
                                    </div>
                                    <div class="orders-application__row">
                                        <div class="orders-application__row-name">
                                            Даты
                                        </div>
                                        <div class="orders-application__row-value">
                                            <div class="orders-application__row-value-content">10.04.2019</div>
                                            <div class="orders-application__row-value-content">11.04.2019</div>
                                            <div class="orders-application__row-value-content">12.04.2019</div>
                                            <div class="orders-application__row-value-content">13.04.2019</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="orders-application__comment">
                                    <div class="orders-application__comment-heading">Комментарий</div>
                                    <div class="orders-application__comment-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec odio eros, ultricies nec nunc at, cursus venenatis libero. Morbi tristique sed lacus in fringilla.</div>
                                </div>
                                <div class="orders-application__line"></div>
                                <div class="orders-application__buttons">
                                    <button class="orders-application__button denie">Отказать</button>
                                    <button class="orders-application__button confirm">Принять запрос</button>
                                </div>
                                <div class="orders-application__buttons">
                                    <button class="orders-application__button delete">
                                        <img src={redCross} alt="" class="orders-application__red-cross" />
                                        Удалить запрос
                                    </button>
                                    <button class="orders-application__button edit">
                                        <img src={editIcon} alt="" class="orders-application__edit-icon" />
                                        Редактировать
                                    </button>

                                </div>
                            </div>
                        </div>

                    </div>

                    <Footer />
                </div>


            </div>



        </>
    );
};
export default Orders;
