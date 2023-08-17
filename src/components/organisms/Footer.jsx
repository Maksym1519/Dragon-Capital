import f from './footer.module.scss';
import Text12400 from '../atoms/Text12400';
import Logo from '../../images/footer-logo.svg'

const Footer = (props) => {
    return (
        <div className={f.footer__wrapper}>
           <div className={f.footer__container}>
             <div className={f.footer__nav}>
               <Text12400 text={'Support'} color={props.textColor} underline={true} />
               <Text12400 text={'IT Help'} color={props.textColor} underline={true} />
               <Text12400 text={'Сервисная страница'} color={props.textColor} underline={true} />
             </div>
             <div className={f.adminUser}>
              {props.text}
             </div>
             <div className={f.footer__logoWrapper}>
               <img src={Logo} alt="logo" />
             </div>
           </div>
        </div>
    )
} 

export default Footer;