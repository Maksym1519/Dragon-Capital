import h from './header.module.scss';
import Text12400 from '../atoms/Text12400';
import Text14400 from '../atoms/Text14400';
import ProfileMenu from '../molecules/ProfileMenu';
import Logo from '../../images/header-logo.svg';
import Arrow from '../../images/header-arrow-down.svg';
import Bell from '../../images/bell.svg';
import Dot from '../../images/redDot.svg';
import Ava from '../../images/header-ava.webp'
import { useState } from 'react';

const Header = () => {
    const [isOpen, setOpen] = useState(false)
    const toggleMenu = () => {
        setOpen(!isOpen)
    }
   
    return ( 
        <div className={h.header__wrapper}>
         <div className={h.header__container}>
           <div className={h.logo__wrapper}>
             <img src={Logo} alt="logo" loading='lazy'/>
           </div>
           <div className={h.language__wrapper}>
              <Text12400 text={'Корпоративный портал'}/>
              <div className={h.language__choose}>
                <Text12400 text={'ENG'}/>
                <img src={Arrow} alt="icon" />
              </div>
           </div>
           <div className={h.header__navigation}>
             <div className={h.navigation__item}>
                <Text14400 text={'Главная'}/>
             </div>
             <div className={h.navigation__item}>
                <Text14400 text={'Департаменты'}/>
             </div>
             <div className={h.navigation__item}>
                <Text14400 text={'Сотрудники'}/>
                <img src={Arrow} alt="icon" />
             </div>
             <div className={h.navigation__item}>
                <Text14400 text={'Календарь'}/>
                <img src={Arrow} alt="icon" />
             </div>
             <div className={h.navigation__item}>
                <Text14400 text={'Ревью'}/>
                <img src={Arrow} alt="icon" />
             </div>
             <div className={h.navigation__item}>
                <Text14400 text={'Useful info'}/>
             </div>
         </div>
         <div className={h.header__profile}>
            <div className={h.bell__wrapper}>
           <img src={Bell} alt="bell" className={h.bell} />
           <img src={Dot} alt="dot" className={h.dot} />
           </div>
           <div className={h.ava__wrapper}>
              <img src={Ava} alt="ava" />
              <img src={Arrow} alt="arrow" onClick={toggleMenu} className={`${h.arrow} ${isOpen ? h.arrowOpen : ''}`} />
           </div>
         </div>
         </div>
         {
            isOpen && <ProfileMenu />
         }
        </div>
    )
}

export default Header;