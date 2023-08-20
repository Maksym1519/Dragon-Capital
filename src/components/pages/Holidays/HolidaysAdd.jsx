import ha from './holidaysAdmin.module.scss';
import Header from '../../organisms/Header';
import Footer from '../../organisms/Footer';
import HolidaysAdminItem from '../../organisms/HolidaysItem/HolidaysAdminItem';
import  Button154  from '../../atoms/Buttons/Button154'
import Text60700 from '../../atoms/Text60700';
import Text15700 from '../../atoms/Text15700';
import Text15400С from '../../atoms/Text15400С';
import Text28700 from '../../atoms/Text28700'
import TextUnderLine from '../../templates/TextUnderline';
import Save from '../../../images/save-holiday.svg';
import Arrow from '../../../images/arrow-period.svg';
import Dragon from '../../../images/dragon-holidays.svg'


const HolidaysAdmin = () => {
      return (
        <div className={ha.holidays__wrapper}>
        <Header />
        <div className={ha.holidays__BG__wrapper}>
        <div className={ha.holidays__container}>
         <div className={ha.holidays__body}>
        
          <div className={ha.holidays__sorting}>
          <h3 className={ha.main__title}><Text60700 text='Праздники'/></h3>
          <div className={ha.holidayAdmin__button}>
                <Button154 text={<Text15700 text='Добавить' color='#fff'/> } bg='#277D59'/>
              </div>
            
            <div className={ha.edit}>
            <img src={Save} alt="save" />
                 <TextUnderLine text={<Text15400С text='Сохранить' color='#277D59'/>}/>
            </div>
          </div>
            <div className={ha.holidays__items__wrapper}>
            <HolidaysAdminItem text1='Введите название праздника' text2='Выходной' text3='Выберите дату'  text5='Удалить' color='#EE3424' redDay={true} edit={true}/>
            <HolidaysAdminItem text1='Новый Год' text2='Выходной' text3='07.01.2019'  text5='Удалить' color='#EE3424' redDay={true}/>
            <HolidaysAdminItem text1='Перенос рабочего дня' text2='Выходной' text3='07.01.2019'  text5='Удалить' color='#EE3424' double={true}/>
            <HolidaysAdminItem text1='Новый Год' text2='Выходной' text3='07.01.2019'  text5='Удалить' color='#EE3424' redDay={true}/>
            <HolidaysAdminItem text1='Новый Год' text2='Выходной' text3='07.01.2019'  text5='Удалить' color='#EE3424' redDay={true}/>
            <HolidaysAdminItem text1='Международный женский день' text2='Выходной' text3='07.01.2019'  text5='Удалить' color='#EE3424' redDay={true}/>
            <HolidaysAdminItem text1='Международный женский день' text2='Выходной' text3='07.01.2019'  text5='Удалить' color='#EE3424' redDay={true}/>
            <HolidaysAdminItem text1='Перенос рабочего дня' text2='Выходной' text3='07.01.2019'  text5='Удалить' color='#EE3424' double={true}/>
            <HolidaysAdminItem text1='Международный женский день' text2='Выходной' text3='07.01.2019'  text5='Удалить' color='#EE3424' redDay={true}/>
            <HolidaysAdminItem text1='Перенос рабочего дня' text2='Выходной' text3='07.01.2019'  text5='Удалить' color='#EE3424' double={true}/>
            <HolidaysAdminItem text1='Новый Год' text2='Выходной' text3='07.01.2019'  text5='Удалить' color='#EE3424' redDay={true}/>
            <HolidaysAdminItem text1='Международный женский день' text2='Выходной' text3='07.01.2019'  text5='Удалить' color='#EE3424' redDay={true}/>
            <HolidaysAdminItem text1='Новый Год' text2='Выходной' text3='07.01.2019'  text5='Удалить' color='#EE3424' redDay={true}/>
             </div>
         
</div>
<div className={ha.dragonImg__wrapper}>
<img src={Dragon} alt="dragon" />
</div>
        </div>
<Footer />
</div>
      </div>
    )
}

export default HolidaysAdmin;