import React from "react";
import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import "./teams.scss";
import { useRef, useState, useEffect } from "react";
import Header from "../../organisms/Header";
import Footer from "../../organisms/Footer";

import Text28700 from "../../atoms/Text28700";
import Button199 from "../../atoms/Buttons/Button199";

import Text17700 from "../../atoms/Text17700";
import Text15400С from "../../atoms/Text15400С";

import PageTitle from "../../atoms/Headings/PageTitle";
import SingleCheckBox from "../../atoms/Checkboxes/SingleCheckbox";
import SearchInput from "../../atoms/Inputs/SearchInput";

import userAddIcon from "../../../images/user-add-icon.svg";
import redCross from "../../../images/red-cross.svg";
import crossPop from "../../../images/popUp-cross.svg";
import dropdownArrow from "../../../images/dropdown-arrow-down.svg";
import checkIcon from '../../../images/check-icon.svg';

import employeeAvatar1 from '../../../images/employee-avatar-small-1.svg';
import employeeAvatar2 from '../../../images/employee-avatar-small-2.svg';
import employeeAvatar3 from '../../../images/employee-avatar-small-3.svg';
import employeeAvatar4 from '../../../images/employee-avatar-small-4.svg';
import employeeAvatar5 from '../../../images/employee-avatar-small-5.svg';
import employeeAvatar6 from '../../../images/employee-avatar-small-6.svg';

const EditTeam = (props) => {
    const [popUpActive, setPopUpActive] = useState(false);
    const [dropsActive, setDropsActive] = useState([false, false, false, false, false, false, false,]);
    const handleDropsClick = (index) => {
        const newActiveItems = dropsActive.map((item, i) => i === index ? !item : false);
        setDropsActive(newActiveItems);
    };
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

                <div class="p-wrapper__page-container floor-plan-container">

                    <PageTitle text="Редагування команди"></PageTitle>

                    <div class="edit-team">
                        <div class="edit-team__general">
                            <Text28700 text="Загальна iнформацiя"></Text28700>
                            <input type="text" class="edit-team__input" placeholder="Назва команди" />
                            <div class="edit-team__color-container">
                                <div class="edit-team__color-text">Обрати колiр для команди</div>
                                <div class="edit-team__color-box">
                                    <div class="edit-team__color-square"></div>
                                    <input type="text" class="edit-team__color-input" placeholder="#FFA011" />
                                </div>
                            </div>
                            <div class="edit-team__check-box">
                                <SingleCheckBox text="Зробити активним"></SingleCheckBox>
                            </div>
                            <div class="edit-team__button">Зберегти</div>
                        </div>

                        <div class="edit-team__employees">
                            <Text28700 text="Члени команди"></Text28700>
                            <div class="edit-team__list">
                                <div class="edit-team__row">
                                    <img src={employeeAvatar1} alt="" class="edit-team__avatar" />
                                    <div class="edit-team__row-name">Alexander Shevchenko</div>
                                    <img src={redCross} alt="" class="edit-team__red-cross" />
                                </div>
                                <div class="edit-team__row">
                                    <img src={employeeAvatar2} alt="" class="edit-team__avatar" />
                                    <div class="edit-team__row-name">Olga Sumska</div>
                                    <img src={redCross} alt="" class="edit-team__red-cross" />
                                </div>
                                <div class="edit-team__row">
                                    <img src={employeeAvatar3} alt="" class="edit-team__avatar" />
                                    <div class="edit-team__row-name">Valeriy Necheporenko</div>
                                    <img src={redCross} alt="" class="edit-team__red-cross" />
                                </div>
                                <div class="edit-team__row">
                                    <img src={employeeAvatar4} alt="" class="edit-team__avatar" />
                                    <div class="edit-team__row-name">Olga Sumska</div>
                                    <img src={redCross} alt="" class="edit-team__red-cross" />
                                </div>
                                <div class="edit-team__row">
                                    <img src={employeeAvatar5} alt="" class="edit-team__avatar" />
                                    <div class="edit-team__row-name">Olga Sumska</div>
                                    <img src={redCross} alt="" class="edit-team__red-cross" />
                                </div>
                                <div class="edit-team__row">
                                    <img src={employeeAvatar6} alt="" class="edit-team__avatar" />
                                    <div class="edit-team__row-name">Valeriy Necheporenko</div>
                                    <img src={redCross} alt="" class="edit-team__red-cross" />
                                </div>
                                <div class="edit-team__row">
                                    <img src={employeeAvatar4} alt="" class="edit-team__avatar" />
                                    <div class="edit-team__row-name">Alexander Shevchenko</div>
                                    <img src={redCross} alt="" class="edit-team__red-cross" />
                                </div>
                                <div class="edit-team__add-emp-button" onClick={() => { setPopUpActive(true) }}>
                                    <img src={userAddIcon} alt="" class="edit-team__user-add-icon" />
                                    Add new user
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>


            </div>


            <div class={popUpActive === true ? "add-employee-popup active" : "add-employee-popup"}>
                <img src={crossPop} alt="" class="add-employee-popup__cross" onClick={() => { setPopUpActive(false) }} />
                <div class="add-employee-popup__title">Додати членiв команди</div>
                <SearchInput placeholder="Search by name"></SearchInput>

                <div class="add-employee-popup__choose">
                    <div class="add-employee-popup__dropdowns">
                        <div class="add-employee-popup__row drop" >
                            <div class="add-employee-popup__preview" onClick={() => { handleDropsClick(0); }}>
                                <Text17700 text="Administration"></Text17700>
                                <img src={dropdownArrow} alt="" class={dropsActive[0] === true ? " add-employee-popup__dropdown-arrow active" : "add-employee-popup__dropdown-arrow"} />
                            </div>
                            <div class={dropsActive[0] === true ? "add-employee-popup__dropdown active" : "add-employee-popup__dropdown"}>
                                <div class="add-employee-popup__link" onClick={() => { handleButtonClick(0) }}>
                                    <div class={buttonActive[0] === true ? "add-employee-popup__checkbox active" : "add-employee-popup__checkbox"}>
                                        <img src={checkIcon} alt="" class="add-employee-popup__check-icon" />
                                    </div>

                                    <img src={employeeAvatar1} alt="" class="add-employee-popup__avatar" />
                                    <Text15400С text="Alexander Shevchenko"></Text15400С>
                                </div>
                                <div class="add-employee-popup__link" onClick={() => { handleButtonClick(1) }}>
                                    <div class={buttonActive[1] === true ? "add-employee-popup__checkbox active" : "add-employee-popup__checkbox"}>
                                        <img src={checkIcon} alt="" class="add-employee-popup__check-icon" />
                                    </div>

                                    <img src={employeeAvatar2} alt="" class="add-employee-popup__avatar" />
                                    <Text15400С text="Natalia Petrenko"></Text15400С>
                                </div>
                                <div class="add-employee-popup__link" onClick={() => { handleButtonClick(2) }}>
                                    <div class={buttonActive[2] === true ? "add-employee-popup__checkbox active" : "add-employee-popup__checkbox"}>
                                        <img src={checkIcon} alt="" class="add-employee-popup__check-icon" />
                                    </div>

                                    <img src={employeeAvatar3} alt="" class="add-employee-popup__avatar" />
                                    <Text15400С text="Olga Sumska"></Text15400С>
                                </div>
                                <div class="add-employee-popup__link" onClick={() => { handleButtonClick(3) }}>
                                    <div class={buttonActive[3] === true ? "add-employee-popup__checkbox active" : "add-employee-popup__checkbox"}>
                                        <img src={checkIcon} alt="" class="add-employee-popup__check-icon" />
                                    </div>

                                    <img src={employeeAvatar4} alt="" class="add-employee-popup__avatar" />
                                    <Text15400С text="Valeriy Necheporenko"></Text15400С>
                                </div>
                                <div class="add-employee-popup__link" onClick={() => { handleButtonClick(4) }}>
                                    <div class={buttonActive[4] === true ? "add-employee-popup__checkbox active" : "add-employee-popup__checkbox"}>
                                        <img src={checkIcon} alt="" class="add-employee-popup__check-icon" />
                                    </div>

                                    <img src={employeeAvatar5} alt="" class="add-employee-popup__avatar" />
                                    <Text15400С text="Alexander Shevchenko"></Text15400С>
                                </div>
                                <div class="add-employee-popup__link" onClick={() => { handleButtonClick(5) }}>
                                    <div class={buttonActive[5] === true ? "add-employee-popup__checkbox active" : "add-employee-popup__checkbox"}>
                                        <img src={checkIcon} alt="" class="add-employee-popup__check-icon" />
                                    </div>

                                    <img src={employeeAvatar6} alt="" class="add-employee-popup__avatar" />
                                    <Text15400С text="Natalia Petrenko"></Text15400С>
                                </div>

                            </div>
                        </div>
                        <div class="add-employee-popup__row drop" >
                            <div class="add-employee-popup__preview" onClick={() => { handleDropsClick(1); }}>
                                <Text17700 text="Back office"></Text17700>
                                <img src={dropdownArrow} alt="" class={dropsActive[1] === true ? " add-employee-popup__dropdown-arrow active" : "add-employee-popup__dropdown-arrow"} />
                            </div>
                            <div class={dropsActive[1] === true ? "add-employee-popup__dropdown active" : "add-employee-popup__dropdown"}>
                                <div class="add-employee-popup__link" onClick={() => { handleButtonClick(0) }}>
                                    <div class={buttonActive[0] === true ? "add-employee-popup__checkbox active" : "add-employee-popup__checkbox"}>
                                        <img src={checkIcon} alt="" class="add-employee-popup__check-icon" />
                                    </div>

                                    <img src={employeeAvatar1} alt="" class="add-employee-popup__avatar" />
                                    <Text15400С text="Alexander Shevchenko"></Text15400С>
                                </div>

                            </div>
                        </div>
                        <div class="add-employee-popup__row drop" >
                            <div class="add-employee-popup__preview" onClick={() => { handleDropsClick(2); }}>
                                <Text17700 text="Complience"></Text17700>
                                <img src={dropdownArrow} alt="" class={dropsActive[2] === true ? " add-employee-popup__dropdown-arrow active" : "add-employee-popup__dropdown-arrow"} />
                            </div>
                            <div class={dropsActive[2] === true ? "add-employee-popup__dropdown active" : "add-employee-popup__dropdown"}>
                                <div class="add-employee-popup__link" onClick={() => { handleButtonClick(0) }}>
                                    <div class={buttonActive[0] === true ? "add-employee-popup__checkbox active" : "add-employee-popup__checkbox"}>
                                        <img src={checkIcon} alt="" class="add-employee-popup__check-icon" />
                                    </div>

                                    <img src={employeeAvatar1} alt="" class="add-employee-popup__avatar" />
                                    <Text15400С text="Alexander Shevchenko"></Text15400С>
                                </div>

                            </div>
                        </div>
                        <div class="add-employee-popup__row drop" >
                            <div class="add-employee-popup__preview" onClick={() => { handleDropsClick(3); }}>
                                <Text17700 text="Custody"></Text17700>
                                <img src={dropdownArrow} alt="" class={dropsActive[3] === true ? " add-employee-popup__dropdown-arrow active" : "add-employee-popup__dropdown-arrow"} />
                            </div>
                            <div class={dropsActive[3] === true ? "add-employee-popup__dropdown active" : "add-employee-popup__dropdown"}>
                                <div class="add-employee-popup__link" onClick={() => { handleButtonClick(0) }}>
                                    <div class={buttonActive[0] === true ? "add-employee-popup__checkbox active" : "add-employee-popup__checkbox"}>
                                        <img src={checkIcon} alt="" class="add-employee-popup__check-icon" />
                                    </div>

                                    <img src={employeeAvatar1} alt="" class="add-employee-popup__avatar" />
                                    <Text15400С text="Alexander Shevchenko"></Text15400С>
                                </div>

                            </div>
                        </div>
                        <div class="add-employee-popup__row drop" >
                            <div class="add-employee-popup__preview" onClick={() => { handleDropsClick(4); }}>
                                <Text17700 text="Dragon Capital Partners"></Text17700>
                                <img src={dropdownArrow} alt="" class={dropsActive[4] === true ? " add-employee-popup__dropdown-arrow active" : "add-employee-popup__dropdown-arrow"} />
                            </div>
                            <div class={dropsActive[4] === true ? "add-employee-popup__dropdown active" : "add-employee-popup__dropdown"}>
                                <div class="add-employee-popup__link" onClick={() => { handleButtonClick(0) }}>
                                    <div class={buttonActive[0] === true ? "add-employee-popup__checkbox active" : "add-employee-popup__checkbox"}>
                                        <img src={checkIcon} alt="" class="add-employee-popup__check-icon" />
                                    </div>

                                    <img src={employeeAvatar1} alt="" class="add-employee-popup__avatar" />
                                    <Text15400С text="Alexander Shevchenko"></Text15400С>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <button class="add-employee-popup__button">Додати</button>
            </div>

        </>
    );
};
export default EditTeam;
