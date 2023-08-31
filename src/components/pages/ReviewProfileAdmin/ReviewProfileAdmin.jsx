import d from "./reviewProfileAdmin.module.scss";
import { Link } from "react-router-dom";
import Text15400С from "../../atoms/Text15400С";
import Text60700 from "../../atoms/Text60700";
import Text15700 from "../../atoms/Text15700";
import Text21700 from "../../atoms/Text21700";
import Text21400 from '../../atoms/Text21400';
import Text14700 from "../../atoms/Text14700";
import Text20400P from '../../atoms/Text20400P';
import Text30700 from '../../atoms/Text30700';
import Text16400 from '../../atoms/Text16400C';
import Text16700 from '../../atoms/Text16700';
import Text14400 from "../../atoms/Text14400";
import Header from "../../organisms/Header";
import Footer from "../../organisms/Footer";
import ImgTextTemplate from "../../templates/ImgTextTemplate";
import Button218 from "../../atoms/Buttons/Button218";
import Button310 from "../../atoms/Buttons/Button310";
import ArrowBack from "../../../images/green-arrow-history.svg";
import Arrow from "../../../images/header-arrow-down.svg";
import BigAva from '../../../images/avatar-bigPhoto.webp';
import Ava70 from '../../../images/avatar70-woman.svg';
import Ava1 from '../../../images/ava1-sub.webp';
import Ava2 from '../../../images/ava3-sub.webp';
import Info from '../../../images/reviewEdit-info.svg'

const ReviewCreateEmployee = () => {
  return (
    <div className={d.wrapper}>
      <Header />
      <div className={d.background}>
        <div className={d.container}>
          <Link to="/ReviewArchiv">
            <div className={d.back__wrapper}>
              <ImgTextTemplate
                image={ArrowBack}
                text={
                  <Text15400С text="Назад" color="#277D59" underline={true} />
                }
              />
            </div>
          </Link>
          <div className={d.title__wrapper}>
            <Text60700 text="Анкета рев’ю 2Н2020" />
            <Button218 text={<Text15700 text='Завантажити PDF' color='#277D59'/>} border='1px solid rgba(39, 125, 89, 1)'/>
          </div>
          <div className={d.status__wrapper}>
            <Text21700 text='Статус'/>
            <Text21700 text='Необхідно заповнити' color='#FFC700'/>
          </div>
          <div className={d.employeeInfo__wrapper}>
              <div className={d.employee__item}>
                 <Text21400 text='Співробітник'/>
                 <div className={d.ava__wrapper}>
                   <img src={BigAva} alt="ava" />
                   <div className={d.ava__info}>
                     <Text21700 text='Alexander Shevchenko'/>
                     <div><Text15400С text='Маркетолог'/><Text15400С text='Marketing '/></div>
                     <Text14700 text='Перейти в аккаунт' color='#277D59' underline={true}/>
                   </div>
                 </div>
              </div>
              <div className={d.head__item}>
                 <h4 className={d.title}><Text21700 text='Хед'/></h4>
                 <div className={d.ava__wrapper}>
                   <img src={Ava70} alt="ava" />
                   <Text20400P text='Светлана Жулявцева'/>
                 </div>
              </div>
              <div className={d.viewer__item}>
                  <h4 className={d.title}><Text21700 text='В’юери'/></h4>
                  <ImgTextTemplate image={Ava1} text={<Text15400С text='Екатерина Бойко'/>}/>
                  <ImgTextTemplate image={Ava2} text={<Text15400С text='Николай Тихонов'/>}/>
              </div>
          </div>
          <div className={d.questions__wrapper}>
            {/* //item1--------------------------------------------------------------- */}
             <div className={d.question__item}>
                <div className={d.question__item__info}>
                   <h3 className={d.title}><Text30700 text='Питання 1'/></h3>
                   <p className={d.textDescription}><Text16400 text='Опишите ваши достижения за последние пол года'/></p>
                   <h4 className={d.subtitle}><Text16700 text='Відповідь співробітника'/></h4>
                   <div className={d.info__wrapper}>
                     <img src={Info} alt="info" />
                   </div>
                   <div className={d.update__wrapper}>
                     <Text14400 text='Останнє оновлення'/><Text14400 text='21.04.2019'/><Text14400 text='17:38'/>
                   </div>
                   <div className={d.button__wrapper}><Button218 text={<Text15700 text='Залишити коментар' color='#277D59'/>} border='1px solid #277D59'/></div>
                </div>
                <div className={d.question__item__chat}>
                    <div className={d.item__output}>
                      <div className={d.headerInfo}>
                        <Text16700 text='Ви'/>
                        <div className={d.time__wrapper}>
                        <Text14400 text='21.04.2019'/>
                        <Text14400 text='17:38'/>
                        </div>
                      </div>
                      <div className={d.body}>
                        <Text16400  text='Стоит ли более реально расписать этот проект?'/>
                      </div>
                    </div>
                    <div className={d.item__input}>
                    <div className={d.headerInfo}>
                        <Text16700 text='Петро'/>
                        <div className={d.time__wrapper}>
                        <Text14400 text='21.04.2019'/>
                        <Text14400 text='17:38'/>
                        </div>
                      </div>
                      <div className={d.body}>
                      <Text16400  text='Не забудь упомянуть о том проекте строительства нового моста, где ты помог оптимизировать стоимость на 40%.' color='rgba(255, 255, 255, 0.6)'/>
                      </div>
                      <div className={d.reply}><Text14700 text='Відповісти' color='#277D59' underline={true}/></div>
                    </div>
                </div>
             </div>
              {/* //item2--------------------------------------------------------------- */}
              <div className={d.question__item}>
                <div className={d.question__item__info}>
                   <h3 className={d.title}><Text30700 text='Питання 2'/></h3>
                   <p className={d.textDescription}><Text16400 text='Опишите ваши достижения за последние пол года'/></p>
                   <h4 className={d.subtitle}><Text16700 text='Відповідь співробітника'/></h4>
                   <div className={d.info__wrapper}>
                     <img src={Info} alt="info" />
                   </div>
                   <div className={d.update__wrapper}>
                     <Text14400 text='Останнє оновлення'/><Text14400 text='21.04.2019'/><Text14400 text='17:38'/>
                   </div>
                   <div className={d.button__wrapper}><Button218 text={<Text15700 text='Залишити коментар' color='#277D59'/>} border='1px solid #277D59'/></div>
                </div>
                <div className={d.question__item__chat}>
                    <div className={d.item__output}>
                      <div className={d.headerInfo}>
                        <Text16700 text='Ви'/>
                        <div className={d.time__wrapper}>
                        <Text14400 text='21.04.2019'/>
                        <Text14400 text='17:38'/>
                        </div>
                      </div>
                      <div className={d.body}>
                        <Text16400  text='Стоит ли более реально расписать этот проект?'/>
                      </div>
                    </div>
                    <div className={d.item__input}>
                    <div className={d.headerInfo}>
                        <Text16700 text='Петро'/>
                        <div className={d.time__wrapper}>
                        <Text14400 text='21.04.2019'/>
                        <Text14400 text='17:38'/>
                        </div>
                      </div>
                      <div className={d.body}>
                      <Text16400  text='Не забудь упомянуть о том проекте строительства нового моста, где ты помог оптимизировать стоимость на 40%.' color='rgba(255, 255, 255, 0.6)'/>
                      </div>
                      <div className={d.reply}><Text14700 text='Відповісти' color='#277D59' underline={true}/></div>
                    </div>
                </div>
             </div>
               {/* //item3--------------------------------------------------------------- */}
               <div className={d.question__item}>
                <div className={d.question__item__info}>
                   <h3 className={d.title}><Text30700 text='Питання 3'/></h3>
                   <p className={d.textDescription}><Text16400 text='Опишите ваши достижения за последние пол года'/></p>
                   <h4 className={d.subtitle}><Text16700 text='Відповідь співробітника'/></h4>
                   <div className={d.info__wrapper}>
                     <img src={Info} alt="info" />
                   </div>
                   <div className={d.update__wrapper}>
                     <Text14400 text='Останнє оновлення'/><Text14400 text='21.04.2019'/><Text14400 text='17:38'/>
                   </div>
                   <div className={d.button__wrapper}><Button218 text={<Text15700 text='Залишити коментар' color='#277D59'/>} border='1px solid #277D59'/></div>
                </div>
                <div className={d.question__item__chat}>
                    <div className={d.item__output}>
                      <div className={d.headerInfo}>
                        <Text16700 text='Ви'/>
                        <div className={d.time__wrapper}>
                        <Text14400 text='21.04.2019'/>
                        <Text14400 text='17:38'/>
                        </div>
                      </div>
                      <div className={d.body}>
                        <Text16400  text='Стоит ли более реально расписать этот проект?'/>
                      </div>
                    </div>
                    <div className={d.item__input}>
                    <div className={d.headerInfo}>
                        <Text16700 text='Петро'/>
                        <div className={d.time__wrapper}>
                        <Text14400 text='21.04.2019'/>
                        <Text14400 text='17:38'/>
                        </div>
                      </div>
                      <div className={d.body}>
                      <Text16400  text='Не забудь упомянуть о том проекте строительства нового моста, где ты помог оптимизировать стоимость на 40%.' color='rgba(255, 255, 255, 0.6)'/>
                      </div>
                      <div className={d.reply}><Text14700 text='Відповісти' color='#277D59' underline={true}/></div>
                    </div>
                </div>
             </div>
                {/* //item--------------------------------------------------------------- */}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ReviewCreateEmployee;
