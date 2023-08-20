import h from '../../pages/Holidays/holidays.module.scss';
import Text17700 from '../../atoms/Text17700';
import Text15400 from '../../atoms/Text15400С';
import Text13400 from '../../atoms/Text13400';
import HolidaysItemPeriod from '../../molecules/HolidaysItemPeriod/HolidaysItemPeriod';

const HolidaysItem = (props) => {
    const borderColor = {
        borderLeft: `3px solid ${props.color}`
    }
    return (
        <div className={h.holidays__item} style={borderColor}>
             <div className={h.holidays__item__cell}><Text17700 text={props.text1}/></div>
             <div className={h.holidays__item__cell}><Text15400 text={props.text2} color={props.color}/></div>
             <div className={h.holidays__item__cell}><HolidaysItemPeriod img={props.img} text1={<Text13400 text={props.text3}/>} text2={<Text13400 text={props.text4}/>}/></div>
            
        </div>
    )
}

export default HolidaysItem;