import h from '../../pages/Holidays/holidays.module.scss';
import Event from '../../atoms/Event'

const HolidaysItemPeriod = (props) => {
    return (
        <div className={h.period__wrapper}>
         <div className={h.arrow__wrapper}>{props.img && <img src={props.img} alt="arrow" /> }</div>
         <Event text1={props.text1} text2={props.text2}/>
        </div>
    )
}

export default HolidaysItemPeriod;