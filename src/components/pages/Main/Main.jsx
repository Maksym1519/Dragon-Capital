import React from "react";
import { lazy, Suspense } from "react";
import { Link, Route, Router, Routes } from "react-router-dom";
import m from "./main.module.scss";
import { useRef, useState, useEffect } from "react";
import { register } from "swiper/element/bundle";
import Header from "../../organisms/Header";
import Footer from "../../organisms/Footer";
import Text12400 from "../../atoms/Text12400";
import Text14400 from "../../atoms/Text14400";
import Text20400 from "../../atoms/Text20400";
import Text18400 from "../../atoms/Text18400";
import Text20700 from "../../atoms/Text20700";
import Text12700 from "../../atoms/Text12700";
import Text15700 from "../../atoms/Text15700";
import Text13700 from "../../atoms/Text13700";
import Event from "../../atoms/Event";
import Ava from '../../../images/birthday-ava.webp';
import Cake from '../../../images/cake.svg';
import Word from '../../../images/word.svg';
import Download from '../../../images/download.svg'

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
      <Header />
      <div className={m.main__container}>
        <div className={m.main__body}>
          <div className={m.timeDate}>
            <h3 className={m.timeDate__title}>
              <Text20400 text={"Привет, Анастасия!"} color="black" />
            </h3>
            <p className={m.timeDate__time}>{currentTime}</p>
            <p className={m.timeDate__date}>{currentDate}</p>
            <div className={m.timeDate__quote}>
              <p className={m.timeDate__quote__text}>
                <Text12400
                  text={
                    "”Только тот человек может быть счастлив, который ставит перед собою большие цели и борется за них всеми своими силами.”"
                  }
                />
              </p>
              <p className={m.timeDate__quote__author}>
                <Text14400 text={"М.И. Калинин"} />
              </p>
            </div>
          </div>
          <div className={m.important}>
            <h3 className={m.important__title}>
              <Text20700 text={"Важно"} />
            </h3>
            <p className={m.important__text1}>
              <Text14400
                text={
                  "Тут будет показано обьявление всем пользователям или для опред. групп пользователей."
                }
              />
            </p>
            <p className={m.important__text2}>
              <Text14400
                text={
                  "Желательно писать детальнее или указывать какой-то call to action в конце текстового блока."
                }
              />
            </p>
          </div>
          <div className={m.celebrations}>
            <div className={m.birthdays}>
              <div className={m.birthdays__titleWrapper}>
                <h3 className={m.birthdays__title}>
                  <Text20700 text={"Дни рождения"} />
                </h3>
                <span className={m.birthdays__button}>
                  <Text12700
                    text={"Смотреть все"}
                    underline={true}
                    color="rgba(34, 51, 58, 0.65)"
                  />
                </span>
              </div>
              <div className={m.birthdays__items__wrapper}>
                 <div className={m.birthdays__item + " " + m.birthdays__item_active}>
                    <img src={Ava} alt="ava" />
                    <div className={m.person__info}>
                      <p className={m.person__info__date}><Text12400 text={'27.08'} /></p>
                      <p className={m.person__info__name}>Alexander Shevchenko</p>
                    </div>
                    <div className={m.birthdays__status}>
                      <span className={m.text}><Text12700 text="Сегодня" color='#D4830B'/></span>
                      <img src={Cake} alt="icon" />
                    </div>
                 </div>
                 <div className={m.birthdays__item}>
                    <img src={Ava} alt="ava" />
                    <div className={m.person__info}>
                      <p className={m.person__info__date}><Text12400 text={'27.08'} /></p>
                      <p className={m.person__info__name}>Alexander Shevchenko</p>
                    </div>
                    <div className={m.birthdays__status}>
                      <span className={m.text}><Text12700 text="Через 3 дн" color='#00512F'/></span>
                     </div>
                 </div>
                 <div className={m.birthdays__item}>
                    <img src={Ava} alt="ava" />
                    <div className={m.person__info}>
                      <p className={m.person__info__date}><Text12400 text={'27.08'} /></p>
                      <p className={m.person__info__name}>Alexander Shevchenko</p>
                    </div>
                    <div className={m.birthdays__status}>
                      <span className={m.text}><Text12700 text="Через 4 дн" color='#00512F'/></span>
                      </div>
                 </div>
              </div>
            </div>
            <div className={m.holidays}>
            <div className={m.birthdays__titleWrapper}>
                <h3 className={m.birthdays__title}>
                  <Text20700 text={"Праздники"} />
                </h3>
                <span className={m.birthdays__button}>
                  <Text12700
                    text={"Смотреть все"}
                    underline={true}
                    color="rgba(34, 51, 58, 0.65)"
                  />
                </span>
              </div>
              <div className={m.holidays__items__wrapper}>
                 <div className={m.holidays__item}>
                   <div className={m.event}>
                     <Event text1={<Text12400 text='31.12.2018'/>} text2={<Text15700 text='Christmas Eve'/>}/>
                    </div>
                    <p className={m.holidays__item__date}><Text12400 text='Через 34 дн' color='#00512F'/></p>
                 </div>
                 <div className={m.holidays__item}>
                   <div className={m.event}>
                     <Event text1={<Text12400 text='31.12.2018'/>} text2={<Text15700 text='New Year Eve'/>}/>
                    </div>
                    <p className={m.holidays__item__date}><Text12400 text='Через 34 дн' color='#00512F'/></p>
                 </div>
              </div>
            </div>
          </div>
          <div className={m.lastFiles}>
            <div className={m.birthdays__titleWrapper}>
                <h3 className={m.birthdays__title}>
                  <Text20700 text={"Последние файлы"} />
                </h3>
                <span className={m.birthdays__button}>
                  <Text12700
                    text={"Смотреть все"}
                    underline={true}
                    color="rgba(34, 51, 58, 0.65)"
                  />
                </span>
              </div>
              <div className={m.lastFiles__items__wrapper}>
                <div className={m.lastFiles__item}>
                  <img src={Word} alt="word" />
                  <div className={m.nameDocument__wrapper}>
                  <Event text1={<Text12400 text='31.12.2018'/>} text2={<Text13700 text='Contract template.docx'/>}/>
                  </div>
                  <div className={m.download}>
                    <span className={m.download__text}>1.2 Mb</span>
                    <img src={Download} alt="icon" />
                  </div>
                </div>
                <div className={m.lastFiles__item}>
                  <img src={Word} alt="word" />
                  <div className={m.nameDocument__wrapper}>
                  <Event text1={<Text12400 text='31.12.2018'/>} text2={<Text13700 text='Contract template.docx'/>}/>
                  </div>
                  <div className={m.download}>
                    <span className={m.download__text}>1.2 Mb</span>
                    <img src={Download} alt="icon" />
                  </div>
                </div>
                <div className={m.lastFiles__item}>
                  <img src={Word} alt="word" />
                  <div className={m.nameDocument__wrapper}>
                  <Event text1={<Text12400 text='31.12.2018'/>} text2={<Text13700 text='Contract template.docx'/>}/>
                  </div>
                  <div className={m.download}>
                    <span className={m.download__text}>1.2 Mb</span>
                    <img src={Download} alt="icon" />
                  </div>
                </div>
                <div className={m.lastFiles__item}>
                  <img src={Word} alt="word" />
                  <div className={m.nameDocument__wrapper}>
                  <Event text1={<Text12400 text='31.12.2018'/>} text2={<Text13700 text='Contract template.docx'/>}/>
                  </div>
                  <div className={m.download}>
                    <span className={m.download__text}>1.2 Mb</span>
                    <img src={Download} alt="icon" />
                  </div>
                </div>
                <div className={m.lastFiles__item}>
                  <img src={Word} alt="word" />
                  <div className={m.nameDocument__wrapper}>
                  <Event text1={<Text12400 text='31.12.2018'/>} text2={<Text13700 text='Contract template.docx'/>}/>
                  </div>
                  <div className={m.download}>
                    <span className={m.download__text}>1.2 Mb</span>
                    <img src={Download} alt="icon" />
                  </div>
                </div>
                <div className={m.lastFiles__item}>
                  <img src={Word} alt="word" />
                  <div className={m.nameDocument__wrapper}>
                  <Event text1={<Text12400 text='31.12.2018'/>} text2={<Text13700 text='Contract template.docx'/>}/>
                  </div>
                  <div className={m.download}>
                    <span className={m.download__text}>1.2 Mb</span>
                    <img src={Download} alt="icon" />
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
      <Footer text={<Text14400 text='Админ пользователь' color='#A9ADB5'/>}/>
    </div>
  );
};
export default Main;