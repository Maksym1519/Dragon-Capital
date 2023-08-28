import React from "react";
import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import "./useful-info.scss";
import { useRef, useState, useEffect } from "react";
import Header from "../../organisms/Header";
import Footer from "../../organisms/Footer";


import PageTitle from "../../atoms/Headings/PageTitle";

import Text15400С from "../../atoms/Text15400С";

import SearchInput from "../../atoms/Inputs/SearchInput";
import DateInput from "../../atoms/Inputs/DateInput";

import wordIcon from '../../../images/word-icon.svg';
import exelIcon from '../../../images/exel-icon.svg';
import imgFileIcon from '../../../images/img-file-icon.svg';
import outLookIcon from '../../../images/outlook-icon.svg';
import powerPointIcon from '../../../images/powerpoint-icon.svg';
import pdfIcon from '../../../images/pdf-icon.svg';
import fileUnknownIcon from '../../../images/file-unknown-icon.svg';

import FileRow from "../../molecules/Files/FileRow";


import cloudIcon from "../../../images/cloud-icon.svg";
import crossPop from "../../../images/popUp-cross.svg";
import importIcon from "../../../images/import-icon.svg";
import checkIcon from '../../../images/check-icon.svg';

const UsefulInfo = () => {

    const [popUpActive, setPopUpActive] = useState(false);
    const [popUpRequestActive, setPopUpRequestActive] = useState(false);




    const [buttonActive, setButtonActive] = useState([false, false, false, false, false, false, false, false, false, false, false, false, false, false,]);
    const handleButtonClick = (index) => {
        const newActiveItems = buttonActive.map((item, i) => {
            if (i === index) {
                return !item; // Toggle the value
            } else {
                return item; // Keep the value as is
            }
        });
        setButtonActive(newActiveItems);
    };

    return (
        <>
            <Header />
            <div class="p-wrapper">

                <div class="p-wrapper__page-container calendar">



                    <div class="useful-page-head">
                        <PageTitle text="Useful info"></PageTitle>
                        <div class="useful-page-head__upload-button" onClick={() => { setPopUpRequestActive(true) }}>
                            <img src={cloudIcon} alt="" class="useful-page-head__cloud-icon" />
                            Загрузить файл
                        </div>
                    </div>

                    <div class="useful-page-head__search-box">
                        <SearchInput width={520} placeholder="Поиск файла по названию"></SearchInput>
                    </div>

                    <div class="useful-info">
                        <div class="useful-info__container">
                            <div class="useful-info__heading">
                                Примеры контрактов
                            </div>
                            <div class="useful-info__list">
                                <FileRow setPopUpActive={setPopUpActive} img={wordIcon} fileExtension=".docx"></FileRow>
                                <FileRow setPopUpActive={setPopUpActive} img={wordIcon} fileExtension=".docx"></FileRow>
                                <FileRow setPopUpActive={setPopUpActive} img={wordIcon} fileExtension=".docx"></FileRow>
                                <FileRow setPopUpActive={setPopUpActive} img={wordIcon} fileExtension=".docx"></FileRow>
                            </div>
                        </div>
                        <div class="useful-info__container">
                            <div class="useful-info__heading">
                                Презентации
                            </div>
                            <div class="useful-info__list">
                                <FileRow setPopUpActive={setPopUpActive} img={powerPointIcon} fileExtension=".pptx"></FileRow>
                                <FileRow setPopUpActive={setPopUpActive} img={powerPointIcon} fileExtension=".pptx"></FileRow>
                                <FileRow setPopUpActive={setPopUpActive} img={powerPointIcon} fileExtension=".pptx"></FileRow>
                                <FileRow setPopUpActive={setPopUpActive} img={powerPointIcon} fileExtension=".pptx"></FileRow>
                            </div>
                        </div>
                        <div class="useful-info__container">
                            <div class="useful-info__heading">
                                Таблицы
                            </div>
                            <div class="useful-info__list">
                                <FileRow setPopUpActive={setPopUpActive} img={exelIcon} fileExtension=".xlsx"></FileRow>
                                <FileRow setPopUpActive={setPopUpActive} img={exelIcon} fileExtension=".xlsx"></FileRow>
                                <FileRow setPopUpActive={setPopUpActive} img={exelIcon} fileExtension=".xlsx"></FileRow>
                                <FileRow setPopUpActive={setPopUpActive} img={exelIcon} fileExtension=".xlsx"></FileRow>
                            </div>
                        </div>
                    </div>
                    <div class="useful-info bottom">
                        <div class="useful-info__container">
                            <div class="useful-info__heading">
                                General
                            </div>
                            <div class="useful-info__list">
                                <FileRow setPopUpActive={setPopUpActive} img={fileUnknownIcon} fileExtension=".exe"></FileRow>
                                <FileRow setPopUpActive={setPopUpActive} img={pdfIcon} fileExtension=".pdf"></FileRow>
                                <FileRow setPopUpActive={setPopUpActive} img={imgFileIcon} fileExtension=".png"></FileRow>
                                <FileRow setPopUpActive={setPopUpActive} img={exelIcon} fileExtension=".xlsx"></FileRow>
                            </div>
                        </div>
                    </div>



                    <Footer />
                </div>


            </div>

            <div class={popUpActive === true ? " useful-info-popup active" : "useful-info-popup"}>
                <div class="useful-info-popup__box">
                    <img src={crossPop} alt="" class="useful-info-popup__cross" onClick={() => { setPopUpActive(false) }} />
                    <div className="useful-info-popup__title">Удалить файл с портала?</div>
                    <div className="useful-info-popup__buttons">
                        <div className="useful-info-popup__button grey">Отмена</div>
                        <div className="useful-info-popup__button">Удалить</div>
                    </div>
                </div>
            </div>



            <div class={popUpRequestActive === true ? " useful-info-popup second active" : "useful-info-popup second"}>
                <div class="useful-info-popup__box second">
                    <img src={crossPop} alt="" class="useful-info-popup__cross" onClick={() => { setPopUpRequestActive(false) }} />
                    <div class="useful-info-popup__title">Загрузить новый файл</div>
                    <div class="useful-info-popup__import">
                        <div class="useful-info-popup__import-text">Загрузите любой файл, <br /> размером не более 100 Мб</div>
                        <div class="useful-info-popup__choose-file">
                            <img src={importIcon} alt="" class="useful-info-popup__import-icon" />
                            Выбрать файл
                        </div>
                    </div>
                    <div class="useful-info-popup__imported">
                        <img src={wordIcon} alt="" class="useful-info-popup__imported-icon" />
                        <div class="useful-info-popup__imported-text">Corporate template.docx</div>
                        <div class="useful-info-popup__imported-size">1,2 Mb</div>
                    </div>
                    <div class="useful-info-popup__line"></div>
                    <div class="useful-info-popup__heading">Выберите кому будет доступен файл</div>
                    <SearchInput width={422} placeholder="Search by name"></SearchInput>

                    <div class="useful-info-popup__checklist">
                        <div class="useful-info-popup__link" onClick={() => { handleButtonClick(0) }}>
                            <div class={buttonActive[0] === true ? "useful-info-popup__checkbox active" : "useful-info-popup__checkbox"}>
                                <img src={checkIcon} alt="" class="useful-info-popup__check-icon" />
                            </div>
                            <Text15400С text="Всем"></Text15400С>
                        </div>
                        <div class="useful-info-popup__link" onClick={() => { handleButtonClick(1) }}>
                            <div class={buttonActive[1] === true ? "useful-info-popup__checkbox active" : "useful-info-popup__checkbox"}>
                                <img src={checkIcon} alt="" class="useful-info-popup__check-icon" />
                            </div>
                            <Text15400С text="Dragon Capital"></Text15400С>
                        </div>
                        <div class="useful-info-popup__link" onClick={() => { handleButtonClick(2) }}>
                            <div class={buttonActive[2] === true ? "useful-info-popup__checkbox active" : "useful-info-popup__checkbox"}>
                                <img src={checkIcon} alt="" class="useful-info-popup__check-icon" />
                            </div>
                            <Text15400С text="Project"></Text15400С>
                        </div>
                        <div class="useful-info-popup__link" onClick={() => { handleButtonClick(3) }}>
                            <div class={buttonActive[3] === true ? "useful-info-popup__checkbox active" : "useful-info-popup__checkbox"}>
                                <img src={checkIcon} alt="" class="useful-info-popup__check-icon" />
                            </div>
                            <Text15400С text="Project Office"></Text15400С>
                        </div>
                    </div>
                    <div className="useful-info-popup__button">Загрузтить файл</div>
                </div>
            </div>

        </>
    );
};
export default UsefulInfo;
