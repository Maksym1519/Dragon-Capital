import React from "react";
import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import "./departments.scss";
import { useRef, useState, useEffect } from "react";
import Header from "../../organisms/Header";
import Footer from "../../organisms/Footer";

import Text14400 from "../../atoms/Text14400";
import Text14700 from "../../atoms/Text14700";

import PageTitle from "../../atoms/PageTitle";

import WhiteWithGreyBorderDrop from "../../molecules/Dropdowns/WhiteWithGreyBorderDrop";


import plusIcon from "../../../images/plus-icon.svg";
import dropdownArrow from "../../../images/dropdown-arrow-down.svg";
import dragonBackground from "../../../images/dragon-background.png";
import greenPencilIcon from "../../../images/green-pencil-icon.svg";

const Departments = () => {
	const [dropsActive, setDropsActive] = useState([false, false, false, false, false, false,]);
	const handleDropsClick = (index) => {
		const newActiveItems = dropsActive.map((item, i) => i === index ? !item : false);
		setDropsActive(newActiveItems);
	};

	return (
		<>
			<Header />
			<div className="p-wrapper">

				<div className="p-wrapper__page-container">
					<img src={dragonBackground} alt="" className="p-wrapper__dragon-background" />
					<PageTitle text="Департаменты"></PageTitle>
					<div className="departments__add-button">
						<img src={plusIcon} alt="" className="departments__plus-icon" />
						Добавить департамент
					</div>
					<WhiteWithGreyBorderDrop background='#FFFFFF' width={338} text1="Dragon" text={["Dragon", "Fetch"]}></WhiteWithGreyBorderDrop>
					<div className="departments">
						<div className="departments__row">
							<img src={greenPencilIcon} alt="" className="departments__green-pencil" />
							<Text14700 text="Assistants"></Text14700>
						</div>
						<div className="departments__row" >
							<div className="departments__preview" onClick={() => { handleDropsClick(0); }}>
								<Text14700 text="Back Office"></Text14700>
								<img src={dropdownArrow} alt="" className={dropsActive[0] === true ? " departments__dropdown-arrow active" : "departments__dropdown-arrow"} />
							</div>
							<div className={dropsActive[0] === true ? "departments__dropdown active" : "departments__dropdown"}>
								<div className="departments__link">
									<Text14400 text="Compliance"></Text14400>
								</div>
								<div className="departments__link">
									<Text14400 text="Custody"></Text14400>
								</div>
								<div className="departments__link">
									<Text14400 text=" Finance"></Text14400>
								</div>
								<div className="departments__link">
									<Text14400 text=" International Settlements"></Text14400>
								</div>
								<div className="departments__link">
									<Text14400 text="Local Settlements"></Text14400>
								</div>
								<div className="departments__link">
									<Text14400 text="Reporting to SEC"></Text14400>
								</div>
								<div className="departments__link">
									<Text14400 text="Retail Settlements"></Text14400>
								</div>
							</div>
						</div>
						<div className="departments__row">
							<Text14700 text="Dragon Development"></Text14700>
						</div>
						<div className="departments__row" >
							<div className="departments__preview" onClick={() => { handleDropsClick(1); }}>
								<Text14700 text="HR"></Text14700>
								<img src={dropdownArrow} alt="" className={dropsActive[1] === true ? " departments__dropdown-arrow active" : "departments__dropdown-arrow"} />
							</div>
							<div className={dropsActive[1] === true ? "departments__dropdown active" : "departments__dropdown"}>
								<div className="departments__link">
									<Text14400 text="Compliance"></Text14400>
								</div>
								<div className="departments__link">
									<Text14400 text="Custody"></Text14400>
								</div>
								<div className="departments__link">
									<Text14400 text=" Finance"></Text14400>
								</div>
								<div className="departments__link">
									<Text14400 text=" International Settlements"></Text14400>
								</div>
								<div className="departments__link">
									<Text14400 text="Local Settlements"></Text14400>
								</div>
								<div className="departments__link">
									<Text14400 text="Reporting to SEC"></Text14400>
								</div>
								<div className="departments__link">
									<Text14400 text="Retail Settlements"></Text14400>
								</div>
							</div>
						</div>
						<div className="departments__row">
							<Text14700 text="Investment Banking"></Text14700>
						</div>
						<div className="departments__row" >
							<div className="departments__preview" onClick={() => { handleDropsClick(2); }}>
								<Text14700 text="IT"></Text14700>
								<img src={dropdownArrow} alt="" className={dropsActive[2] === true ? " departments__dropdown-arrow active" : "departments__dropdown-arrow"} />
							</div>
							<div className={dropsActive[2] === true ? "departments__dropdown active" : "departments__dropdown"}>
								<div className="departments__link">
									<Text14400 text="Compliance"></Text14400>
								</div>
								<div className="departments__link">
									<Text14400 text="Custody"></Text14400>
								</div>
								<div className="departments__link">
									<Text14400 text=" Finance"></Text14400>
								</div>
								<div className="departments__link">
									<Text14400 text=" International Settlements"></Text14400>
								</div>
								<div className="departments__link">
									<Text14400 text="Local Settlements"></Text14400>
								</div>
								<div className="departments__link">
									<Text14400 text="Reporting to SEC"></Text14400>
								</div>
								<div className="departments__link">
									<Text14400 text="Retail Settlements"></Text14400>
								</div>
							</div>
						</div>
						<div className="departments__row">
							<Text14700 text="Legal"></Text14700>
						</div>
						<div className="departments__row" >
							<div className="departments__preview" onClick={() => { handleDropsClick(3); }}>
								<Text14700 text="PR"></Text14700>
								<img src={dropdownArrow} alt="" className={dropsActive[3] === true ? " departments__dropdown-arrow active" : "departments__dropdown-arrow"} />
							</div>
							<div className={dropsActive[3] === true ? "departments__dropdown active" : "departments__dropdown"}>
								<div className="departments__link">
									<Text14400 text="Compliance"></Text14400>
								</div>
								<div className="departments__link">
									<Text14400 text="Custody"></Text14400>
								</div>
								<div className="departments__link">
									<Text14400 text=" Finance"></Text14400>
								</div>
								<div className="departments__link">
									<Text14400 text=" International Settlements"></Text14400>
								</div>
								<div className="departments__link">
									<Text14400 text="Local Settlements"></Text14400>
								</div>
								<div className="departments__link">
									<Text14400 text="Reporting to SEC"></Text14400>
								</div>
								<div className="departments__link">
									<Text14400 text="Retail Settlements"></Text14400>
								</div>
							</div>
						</div>
						<div className="departments__row" >
							<div className="departments__preview" onClick={() => { handleDropsClick(4); }}>
								<Text14700 text="Dragon Capital Partners"></Text14700>
								<img src={dropdownArrow} alt="" className={dropsActive[4] === true ? " departments__dropdown-arrow active" : "departments__dropdown-arrow"} />
							</div>
							<div className={dropsActive[4] === true ? "departments__dropdown active" : "departments__dropdown"}>
								<div className="departments__link">
									<Text14400 text="Compliance"></Text14400>
								</div>
								<div className="departments__link">
									<Text14400 text="Custody"></Text14400>
								</div>
								<div className="departments__link">
									<Text14400 text=" Finance"></Text14400>
								</div>
								<div className="departments__link">
									<Text14400 text=" International Settlements"></Text14400>
								</div>
								<div className="departments__link">
									<Text14400 text="Local Settlements"></Text14400>
								</div>
								<div className="departments__link">
									<Text14400 text="Reporting to SEC"></Text14400>
								</div>
								<div className="departments__link">
									<Text14400 text="Retail Settlements"></Text14400>
								</div>
							</div>
						</div>
						<div className="departments__row" >
							<div className="departments__preview" onClick={() => { handleDropsClick(5); }}>
								<Text14700 text="Private Clients Network"></Text14700>
								<img src={dropdownArrow} alt="" className={dropsActive[5] === true ? " departments__dropdown-arrow active" : "departments__dropdown-arrow"} />
							</div>
							<div className={dropsActive[5] === true ? "departments__dropdown active" : "departments__dropdown"}>
								<div className="departments__link">
									<Text14400 text="Compliance"></Text14400>
								</div>
								<div className="departments__link">
									<Text14400 text="Custody"></Text14400>
								</div>
								<div className="departments__link">
									<Text14400 text=" Finance"></Text14400>
								</div>
								<div className="departments__link">
									<Text14400 text=" International Settlements"></Text14400>
								</div>
								<div className="departments__link">
									<Text14400 text="Local Settlements"></Text14400>
								</div>
								<div className="departments__link">
									<Text14400 text="Reporting to SEC"></Text14400>
								</div>
								<div className="departments__link">
									<Text14400 text="Retail Settlements"></Text14400>
								</div>
							</div>
						</div>
						<div className="departments__row">
							<Text14700 text="Private Equity"></Text14700>
						</div>
						<div className="departments__row">
							<Text14700 text="Quantitative Trading"></Text14700>
						</div>
						<div className="departments__row">
							<Text14700 text="Research"></Text14700>
						</div>
						<div className="departments__row">
							<Text14700 text="Security"></Text14700>
						</div>
						<div className="departments__row" >
							<div className="departments__preview" onClick={() => { handleDropsClick(6); }}>
								<Text14700 text="Sales & Trading"></Text14700>
								<img src={dropdownArrow} alt="" className={dropsActive[6] === true ? " departments__dropdown-arrow active" : "departments__dropdown-arrow"} />
							</div>
							<div className={dropsActive[6] === true ? "departments__dropdown active" : "departments__dropdown"}>
								<div className="departments__link">
									<Text14400 text="Compliance"></Text14400>
								</div>
								<div className="departments__link">
									<Text14400 text="Custody"></Text14400>
								</div>
								<div className="departments__link">
									<Text14400 text=" Finance"></Text14400>
								</div>
								<div className="departments__link">
									<Text14400 text=" International Settlements"></Text14400>
								</div>
								<div className="departments__link">
									<Text14400 text="Local Settlements"></Text14400>
								</div>
								<div className="departments__link">
									<Text14400 text="Reporting to SEC"></Text14400>
								</div>
								<div className="departments__link">
									<Text14400 text="Retail Settlements"></Text14400>
								</div>
							</div>
						</div>

					</div>
				</div>
				{/* <Footer /> */}


			</div>
		</>
	);
};
export default Departments;
