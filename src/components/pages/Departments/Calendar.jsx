import React from "react";
import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import "./calendar.scss";
import { useRef, useState, useEffect } from "react";
import Header from "../../organisms/Header";
import Footer from "../../organisms/Footer";


import PageTitle from "../../atoms/Headings/PageTitle";


import CalendarSwiper from "../../organisms/Swipers/CalendarSwiper"
import FindEmployee from "../../organisms/Calendar/FindEmployee";


const Calendar = () => {

	

	return (
		<>
			<Header />
			<div className="p-wrapper">

				<div className="p-wrapper__page-container">
					{/* <img src={dragonBackground} alt="" className="p-wrapper__dragon-background" /> */}


					<PageTitle text="Календарь"></PageTitle>


                    <div className="calendar-swiper-container">
                        <CalendarSwiper></CalendarSwiper>
					</div>
					

					<FindEmployee></FindEmployee>

					<Footer />
				</div>


			</div>


		</>
	);
};
export default Calendar;
