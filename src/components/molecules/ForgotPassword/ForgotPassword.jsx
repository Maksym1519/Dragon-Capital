import fp from './forgotPassword.module.scss';
import Close from '../../../images/close.svg';
import Text28700 from '../../atoms/Text28700';
import Text15400 from '../../atoms/Text15400С';

const ForgotPassword = ({close}) => {
    return (
        <div className={fp.forgot__wrapper}>
            <div className={fp.forgot__container}>
            <h3 className={fp.title}><Text28700 text='Forgot password?'/></h3>
            <p className={fp.text}><Text15400 text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'/></p>
            <img src={Close} alt="close" className={fp.close} onClick={close}/>
            </div>
        </div>
    )
}

export default ForgotPassword;