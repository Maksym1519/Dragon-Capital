import ab from "./addEmployeeBig.module.scss";
import Header from "../../organisms/Header";
import Footer from "../../organisms/Footer";
import Radio from "../../atoms/Radio";
import Text60700 from "../../atoms/Text60700";
import Text15400С from "../../atoms/Text15400С";
import Text21700 from "../../atoms/Text21700";
import Text28700 from "../../atoms/Text28700";
import Text17700 from "../../atoms/Text17700";
import ImgTextTemplate from "../../templates/ImgTextTemplate";
import Ava from "../../../images/avatar-bigPhoto.webp";
import Ava1 from "../../../images/ava1-sub.webp";
import Ava2 from "../../../images/ava2-sub.webp";
import Ava3 from "../../../images/ava3-sub.webp";
import Ava4 from "../../../images/ava-girl-30.svg";
import Ava0 from "../../../images/ava0-sub.webp";
import ChooseIcon from "../../../images/choose-photo.svg";
import Calendar from "../../../images/holiday-calendar.svg";
import ArrowDown from "../../../images/header-arrow-down.svg";
import Search from "../../../images/Search.svg";
import Close from "../../../images/close-red.svg";
import { useState } from "react";

const AddEmployee = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const handleOptionClick = (option) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };
  //-----------------------------------------------------------------------------
  const [isClicked, setIsClicked] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);
  const [isClicked3, setIsClicked3] = useState(false);
  const [isClicked4, setIsClicked4] = useState(false);
  const [isClicked5, setIsClicked5] = useState(false);
  const [isClicked6, setIsClicked6] = useState(false);
  const [isClicked7, setIsClicked7] = useState(false);
  const [isClicked8, setIsClicked8] = useState(false);
  const [isClicked9, setIsClicked9] = useState(false);
  const [isClicked10, setIsClicked10] = useState(false);
  const [isClicked11, setIsClicked11] = useState(false);
  const [isClicked12, setIsClicked12] = useState(false);
  const [isClicked13, setIsClicked13] = useState(false);
  const [isClicked14, setIsClicked14] = useState(false);
  const [isClicked15, setIsClicked15] = useState(false);
  const [isClicked16, setIsClicked16] = useState(false);
  const [isClicked17, setIsClicked17] = useState(false);
  const [isClicked18, setIsClicked18] = useState(false);
  const [isClicked19, setIsClicked19] = useState(false);
  const [isClicked20, setIsClicked20] = useState(false);
  const [isClicked21, setIsClicked21] = useState(false);
  const [isClicked22, setIsClicked22] = useState(false);
  const [isClicked23, setIsClicked23] = useState(false);
  const [isClicked24, setIsClicked24] = useState(false);
  const [isActive, setIsActive] = useState(true);
  const [isActive2, setIsActive2] = useState(true);
  const toggleActive = () => {
    setIsActive(!isActive);
  };
  const toggleActive2 = () => {
    setIsActive2(!isActive2);
  };
  const toggleMenu = () => {
    setIsClicked(!isClicked);
  };
  const toggleMenu2 = () => {
    setIsClicked2(!isClicked2);
  };
  const toggleMenu3 = () => {
    setIsClicked3(!isClicked3);
  };
  const toggleMenu4 = () => {
    setIsClicked4(!isClicked4);
  };
  const toggleMenu5 = () => {
    setIsClicked5(!isClicked5);
  };
  const toggleMenu6 = () => {
    setIsClicked6(!isClicked6);
  };
  const toggleMenu7 = () => {
    setIsClicked7(!isClicked7);
  };
  const toggleMenu8 = () => {
    setIsClicked8(!isClicked8);
  };
  const toggleMenu9 = () => {
    setIsClicked9(!isClicked9);
  };
  const toggleMenu10 = () => {
    setIsClicked10(!isClicked10);
  };
  const toggleMenu11 = () => {
    setIsClicked11(!isClicked11);
  };
  const toggleMenu12 = () => {
    setIsClicked12(!isClicked12);
  };
  const toggleMenu13 = () => {
    setIsClicked13(!isClicked13);
  };
  const toggleMenu14 = () => {
    setIsClicked14(!isClicked14);
  };
  const toggleMenu15 = () => {
    setIsClicked15(!isClicked15);
  };
  const toggleMenu16 = () => {
    setIsClicked16(!isClicked16);
  };
  const toggleMenu17 = () => {
    setIsClicked17(!isClicked17);
  };
  const toggleMenu18 = () => {
    setIsClicked18(!isClicked18);
  };
  const toggleMenu19 = () => {
    setIsClicked19(!isClicked19);
  };
  const toggleMenu20 = () => {
    setIsClicked20(!isClicked20);
  };
  const toggleMenu21 = () => {
    setIsClicked21(!isClicked21);
  };
  const toggleMenu22 = () => {
    setIsClicked22(!isClicked22);
  };
  const toggleMenu23 = () => {
    setIsClicked23(!isClicked23);
  };
  const toggleMenu24 = () => {
    setIsClicked24(!isClicked24);
  };
  //---------------------------------------------------------
  const [clickedItems1, setClickedItems1] = useState([]);

  const handleItemClicked1 = (clickedItem) => {
    setClickedItems1([...clickedItems1, clickedItem]);
  };
  const [clickedItems2, setClickedItems2] = useState([]);

  const handleItemClicked2 = (clickedItem) => {
    setClickedItems2([...clickedItems2, clickedItem]);
  };
  const [clickedItems3, setClickedItems3] = useState([]);

  const handleItemClicked3 = (clickedItem) => {
    setClickedItems3([...clickedItems3, clickedItem]);
  };

  const [clickedItems4, setClickedItems4] = useState([]);

  const handleItemClicked4 = (clickedItem) => {
    setClickedItems4([...clickedItems4, clickedItem]);
  };
  const [clickedItems5, setClickedItems5] = useState([]);

  const handleItemClicked5 = (clickedItem) => {
    setClickedItems5([...clickedItems5, clickedItem]);
  };
  const [clickedItems6, setClickedItems6] = useState([]);

  const handleItemClicked6 = (clickedItem) => {
    setClickedItems6([...clickedItems6, clickedItem]);
  };
  const [clickedItems7, setClickedItems7] = useState([]);

  const handleItemClicked7 = (clickedItem) => {
    setClickedItems7([...clickedItems7, clickedItem]);
  };
  const [clickedItems8, setClickedItems8] = useState([]);

  const handleItemClicked8 = (clickedItem) => {
    setClickedItems8([...clickedItems8, clickedItem]);
  };
  const [clickedItems9, setClickedItems9] = useState([]);

  const handleItemClicked9 = (clickedItem) => {
    setClickedItems9([...clickedItems9, clickedItem]);
  };

  const [clickedItems10, setClickedItems10] = useState([]);

  const handleItemClicked10 = (clickedItem) => {
    setClickedItems10([...clickedItems4, clickedItem]);
  };
  const [clickedItems11, setClickedItems11] = useState([]);

  const handleItemClicked11 = (clickedItem) => {
    setClickedItems11([...clickedItems11, clickedItem]);
  };
  const [clickedItems12, setClickedItems12] = useState([]);

  const handleItemClicked12 = (clickedItem) => {
    setClickedItems12([...clickedItems12, clickedItem]);
  };
  //---------------------------------------------------------------
  const [isDelete, setIsDelete] = useState(true);
  const deleteItem = () => {
    setIsDelete(false);
  };
  const [isDelete2, setIsDelete2] = useState(true);
  const deleteItem2 = () => {
    setIsDelete2(false);
  };
  const [isDelete3, setIsDelete3] = useState(true);
  const deleteItem3 = () => {
    setIsDelete3(false);
  };
  const [isDelete4, setIsDelete4] = useState(true);
  const deleteItem4 = () => {
    setIsDelete4(false);
  };
  const [isDelete5, setIsDelete5] = useState(true);
  const deleteItem5 = () => {
    setIsDelete5(false);
  };
  const [isDelete6, setIsDelete6] = useState(true);
  const deleteItem6 = () => {
    setIsDelete6(false);
  };
  const [isDelete7, setIsDelete7] = useState(true);
  const deleteItem7 = () => {
    setIsDelete7(false);
  };
  const [isDelete8, setIsDelete8] = useState(true);
  const deleteItem8 = () => {
    setIsDelete8(false);
  };
  const [isDelete9, setIsDelete9] = useState(true);
  const deleteItem9 = () => {
    setIsDelete9(false);
  };
  const [isDelete10, setIsDelete10] = useState(true);
  const deleteItem10 = () => {
    setIsDelete10(false);
  };
  const [isDelete11, setIsDelete11] = useState(true);
  const deleteItem11 = () => {
    setIsDelete11(false);
  };
  const [isDelete12, setIsDelete12] = useState(true);
  const deleteItem12 = () => {
    setIsDelete12(false);
  };

  return (
    <div className={ab.wrapper}>
      <Header />
      <div className={ab.background}>
        <div className={ab.container}>
          <div className={ab.title}>
            <Text60700 text="Редактировать сотрудника" />
          </div>
          <div className={ab.body}>
            <div className={ab.personalInformation__wrapper}>
              <Text28700 text="Персональная информация" />
              <div className={ab.personalInformation}>
                <div className={ab.contacts}>
                  <div className={ab.contacts__avaWrapper}>
                    <Text21700 text="Изображение" />
                    <div className={ab.body}>
                      <img src={Ava} alt="ava" />
                      <div className={ab.img__infoWrapper}>
                      <ImgTextTemplate
                          image={ChooseIcon}
                          text={
                            <Text15400С
                              text="Выбрать другое фото"
                              color="#277D59"
                              underline={true}
                             />
                          }
                          margin='170px'
                        />
                        <Text15400С
                          text="Загрузите квадратное фото в формате png, jpeg,размером не более 400 кб"
                          color="rgba(61, 61, 61, 0.4)"
                        />
                        </div>
                    </div>
                  </div>
                  <div className={ab.contactsInformation}>
                    <h3 className={ab.title}>
                      <Text21700 text="Контактная информация" />
                    </h3>
                    <form action="#" className={ab.inputs__form}>
                      <div className={ab.input__wrapper}>
                        <label htmlFor="email">
                          <Text15400С
                            text="Email"
                            color="rgba(61, 61, 61, 0.4)"
                          />
                        </label>
                        <input
                          type="email"
                          className={ab.contactsInformation__input}
                          id="email"
                          name="contact"
                          placeholder="ab.shevchenko@dragon.com.ua"
                        />
                      </div>
                      <div className={ab.input__wrapper}>
                        <label htmlFor="number">
                          <Text15400С
                            text="Телефон мобильный"
                            color="rgba(61, 61, 61, 0.4)"
                          />
                        </label>
                        <input
                          type="number"
                          className={ab.contactsInformation__input}
                          id="email"
                          name="contact"
                          placeholder="+380951649520"
                        />
                      </div>
                      <div className={ab.input__wrapper}>
                        <label htmlFor="number">
                          <Text15400С
                            text="Телефон дополнительный"
                            color="rgba(61, 61, 61, 0.4)"
                          />
                        </label>
                        <input
                          type="email"
                          className={ab.contactsInformation__input}
                          id="email"
                          name="contact"
                          placeholder="+380951649520"
                        />
                      </div>
                      <div className={ab.input__wrapper}>
                        <label htmlFor="number">
                          <Text15400С
                            text="Внутренний номер"
                            color="rgba(61, 61, 61, 0.4)"
                          />
                        </label>
                        <input
                          type="email"
                          className={ab.contactsInformation__input}
                          id="email"
                          name="contact"
                          placeholder="421845"
                        />
                      </div>
                    </form>
                  </div>
                </div>
                <div className={ab.personal}>
                  <h3 className={ab.title}>
                    <Text21700 text="Личные данные" />
                  </h3>
                  <form action="#" className={ab.inputs__form}>
                    <div className={ab.input__wrapper}>
                      <label htmlFor="number">
                        <Text15400С text="Имя" color="rgba(61, 61, 61, 0.4)" />
                      </label>
                      <input
                        type="email"
                        className={ab.contactsInformation__input}
                        id="email"
                        name="contact"
                        placeholder="Александр"
                      />
                    </div>
                    <div className={ab.input__wrapper}>
                      <label htmlFor="number">
                        <Text15400С
                          text="Имя (англ)"
                          color="rgba(61, 61, 61, 0.4)"
                        />
                      </label>
                      <input
                        type="email"
                        className={ab.contactsInformation__input}
                        id="email"
                        name="contact"
                        placeholder="Alexander"
                      />
                    </div>
                    <div className={ab.input__wrapper}>
                      <label htmlFor="number">
                        <Text15400С
                          text="Фамилия"
                          color="rgba(61, 61, 61, 0.4)"
                        />
                      </label>
                      <input
                        type="email"
                        className={ab.contactsInformation__input}
                        id="email"
                        name="contact"
                        placeholder="Шевченко"
                      />
                    </div>
                    <div className={ab.input__wrapper}>
                      <label htmlFor="number">
                        <Text15400С
                          text="Фамилия (англ)"
                          color="rgba(61, 61, 61, 0.4)"
                        />
                      </label>
                      <input
                        type="email"
                        className={ab.contactsInformation__input}
                        id="email"
                        name="contact"
                        placeholder="Shevchenko"
                      />
                    </div>
                    <div className={ab.input__wrapper}>
                      <label htmlFor="number">
                        <Text15400С
                          text="Должность"
                          color="rgba(61, 61, 61, 0.4)"
                        />
                      </label>
                      <input
                        type="email"
                        className={ab.contactsInformation__input}
                        id="email"
                        name="contact"
                        placeholder="Директор по маркетингу"
                      />
                    </div>
                    <div className={ab.input__wrapper}>
                      <label htmlFor="number">
                        <Text15400С
                          text="Должность (англ)"
                          color="rgba(61, 61, 61, 0.4)"
                        />
                      </label>
                      <input
                        type="email"
                        className={ab.contactsInformation__input}
                        id="email"
                        name="contact"
                        placeholder="Marketing director"
                      />
                    </div>
                    <div className={ab.input__wrapper}>
                      <label htmlFor="number">
                        <Text15400С
                          text="Номер пропуска"
                          color="rgba(61, 61, 61, 0.4)"
                        />
                      </label>
                      <input
                        type="number"
                        className={ab.contactsInformation__input}
                        id="email"
                        name="contact"
                        placeholder="457"
                      />
                    </div>
                    <div className={ab.input__wrapper}>
                      <label htmlFor="number">
                        <Text15400С
                          text="День рождения"
                          color="rgba(61, 61, 61, 0.4)"
                        />
                      </label>
                      <input
                        type="number"
                        className={ab.contactsInformation__input}
                        id="email"
                        name="contact"
                        placeholder="12.01.1989"
                      />
                    </div>
                    <div className={ab.double__input}>
                      <div className={ab.double__input__item}>
                        <label htmlFor="number">
                          <Text15400С
                            text="Номер страховки"
                            color="rgba(61, 61, 61, 0.4)"
                          />
                        </label>
                        <div className={ab.input__insurence}>
                          <Text15400С text="568952367" />
                        </div>
                      </div>
                      <div className={ab.double__input__item}>
                        <label htmlFor="number">
                          <Text15400С
                            text="Действительна до"
                            color="rgba(61, 61, 61, 0.4)"
                          />
                        </label>
                        <div className={ab.input__insurence}>
                          <Text15400С text="05.11.2019" />
                          <img src={Calendar} />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className={ab.settings__wrapper}>
              <Text28700 text="Настройки" />
              <div className={ab.settings}>
                <div className={ab.settings__settings}>
                  <div className={ab.row__option}>
                    <ImgTextTemplate
                      img={<Radio />}
                      text={<Text15400С text="Сделать пользователя активным" />}
                    />
                  </div>
                  <div className={ab.settings__items__wrapper}>
                    {/* item1----------------------------------------------- */}
                    <div className={ab.settings__item}>
                      <Text15400С text="Язык по умолчанию" />
                      <div className={ab.input__accordion}>
                        <Text15400С text="Русский" />
                        <img
                          src={ArrowDown}
                          alt="arrow"
                          onClick={toggleMenu}
                          className={`${isClicked ? ab.rotate : ""}`}
                        />
                      </div>
                      {isClicked && (
                        <div className={ab.languages}>
                          <Text15400С text="Ukrainian" />
                          <Text15400С text="English" />
                          <Text15400С text="German" />
                        </div>
                      )}
                    </div>
                    {/* item2----------------------------------------------- */}
                    <div className={ab.settings__item}>
                      <Text15400С text="Avada-Media" />
                      <div className={ab.input__accordion}>
                        <Text15400С text="Cluster" />
                        <img
                          src={ArrowDown}
                          alt="arrow"
                          onClick={toggleMenu2}
                          className={`${isClicked2 ? ab.rotate : ""}`}
                        />
                      </div>
                      {isClicked2 && (
                        <div className={ab.languages}>
                          <Text15400С text="IT" />
                          <Text15400С text="Managment" />
                          <Text15400С text="HR" />
                        </div>
                      )}
                    </div>
                    {/* item3----------------------------------------------- */}
                    <div className={ab.settings__item}>
                      <Text15400С text="Департамент" />
                      <div className={ab.input__accordion}>
                        <Text15400С text="Русский" />
                        <img
                          src={ArrowDown}
                          alt="arrow"
                          onClick={toggleMenu3}
                          className={`${isClicked3 ? ab.rotate : ""}`}
                        />
                      </div>
                      {isClicked3 && (
                        <div className={ab.languages}>
                          <Text15400С text="Technical" />
                          <Text15400С text="Managment" />
                          <Text15400С text="HR" />
                        </div>
                      )}
                    </div>
                    {/* item4----------------------------------------------- */}
                    <div className={ab.settings__item}>
                      <Text15400С text="Дата найма" />
                      <div className={ab.input__accordion}>
                        <Text15400С text="Русский" />
                        <img src={Calendar} alt="arrow" onClick={toggleMenu4} />
                      </div>
                      {isClicked4 && (
                        <div className={ab.languages}>
                          <Text15400С text="Ukrainian" />
                          <Text15400С text="English" />
                          <Text15400С text="German" />
                        </div>
                      )}
                    </div>
                    {/* item----------------------------------------------- */}
                  </div>
                  <div className={ab.row__option__wrapper}>
                    <div className={ab.row__option}>
                      <ImgTextTemplate
                        img={<Radio />}
                        text={
                          <Text15400С text="Сделать пользователя активным" />
                        }
                      />
                    </div>
                    <div className={ab.padding}>
                      <Text15400С
                        text="(При первом посещении будет предложено ознакомиться с правилами работы)"
                        color="rgba(61, 61, 61, 0.4)"
                      />
                    </div>
                  </div>
                </div>
                <div className={ab.settings__filters}>
                  <div className={ab.row__option}>
                    <ImgTextTemplate
                      img={<Radio />}
                      text={<Text15400С text="Отображение в директории" />}
                    />
                  </div>
                  <div className={ab.settings__items__wrapper}>
                    {/* item1----------------------------------------------- */}
                    <div className={ab.settings__item}>
                      <div className={ab.input__accordion}>
                        <Text15400С text="Руководитель" />
                        <img
                          src={ArrowDown}
                          alt="arrow"
                          onClick={toggleMenu5}
                          className={`${isClicked5 ? ab.rotate : ""}`}
                        />
                      </div>
                      {isClicked5 && (
                        <div className={ab.languages}>
                          <Text15400С text="Заместитель руководителя" />
                          <Text15400С text="Начальник отдела" />
                          <Text15400С text="Главный специалист" />
                        </div>
                      )}
                    </div>
                    {/* item2----------------------------------------------- */}
                    <div className={ab.settings__item}>
                      <div className={ab.input__accordion}>
                        <Text15400С text="Кому приходят запросы из календаря" />
                        <img
                          src={ArrowDown}
                          alt="arrow"
                          onClick={toggleMenu6}
                          className={`${isClicked6 ? ab.rotate : ""}`}
                        />
                      </div>
                      {isClicked6 && (
                        <div className={ab.languages}>
                          <Text15400С text="Заместитель руководителя" />
                          <Text15400С text="Начальник отдела" />
                          <Text15400С text="Главный специалист" />
                        </div>
                      )}
                    </div>
                    {/* item----------------------------------------------- */}
                  </div>
                  <div className={ab.roles__wrapper}>
                    <Text21700 text="Роли пользователя" />
                    <div className={ab.options__wrapper}>
                      <div className={ab.row__option}>
                        <ImgTextTemplate
                          img={<Radio />}
                          text={<Text15400С text="Bonus Responcible" />}
                        />
                      </div>
                      <div className={ab.row__option}>
                        <ImgTextTemplate
                          img={<Radio />}
                          text={<Text15400С text="Employee can pass Review" />}
                        />
                      </div>
                      <div className={ab.row__option}>
                        <ImgTextTemplate
                          img={<Radio />}
                          text={<Text15400С text="IT Security" />}
                        />
                      </div>
                      <div className={ab.row__option}>
                        <ImgTextTemplate
                          img={<Radio />}
                          text={<Text15400С text="Assistent" />}
                        />
                      </div>
                      <div className={ab.row__option}>
                        <ImgTextTemplate
                          img={<Radio />}
                          text={<Text15400С text="Administrator" />}
                        />
                      </div>
                      <div className={ab.row__option}>
                        <ImgTextTemplate
                          img={<Radio />}
                          text={<Text15400С text="Head Administrator" />}
                        />
                      </div>
                      <div className={ab.row__option}>
                        <ImgTextTemplate
                          img={<Radio />}
                          text={<Text15400С text="HR" />}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* //choose----------------------------------------------------------- */}
            <div className={ab.choose}>
              <h3 className={ab.choose__title}>
                <Text28700 text="Выбрать Head" />
              </h3>
              <div className={ab.chooseOptions__wrapper}>
                <div
                  className={`${ab.item} ${isActive ? ab.active : ab.unActive}`}
                  onClick={toggleActive}
                >
                  {isActive && <Text17700 text="For employees" />}
                  {!isActive && (
                    <Text17700
                      text="For employees"
                      color="rgba(61, 61, 61, 0.3)"
                    />
                  )}
                </div>
                <div
                  className={`${ab.item} ${isActive ? ab.active : ab.unActive}`}
                  onClick={toggleActive}
                >
                  {isActive && (
                    <Text17700
                      text="For departments"
                      color="rgba(61, 61, 61, 0.3)"
                    />
                  )}
                  {!isActive && <Text17700 text="For departments" />}
                </div>
              </div>
              <div className={ab.choose__body}>
                <div className={ab.administration}>
                  <div className={ab.administration_inputWrapper}>
                    <input
                      type="text"
                      placeholder="Search by name"
                      className={ab.searchInput}
                    />
                    <img src={Search} alt="search" className={ab.search} />
                  </div>
                  <div className={ab.row__option}>
                    <ImgTextTemplate
                      img={<Radio />}
                      text={<Text15400С text="Выбрать всех" />}
                    />
                  </div>
                  {/* //first block dropdown------------------------------------------ */}
                  <div className={ab.row__option + " " + ab.administration__menu}>
                    <div
                      className={ab.administration__menu__titleWrapper}
                      onClick={toggleMenu7}
                    >
                      <ImgTextTemplate
                        img={<Radio />}
                        text={<Text17700 text="Administration" />}
                      />
                      <img
                        src={ArrowDown}
                        alt="arrow"
                        className={`${isClicked7 ? ab.rotate : ""}`}
                      />
                    </div>
                    {isClicked7 && (
                      <div className={ab.administration__menu__inner}>
                        <div
                          className={ab.inner__menu__item}
                          onClick={() =>
                            handleItemClicked1(
                              <ImgTextTemplate
                                img={<Radio />}
                                ava={Ava1}
                                text={
                                  <Text15400С text="Alexander Shevchenko" />
                                }
                              />
                            )
                          }
                        >
                          <div
                            className={ab.row__option}
                            onClick={handleOptionClick}
                          >
                            <ImgTextTemplate
                              img={<Radio />}
                              ava={Ava1}
                              text={<Text15400С text="Alexander Shevchenko" />}
                            />
                          </div>
                        </div>
                        <div
                          className={ab.inner__menu__item}
                          onClick={() =>
                            handleItemClicked2(
                              <ImgTextTemplate
                                img={<Radio />}
                                ava={Ava4}
                                text={<Text15400С text="Natalia Petrenko" />}
                              />
                            )
                          }
                        >
                          <div
                            className={ab.row__option}
                            onClick={handleOptionClick}
                          >
                            <ImgTextTemplate
                              img={<Radio />}
                              ava={Ava4}
                              text={<Text15400С text="Natalia Petrenko" />}
                            />
                          </div>
                        </div>
                        <div
                          className={ab.inner__menu__item}
                          onClick={() =>
                            handleItemClicked3(
                              <ImgTextTemplate
                                img={<Radio />}
                                ava={Ava2}
                                text={<Text15400С text="Olga Sumska" />}
                              />
                            )
                          }
                        >
                          <div
                            className={ab.row__option}
                            onClick={handleOptionClick}
                          >
                            <ImgTextTemplate
                              img={<Radio />}
                              ava={Ava2}
                              text={<Text15400С text="Olga Sumska" />}
                            />
                          </div>
                        </div>
                        <div
                          className={ab.inner__menu__item}
                          onClick={() =>
                            handleItemClicked4(
                              <ImgTextTemplate
                                img={<Radio />}
                                ava={Ava3}
                                text={
                                  <Text15400С text="Valeriy Necheporenko" />
                                }
                              />
                            )
                          }
                        >
                          <div
                            className={ab.row__option}
                            onClick={handleOptionClick}
                          >
                            <ImgTextTemplate
                              img={<Radio />}
                              ava={Ava3}
                              text={<Text15400С text="Valeriy Necheporenko" />}
                            />
                          </div>
                        </div>
                        <div
                          className={ab.inner__menu__item}
                          onClick={() =>
                            handleItemClicked5(
                              <ImgTextTemplate
                                img={<Radio />}
                                ava={Ava0}
                                text={
                                  <Text15400С text="Alexander Shevchenko" />
                                }
                              />
                            )
                          }
                        >
                          <div
                            className={ab.row__option}
                            onClick={handleOptionClick}
                          >
                            <ImgTextTemplate
                              img={<Radio />}
                              ava={Ava0}
                              text={<Text15400С text="Alexander Shevchenko" />}
                            />
                          </div>
                        </div>
                        <div
                          className={ab.inner__menu__item}
                          onClick={() =>
                            handleItemClicked6(
                              <ImgTextTemplate
                                img={<Radio />}
                                ava={Ava4}
                                text={<Text15400С text="Natalia Petrenko" />}
                              />
                            )
                          }
                        >
                          <div
                            className={ab.row__option}
                            onClick={handleOptionClick}
                          >
                            <ImgTextTemplate
                              img={<Radio />}
                              ava={Ava4}
                              text={<Text15400С text="Natalia Petrenko" />}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  {/* //second block dropdown------------------------------------------ */}
                  <div className={ab.row__option + " " + ab.administration__menu}>
                    <div
                      className={ab.administration__menu__titleWrapper}
                      onClick={toggleMenu8}
                    >
                      <ImgTextTemplate
                        img={<Radio />}
                        text={<Text17700 text="Back office" />}
                      />
                      <img
                        src={ArrowDown}
                        alt="arrow"
                        className={`${isClicked8 ? ab.rotate : ""}`}
                      />
                    </div>
                    {isClicked8 && (
                      <div className={ab.administration__menu__inner}>
                        <div className={ab.inner__menu__item}>
                          <div
                            className={ab.row__option}
                            onClick={handleOptionClick}
                          >
                            <ImgTextTemplate
                              img={<Radio />}
                              ava={Ava1}
                              text={<Text15400С text="Alexander Shevchenko" />}
                            />
                          </div>
                        </div>
                        <div className={ab.inner__menu__item}>
                          <div
                            className={ab.row__option}
                            onClick={handleOptionClick}
                          >
                            <ImgTextTemplate
                              img={<Radio />}
                              ava={Ava4}
                              text={<Text15400С text="Natalia Petrenko" />}
                            />
                          </div>
                        </div>
                        <div className={ab.inner__menu__item}>
                          <div
                            className={ab.row__option}
                            onClick={handleOptionClick}
                          >
                            <ImgTextTemplate
                              img={<Radio />}
                              ava={Ava0}
                              text={<Text15400С text="Alexander Shevchenko" />}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  {/* //third block dropdown------------------------------------------ */}
                  <div className={ab.row__option + " " + ab.administration__menu}>
                    <div
                      className={ab.administration__menu__titleWrapper}
                      onClick={toggleMenu9}
                    >
                      <ImgTextTemplate
                        img={<Radio />}
                        text={<Text17700 text="Complience" />}
                      />
                      <img
                        src={ArrowDown}
                        alt="arrow"
                        className={`${isClicked9 ? ab.rotate : ""}`}
                      />
                    </div>
                    {isClicked9 && (
                      <div className={ab.administration__menu__inner}>
                        <div className={ab.inner__menu__item}>
                          <div
                            className={ab.row__option}
                            onClick={handleOptionClick}
                          >
                            <ImgTextTemplate
                              img={<Radio />}
                              ava={Ava1}
                              text={<Text15400С text="Alexander Shevchenko" />}
                            />
                          </div>
                        </div>
                        <div className={ab.inner__menu__item}>
                          <div
                            className={ab.row__option}
                            onClick={handleOptionClick}
                          >
                            <ImgTextTemplate
                              img={<Radio />}
                              ava={Ava4}
                              text={<Text15400С text="Natalia Petrenko" />}
                            />
                          </div>
                        </div>
                        <div className={ab.inner__menu__item}>
                          <div
                            className={ab.row__option}
                            onClick={handleOptionClick}
                          >
                            <ImgTextTemplate
                              img={<Radio />}
                              ava={Ava0}
                              text={<Text15400С text="Alexander Shevchenko" />}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  {/*4------------------------------------------------------------------ */}
                  <div className={ab.row__option + " " + ab.administration__menu}>
                    <div
                      className={ab.administration__menu__titleWrapper}
                      onClick={toggleMenu10}
                    >
                      <ImgTextTemplate
                        img={<Radio />}
                        text={<Text17700 text="Custody" />}
                      />
                      <img
                        src={ArrowDown}
                        alt="arrow"
                        className={`${isClicked10 ? ab.rotate : ""}`}
                      />
                    </div>
                    {isClicked10 && (
                      <div className={ab.administration__menu__inner}>
                        <div className={ab.inner__menu__item}>
                          <div
                            className={ab.row__option}
                            onClick={handleOptionClick}
                          >
                            <ImgTextTemplate
                              img={<Radio />}
                              ava={Ava1}
                              text={<Text15400С text="Alexander Shevchenko" />}
                            />
                          </div>
                        </div>
                        <div className={ab.inner__menu__item}>
                          <div
                            className={ab.row__option}
                            onClick={handleOptionClick}
                          >
                            <ImgTextTemplate
                              img={<Radio />}
                              ava={Ava4}
                              text={<Text15400С text="Natalia Petrenko" />}
                            />
                          </div>
                        </div>
                        <div className={ab.inner__menu__item}>
                          <div
                            className={ab.row__option}
                            onClick={handleOptionClick}
                          >
                            <ImgTextTemplate
                              img={<Radio />}
                              ava={Ava0}
                              text={<Text15400С text="Alexander Shevchenko" />}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  {/*5------------------------------------------------------------------ */}
                  <div className={ab.row__option + " " + ab.administration__menu}>
                    <div
                      className={ab.administration__menu__titleWrapper}
                      onClick={toggleMenu11}
                    >
                      <ImgTextTemplate
                        img={<Radio />}
                        text={<Text17700 text="Dragon Capital Partners" />}
                      />
                      <img
                        src={ArrowDown}
                        alt="arrow"
                        className={`${isClicked11 ? ab.rotate : ""}`}
                      />
                    </div>
                    {isClicked11 && (
                      <div className={ab.administration__menu__inner}>
                        <div className={ab.inner__menu__item}>
                          <div
                            className={ab.row__option}
                            onClick={handleOptionClick}
                          >
                            <ImgTextTemplate
                              img={<Radio />}
                              ava={Ava1}
                              text={<Text15400С text="Alexander Shevchenko" />}
                            />
                          </div>
                        </div>
                        <div className={ab.inner__menu__item}>
                          <div
                            className={ab.row__option}
                            onClick={handleOptionClick}
                          >
                            <ImgTextTemplate
                              img={<Radio />}
                              ava={Ava4}
                              text={<Text15400С text="Natalia Petrenko" />}
                            />
                          </div>
                        </div>
                        <div className={ab.inner__menu__item}>
                          <div
                            className={ab.row__option}
                            onClick={handleOptionClick}
                          >
                            <ImgTextTemplate
                              img={<Radio />}
                              ava={Ava0}
                              text={<Text15400С text="Alexander Shevchenko" />}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  {/*6------------------------------------------------------------------ */}
                </div>
                <div className={ab.choose__delete}>
                  <div className={ab.choose__delete__header}>
                    Выбрано (Всего{" "}
                    <span className={ab.choose__amount}>
                      {selectedOptions.length}
                    </span>
                    ):
                  </div>
                  {isDelete && (
                    <div className={ab.delete__item}>
                      <div className={ab.delete__ietm__output}>
                        {clickedItems1}
                      </div>
                      {clickedItems1.length > 0 && (
                        <img src={Close} alt="close" onClick={deleteItem} />
                      )}
                    </div>
                  )}
                  {isDelete2 && (
                    <div className={ab.delete__item}>
                      <div className={ab.delete__ietm__output}>
                        {clickedItems2}
                      </div>
                      {clickedItems2.length > 0 && (
                        <img src={Close} alt="close" onClick={deleteItem2} />
                      )}
                    </div>
                  )}
                  {isDelete3 && (
                    <div className={ab.delete__item}>
                      <div className={ab.delete__ietm__output}>
                        {clickedItems3}
                      </div>
                      {clickedItems3.length > 0 && (
                        <img src={Close} alt="close" onClick={deleteItem3} />
                      )}
                    </div>
                  )}
                  {isDelete4 && (
                    <div className={ab.delete__item}>
                      <div className={ab.delete__ietm__output}>
                        {clickedItems4}
                      </div>
                      {clickedItems4.length > 0 && (
                        <img src={Close} alt="close" onClick={deleteItem4} />
                      )}
                    </div>
                  )}
                  {isDelete5 && (
                    <div className={ab.delete__item}>
                      <div className={ab.delete__ietm__output}>
                        {clickedItems5}
                      </div>
                      {clickedItems5.length > 0 && (
                        <img src={Close} alt="close" onClick={deleteItem5} />
                      )}
                    </div>
                  )}
                  {isDelete6 && (
                    <div className={ab.delete__item}>
                      <div className={ab.delete__ietm__output}>
                        {clickedItems6}
                      </div>
                      {clickedItems6.length > 0 && (
                        <img src={Close} alt="close" onClick={deleteItem6} />
                      )}
                    </div>
                  )}
                </div>
               </div>
            </div>
            {/* //choose2------------------------------------------------------- */}
            <div className={ab.choose}>
            <div className={ab.choose}>
              <h3 className={ab.choose__title}>
                <Text28700 text="Выбрать Review Viewer" />
              </h3>
              <div className={ab.chooseOptions__wrapper}>
                <div
                  className={`${ab.item} ${isActive ? ab.active : ab.unActive}`}
                  onClick={toggleActive}
                >
                  {isActive && <Text17700 text="For employees" />}
                  {!isActive && (
                    <Text17700
                      text="For employees"
                      color="rgba(61, 61, 61, 0.3)"
                    />
                  )}
                </div>
                <div
                  className={`${ab.item} ${isActive ? ab.active : ab.unActive}`}
                  onClick={toggleActive}
                >
                  {isActive && (
                    <Text17700
                      text="For departments"
                      color="rgba(61, 61, 61, 0.3)"
                    />
                  )}
                  {!isActive && <Text17700 text="For departments" />}
                </div>
              </div>
              <div className={ab.choose__body}>
                <div className={ab.administration}>
                  <div className={ab.administration_inputWrapper}>
                    <input
                      type="text"
                      placeholder="Search by name"
                      className={ab.searchInput}
                    />
                    <img src={Search} alt="search" className={ab.search} />
                  </div>
                  <div className={ab.row__option}>
                    <ImgTextTemplate
                      img={<Radio />}
                      text={<Text15400С text="Выбрать всех" />}
                    />
                  </div>
                  {/* //first block dropdown------------------------------------------ */}
                  <div className={ab.row__option + " " + ab.administration__menu}>
                    <div
                      className={ab.administration__menu__titleWrapper}
                      onClick={toggleMenu12}
                    >
                      <ImgTextTemplate
                        img={<Radio />}
                        text={<Text17700 text="Administration" />}
                      />
                      <img
                        src={ArrowDown}
                        alt="arrow"
                        className={`${isClicked12 ? ab.rotate : ""}`}
                      />
                    </div>
                    {isClicked12 && (
                      <div className={ab.administration__menu__inner}>
                        <div
                          className={ab.inner__menu__item}
                          onClick={() =>
                            handleItemClicked7(
                              <ImgTextTemplate
                                img={<Radio />}
                                ava={Ava1}
                                text={
                                  <Text15400С text="Alexander Shevchenko" />
                                }
                              />
                            )
                          }
                        >
                          <div
                            className={ab.row__option}
                            onClick={handleOptionClick}
                          >
                            <ImgTextTemplate
                              img={<Radio />}
                              ava={Ava1}
                              text={<Text15400С text="Alexander Shevchenko" />}
                            />
                          </div>
                        </div>
                        <div
                          className={ab.inner__menu__item}
                          onClick={() =>
                            handleItemClicked8(
                              <ImgTextTemplate
                                img={<Radio />}
                                ava={Ava4}
                                text={<Text15400С text="Natalia Petrenko" />}
                              />
                            )
                          }
                        >
                          <div
                            className={ab.row__option}
                            onClick={handleOptionClick}
                          >
                            <ImgTextTemplate
                              img={<Radio />}
                              ava={Ava4}
                              text={<Text15400С text="Natalia Petrenko" />}
                            />
                          </div>
                        </div>
                        <div
                          className={ab.inner__menu__item}
                          onClick={() =>
                            handleItemClicked9(
                              <ImgTextTemplate
                                img={<Radio />}
                                ava={Ava2}
                                text={<Text15400С text="Olga Sumska" />}
                              />
                            )
                          }
                        >
                          <div
                            className={ab.row__option}
                            onClick={handleOptionClick}
                          >
                            <ImgTextTemplate
                              img={<Radio />}
                              ava={Ava2}
                              text={<Text15400С text="Olga Sumska" />}
                            />
                          </div>
                        </div>
                        <div
                          className={ab.inner__menu__item}
                          onClick={() =>
                            handleItemClicked10(
                              <ImgTextTemplate
                                img={<Radio />}
                                ava={Ava3}
                                text={
                                  <Text15400С text="Valeriy Necheporenko" />
                                }
                              />
                            )
                          }
                        >
                          <div
                            className={ab.row__option}
                            onClick={handleOptionClick}
                          >
                            <ImgTextTemplate
                              img={<Radio />}
                              ava={Ava3}
                              text={<Text15400С text="Valeriy Necheporenko" />}
                            />
                          </div>
                        </div>
                        <div
                          className={ab.inner__menu__item}
                          onClick={() =>
                            handleItemClicked11(
                              <ImgTextTemplate
                                img={<Radio />}
                                ava={Ava0}
                                text={
                                  <Text15400С text="Alexander Shevchenko" />
                                }
                              />
                            )
                          }
                        >
                          <div
                            className={ab.row__option}
                            onClick={handleOptionClick}
                          >
                            <ImgTextTemplate
                              img={<Radio />}
                              ava={Ava0}
                              text={<Text15400С text="Alexander Shevchenko" />}
                            />
                          </div>
                        </div>
                        <div
                          className={ab.inner__menu__item}
                          onClick={() =>
                            handleItemClicked12(
                              <ImgTextTemplate
                                img={<Radio />}
                                ava={Ava4}
                                text={<Text15400С text="Natalia Petrenko" />}
                              />
                            )
                          }
                        >
                          <div
                            className={ab.row__option}
                            onClick={handleOptionClick}
                          >
                            <ImgTextTemplate
                              img={<Radio />}
                              ava={Ava4}
                              text={<Text15400С text="Natalia Petrenko" />}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  {/* //second block dropdown------------------------------------------ */}
                  <div className={ab.row__option + " " + ab.administration__menu}>
                    <div
                      className={ab.administration__menu__titleWrapper}
                      onClick={toggleMenu13}
                    >
                      <ImgTextTemplate
                        img={<Radio />}
                        text={<Text17700 text="Back office" />}
                      />
                      <img
                        src={ArrowDown}
                        alt="arrow"
                        className={`${isClicked13 ? ab.rotate : ""}`}
                      />
                    </div>
                    {isClicked13 && (
                      <div className={ab.administration__menu__inner}>
                        <div className={ab.inner__menu__item}>
                          <div
                            className={ab.row__option}
                            onClick={handleOptionClick}
                          >
                            <ImgTextTemplate
                              img={<Radio />}
                              ava={Ava1}
                              text={<Text15400С text="Alexander Shevchenko" />}
                            />
                          </div>
                        </div>
                        <div className={ab.inner__menu__item}>
                          <div
                            className={ab.row__option}
                            onClick={handleOptionClick}
                          >
                            <ImgTextTemplate
                              img={<Radio />}
                              ava={Ava4}
                              text={<Text15400С text="Natalia Petrenko" />}
                            />
                          </div>
                        </div>
                        <div className={ab.inner__menu__item}>
                          <div
                            className={ab.row__option}
                            onClick={handleOptionClick}
                          >
                            <ImgTextTemplate
                              img={<Radio />}
                              ava={Ava0}
                              text={<Text15400С text="Alexander Shevchenko" />}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  {/* //third block dropdown------------------------------------------ */}
                  <div className={ab.row__option + " " + ab.administration__menu}>
                    <div
                      className={ab.administration__menu__titleWrapper}
                      onClick={toggleMenu14}
                    >
                      <ImgTextTemplate
                        img={<Radio />}
                        text={<Text17700 text="Complience" />}
                      />
                      <img
                        src={ArrowDown}
                        alt="arrow"
                        className={`${isClicked9 ? ab.rotate : ""}`}
                      />
                    </div>
                    {isClicked14 && (
                      <div className={ab.administration__menu__inner}>
                        <div className={ab.inner__menu__item}>
                          <div
                            className={ab.row__option}
                            onClick={handleOptionClick}
                          >
                            <ImgTextTemplate
                              img={<Radio />}
                              ava={Ava1}
                              text={<Text15400С text="Alexander Shevchenko" />}
                            />
                          </div>
                        </div>
                        <div className={ab.inner__menu__item}>
                          <div
                            className={ab.row__option}
                            onClick={handleOptionClick}
                          >
                            <ImgTextTemplate
                              img={<Radio />}
                              ava={Ava4}
                              text={<Text15400С text="Natalia Petrenko" />}
                            />
                          </div>
                        </div>
                        <div className={ab.inner__menu__item}>
                          <div
                            className={ab.row__option}
                            onClick={handleOptionClick}
                          >
                            <ImgTextTemplate
                              img={<Radio />}
                              ava={Ava0}
                              text={<Text15400С text="Alexander Shevchenko" />}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  {/*4------------------------------------------------------------------ */}
                  <div className={ab.row__option + " " + ab.administration__menu}>
                    <div
                      className={ab.administration__menu__titleWrapper}
                      onClick={toggleMenu15}
                    >
                      <ImgTextTemplate
                        img={<Radio />}
                        text={<Text17700 text="Custody" />}
                      />
                      <img
                        src={ArrowDown}
                        alt="arrow"
                        className={`${isClicked15 ? ab.rotate : ""}`}
                      />
                    </div>
                    {isClicked15 && (
                      <div className={ab.administration__menu__inner}>
                        <div className={ab.inner__menu__item}>
                          <div
                            className={ab.row__option}
                            onClick={handleOptionClick}
                          >
                            <ImgTextTemplate
                              img={<Radio />}
                              ava={Ava1}
                              text={<Text15400С text="Alexander Shevchenko" />}
                            />
                          </div>
                        </div>
                        <div className={ab.inner__menu__item}>
                          <div
                            className={ab.row__option}
                            onClick={handleOptionClick}
                          >
                            <ImgTextTemplate
                              img={<Radio />}
                              ava={Ava4}
                              text={<Text15400С text="Natalia Petrenko" />}
                            />
                          </div>
                        </div>
                        <div className={ab.inner__menu__item}>
                          <div
                            className={ab.row__option}
                            onClick={handleOptionClick}
                          >
                            <ImgTextTemplate
                              img={<Radio />}
                              ava={Ava0}
                              text={<Text15400С text="Alexander Shevchenko" />}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  {/*5------------------------------------------------------------------ */}
                  <div className={ab.row__option + " " + ab.administration__menu}>
                    <div
                      className={ab.administration__menu__titleWrapper}
                      onClick={toggleMenu16}
                    >
                      <ImgTextTemplate
                        img={<Radio />}
                        text={<Text17700 text="Dragon Capital Partners" />}
                      />
                      <img
                        src={ArrowDown}
                        alt="arrow"
                        className={`${isClicked11 ? ab.rotate : ""}`}
                      />
                    </div>
                    {isClicked16 && (
                      <div className={ab.administration__menu__inner}>
                        <div className={ab.inner__menu__item}>
                          <div
                            className={ab.row__option}
                            onClick={handleOptionClick}
                          >
                            <ImgTextTemplate
                              img={<Radio />}
                              ava={Ava1}
                              text={<Text15400С text="Alexander Shevchenko" />}
                            />
                          </div>
                        </div>
                        <div className={ab.inner__menu__item}>
                          <div
                            className={ab.row__option}
                            onClick={handleOptionClick}
                          >
                            <ImgTextTemplate
                              img={<Radio />}
                              ava={Ava4}
                              text={<Text15400С text="Natalia Petrenko" />}
                            />
                          </div>
                        </div>
                        <div className={ab.inner__menu__item}>
                          <div
                            className={ab.row__option}
                            onClick={handleOptionClick}
                          >
                            <ImgTextTemplate
                              img={<Radio />}
                              ava={Ava0}
                              text={<Text15400С text="Alexander Shevchenko" />}
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  {/*6------------------------------------------------------------------ */}
                </div>
                <div className={ab.choose__delete}>
                  <div className={ab.choose__delete__header}>
                    Выбрано (Всего{" "}
                    <span className={ab.choose__amount}>
                      {selectedOptions.length}
                    </span>
                    ):
                  </div>
                  {isDelete && (
                    <div className={ab.delete__item}>
                      <div className={ab.delete__ietm__output}>
                        {clickedItems1}
                      </div>
                      {clickedItems1.length > 0 && (
                        <img src={Close} alt="close" onClick={deleteItem} />
                      )}
                    </div>
                  )}
                  {isDelete2 && (
                    <div className={ab.delete__item}>
                      <div className={ab.delete__ietm__output}>
                        {clickedItems2}
                      </div>
                      {clickedItems2.length > 0 && (
                        <img src={Close} alt="close" onClick={deleteItem2} />
                      )}
                    </div>
                  )}
                  {isDelete3 && (
                    <div className={ab.delete__item}>
                      <div className={ab.delete__ietm__output}>
                        {clickedItems3}
                      </div>
                      {clickedItems3.length > 0 && (
                        <img src={Close} alt="close" onClick={deleteItem3} />
                      )}
                    </div>
                  )}
                  {isDelete4 && (
                    <div className={ab.delete__item}>
                      <div className={ab.delete__ietm__output}>
                        {clickedItems4}
                      </div>
                      {clickedItems4.length > 0 && (
                        <img src={Close} alt="close" onClick={deleteItem4} />
                      )}
                    </div>
                  )}
                  {isDelete5 && (
                    <div className={ab.delete__item}>
                      <div className={ab.delete__ietm__output}>
                        {clickedItems5}
                      </div>
                      {clickedItems5.length > 0 && (
                        <img src={Close} alt="close" onClick={deleteItem5} />
                      )}
                    </div>
                  )}
                  {isDelete6 && (
                    <div className={ab.delete__item}>
                      <div className={ab.delete__ietm__output}>
                        {clickedItems6}
                      </div>
                      {clickedItems6.length > 0 && (
                        <img src={Close} alt="close" onClick={deleteItem6} />
                      )}
                    </div>
                  )}
                </div>
               </div>
            </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default AddEmployee;
