import React from "react";
import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import "./review-employee.scss";
import { useRef, useState, useEffect } from "react";
import Header from "../../organisms/Header";
import Footer from "../../organisms/Footer";
import PageTitle from "../../atoms/Headings/PageTitle";

import GreenDynamicButton from "../../atoms/Buttons/GreenDynamicButton";
import GreyDynamicButton from "../../atoms/Buttons/GreyDynamicButton";
import ReviewSmallNav from "../../organisms/Review/ReviewSmallNav";
import ReviewHead from "../../organisms/Review/ReviewHead";
import ReviewRow from "../../organisms/Review/ReviewRow";

import greenBackArrow from '../../../images/green-back-arrow.svg';
import toolBar from '../../../images/toolbar-img.png';

const Anketa = () => {

    return (
        <>
            <Header />
            <div class="p-wrapper">

                <div class="p-wrapper__page-container calendar">

                    <div class="review-emp-view-head__back-button">
                        <img src={greenBackArrow} alt="" class="review-emp-view-head__green-arrow" />
                        Назад
                    </div>

                    <PageTitle text="Анкета рев’ю 2Н2020"></PageTitle>

                    <div class="anketa-status">
                        Статус  <div class="anketa-status__status">Необхідно заповнити</div>
                    </div>

                    <div class="anketa">
                        <div class="anketa__content">
                            <div class="anketa__question-container">
                                <div class="anketa__question-title">
                                    Питання 1
                                </div>
                                <div class="anketa__question-undertitle">
                                    Опишите ваши достижения за последние пол года
                                </div>
                                <div class="anketa__answer-container">
                                    <div class="anketa__answer-heading">
                                        Ваша відповідь
                                    </div>
                                    <img src={toolBar} alt="" class="anketa__answer-toolbar" />
                                    <div class="anketa__answer-text-wrapper">
                                        <div class="anketa__answer-text">
                                            Прийміть до уваги - ми працювали з дому, а тому...
                                        </div>
                                        <div class="anketa__answer-text">
                                            <span>Увага!</span> Після завершення індивідуальних форм, ви маєте відправити її вашому керівнику.
                                        </div>
                                        <div class="anketa__answer-text link">
                                            https://corp.dragon-capital.com/
                                        </div>
                                    </div>
                                </div>
                                <div class="anketa__answer-date-container">
                                    <div class="anketa__answer-date-text">
                                        Останнє оновлення
                                    </div>
                                    <div class="anketa__answer-dates">
                                        21.04.2019 <div>17:38</div>
                                    </div>
                                </div>
                            </div>
                            <div class="anketa__chat-container">
                                <div class="anketa__message">
                                    <div class="anketa__message-info">
                                        <div class="anketa__message-sender">Петро</div>
                                        <div class="anketa__answer-dates">
                                            21.04.2019 <div>17:38</div>
                                        </div>
                                    </div>
                                    <div class="anketa__message-text-blob green">
                                    Не забудь упомянуть о том проекте строительства нового моста, где ты помог оптимизировать стоимость на 40%.
                                    </div>
                                    <div class="anketa__message-answer-button">Відповісти</div>
                                </div>
                                <div class="anketa__message my">
                                    <div class="anketa__message-info">
                                        <div class="anketa__message-sender">Ви</div>
                                        <div class="anketa__answer-dates">
                                            21.04.2019 <div>17:38</div>
                                        </div>
                                    </div>
                                    <div class="anketa__message-text-blob white">Стоит ли более реально расписать этот проект?</div>
                                </div>
                            </div>
                        </div>
                        <div class="anketa__content">
                            <div class="anketa__question-container">
                                <div class="anketa__question-title">
                                    Питання 1
                                </div>
                                <div class="anketa__question-undertitle">
                                    Опишите ваши достижения за последние пол года
                                </div>
                                <div class="anketa__answer-container">
                                    <div class="anketa__answer-heading">
                                        Ваша відповідь
                                    </div>
                                    <img src={toolBar} alt="" class="anketa__answer-toolbar" />
                                    <div class="anketa__answer-text-wrapper">
                                        <div class="anketa__answer-text">
                                            Прийміть до уваги - ми працювали з дому, а тому...
                                        </div>
                                        <div class="anketa__answer-text">
                                            <span>Увага!</span> Після завершення індивідуальних форм, ви маєте відправити її вашому керівнику.
                                        </div>
                                        <div class="anketa__answer-text link">
                                            https://corp.dragon-capital.com/
                                        </div>
                                    </div>
                                </div>
                                <div class="anketa__answer-date-container">
                                    <div class="anketa__answer-date-text">
                                        Останнє оновлення
                                    </div>
                                    <div class="anketa__answer-dates">
                                        21.04.2019 <div>17:38</div>
                                    </div>
                                </div>
                            </div>
                            <div class="anketa__chat-container">
                                <div class="anketa__message">
                                    <div class="anketa__message-info">
                                        <div class="anketa__message-sender">Петро</div>
                                        <div class="anketa__answer-dates">
                                            21.04.2019 <div>17:38</div>
                                        </div>
                                    </div>
                                    <div class="anketa__message-text-blob green">
                                    Не забудь упомянуть о том проекте строительства нового моста, где ты помог оптимизировать стоимость на 40%.
                                    </div>
                                    <div class="anketa__message-answer-button">Відповісти</div>
                                </div>
                                <div class="anketa__message my">
                                    <div class="anketa__message-info">
                                        <div class="anketa__message-sender">Ви</div>
                                        <div class="anketa__answer-dates">
                                            21.04.2019 <div>17:38</div>
                                        </div>
                                    </div>
                                    <div class="anketa__message-text-blob white">Стоит ли более реально расписать этот проект?</div>
                                </div>
                            </div>
                        </div>
                        <div class="anketa__content">
                            <div class="anketa__question-container">
                                <div class="anketa__question-title">
                                    Питання 1
                                </div>
                                <div class="anketa__question-undertitle">
                                    Опишите ваши достижения за последние пол года
                                </div>
                                <div class="anketa__answer-container">
                                    <div class="anketa__answer-heading">
                                        Ваша відповідь
                                    </div>
                                    <img src={toolBar} alt="" class="anketa__answer-toolbar" />
                                    <div class="anketa__answer-text-wrapper">
                                        <div class="anketa__answer-text">
                                            Прийміть до уваги - ми працювали з дому, а тому...
                                        </div>
                                        <div class="anketa__answer-text">
                                            <span>Увага!</span> Після завершення індивідуальних форм, ви маєте відправити її вашому керівнику.
                                        </div>
                                        <div class="anketa__answer-text link">
                                            https://corp.dragon-capital.com/
                                        </div>
                                    </div>
                                </div>
                                <div class="anketa__answer-date-container">
                                    <div class="anketa__answer-date-text">
                                        Останнє оновлення
                                    </div>
                                    <div class="anketa__answer-dates">
                                        21.04.2019 <div>17:38</div>
                                    </div>
                                </div>
                            </div>
                            <div class="anketa__chat-container">
                                <div class="anketa__message">
                                    <div class="anketa__message-info">
                                        <div class="anketa__message-sender">Петро</div>
                                        <div class="anketa__answer-dates">
                                            21.04.2019 <div>17:38</div>
                                        </div>
                                    </div>
                                    <div class="anketa__message-text-blob green">
                                    Не забудь упомянуть о том проекте строительства нового моста, где ты помог оптимизировать стоимость на 40%.
                                    </div>
                                    <div class="anketa__message-answer-button">Відповісти</div>
                                </div>
                                <div class="anketa__message my">
                                    <div class="anketa__message-info">
                                        <div class="anketa__message-sender">Ви</div>
                                        <div class="anketa__answer-dates">
                                            21.04.2019 <div>17:38</div>
                                        </div>
                                    </div>
                                    <div class="anketa__message-text-blob white">Стоит ли более реально расписать этот проект?</div>
                                </div>
                            </div>
                        </div>

                        <div class="anketa__buttons">
                            <GreenDynamicButton text="Відправити на рев’ю" width={218}></GreenDynamicButton>
                            <GreyDynamicButton text="Зберегти та НЕ відправляти" width={244}></GreyDynamicButton>
                        </div>
                    </div>




                    <Footer />
                </div>


            </div>

        </>
    );
};
export default Anketa;
