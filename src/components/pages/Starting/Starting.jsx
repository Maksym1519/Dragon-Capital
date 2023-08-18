import s from "./starting.module.scss";
import h from "../../organisms/header.module.scss";
import Arrow from "../../../images/arrow-down-white.svg";
import Text17400 from "../../atoms/Text17400";
import Text15400 from "../../atoms/Text15400";
import Text15700 from '../../atoms/Text15700';
import Logo from '../../../images/login-logo.svg';


const Starting = () => {
  return (
    <div className={s.starting__background}>
      <div className={s.starting__wrapper}>
        <div className={s.starting__container}>
          <div className={s.starting__header}>
            <div className={h.language__choose}>
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
                <button className={s.login__button}>Log in</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Starting;
