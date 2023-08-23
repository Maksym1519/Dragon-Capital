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
	const [popUpRequestActive, setPopUpRequestActive] = useState(false);

	return (
		<>
			<Header />
			<div class="p-wrapper">

				<div class="p-wrapper__page-container calendar">
					{/* <img src={dragonBackground} alt="" class="p-wrapper__dragon-background" /> */}


					<PageTitle text="Календарь"></PageTitle>


					<div class="calendar-swiper-container">
						<CalendarSwiper></CalendarSwiper>
					</div>


					<div class="calendar-content">
						<FindEmployee></FindEmployee>

						<Absent></Absent>

						<SendRequest setPopUpActive={setPopUpActive} setRequestPopUpActive={setPopUpRequestActive}></SendRequest>
					</div>

					<Footer />
				</div>


			</div>

			<div class={popUpActive === true ? " calendar-popup active" : "calendar-popup"}>
				<div class="calendar-popup__box">
					<img src={crossPop} alt="" class="calendar-popup__cross" onClick={() => { setPopUpActive(false) }} />

					<div class="calendar-popup__title">Как использовать отпуск?</div>

					<div class="calendar-popup__text">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sodales vitae enim sed tincidunt. Quisque id elit erat. Proin lacinia vestibulum neque, et mattis mi congue dictum. Phasellus viverra ut est ut bibendum. In non lorem laoreet, ornare ex quis, pellentesque lacus. Vestibulum congue risus eget lobortis fringilla. Quisque gravida justo sit amet fermentum mattis. Cras malesuada volutpat mi posuere commodo. Donec vitae hendrerit nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque ac aliquet justo. Pellentesque sed diam vitae libero imperdiet sollicitudin. Donec lorem nisi, molestie nec tempor eu, consectetur ac leo. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin nibh ipsum, dictum eu leo ac, placerat sagittis ex. In hac habitasse platea dictumst.
					</div>

					<div class="calendar-popup__text">
						Ut eros leo, tempus in sem ac, lacinia malesuada augue. Donec leo orci, pulvinar et suscipit sit amet, malesuada et lectus. Aenean blandit vitae lacus ac gravida. Pellentesque nec vestibulum magna. Fusce consectetur tincidunt ante, vulputate facilisis urna accumsan ut. Vestibulum eget gravida mauris. Nunc et fermentum orci.
					</div>

					<div class="calendar-popup__text">
						Aenean at venenatis arcu, et tincidunt ligula. Fusce imperdiet varius enim sed elementum. Fusce sit amet tristique nisi. Nunc vehicula diam eu metus imperdiet, sed suscipit ipsum ultrices. Pellentesque efficitur mauris est, eu euismod neque fermentum ac. Sed ultrices enim sed aliquam consequat. Nulla viverra eros eget sem vulputate, et mattis eros euismod. Ut laoreet tincidunt nunc ut dignissim. Aliquam rutrum iaculis erat sit amet fringilla. Sed tristique arcu orci, in fermentum enim mollis ornare. Donec auctor ipsum nec turpis ultrices, in gravida eros rutrum. Nullam euismod euismod justo non faucibus. Sed interdum, tortor in interdum volutpat, purus nisi tempor risus, eu pretium elit massa quis quam. Donec non orci porta felis pharetra lacinia sed id ipsum. Sed convallis diam et porta pellentesque.
					</div>

					<div class="calendar-popup__text">
						Ut eros leo, tempus in sem ac, lacinia malesuada augue. Donec leo orci, pulvinar et suscipit sit amet, malesuada et lectus. Aenean blandit vitae lacus ac gravida. Pellentesque nec vestibulum magna. Fusce consectetur tincidunt ante, vulputate facilisis urna accumsan ut. Vestibulum eget gravida mauris. Nunc et fermentum orci.
					</div>
				</div>
			</div>



			<div class={popUpRequestActive === true ? " calendar-popup active" : "calendar-popup"}>
				<div class="calendar-popup__box">
					<img src={crossPop} alt="" class="calendar-popup__cross" onClick={() => { setPopUpRequestActive(false) }} />

					<div class="calendar-popup__title">Как использовать отпуск?</div>

					<div class="calendar-popup__undertitle">Вы подтверждаете отправку запроса на отпуск по таким датам?</div>

					<div class="calendar-popup__rows">
						<div class="calendar-popup__row">
							<div class="calendar-popup__date">Среда <br />14.05.2019</div>
							<div class="calendar-popup__day">Вторая половина дня</div>
							<div class="calendar-popup__pay">За свой счет</div>
						</div>
						<div class="calendar-popup__row">
							<div class="calendar-popup__date">Четверг <br />15.05.2019</div>
							<div class="calendar-popup__day">Полный день</div>
							<div class="calendar-popup__pay">В счет отпуска</div>
						</div>
						<div class="calendar-popup__row">
							<div class="calendar-popup__date">Пятница <br />16.05.2019</div>
							<div class="calendar-popup__day">Полный день</div>
							<div class="calendar-popup__pay">За свой счет</div>
						</div>
						<div class="calendar-popup__row">
							<div class="calendar-popup__date">Понедельник <br />204.05.2019</div>
							<div class="calendar-popup__day">Вторая половина дня</div>
							<div class="calendar-popup__pay">В счет отпуска</div>
						</div>
					</div>
					<button class="calendar-popup__button">
						Отправить запрос
					</button>
				</div>
			</div>



		</>
	);
};
export default Calendar;
