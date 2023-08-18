import b from './birthdays.module.scss';
import Header from '../../organisms/Header';
import Arrow from '../../../images/header-arrow-down.svg';
import Text60700 from '../../atoms/Text60700';
import Text15400 from '../../atoms/Text15400С';
import Text28700 from '../../atoms/Text28700'

const Birthdays = () => {
    return (
        <div className={b.birthdays__wrapper}>
        <Header />
        <div className={b.birthdays__body}>
        <div className={b.birthdays__container}>
          <div className={b.header}>
           <h2 className={b.title}><Text60700 text='Дни рождения'/></h2>
           <div className={b.birthdays__sorting}>
            <span className={b.monthTitle}>Месяц</span>
            <div className={b.monthes__menu}>
                <span className={b.monthes__menu__ttile}><Text28700 text='Март' /></span>
                <img src={Arrow} alt="arrow" />
            </div>
            <div className={b.showAll}><Text15400 text='Показать все' color='#277D59' /></div>
           </div>
          </div>
        </div>
</div>
        </div>
    )
}

export default Birthdays;