import h from "./header.module.scss";
import { Link } from "react-router-dom";
import Text12400 from "../atoms/Text12400";
import Text14400 from "../atoms/Text14400";
import Text17400 from "../atoms/Text17400";
import ProfileMenu from "../molecules/ProfileMenu";
import Logo from "../../images/header-logo.svg";
import Arrow from "../../images/header-arrow-down.svg";
import Bell from "../../images/bell-dark.svg";
import Ava from "../../images/header-white-ava.webp";
import { useState } from "react";

const Header = () => {
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
          <div className={h.logo__wrapper}>
            <img src={Logo} alt="logo" loading="lazy" />
          </div>
        </Link>
        <div className={h.language__wrapper}>
          {/* <Text12400 text={'Корпоративный портал'} /> */}
          <div className={h.language__choose}>
            <Text17400 text={"Rus"} />
            <img src={Arrow} alt="icon" />
          </div>
        </div>
        <div className={h.header__navigation}>
          <Link to="/">
            <div className={h.navigation__item}>
              <Text17400 text={"Главная"} />
            </div>
          </Link>
          <Link to="/Departments">
            <div className={h.navigation__item}>
              <Text17400 text={"Департаменты"} />
            </div>
          </Link>
          <Link to="/Teams">
            <div className={h.navigation__item}>
              <Text17400 text={"Команды"} />
            </div>
          </Link>
          <Link to="/Employees">
            <div className={h.navigation__item}>
              <Text17400 text={"Сотрудники"} />
            </div>
          </Link>
           <div className={h.navigation__item + " " + h.reviewMenu__wrapper}>
              <Text17400 text={"Календарь"} />
              <img src={Arrow} alt="icon"  onClick={toggleCalendar} className={`${h.arrow} ${isCalendar ? h.arrowOpen : ""}`}/>
              {isCalendar &&
               <div className={h.calendar__menu}>
                <Link to='/Calendar'><div className={h.item}>Calendar watch</div></Link>
                <Link to='/Calendar'><div className={h.item}>Calendar check</div></Link>
                <Link to='/Calendar'><div className={h.item}>Calendar</div></Link>
               </div>
              }
            </div>
           <div className={h.navigation__item + " " + h.reviewMenu__wrapper}>
              <Text17400 text={"Ревью"} />
              <img src={Arrow} alt="icon" onClick={toggleReview} className={`${h.arrow} ${isReview ? h.arrowOpen : ""}`}/>
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
              <Text17400 text={"Useful info"} />
            </div>
          </Link>
        </div>
        <div className={h.header__profile}>
          <div className={h.bell__wrapper}>
            <img src={Bell} alt="bell" className={h.bell} />
            {/* <img src={Dot} alt="dot" className={h.dot} /> */}
          </div>
          <div className={h.ava__wrapper}>
            <img src={Ava} alt="ava" />
            <img
              src={Arrow}
              alt="arrow"
              onClick={toggleMenu}
              className={`${h.arrow} ${isOpen ? h.arrowOpen : ""}`}
            />
          </div>
        </div>
      </div>
      {isOpen && <ProfileMenu />}
    </div>
  );
};

export default Header;
