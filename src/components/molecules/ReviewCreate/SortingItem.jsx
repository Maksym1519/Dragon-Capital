import s from './sortingItem.module.scss';
import { useState } from 'react';
import Text15400С from '../../atoms/Text15400С';
import ArrowDown from "../../../images/header-arrow-down.svg";
import Calendar from '../../../images/holiday-calendar.svg'

const SortingItem = (props) => {
    const [isClicked, setIsClicked] = useState(false);
    const toggleMenu = () => {
        setIsClicked(!isClicked);
      };
    return (
        <div className={s.settings__item}>
        {props.text1}
        <div className={s.input__accordion}>
          {props.text2}
          {/* <img
            src={ArrowDown}
            alt="arrow"
            onClick={toggleMenu}
            className={`${isClicked ? s.rotate : ""}`}
          /> */}
           {props.calendar && <img src={props.calendar} />}
           {props.arrow && <img src={props.arrow} onClick={toggleMenu} className={`${isClicked ? s.rotate : ""}`}/>}
        </div>
        {isClicked && (
          <div className={s.languages}>
            <Text15400С text="01.01.2023" />
            <Text15400С text="01.02.2023" />
            <Text15400С text="01.03.2023" />
          </div>
        )}
      </div>
    )
}

export default SortingItem;