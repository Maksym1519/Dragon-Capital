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
import Absent from "../../organisms/Calendar/Absent";
import SendRequest from "../../organisms/Calendar/SendRequest";

import crossPop from "../../../images/popUp-cross.svg";

const Calendar = () => {

	const [popUpActive, setPopUpActive] = useState(false);

	return (
		<>
			<Header />
			<div className="p-wrapper">

				<div className="p-wrapper__page-container calendar">
					{/* <img src={dragonBackground} alt="" className="p-wrapper__dragon-background" /> */}


					<PageTitle text="Календарь"></PageTitle>


					<div className="calendar-swiper-container">
						<CalendarSwiper></CalendarSwiper>
					</div>


					<div className="calendar-content">
						<FindEmployee></FindEmployee>

						<Absent></Absent>

						<SendRequest setPopUpActive={setPopUpActive}></SendRequest>
					</div>

					<Footer />
				</div>


			</div>

			<div className={popUpActive === true ? " calendar-popup active" : "calendar-popup"}>
                <div className="calendar-popup__box">
                    <img src={crossPop} alt="" className="calendar-popup__cross" onClick={() => { setPopUpActive(false) }} />

                    <div className="calendar-popup__title">Как использовать отпуск?</div>

                    <div className="calendar-popup__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sodales vitae enim sed tincidunt. Quisque id elit erat. Proin lacinia vestibulum neque, et mattis mi congue dictum. Phasellus viverra ut est ut bibendum. In non lorem laoreet, ornare ex quis, pellentesque lacus. Vestibulum congue risus eget lobortis fringilla. Quisque gravida justo sit amet fermentum mattis. Cras malesuada volutpat mi posuere commodo. Donec vitae hendrerit nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque ac aliquet justo. Pellentesque sed diam vitae libero imperdiet sollicitudin. Donec lorem nisi, molestie nec tempor eu, consectetur ac leo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin nibh ipsum, dictum eu leo ac, placerat sagittis ex. In hac habitasse platea dictumst.
                    </div>

                    <div className="calendar-popup__text">
                        Ut eros leo, tempus in sem ac, lacinia malesuada augue. Donec leo orci, pulvinar et suscipit sit amet, malesuada et lectus. Aenean blandit vitae lacus ac gravida. Pellentesque nec vestibulum magna. Fusce consectetur tincidunt ante, vulputate facilisis urna accumsan ut. Vestibulum eget gravida mauris. Nunc et fermentum orci.
                    </div>

                    <div className="calendar-popup__text">
                        Aenean at venenatis arcu, et tincidunt ligula. Fusce imperdiet varius enim sed elementum. Fusce sit amet tristique nisi. Nunc vehicula diam eu metus imperdiet, sed suscipit ipsum ultrices. Pellentesque efficitur mauris est, eu euismod neque fermentum ac. Sed ultrices enim sed aliquam consequat. Nulla viverra eros eget sem vulputate, et mattis eros euismod. Ut laoreet tincidunt nunc ut dignissim. Aliquam rutrum iaculis erat sit amet fringilla. Sed tristique arcu orci, in fermentum enim mollis ornare. Donec auctor ipsum nec turpis ultrices, in gravida eros rutrum. Nullam euismod euismod justo non faucibus. Sed interdum, tortor in interdum volutpat, purus nisi tempor risus, eu pretium elit massa quis quam. Donec non orci porta felis pharetra lacinia sed id ipsum. Sed convallis diam et porta pellentesque.
                    </div>

                    <div className="calendar-popup__text">
                        Ut eros leo, tempus in sem ac, lacinia malesuada augue. Donec leo orci, pulvinar et suscipit sit amet, malesuada et lectus. Aenean blandit vitae lacus ac gravida. Pellentesque nec vestibulum magna. Fusce consectetur tincidunt ante, vulputate facilisis urna accumsan ut. Vestibulum eget gravida mauris. Nunc et fermentum orci.
                    </div>
                </div>
            </div>


		</>
	);
};
export default Calendar;
