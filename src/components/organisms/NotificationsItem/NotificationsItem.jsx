import n from '../../pages/Notifications/notifications.module.scss';
import Cake from '../../../images/cake.svg';
import Text15400 from "../../atoms/Text15400С";
import Text13400 from "../../atoms/Text13400";
import Text15700 from "../../atoms/Text15700";
import TextUnderLine from '../../templates/TextUnderline';
import Ava from "../../../images/main-ava2.webp";
import Event from '../../atoms/Event';

const BirthdaysItem = ({text1,text2,text3,img,email}) => {
    return (
        <div
        className={
         n.notifications__item__wrapper + " " + n.templates__padding + " " + n.employee__item
        }
      >
        <div className={n.templates__header__cell}>
        <div className={n.templates__header__cell}>
          <div className={n.cell__wrapper}>
          {text1}
          </div>
        </div>
        </div>
        <div className={n.templates__header__cell}>
          <div className={n.flex__wrapper}>
          <img src={img} alt="ava" />
           {text2}
          </div>
        </div>
        <div className={n.templates__header__cell}>
        {text3}
        </div>
        <div className={n.templates__header__cell}>
        <Text15400 text='30.03.1992'/>
        </div>
        </div>
    )
}

export default BirthdaysItem;