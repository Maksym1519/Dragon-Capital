import f from './footer.module.scss';
import Text15400 from '../atoms/Text15400';
import Logo from '../../images/footer-logo.svg'

const Footer = (props) => {
  const styled = {
    color: props.color
  }
    return (
        <div className={f.footer__wrapper}>
           <div className={f.footer__container}>
             <div className={f.footer__nav}>
               <div className={f.footer__nav__itemWrapper}><span className={f.footer__nav__item} style={styled}>Support</span></div>
               <div className={f.footer__nav__itemWrapper}><span className={f.footer__nav__item} style={styled}>IT Help</span></div>
               <div className={f.footer__nav__itemWrapper}><span className={f.footer__nav__item} style={styled}>Сервисная страница</span></div>
               </div>
             <div className={f.adminUser}>
              {props.text}
             </div>
             <div className={f.footer__logoWrapper}>
               {/* <img src={Logo} alt="logo" /> */}
             </div>
           </div>
        </div>
    )
} 

export default Footer;