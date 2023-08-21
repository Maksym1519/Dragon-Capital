import e from './employees.module.scss';
import Header from '../../organisms/Header';
import Footer from '../../organisms/Footer';
import Text60700 from '../../atoms/Text60700';
import Text15700 from '../../atoms/Text15700';
import Text15400С from '../../atoms/Text15400С';
import Text28700 from '../../atoms/Text28700';
import Text20700 from '../../atoms/Text20700';
import Text16400C from '../../atoms/Text16400C';
import Button199 from '../../atoms/Buttons/Button199';
import Button245 from '../../atoms/Buttons/Button245';
import Button103 from '../../atoms/Buttons/Button103';
import AccordionTitle from '../../molecules/Employee/AccordionTitle';
import ImgTextTemplate from '../../templates/ImgTextTemplate';
import ButtonsTeam from '../../atoms/Buttons/ButtonsTeam/ButtonsTeam';
import Radio from '../../atoms/Radio';
import Plus from '../../../images/plus-employee.svg';
import Arrow from '../../../images/header-arrow-down.svg'


const Employees = () => {
    return (
        <div className={e.employees__wrapper}>
         <Header />
         <div className={e.bg}>
           <div className={e.container}>
             <div className={e.title__wrapper}>
                <h2 className={e.title}><Text60700 text='Сотрудники'/></h2>
                <div className={e.title__button}>
                  <Button199 text={<Text15700 text='Рассадка по этажам' color='#fff'/>}/>
                </div>
             </div>
             <div className={e.search__wrapper}>
                <input type="text" className={e.input__search} placeholder='Введите любой поисковый запрос'/>
                <div className={e.departments__wrapper}><AccordionTitle text={<Text15400С text='Все департаменты' color='rgba(61, 61, 61, 0.5)'/>}/></div>
                <Button103 text={<Text15700 text='Найти' color='#fff'/>}/>
             </div>
             <div className={e.filters__wrapper}>
               <Text28700 text='Таблица сотрудников'/>
               <div className={e.filters__body}>
                 <span className={e.filters__body__label}><Text15400С text='Сортировать'/></span>
                 <div className={e.accordion__wrapper}><AccordionTitle text={<Text15400С text='По фамилии (А-Я)'/>}/></div>
               </div>
             </div>
             <div className={e.employees__main}>
               <div className={e.main__sidebar}>
                 <div className={e.sidebar__filters}>
                   <h3 className={e.sidebar__filters__title}><Text20700 text='Назва фiльтру'/></h3>
                   <div className={e.sidebar__filters__item}><ImgTextTemplate img={<Radio />} text={<Text16400C text='Значення'/>}/></div>
                   <div className={e.sidebar__filters__item}><ImgTextTemplate img={<Radio />} text={<Text16400C text='Значення'/>}/></div>
                   <div className={e.sidebar__filters__item}><ImgTextTemplate img={<Radio />} text={<Text16400C text='Значення'/>}/></div>
                   <div className={e.sidebar__filters__item}><ImgTextTemplate img={<Radio />} text={<Text16400C text='Значення'/>}/></div>
                   <div className={e.sidebar__filters__item}><ImgTextTemplate img={<Radio />} text={<Text16400C text='Значення'/>}/></div>
                   <div className={e.sidebar__filters__item}><ImgTextTemplate img={<Radio />} text={<Text16400C text='Значення'/>}/></div>
                   <div className={e.sidebar__filters__item}><ImgTextTemplate img={<Radio />} text={<Text16400C text='Значення'/>}/></div>
                   <div className={e.sidebar__filters__item}><ImgTextTemplate img={<Radio />} text={<Text16400C text='Значення'/>}/></div>
                 </div>
                 <div className={e.sidebar__teams}>
                 <h3 className={e.sidebar__filters__title}><Text20700 text='Teams'/></h3>
                 <div className={e.button__wrapper}><ButtonsTeam text={<Text15400С text='Obolon Residences' color='#5F82FF'/>} bg='rgba(95, 130, 255, 0.10)'/></div>
                 <div className={e.button__wrapper}><ButtonsTeam text={<Text15400С text='Green Hills' color='#fff'/>} bg='rgba(254, 152, 0, 1)'/></div>
                 <div className={e.button__wrapper}><ButtonsTeam text={<Text15400С text='Obolon Residences' color='#5F82FF'/>} bg='rgba(95, 130, 255, 0.10)'/></div>
                 <div className={e.button__wrapper}><ButtonsTeam text={<Text15400С text='Obolon Residences' color='#5F82FF'/>} bg='rgba(95, 130, 255, 0.10)'/></div>
                 <div className={e.button__wrapper}><ButtonsTeam text={<Text15400С text='Obolon Residences' color='#5F82FF'/>} bg='rgba(95, 130, 255, 0.10)'/></div>
                 </div>
               </div>
               <div className={e.items__wrapper}>
                  <div className={e.item__wrapper}>

                  </div>
               </div>
             </div>
           </div>
           {/* <Footer /> */}
         </div>
        </div>
    )
}

export default Employees;