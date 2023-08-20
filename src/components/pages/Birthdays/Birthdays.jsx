import b from "./birthdays.module.scss";
import Header from "../../organisms/Header";
import Arrow from "../../../images/header-arrow-down.svg";
import Cake from '../../../images/cake.svg';
import Text60700 from "../../atoms/Text60700";
import Text15400 from "../../atoms/Text15400С";
import Text13400 from "../../atoms/Text13400";
import Text28700 from "../../atoms/Text28700";
import Text15700 from "../../atoms/Text15700";
import Ava from "../../../images/main-ava1.webp";
import Event from '../../atoms/Event';
import BirthdaysItem from "../../organisms/BirthdaysItem/BirthdayItem";
import Footer from '../../organisms/Footer';
import TextUnderLine from "../../templates/TextUnderline";

const Birthdays = () => {
  return (
    <div className={b.birthdays__wrapper}>
      <Header />
      <div className={b.birthdays__body}>
        <div className={b.birthdays__container}>
          <div className={b.header}>
            <h2 className={b.title}>
              <Text60700 text="Дни рождения" />
            </h2>
            <div className={b.birthdays__sorting}>
              <span className={b.monthTitle}>Месяц</span>
              <div className={b.monthes__menu}>
                <span className={b.monthes__menu__ttile}>
                  <Text28700 text="Март" />
                </span>
                <img src={Arrow} alt="arrow" />
              </div>
              <div className={b.showAll}>
                <Text15400 text="Показать все" color="#277D59" />
              </div>
            </div>
          </div>
          <div className={b.birthdays__items__wrapper}>
            <div
              className={
                b.birthdays__item__wrapper + " " + b.templates__padding + " " + b.header__margin
              }
            >
              <div className={b.templates__header__cell}>
                ФИО и должность
              </div>
              <div className={b.templates__header__cell}>
                День рождения
              </div>
              <div className={b.templates__header__cell}>
                Департамент
              </div>
              <div className={b.templates__header__cell}>
                Вн. номер
              </div>
              <div className={b.templates__header__cell}>
                Телефон
              </div>
              <div className={b.templates__header__cell}>
                Email
              </div>
            </div>
            {/* //items--------------------------------------------------- */}
             <BirthdaysItem text={ <Text15700 text='Сегодня' color='#FFC700' />} img={Cake} email={<TextUnderLine text={<Text15400 text='shevchenko@dragon-capital.com' color='#277D59'/>} color='#277D59'/>}/>
             <BirthdaysItem text={ <Text15700 text='Сегодня' color='#FFC700' />} img={Cake} email={<TextUnderLine text={<Text15400 text='mymail@dragon-capital.com' color='#277D59'/>} color='#277D59'/>}/>
             <BirthdaysItem text={ <Text15700 text='30.03.1992' color='rgba(61, 61, 61, 0.4)' />} email={<TextUnderLine text={<Text15400 text='hr@dragon-capital.com' color='#277D59'/>} color='#277D59'/>}/>
             <BirthdaysItem text={ <Text15700 text='30.03.1992' color='rgba(61, 61, 61, 0.4)' />} email={<TextUnderLine text={<Text15400 text='mymail@dragon-capital.com' color='#277D59'/>} color='#277D59'/>}/>
             <BirthdaysItem text={ <Text15700 text='30.03.1992' color='rgba(61, 61, 61, 0.4)' />} email={<TextUnderLine text={<Text15400 text='mymail@dragon-capital.com' color='#277D59'/>} color='#277D59'/>}/>
             <BirthdaysItem text={ <Text15700 text='30.03.1992' color='rgba(61, 61, 61, 0.4)' />} email={<TextUnderLine text={<Text15400 text='hr@dragon-capital.com' color='#277D59'/>} color='#277D59'/>}/>
             <BirthdaysItem text={ <Text15700 text='30.03.1992' color='rgba(61, 61, 61, 0.4)' />} email={<TextUnderLine text={<Text15400 text='shevchenko@dragon-capital.com' color='#277D59'/>} color='#277D59'/>}/>
             <BirthdaysItem text={ <Text15700 text='30.03.1992' color='rgba(61, 61, 61, 0.4)' />} email={<TextUnderLine text={<Text15400 text='hr@dragon-capital.com' color='#277D59'/>} color='#277D59'/>}/>
             <BirthdaysItem text={ <Text15700 text='30.03.1992' color='rgba(61, 61, 61, 0.4)' />} email={<TextUnderLine text={<Text15400 text='shevchenko@dragon-capital.com' color='#277D59'/>} color='#277D59'/>}/>
             <BirthdaysItem text={ <Text15700 text='30.03.1992' color='rgba(61, 61, 61, 0.4)' />} email={<TextUnderLine text={<Text15400 text='hr@dragon-capital.com' color='#277D59'/>} color='#277D59'/>}/>
            </div>
          </div>
        <Footer />
      </div>
    </div>
  );
};

export default Birthdays;
