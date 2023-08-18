import React from "react";
import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import "./departments.scss";
import { useRef, useState, useEffect } from "react";
import Header from "../../organisms/Header";
import Footer from "../../organisms/Footer";

import Text15400С from "../../atoms/Text15400С";
import Text17700 from "../../atoms/Text17700";

import PageTitle from "../../atoms/PageTitle";

import WhiteWithGreyBorderDrop from "../../molecules/Dropdowns/WhiteWithGreyBorderDrop";


import plusIcon from "../../../images/plus-icon.svg";
import dropdownArrow from "../../../images/dropdown-arrow-down.svg";
import dragonBackground from "../../../images/dragon-background.png";
import greenPencilIcon from "../../../images/green-pencil-icon.svg";
import crossPop from "../../../images/popUp-cross.svg";
import checkIcon from "../../../images/check-icon.svg";
import infoIcon from "../../../images/info-icon.svg";

const Departments = () => {
	const [dropsActive, setDropsActive] = useState([false, false, false, false, false, false, false,]);
	const handleDropsClick = (index) => {
		const newActiveItems = dropsActive.map((item, i) => i === index ? !item : false);
		setDropsActive(newActiveItems);
		const newInnerActiveItems = dropsActive.map((item, i) => item = false);
		setDropsInnerActive(newInnerActiveItems);
	};


	const [dropsInnerActive, setDropsInnerActive] = useState([false, false]);
	const handleDropsInnerClick = (index) => {
		const newActiveItems = dropsInnerActive.map((item, i) => i === index ? !item : false);
		setDropsInnerActive(newActiveItems);
	};


	const [popUpActive, setPopUpActive] = useState(false);

	const [checkActive, setCheckActive] = useState(false);

	return (
		<>
			<Header />
			<div className="p-wrapper">

				<div className="p-wrapper__page-container">
					{/* <img src={dragonBackground} alt="" className="p-wrapper__dragon-background" /> */}


					<PageTitle text="Департаменты"></PageTitle>

					<div className="departments__add-button" onClick={() => { setPopUpActive(true) }}>
						<img src={plusIcon} alt="" className="departments__plus-icon" />
						Добавить департамент
					</div>

					<WhiteWithGreyBorderDrop background='#FFFFFF' width={338} text1="Dragon" text={["Dragon", "Fetch"]}></WhiteWithGreyBorderDrop>

					<div className="departments">
						<div className="departments__row">
							<img src={greenPencilIcon} alt="" className="departments__green-pencil" />
							<Text17700 text="Assistants"></Text17700>
						</div>
						<div className="departments__row drop" >
							<div className="departments__preview" onClick={() => { handleDropsClick(0); }}>
								<img src={greenPencilIcon} alt="" className="departments__green-pencil" />
								<Text17700 text="Back office"></Text17700>
								<img src={dropdownArrow} alt="" className={dropsActive[0] === true ? " departments__dropdown-arrow active" : "departments__dropdown-arrow"} />
							</div>
							<div className={dropsActive[0] === true ? "departments__dropdown active" : "departments__dropdown"}>
								<div className="departments__link">
									<img src={greenPencilIcon} alt="" className="departments__green-pencil" />
									<Text15400С text="Compliance"></Text15400С>
								</div>
								<div className="departments__link">
									<div className="departments__row drop" >
										<div className="departments__preview" onClick={() => { handleDropsInnerClick(0); }}>
											<img src={greenPencilIcon} alt="" className="departments__green-pencil" />
											<Text15400С text="Custody"></Text15400С>
											<img src={dropdownArrow} alt="" className={dropsInnerActive[0] === true ? " departments__dropdown-arrow active" : "departments__dropdown-arrow"} />
										</div>
										<div className={dropsInnerActive[0] === true ? "departments__dropdown inner active" : "departments__dropdown inner"}>
											<div className="departments__link">
												<img src={greenPencilIcon} alt="" className="departments__green-pencil" />
												<Text15400С text="Департамент 3-го уровня"></Text15400С>
											</div>
											<div className="departments__link">
												<img src={greenPencilIcon} alt="" className="departments__green-pencil" />
												<Text15400С text="Департамент 3-го уровня"></Text15400С>
											</div>
											<div className="departments__link">
												<img src={greenPencilIcon} alt="" className="departments__green-pencil" />
												<Text15400С text=" Департамент 3-го уровня"></Text15400С>
											</div>
										</div>
									</div>
								</div>
								<div className="departments__link">
									<div className="departments__row drop" >
										<div className="departments__preview" onClick={() => { handleDropsInnerClick(1); }}>
											<img src={greenPencilIcon} alt="" className="departments__green-pencil" />
											<Text15400С text="Finance"></Text15400С>
											<img src={dropdownArrow} alt="" className={dropsInnerActive[1] === true ? " departments__dropdown-arrow active" : "departments__dropdown-arrow"} />
										</div>
										<div className={dropsInnerActive[1] === true ? "departments__dropdown inner active" : "departments__dropdown inner"}>
											<div className="departments__link">
												<img src={greenPencilIcon} alt="" className="departments__green-pencil" />
												<Text15400С text="Департамент 3-го уровня"></Text15400С>
											</div>
											<div className="departments__link">
												<img src={greenPencilIcon} alt="" className="departments__green-pencil" />
												<Text15400С text="Департамент 3-го уровня"></Text15400С>
											</div>
											<div className="departments__link">
												<img src={greenPencilIcon} alt="" className="departments__green-pencil" />
												<Text15400С text=" Департамент 3-го уровня"></Text15400С>
											</div>
										</div>
									</div>
								</div>
								<div className="departments__link">
									<img src={greenPencilIcon} alt="" className="departments__green-pencil" />
									<Text15400С text=" International Settlements"></Text15400С>
								</div>
							</div>
						</div>
						<div className="departments__row">
							<img src={greenPencilIcon} alt="" className="departments__green-pencil" />
							<Text17700 text="Dragon Development"></Text17700>
						</div>
						<div className="departments__row drop" >
							<div className="departments__preview" onClick={() => { handleDropsClick(1); }}>
								<img src={greenPencilIcon} alt="" className="departments__green-pencil" />
								<Text17700 text="HR"></Text17700>
								<img src={dropdownArrow} alt="" className={dropsActive[1] === true ? " departments__dropdown-arrow active" : "departments__dropdown-arrow"} />
							</div>
							<div className={dropsActive[1] === true ? "departments__dropdown active" : "departments__dropdown"}>
								<div className="departments__link">
									<img src={greenPencilIcon} alt="" className="departments__green-pencil" />
									<Text15400С text="Compliance"></Text15400С>
								</div>
								<div className="departments__link">
									<img src={greenPencilIcon} alt="" className="departments__green-pencil" />
									<Text15400С text="Custody"></Text15400С>
								</div>
								<div className="departments__link">
									<img src={greenPencilIcon} alt="" className="departments__green-pencil" />
									<Text15400С text=" Finance"></Text15400С>
								</div>
								<div className="departments__link">
									<img src={greenPencilIcon} alt="" className="departments__green-pencil" />
									<Text15400С text=" International Settlements"></Text15400С>
								</div>
								<div className="departments__link">
									<img src={greenPencilIcon} alt="" className="departments__green-pencil" />
									<Text15400С text="Local Settlements"></Text15400С>
								</div>
								<div className="departments__link">
									<img src={greenPencilIcon} alt="" className="departments__green-pencil" />
									<Text15400С text="Reporting to SEC"></Text15400С>
								</div>
								<div className="departments__link">
									<img src={greenPencilIcon} alt="" className="departments__green-pencil" />
									<Text15400С text="Retail Settlements"></Text15400С>
								</div>
							</div>
						</div>
						<div className="departments__row">
							<img src={greenPencilIcon} alt="" className="departments__green-pencil" />
							<Text17700 text="Investment Banking"></Text17700>
						</div>
						<div className="departments__row drop" >
							<div className="departments__preview" onClick={() => { handleDropsClick(2); }}>
								<img src={greenPencilIcon} alt="" className="departments__green-pencil" />
								<Text17700 text="IT"></Text17700>
								<img src={dropdownArrow} alt="" className={dropsActive[2] === true ? " departments__dropdown-arrow active" : "departments__dropdown-arrow"} />
							</div>
							<div className={dropsActive[2] === true ? "departments__dropdown active" : "departments__dropdown"}>
								<div className="departments__link">
									<img src={greenPencilIcon} alt="" className="departments__green-pencil" />
									<Text15400С text="Compliance"></Text15400С>
								</div>
								<div className="departments__link">
									<img src={greenPencilIcon} alt="" className="departments__green-pencil" />
									<Text15400С text="Custody"></Text15400С>
								</div>
								<div className="departments__link">
									<img src={greenPencilIcon} alt="" className="departments__green-pencil" />
									<Text15400С text=" Finance"></Text15400С>
								</div>
								<div className="departments__link">
									<img src={greenPencilIcon} alt="" className="departments__green-pencil" />
									<Text15400С text=" International Settlements"></Text15400С>
								</div>
								<div className="departments__link">
									<img src={greenPencilIcon} alt="" className="departments__green-pencil" />
									<Text15400С text="Local Settlements"></Text15400С>
								</div>
								<div className="departments__link">
									<img src={greenPencilIcon} alt="" className="departments__green-pencil" />
									<Text15400С text="Reporting to SEC"></Text15400С>
								</div>
								<div className="departments__link">
									<img src={greenPencilIcon} alt="" className="departments__green-pencil" />
									<Text15400С text="Retail Settlements"></Text15400С>
								</div>
							</div>
						</div>
						<div className="departments__row">
							<img src={greenPencilIcon} alt="" className="departments__green-pencil" />
							<Text17700 text="Legal"></Text17700>
						</div>
						<div className="departments__row drop" >
							<div className="departments__preview" onClick={() => { handleDropsClick(3); }}>
								<img src={greenPencilIcon} alt="" className="departments__green-pencil" />
								<Text17700 text="PR"></Text17700>
								<img src={dropdownArrow} alt="" className={dropsActive[3] === true ? " departments__dropdown-arrow active" : "departments__dropdown-arrow"} />
							</div>
							<div className={dropsActive[3] === true ? "departments__dropdown active" : "departments__dropdown"}>
								<div className="departments__link">
									<img src={greenPencilIcon} alt="" className="departments__green-pencil" />
									<Text15400С text="Compliance"></Text15400С>
								</div>
								<div className="departments__link">
									<img src={greenPencilIcon} alt="" className="departments__green-pencil" />
									<Text15400С text="Custody"></Text15400С>
								</div>
								<div className="departments__link">
									<img src={greenPencilIcon} alt="" className="departments__green-pencil" />
									<Text15400С text=" Finance"></Text15400С>
								</div>
								<div className="departments__link">
									<img src={greenPencilIcon} alt="" className="departments__green-pencil" />
									<Text15400С text=" International Settlements"></Text15400С>
								</div>
								<div className="departments__link">
									<img src={greenPencilIcon} alt="" className="departments__green-pencil" />
									<Text15400С text="Local Settlements"></Text15400С>
								</div>
								<div className="departments__link">
									<img src={greenPencilIcon} alt="" className="departments__green-pencil" />
									<Text15400С text="Reporting to SEC"></Text15400С>
								</div>
								<div className="departments__link">
									<img src={greenPencilIcon} alt="" className="departments__green-pencil" />
									<Text15400С text="Retail Settlements"></Text15400С>
								</div>
							</div>
						</div>
						<div className="departments__row drop" >
							<div className="departments__preview" onClick={() => { handleDropsClick(4); }}>
								<img src={greenPencilIcon} alt="" className="departments__green-pencil" />
								<Text17700 text="Dragon Capital Partners"></Text17700>
								<img src={dropdownArrow} alt="" className={dropsActive[4] === true ? " departments__dropdown-arrow active" : "departments__dropdown-arrow"} />
							</div>
							<div className={dropsActive[4] === true ? "departments__dropdown active" : "departments__dropdown"}>
								<div className="departments__link">
									<img src={greenPencilIcon} alt="" className="departments__green-pencil" />
									<Text15400С text="Compliance"></Text15400С>
								</div>
								<div className="departments__link">
									<img src={greenPencilIcon} alt="" className="departments__green-pencil" />
									<Text15400С text="Custody"></Text15400С>
								</div>
								<div className="departments__link">
									<img src={greenPencilIcon} alt="" className="departments__green-pencil" />
									<Text15400С text=" Finance"></Text15400С>
								</div>
								<div className="departments__link">
									<img src={greenPencilIcon} alt="" className="departments__green-pencil" />
									<Text15400С text=" International Settlements"></Text15400С>
								</div>
								<div className="departments__link">
									<img src={greenPencilIcon} alt="" className="departments__green-pencil" />
									<Text15400С text="Local Settlements"></Text15400С>
								</div>
								<div className="departments__link">
									<img src={greenPencilIcon} alt="" className="departments__green-pencil" />
									<Text15400С text="Reporting to SEC"></Text15400С>
								</div>
								<div className="departments__link">
									<img src={greenPencilIcon} alt="" className="departments__green-pencil" />
									<Text15400С text="Retail Settlements"></Text15400С>
								</div>
							</div>
						</div>
						<div className="departments__row drop" >
							<div className="departments__preview" onClick={() => { handleDropsClick(5); }}>
								<img src={greenPencilIcon} alt="" className="departments__green-pencil" />
								<Text17700 text="Private Clients Network"></Text17700>
								<img src={dropdownArrow} alt="" className={dropsActive[5] === true ? " departments__dropdown-arrow active" : "departments__dropdown-arrow"} />
							</div>
							<div className={dropsActive[5] === true ? "departments__dropdown active" : "departments__dropdown"}>
								<div className="departments__link">
									<img src={greenPencilIcon} alt="" className="departments__green-pencil" />
									<Text15400С text="Compliance"></Text15400С>
								</div>
								<div className="departments__link">
									<img src={greenPencilIcon} alt="" className="departments__green-pencil" />
									<Text15400С text="Custody"></Text15400С>
								</div>
								<div className="departments__link">
									<img src={greenPencilIcon} alt="" className="departments__green-pencil" />
									<Text15400С text=" Finance"></Text15400С>
								</div>
								<div className="departments__link">
									<img src={greenPencilIcon} alt="" className="departments__green-pencil" />
									<Text15400С text=" International Settlements"></Text15400С>
								</div>
								<div className="departments__link">
									<img src={greenPencilIcon} alt="" className="departments__green-pencil" />
									<Text15400С text="Local Settlements"></Text15400С>
								</div>
								<div className="departments__link">
									<img src={greenPencilIcon} alt="" className="departments__green-pencil" />
									<Text15400С text="Reporting to SEC"></Text15400С>
								</div>
								<div className="departments__link">
									<img src={greenPencilIcon} alt="" className="departments__green-pencil" />
									<Text15400С text="Retail Settlements"></Text15400С>
								</div>
							</div>
						</div>
						<div className="departments__row">
							<img src={greenPencilIcon} alt="" className="departments__green-pencil" />
							<Text17700 text="Private Equity"></Text17700>
						</div>
						<div className="departments__row">
							<img src={greenPencilIcon} alt="" className="departments__green-pencil" />
							<Text17700 text="Quantitative Trading"></Text17700>
						</div>
						<div className="departments__row">
							<img src={greenPencilIcon} alt="" className="departments__green-pencil" />
							<Text17700 text="Research"></Text17700>
						</div>
						<div className="departments__row">
							<img src={greenPencilIcon} alt="" className="departments__green-pencil" />
							<Text17700 text="Security"></Text17700>
						</div>
						<div className="departments__row drop" >
							<div className="departments__preview" onClick={() => { handleDropsClick(6); }}>
								<img src={greenPencilIcon} alt="" className="departments__green-pencil" />
								<Text17700 text="Sales & Trading"></Text17700>
								<img src={dropdownArrow} alt="" className={dropsActive[6] === true ? " departments__dropdown-arrow active" : "departments__dropdown-arrow"} />
							</div>
							<div className={dropsActive[6] === true ? "departments__dropdown active" : "departments__dropdown"}>
								<div className="departments__link">
									<img src={greenPencilIcon} alt="" className="departments__green-pencil" />
									<Text15400С text="Compliance"></Text15400С>
								</div>
								<div className="departments__link">
									<img src={greenPencilIcon} alt="" className="departments__green-pencil" />
									<Text15400С text="Custody"></Text15400С>
								</div>
								<div className="departments__link">
									<img src={greenPencilIcon} alt="" className="departments__green-pencil" />
									<Text15400С text=" Finance"></Text15400С>
								</div>
								<div className="departments__link">
									<img src={greenPencilIcon} alt="" className="departments__green-pencil" />
									<Text15400С text=" International Settlements"></Text15400С>
								</div>
								<div className="departments__link">
									<img src={greenPencilIcon} alt="" className="departments__green-pencil" />
									<Text15400С text="Local Settlements"></Text15400С>
								</div>
								<div className="departments__link">
									<img src={greenPencilIcon} alt="" className="departments__green-pencil" />
									<Text15400С text="Reporting to SEC"></Text15400С>
								</div>
								<div className="departments__link">
									<img src={greenPencilIcon} alt="" className="departments__green-pencil" />
									<Text15400С text="Retail Settlements"></Text15400С>
								</div>
							</div>
						</div>

					</div>

					{/* <div className="height"></div> */}


					<Footer />
				</div>


			</div>

			<div className={popUpActive === true ? " departments-popup active" : "departments-popup"}>
				<div className="departments-popup__box">
					<img src={crossPop} alt="" className="departments-popup__cross" onClick={() => { setPopUpActive(false) }} />
					<div className="departments-popup__title">Добавить департамент</div>
					<div className="departments-popup__content">
						<input type="text" className="departments-popup__input" placeholder="Название (рус)" />
						<input type="text" className="departments-popup__input" placeholder="Название (англ)" />
						<WhiteWithGreyBorderDrop background='#FBFBFB' width={360} text1="Родительский департамент" text={["Dragon", "Fetch"]}></WhiteWithGreyBorderDrop>
						<WhiteWithGreyBorderDrop background='#FBFBFB' width={360} text1="Кластер" text={["Dragon", "Fetch"]}></WhiteWithGreyBorderDrop>
						<div className="departments-popup__check" onClick={() => { if (checkActive === true) { setCheckActive(false) } else { setCheckActive(true) } }}>
							<div className={checkActive === true ? "departments-popup__checkbox active" : "departments-popup__checkbox"}>
								<img src={checkIcon} alt="" className="departments-popup__check-icon" />
							</div>
							<div className="departments-popup__check-text">Сделать активным</div>
							<img src={infoIcon} alt="" className="departments-popup__info-icon" />
						</div>
						<button className="departments-popup__button">Добавить</button>
					</div>
				</div>
			</div>
		</>
	);
};
export default Departments;
