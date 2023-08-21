import n from './notifications.module.scss';
import Header from "../../organisms/Header";
import Arrow from "../../../images/header-arrow-down.svg";
import Cake from '../../../images/cake.svg';
import Text60700 from "../../atoms/Text60700";
import Text15400 from "../../atoms/Text15400С";
import Text13400 from "../../atoms/Text13400";
import Text28700 from "../../atoms/Text28700";
import Text15700 from "../../atoms/Text15700";
import Ava from "../../../images/main-ava1.webp";
import Ava2 from "../../../images/main-ava2.webp";
import Ava3 from "../../../images/main-ava3.webp";
import Event from '../../atoms/Event';
import NotificationsItem from '../../organisms/NotificationsItem/NotificationsItem';
import Footer from '../../organisms/Footer';
import TextUnderLine from "../../templates/TextUnderline";

const Notifications = () => {
    return (
<div className={n.notifications__wrapper}>
      <Header />
      <div className={n.notifications__body}>
        <div className={n.notifications__container}>
          <div className={n.header}>
            <h2 className={n.title}>
              <Text60700 text="Уведомления" />
            </h2>
            </div>
          <div className={n.notifications__items__wrapper}>
            <div
              className={
                n.notifications__item__wrapper + " " + n.templates__padding + " " + n.header__margin
              }
            >
              <div className={n.templates__header__cell}>
              Событие
              </div>
              <div className={n.templates__header__cell}>
              Связанный аккаунт
              </div>
              <div className={n.templates__header__cell}>
              Кто внес изнения
              </div>
              <div className={n.templates__header__cell}>
              Дата
              </div>
             </div>
            {/* //items--------------------------------------------------- */}
             <NotificationsItem text1={<Text15700 text='Пора проверить ревью подчиненного'/>} text2={<TextUnderLine text={<Text15700 text='Alexander Shevchenko' color='#277D59' />} />}text3='Ярослав Кошевой' img={Ava2}/>
             <NotificationsItem text1={<Text15700 text='Смена фамилии'/>} text2={<TextUnderLine text={<Text15700 text='Василенко Иван' color='#277D59' />} />}text3='Ярослав Кошевой' img={Ava3}/>
             <NotificationsItem text1={<Text15700 text='Необходимо проверить ревью'/>} text2={<TextUnderLine text={<Text15700 text='Светлана Кудрявцева' color='#277D59' />} />}text3='Ярослав Кошевой' img={Ava}/>
             <NotificationsItem text1={<Text15700 text='Запрос на отпуск'/>} text2={<TextUnderLine text={<Text15700 text='Дмитрий Прокопенко' color='#277D59' />} />}text3='Portal Bot' img={Ava3}/>
             <NotificationsItem text1={<Text15700 text='Пора проверить ревью подчиненного'/>} text2={<TextUnderLine text={<Text15700 text='Alexander Shevchenko' color='#277D59' />} />}text3='Portal Bot' img={Ava2}/>
             <NotificationsItem text1={<Text15700 text='Смена фамилии'/>} text2={<TextUnderLine text={<Text15700 text='Василенко Иван' color='#277D59' />} />}text3='Portal Bot' img={Ava3}/>
             <NotificationsItem text1={<Text15700 text='Необходимо проверить ревью'/>} text2={<TextUnderLine text={<Text15700 text='Светлана Кудрявцева' color='#277D59' />} />}text3='Portal Bot' img={Ava}/>
             <NotificationsItem text1={<Text15700 text='Запрос на отпуск'/>} text2={<TextUnderLine text={<Text15700 text='Дмитрий Прокопенко' color='#277D59' />} />}text3='Portal Bot' img={Ava3}/>
             <NotificationsItem text1={<Text15700 text='Пора проверить ревью подчиненного'/>} text2={<TextUnderLine text={<Text15700 text='Alexander Shevchenko' color='#277D59' />} />}text3='Portal Bot' img={Ava2}/>
             <NotificationsItem text1={<Text15700 text='Смена фамилии'/>} text2={<TextUnderLine text={<Text15700 text='Василенко Иван' color='#277D59' />} />}text3='Portal Bot' img={Ava3}/>
             </div>
          </div>
        <Footer />
      </div>
    </div>
    )
}

export default Notifications;