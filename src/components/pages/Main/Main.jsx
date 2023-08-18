import React from "react";
import { lazy, Suspense } from "react";
import { Link, Route, Router, Routes } from "react-router-dom";
import m from "./main.module.scss";
import { useRef, useState, useEffect } from "react";
import { register } from "swiper/element/bundle";
import HeaderWhite from "../../organisms/HeaderWhite";
import Footer from "../../organisms/Footer";
import Text12400 from "../../atoms/Text12400";
import Text14400 from "../../atoms/Text14400";
import Text20400 from "../../atoms/Text20400";
import Text18400 from "../../atoms/Text18400";
import Text20700 from "../../atoms/Text20700";
import Text12700 from "../../atoms/Text12700";
import Text15700 from "../../atoms/Text15700";
import Text13700 from "../../atoms/Text13700";
import Text26700 from "../../atoms/Text26700";
import Text15400 from "../../atoms/Text15400";
import Text17700 from "../../atoms/Text17700";
import Text21700 from "../../atoms/Text21700";
import Text17400 from "../../atoms/Text17400";
import Text13400 from "../../atoms/Text13400";
import Event from "../../atoms/Event";
import Ava1 from "../../../images/main-ava1.webp";
import Ava2 from "../../../images/main-ava2.webp";
import Ava3 from "../../../images/main-ava3.webp";
import Cake from "../../../images/cake.svg";
import Word from "../../../images/word.svg";
import Download from "../../../images/download.svg";

const Main = () => {
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  //---------------------------------------------------
  useEffect(() => {
    // Функция для обновления времени и даты
    const updateTimeAndDate = () => {
      const now = new Date();
      const timeOptions = { hour: "numeric", minute: "numeric", hour12: false };
      const dateOptions = { year: "numeric", month: "long", day: "numeric" };

      setCurrentTime(now.toLocaleTimeString(undefined, timeOptions));
      setCurrentDate(now.toLocaleDateString(undefined, dateOptions));
    };

    // Обновляем время и дату каждую секунду
    const intervalId = setInterval(updateTimeAndDate, 1000);

    // Очищаем интервал при размонтировании компонента
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  //---------------------------------------------------
  return (
    <div className={m.main__wrapper}>
      <HeaderWhite />
      <div className={m.main__container}>
        <div className={m.main__body}>
          <div className={m.timeDate}>
            <h3 className={m.timeDate__title}>
              <Text26700 text={"Привет, Анастасия!"} color="#fff" />
            </h3>
            <p className={m.timeDate__time}>{currentTime}</p>
            <p className={m.timeDate__date}>{currentDate}</p>
            <div className={m.timeDate__quote}>
              <p className={m.timeDate__quote__text}>
                <Text15400
                  text={
                    "”Только тот человек может быть счастлив, который ставит перед собою большие цели и борется за них всеми своими силами.”"
                  }
                  color="#fff"
                />
              </p>
              <p className={m.timeDate__quote__author}>
                <Text17700 text={"М.И. Калинин"} color="#fff" />
              </p>
            </div>
          </div>
          <div className={m.important}>
            <h3 className={m.important__title}>
              <Text21700 text={"Важно"} color="#fff" />
            </h3>
            <p className={m.important__text1}>
              <Text17400
                text={
                  "Тут будет показано обьявление всем пользователям или для опред. групп пользователей. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fermentum sapien nunc, a faucibus leo tincidunt sed."
                } color='#fff'
              />
            </p>
            <p className={m.important__text2}>
              <Text15400
                text={
                  "Подробнее"
                } color='#fff'
              />
            </p>
          </div>
          <div className={m.celebrations}>
            <div className={m.birthdays}>
              <div className={m.birthdays__titleWrapper}>
                <h3 className={m.birthdays__title}>
                  <Text21700 text={"Дни рождения"} color='#fff'/>
                </h3>
                <span className={m.birthdays__button}>
                  <Text13400
                    text={"Смотреть все"}
                    underline={true}
                    color="rgba(255, 255, 255, 0.65)"
                  />
                </span>
              </div>
              <div className={m.birthdays__items__wrapper}>
                <div
                  className={m.birthdays__item + " " + m.birthdays__item_active}
                >
                  <img src={Ava1} alt="ava" />
                  <div className={m.person__info}>
                    <p className={m.person__info__date}>
                      <Text13400 text={"27.08"} color='#fff'/>
                    </p>
                    <p className={m.person__info__name}>Alexander Shevchenko</p>
                  </div>
                  <div className={m.birthdays__status}>
                    <span className={m.text}>
                      <Text13700 text="Сегодня" color="#FFC700" />
                    </span>
                    <img src={Cake} alt="icon" />
                  </div>
                </div>
                <div className={m.birthdays__item}>
                   <div className={m.birthdays__item__infoWrapper}>
                  <img src={Ava2} alt="ava" />
                  <div className={m.person__info}>
                    <p className={m.person__info__date}>
                      <Text13400 text={"27.08"} color="#fff"/>
                    </p>
                    <p className={m.person__info__name}>Alex Prokopenko</p>
                  </div>
                </div>
                  <div className={m.birthdays__status}>
                    <span className={m.text}>
                      <Text13700 text="Через 3 дн" color="#1DCA58" />
                    </span>
                  </div>
                </div>
                <div className={m.birthdays__item}>
                  <img src={Ava3} alt="ava" />
                  <div className={m.person__info}>
                    <p className={m.person__info__date}>
                      <Text13400 text={"27.08"} />
                    </p>
                    <p className={m.person__info__name}>Alexander Shevchenko</p>
                  </div>
                  <div className={m.birthdays__status}>
                    <span className={m.text}>
                      <Text13700 text="Через 4 дн" color="#1DCA58" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className={m.holidays}>
              <div className={m.birthdays__titleWrapper}>
                <h3 className={m.birthdays__title}>
                  <Text21700 text={"Ближайшие праздники"} color='#fff'/>
                </h3>
                <span className={m.birthdays__button}>
                  <Text13400
                    text={"Смотреть все"}
                    underline={true}
                    color="rgba(255, 255, 255, 0.65)"
                  />
                </span>
              </div>
              <div className={m.holidays__items__wrapper}>
                <div className={m.holidays__item}>
                  <div className={m.event}>
                    <Event
                      text1={<Text13400 text="25.12" color='#fff'/>}
                      text2={<Text17700 text="Christmas Eve" color='#fff'/>}
                    />
                  </div>
                  <p className={m.holidays__item__date}>
                    <Text12400 text="Через 34 дн." color="#1DCA58" />
                  </p>
                </div>
                <div className={m.holidays__item}>
                  <div className={m.event}>
                    <Event
                      text1={<Text13400 text="01.01" color='#fff'/>}
                      text2={<Text17700 text="New Year Eve" color='#fff'/>}
                    />
                  </div>
                  <p className={m.holidays__item__date}>
                    <Text12400 text="Через 34 дн" color="#1DCA58" />
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={m.missing}>
            <div className={m.birthdays__titleWrapper}>
              <h3 className={m.birthdays__title}>
                <Text21700 text={"Отсутствующие"} color='#fff'/>
              </h3>
              <span className={m.birthdays__button}>
                <Text13400
                  text={"Смотреть все"}
                  underline={true}
                  color="rgba(255, 255, 255, 0.65)"
                />
              </span>
            </div>
         <div className={m.missing__items__wrapper}>
            {/* item1----------------------------------------------- */}
            <div className={m.missing__item}>
              <div className={m.missing__item__header}>
                <h4 className={m.item__header__title}><Text13700 text='Work on holiday' color='#7CD8FF'/></h4>
                <p className={m.item__header__date}><Text13400 text='21.09.2018 - 29.09.2018' color='#fff'/></p>
              </div>
              <div className={m.missing__item__personInfo}>
                 <img src={Ava3} alt="Ava" />
                 <div className={m.person__description}>
                  <Event text1={<Text15700 text='Valeriy Necheporenko' color='#fff'/>} text2={<Text13400 text='Marketing department' color='#fff'/>}/>
                 </div>
              </div>
            </div>
            {/* item2----------------------------------------------- */}
            <div className={m.missing__item}>
              <div className={m.missing__item__header}>
                <h4 className={m.item__header__title}><Text13700 text='Business trip' color='#1DCA58'/></h4>
                <p className={m.item__header__date}><Text13400 text='29.09.2018' color='#fff'/></p>
              </div>
              <div className={m.missing__item__personInfo}>
                 <img src={Ava2} alt="Ava" />
                 <div className={m.person__description}>
                  <Event text1={<Text15700 text='Alexander Shevchenko' color='#fff'/>} text2={<Text13400 text='Marketing department' color='#fff'/>}/>
                 </div>
              </div>
            </div>
              {/* item3----------------------------------------------- */}
            <div className={m.missing__item}>
              <div className={m.missing__item__header}>
                <h4 className={m.item__header__title}><Text13700 text='Vacation' color='#FFC700'/></h4>
                <p className={m.item__header__date}><Text13400 text='21.09.2018 - 29.09.2018' color='#fff'/></p>
              </div>
              <div className={m.missing__item__personInfo}>
                 <img src={Ava1} alt="Ava" />
                 <div className={m.person__description}>
                  <Event text1={<Text15700 text='Olga Sumska' color='#fff'/>} text2={<Text13400 text='Marketing department' color='#fff'/>}/>
                 </div>
              </div>
            </div>
              {/* item4----------------------------------------------- */}
            <div className={m.missing__item}>
              <div className={m.missing__item__header}>
                <h4 className={m.item__header__title}><Text13700 text='Sick leave' color='#5F82FF'/></h4>
                <p className={m.item__header__date}><Text13400 text='21.09.2018 - 29.09.2018' color='#fff'/></p>
              </div>
              <div className={m.missing__item__personInfo}>
                 <img src={Ava3} alt="Ava" />
                 <div className={m.person__description}>
                  <Event text1={<Text15700 text='Valeriy Necheporenko' color='#fff'/>} text2={<Text13400 text='Marketing department' color='#fff'/>}/>
                 </div>
              </div>
            </div>
              {/* item5----------------------------------------------- */}
            <div className={m.missing__item}>
              <div className={m.missing__item__header}>
                <h4 className={m.item__header__title}><Text13700 text='Study leave' color='#FF68F0'/></h4>
                <p className={m.item__header__date}><Text13400 text='21.09.2018 - 29.09.2018' color='#fff'/></p>
              </div>
              <div className={m.missing__item__personInfo}>
                 <img src={Ava2} alt="Ava" />
                 <div className={m.person__description}>
                  <Event text1={<Text15700 text='Valeriy Necheporenko' color='#fff'/>} text2={<Text13400 text='Marketing department' color='#fff'/>}/>
                 </div>
              </div>
            </div>
         </div>
          </div>
        </div>
      </div>
      <Footer textColor='rgba(255, 255, 255, 0.8)' />
    </div>
  );
};
export default Main;
