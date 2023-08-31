import re from "./reviewEdit.module.scss";
import { Link } from "react-router-dom";
import Header from "../../organisms/Header";
import Footer from "../../organisms/Footer";
import Text15400С from "../../atoms/Text15400С";
import Text60700 from "../../atoms/Text60700";
import Text28700 from "../../atoms/Text28700";
import Text17700 from '../../atoms/Text17700';
import Text17400 from "../../atoms/Text17400";
import Text14400P from '../../atoms/Text14400P';
import Text14400 from "../../atoms/Text14400";
import Text18700 from '../../atoms/Text18700';
import Text15700 from '../../atoms/Text15700';
import ImgTextTemplate from "../../templates/ImgTextTemplate";
import Button218 from '../../atoms/Buttons/Button218';
import Button140 from '../../atoms/Buttons/Button140';
import ArrowBack from "../../../images/green-arrow-history.svg";
import Arrow from "../../../images/header-arrow-down.svg";
import Navigation from '../../../images/reviewEdit_navigation.svg';
import Info from '../../../images/reviewEdit-info.svg';
import { useState } from "react";

const ReviewEdit = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const handleItemClick = (index) => {
        setActiveIndex(index)
    }
  return (
    <div className={re.wrapper}>
      <Header />
      <div className={re.background}>
        <div className={re.container}>
          <Link to="/ReviewArchiv">
            <div className={re.back__wrapper}>
              <ImgTextTemplate
                image={ArrowBack}
                text={
                  <Text15400С text="Назад" color="#277D59" underline={true} />
                }
              />
            </div>
          </Link>
          <div className={re.title__wrapper}>
            <Text60700 text="Редагування нагадування" />
          </div>
          <div className={re.subTitle__wrapper}>
            <Text28700 text="Перший загальний лист" />
          </div>
          <div className={re.languageChoose__wrapper}>
              <div className={`${re.item} ${activeIndex === 0 ? re.activeItem : ''}`} onClick={() => setActiveIndex(0)}>Українська</div>
              <div className={`${re.item} ${activeIndex === 1 ? re.activeItem : ''}`} onClick={() => setActiveIndex(1)}>English</div>
          </div>
          <div className={re.reviewEdit__body}>
             <div className={re.status__wrapper}>
                <Text17400 text='Статус'/>
                <div className={re.accordion__wrapper}>
                   <Text14400P text='Активний'/>
                   <img src={Arrow} alt="arrow" />
                </div>
             </div>
             <div className={re.theme__wrapper}>
              <Text17400 text='Тема листа'/>
              <div className={re.input__wrapper}>
                 <Text14400P text='Початок рев’ю'/>
              </div>
             </div>
             <div className={re.contain__wrapper}>
                <h3 className={re.title}><Text18700 text='Зміст листа'/></h3>
                <div className={re.navigation__wrapper}>
                <img src={Navigation} alt="nav" />
                </div>
                <div className={re.contain__info}>
                  <img src={Info} alt="info" />
                </div>
             </div>
             <div className={re.reference__wrapper}>
               <Text17400 text='Посилання в кнопці'/>
               <div className={re.input__wrapper}>
                  <Text14400 text='https://corp.dragon-capital.com/review'/>
               </div>
             </div>
             <div className={re.buttons__wrapper}>
                <Button218 text={<Text15700 text='Зберегти' color='#fff'/>} bg='rgba(39, 125, 89, 1)'/>
                <Button140 text={<Text15700 text='Відмінити'/>} bg='rgba(61, 61, 61, 0.06)'/>
             </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ReviewEdit;
