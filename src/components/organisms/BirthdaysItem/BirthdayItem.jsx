import b from '../../pages/Birthdays/birthdays.module.scss';
import Cake from '../../../images/cake.svg';
import Text15400 from "../../atoms/Text15400С";
import Text13400 from "../../atoms/Text13400";
import Text15700 from "../../atoms/Text15700";
import Ava from "../../../images/main-ava2.webp";
import Event from '../../atoms/Event';

const BirthdaysItem = ({text,img,email}) => {
    return (
        <div
        className={
          b.birthdays__item__wrapper + " " + b.templates__padding + " " + b.employee__item
        }
      >
        <div className={b.templates__header__cell}>
        <div className={b.templates__header__cell}>
          <div className={b.cell__wrapper}>
            {/* <img src={Ava} alt="ava" /> */}
            <img src={Ava} alt="ava" />
            <Event text1={<Text15700 text='Alexander Shevchenko'/>} text2={<Text13400 text='Dragon Capital Partners'/>}/>
          </div>
        </div>
        </div>
        <div className={b.templates__header__cell}>
          <div className={b.flex__wrapper}>
           <div>{text}</div>
           {img && <img src={img} alt="cake" />}
          </div>
        </div>
        <div className={b.templates__header__cell}>
        <Text15400 text='Marketing and Communications'/>
        </div>
        <div className={b.templates__header__cell}>
        <Text15400 text='441'/>
        </div>
        <div className={b.templates__header__cell}>
        <Text15400 text='+38 (050) 123-45-67'/>
        </div>
        <div className={b.templates__header__cell}>
        {email}
        </div>
      </div>
    )
}

export default BirthdaysItem;