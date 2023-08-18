import { Link } from "react-router-dom";
import s from "./starting.module.scss";
import h from "../../organisms/header.module.scss";
import Arrow from "../../../images/arrow-down-white.svg";
import Text17400 from "../../atoms/Text17400";
import Text15400 from "../../atoms/Text15400";
import Text15400C from '../../atoms/Text15400С'
import Text15700 from '../../atoms/Text15700';
import Logo from '../../../images/login-logo.svg';
import { useState } from "react";
import ForgotPassword from "../../molecules/ForgotPassword/ForgotPassword";


const Starting = () => {
  const [isLogin, setLogin] = useState(false)
  const [isButtonClicked, setButtonClicked] = useState(false);
  const openReminder = () => {
    setLogin(true)
  }
  const closeReminder = () => {
    setLogin(false)
  }
  return (
    <div className={s.starting__background}>
      <div className={`${s.starting__wrapper} ${isButtonClicked ? s.newBg : ''}`}>
        <div className={`${s.starting__container} ${isButtonClicked ? s.newBgOpacity : ''}`}>
          <div className={s.starting__header}>
            <div className={h.language__choose + " " + s.language__choose__modify}>
              <Text17400 text={"Eng"} color="#fff" />
              <img src={Arrow} alt="icon" />
            </div>
            <div className={s.button__wrapper}>
              <button className={s.header__button}></button>
              <Text15400
                text={"Contact support"}
                color="rgba(255, 255, 255, 0.8)"
              />
            </div>
          </div>
          <div className={s.login}>
            <img src={Logo} alt="logo" className={s.logo}/>
            <div className={s.inputs__wrapper}>
            <div className={s.input__wrapper}>
              <input type='email' placeholder='Email' className={s.input}></input>
              </div>
            <div className={s.input__wrapper}>
              <input type='password' placeholder='Password' className={s.input}></input>
              </div>
                <Link to='/'><button className={s.login__button}>Log in</button></Link>
                <div onClick={() => { setButtonClicked(true); openReminder(); }} className={s.reminder}><Text15400C text='Forgot password?' color='rgba(255, 255, 255, 0.8)'/></div>
            </div>
          </div>
        </div>
        {isLogin && <ForgotPassword close={closeReminder}/>}
      </div>
    
    </div>
  );
};

export default Starting;
