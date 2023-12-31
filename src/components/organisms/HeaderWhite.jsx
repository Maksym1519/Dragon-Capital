import h from "./header.module.scss";
import { Link } from "react-router-dom";
import hw from "./headerWhite.module.scss";
import Text12400 from "../atoms/Text12400";
import Text14400 from "../atoms/Text14400";
import Text17400 from "../atoms/Text17400";
import ProfileMenuWhite from "../molecules/ProfileMenuWhite";
import Logo from "../../images/header-white-logo.svg";
import Arrow from "../../images/arrow-down-white.svg";
import Bell from "../../images/bell-white.svg";
import Dot from "../../images/redDot.svg";
import Ava from "../../images/header-white-ava.webp";
import { useState } from "react";

const HeaderWhite = () => {
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!isOpen);
  };
  const [isReview, setReviewOpen] = useState(false)
  const toggleReview = () => {
   setReviewOpen(!isReview)
  }
  const [isCalendar, setCalendarOpen] = useState(false)
  const toggleCalendar = () => {
    setCalendarOpen(!isCalendar)
  }

  return (
    <div className={h.header__wrapper}>
      <div className={h.header__container}>
        <Link to="/">
          <div className={hw.logo__wrapper}>
            <img src={Logo} alt="logo" loading="lazy" />
          </div>
        </Link>
        <div className={h.language__wrapper}>
          {/* <Text12400 text={'Корпоративный портал'} color='#fff'/> */}
          <div className={h.language__choose}>
            <Text17400 text={"Rus"} color="#fff" />
            <img src={Arrow} alt="icon" />
          </div>
        </div>
        <div className={h.header__navigation}>
          <Link to="/">
            <div className={h.navigation__item}>
              <Text17400 text={"Главная"} color="#fff" />
            </div>
          </Link>
          <Link to="/Departments">
            <div className={h.navigation__item}>
              <Text17400 text={"Департаменты"} color="#fff" />
            </div>
          </Link>
          <Link to="/Teams">
            <div className={h.navigation__item}>
              <Text17400 text={"Команды"} color="#fff" />
            </div>
          </Link>
          <Link to="/Employees">
            <div className={h.navigation__item}>
              <Text17400 text={"Сотрудники"} color="#fff" />
            </div>
          </Link>
           <div className={h.navigation__item + " " + h.reviewMenu__wrapper} onClick={toggleCalendar}>
              <Text17400 text={"Календарь"} color="#fff" />
              <img src={Arrow} alt="icon" className={`${h.arrow} ${isCalendar ? h.arrowOpen : ""}`}/>
              {isCalendar &&
               <div className={h.calendar__menu}>
                <Link to='/Calendar'><div className={h.item}>Calendar watch</div></Link>
                <Link to='/Calendar'><div className={h.item}>Calendar check</div></Link>
                <Link to='/Calendar'><div className={h.item}>Calendar</div></Link>
               </div>
              }
            </div>
           <div className={h.navigation__item + " " + h.reviewMenu__wrapper} onClick={toggleReview}>
              <Text17400 text={"Ревью"} color="#fff" />
              <img src={Arrow} alt="icon"  className={`${h.arrow} ${isReview ? h.arrowOpen : ""}`}/>
              {isReview &&
              <div className={h.review__menu}>
                <Link to='/ReviewAdmin'><div className={h.item}>ReviewAdmin</div></Link>
                <Link to='/ReviewEmployee'><div className={h.item}>ReviewEmployee</div></Link>
                <Link to='/ReviewCreate'><div className={h.item}>ReviewCreate</div></Link>
              </div>
               }
            </div>
      
          <Link to="/UsefulInfo">
            <div className={h.navigation__item}>
              <Text17400 text={"Useful info"} color="#fff" />
            </div>
          </Link>
        </div>
        <div className={h.header__profile}>
          <div className={h.bell__wrapper}>
            <img src={Bell} alt="bell" className={h.bell} />
            {/* <img src={Dot} alt="dot" className={h.dot} /> */}
          </div>
          <div className={h.ava__wrapper}  onClick={toggleMenu}>
            <img src={Ava} alt="ava" />
            <img
              src={Arrow}
              alt="arrow"
              className={`${h.arrow} ${isOpen ? h.arrowOpen : ""}`}
            />
          </div>
        </div>
      </div>
      {isOpen && <ProfileMenuWhite />}
    </div>
  );
};

export default HeaderWhite;
