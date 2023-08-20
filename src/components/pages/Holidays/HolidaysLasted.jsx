import h from './holidays.module.scss';
import Header from '../../organisms/Header';
import Footer from '../../organisms/Footer';
import HolidaysItem from '../../organisms/HolidaysItem/HolidaysItem';
import  Button233  from '../../atoms/Buttons/Button233'
import Text60700 from '../../atoms/Text60700';
import Text15700 from '../../atoms/Text15700';
import Text15400С from '../../atoms/Text15400С';
import Text28700 from '../../atoms/Text28700'
import TextUnderLine from '../../templates/TextUnderline';
import Pen from '../../../images/pen.svg';
import Arrow from '../../../images/arrow-period.svg';
import Dragon from '../../../images/dragon-holidays.svg'

const HolidaysLasted = () => {
    return (
        <div className={h.holidays__wrapper}>
        <Header />
        <div className={h.holidays__BG__wrapper}>
        <div className={h.holidays__container}>
         <div className={h.holidays__body}>
          <h3><Text60700 text='Праздники'/></h3>
          <div className={h.holidays__sorting}>
            <div className={h.lasted}>
                <Button233 text={<Text15700 text='Показать еще прошедшие' color='rgba(61, 61, 61, 0.6)'/>}/>
              
            </div>
            <div className={h.edit}>
            <img src={Pen} alt="pen" />
                 <TextUnderLine text={<Text15400С text='Редактировать' color='#277D59'/>}/>
            </div>
          </div>
          <h4 className={h.lasted__subtitle}><Text28700 text='Прошедшие'/></h4>
          <div className={h.holidays__items__wrapper}>
            <HolidaysItem text1='Новый Год' text2='Выходной' text3='07.01.2019'  color='#EE3424'/>
            <HolidaysItem text1='Международный женский день' text2='Выходной' text3='07.01.2019' color='#EE3424'/>
            <HolidaysItem text1='Новый Год' text2='Выходной' text3='07.01.2019' color='#EE3424'/>
            <HolidaysItem text1='Новый Год' text2='Выходной' text3='07.01.2019' color='#EE3424'/>
            <HolidaysItem text1='Международный женский день' text2='Выходной' text3='07.01.2019' color='#EE3424'/>
             </div>
             <h4 className={h.lasted__subtitle + " " + h.lasted__secondSubtitle}><Text28700 text='Будущие'/></h4>
             <div className={h.holidays__items__wrapper}>
              <HolidaysItem text1='Новый Год' text2='Выходной' text3='07.01.2019'  color='#EE3424'/>
              <HolidaysItem text1='Перенос рабочего дня' text2='Working day swap' text3='07.01.2019' text4='10.01.2019' img={Arrow} color='#5F82FF'/>
              <HolidaysItem text1='Новый Год' text2='Выходной' text3='07.01.2019' color='#EE3424'/>
              <HolidaysItem text1='Новый Год' text2='Выходной' text3='07.01.2019' color='#EE3424'/>
              <HolidaysItem text1='Международный женский день' text2='Выходной' text3='07.01.2019' color='#EE3424'/>
              <HolidaysItem text1='Международный женский день' text2='Выходной' text3='07.01.2019' color='#EE3424'/>
              <HolidaysItem text1='Перенос рабочего дня' text2='Working day swap' text3='07.01.2019' text4='10.01.2019' img={Arrow} color='#5F82FF'/>
              <HolidaysItem text1='Международный женский день' text2='Выходной' text3='07.01.2019' color='#EE3424'/>
              <HolidaysItem text1='Перенос рабочего дня' text2='Working day swap' text3='07.01.2019' text4='10.01.2019' img={Arrow} color='#5F82FF'/>
              <HolidaysItem text1='Новый Год' text2='Выходной' text3='07.01.2019' color='#EE3424'/>
              <HolidaysItem text1='Международный женский день' text2='Выходной' text3='07.01.2019' color='#EE3424'/>
              <HolidaysItem text1='Новый Год' text2='Выходной' text3='07.01.2019' color='#EE3424'/>
             </div>
</div>
<div className={h.dragonImg__wrapper}>
<img src={Dragon} alt="dragon" />
</div>
        </div>
<Footer />
</div>
      </div>
    )
}

export default HolidaysLasted;