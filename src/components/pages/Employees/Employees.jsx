import e from './employees.module.scss';
import { Link } from 'react-router-dom';
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
import EmployeeItem from '../../organisms/Employee/EmployeeItem';
import Button172 from '../../atoms/Buttons/Button172';
import Plus from '../../../images/plus-employee.svg';
import Arrow from '../../../images/header-arrow-down.svg'
import Ava1 from '../../../images/main-ava1.webp';
import Ava2 from '../../../images/main-ava2.webp';
import Ava3 from '../../../images/main-ava3.webp';
import Ava4 from '../../../images/avatar4.webp';


const Employees = () => {
    return (
        <div className={e.employees__wrapper}>
         <Header />
         <div className={e.bg}>
           <div className={e.container}>
             <div className={e.title__wrapper}>
                <h2 className={e.title}><Text60700 text='Сотрудники'/></h2>
               <Link to='/FloorPlan'>
                <div className={e.title__button}>
                  <Button199 text={<Text15700 text='Рассадка по этажам' color='#fff'/>}/>
                </div>
               </Link>
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
                 <div className={e.button__wrapper}><ButtonsTeam text={<Text15400С text='Dilova' color='#674107'/>} bg='rgba(103, 65, 7, 0.10)'/></div>
                 <div className={e.button__wrapper}><ButtonsTeam text={<Text15400С text='White Lines' color='rgba(94, 36, 169, 1)'/>} bg='rgba(94, 36, 169, 0.10)'/></div>
                 <div className={e.button__wrapper}><ButtonsTeam text={<Text15400С text='Moe’s Tavern' color='#142A76'/>} bg='rgba(20, 42, 118, 0.10)'/></div>
                 </div>
               </div>
               <div className={e.items__wrapper}>
                  <div className={e.item__wrapper__header + " " + e.item__wrapper}>
                    <div className={e.item__wrapper__cell}><Text15400С text='ФИО и должность' color='rgba(61, 61, 61, 0.4)'/></div> 
                    <div className={e.item__wrapper__cell}><Text15400С text='Департамент' color='rgba(61, 61, 61, 0.4)'/></div> 
                    <div className={e.item__wrapper__cell}><Text15400С text='Вн. номер' color='rgba(61, 61, 61, 0.4)'/></div> 
                    <div className={e.item__wrapper__cell}><Text15400С text='Телефон' color='rgba(61, 61, 61, 0.4)'/></div> 
                    <div className={e.item__wrapper__cell}><Text15400С text='Email' color='rgba(61, 61, 61, 0.4)'/></div> 
                  </div>
                  <EmployeeItem img={Ava2} color='#7CD8FF' text='Work on holiday' text2='Obolon Residences' bColor='#5F82FF'/>
                  <EmployeeItem img={Ava1} color='#1DCA58' text='Business trip' text2='Obolon Residences' bColor='#5F82FF'/>
                  <EmployeeItem img={Ava3} color='#FF68F0' text='Study leave' text2='Obolon Residences' bColor='#5F82FF' team1={<ButtonsTeam text={<Text15400С text='Green Hills' color='#FE9800'/>} bg='rgba(254, 152, 0, 0.1)'/>}/>
                  <EmployeeItem img={Ava4} color='#5F82FF' text='Work on holiday' text2='Moe’s Tavern' bColor='#142A76'/>
                  <div className={e.boxShadow}>
                  <EmployeeItem img={Ava1} color='#FFC700' text='Vacation' text2='Obolon Residences' bColor='#5F82FF' team1={<ButtonsTeam text={<Text15400С text='Green Hills' color='#FE9800'/>} bg='rgba(254, 152, 0, 0.1)'/>} team2={<ButtonsTeam text={<Text15400С text='Dilova' color='rgba(103, 65, 7, 1)'/>} bg='rgba(103, 65, 7, 0.1)'/>}/>
                  </div>
               </div>
              
             </div>
             <div className={e.showMoreButton}><Button172 text={<Text15700 text='Show more'/>} bg='rgba(61, 61, 61, 0.06)'/></div>
           </div>
           <Footer />
         </div>
        </div>
    )
}

export default Employees;