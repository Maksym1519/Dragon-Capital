import ha from "../../pages/Holidays/holidaysAdmin.module.scss";
import Text17700 from "../../atoms/Text17700";
import Text15400 from "../../atoms/Text15400С";
import Text13400 from "../../atoms/Text13400";
import HolidaysItemPeriod from "../../molecules/HolidaysItemPeriod/HolidaysItemPeriod";
import TextUnderLine from "../../templates/TextUnderline";
import Delete from "../../../images/delete-red.svg";
import Arrow from "../../../images/header-arrow-down.svg";
import Calendar from "../../../images/holiday-calendar.svg";
import ArrowSide from '../../../images/arrowSide.svg'

const HolidaysAdminItem = (props) => {
    let borderColor;
    function colored () {
   if (props.redDay) {
     borderColor = {
        borderLeft: '3px solid red',
      };
   } else {
    borderColor = {
        borderLeft: '3px solid blue'
    }
    
   }
   return borderColor
}
colored()
  return (
    <div className={ha.holidays__item} style={borderColor}>
        {/* //cell1----------------------------------- */}
      <div className={ha.holidays__item__cell + " " + ha.cell1}>
       {props.edit ? (<Text17700 text={props.text1} color='rgba(61, 61, 61, 0.5)'/>):(<Text17700 text={props.text1} />)}
      </div>
       {/* //cell2----------------------------------- */}
      <div className={ha.holidays__item__cell + " " + ha.cell2}>
        <Text15400 text={props.text2} />
        <img src={Arrow} alt="arrow" />
      </div>
       {/* //cell3----------------------------------- */}
       <div className={ha.periodTime__wrapper}>
      <div className={ha.holidays__item__cell + " " + ha.cell3}>
        <HolidaysItemPeriod
          img={props.img}
          text1={<Text13400 text={props.text3} />}
          text2={<Text13400 text={props.text4} />}
        />
        <img src={Calendar} alt="calendar" />
      </div>
      {props.double && <div className={ha.holidays__item__cell + " " + ha.cell3}>
        <HolidaysItemPeriod
          img={props.img}
          text1={<Text13400 text={props.text3} />}
          text2={<Text13400 text={props.text4} />}
        />
        <img src={Calendar} alt="calendar" />
      </div>
        }
        {props.double && <img src={ArrowSide} alt="arrow" className={ha.sideArrow}/>}
    </div>
       {/* //cell4----------------------------------- */}
      <div className={ha.holidays__item__cell + " " + ha.cell4}>
        <img src={Delete} alt="delete" />
        <TextUnderLine
          text={<Text15400 text="Удалить" color="#EE3424" />}
          color="#EE3424"
        />
      </div>
    </div>
  );
};

export default HolidaysAdminItem;
