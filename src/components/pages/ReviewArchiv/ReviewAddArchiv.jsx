import ad from "./reviewAddArchiv.module.scss";
import { Link } from "react-router-dom";
import Header from "../../organisms/Header";
import Footer from "../../organisms/Footer";
import ImgTextTemplate from "../../templates/ImgTextTemplate";
import SortingItem from "../../molecules/ReviewCreate/SortingItem";
import Button205 from "../../atoms/Buttons/Button20556";
import Text15400С from "../../atoms/Text15400С";
import Text60700 from "../../atoms/Text60700";
import Text14700 from '../../atoms/Text14700';
import Text14400 from "../../atoms/Text14400";
import Text15700 from "../../atoms/Text15700";
import ArrowBack from "../../../images/green-arrow-history.svg";
import Arrow from "../../../images/header-arrow-down.svg";
import Search from '../../../images/search-icon.svg';
import Ava1 from "../../../images/ava1-sub.webp";
import Ava2 from "../../../images/ava2-sub.webp";
import Ava3 from "../../../images/ava3-sub.webp";
import Ava4 from "../../../images/ava-girl-30.svg";
import Close from '../../../images/close-red.svg'

const ReviewAddArchiv = () => {
  return (
    <div className={ad.wrapper}>
      <Header />
      <div className={ad.background}>
        <div className={ad.container}>
         <Link to='/ReviewArchiv'>
        <div className={ad.back__wrapper}>
            <ImgTextTemplate
              image={ArrowBack}
              text={
                <Text15400С text="Назад" color="#277D59" underline={true} />
              }
            />
          </div>
          </Link>
          <div className={ad.title__wrapper}><Text60700 text='Додати до архiву'/></div>
          <div className={ad.addArchiv__body}>
             <div className={ad.items__wrapper}>
                <div className={ad.accordions__wrapper}>
                   <div className={ad.accordion__item}>
                      <Text15400С text='Тип рев’ю' color='rgba(61, 61, 61, 0.4)'/>
                      <div className={ad.input__wrapper}>
                         <Text15400С text='Название типа'/>
                         <img src={Arrow} alt="arrow" />
                      </div>
                   </div>
                   <div className={ad.accordion__item}>
                      <Text15400С text='Рік проведення' color='rgba(61, 61, 61, 0.4)'/>
                      <div className={ad.input__wrapper}>
                         <Text15400С text='2019'/>
                         <img src={Arrow} alt="arrow" />
                      </div>
                   </div>
                </div>
                <div className={ad.accordion__itemSearch}>
                      <Text15400С text='Пошук спiвробiтника' color='rgba(61, 61, 61, 0.4)'/>
                      <div className={ad.input__wrapper}>
                         <input type="text" />
                         <img src={Search} alt="arrow" />
                      </div>
                   </div>
                   <div className={ad.output__wrapper}>
                     <div className={ad.item}>
                       <ImgTextTemplate image={Ava1} text={<Text15400С text='Alexander Shevchenko'/>}/>
                       <div className={ad.actions}>
                          <div className={ad.text__wrapper}>
                            <Text14700 text='Загрузить файл' color='#277D59' underline={true}/>
                            <Text14400 text='Ревью сотрудника.pdf'/>
                          </div>
                          <img src={Close} alt="close" />
                       </div>
                     </div>
                     <div className={ad.item}>
                       <ImgTextTemplate image={Ava2} text={<Text15400С text='Alexander Shevchenko'/>}/>
                       <div className={ad.actions}>
                          <div className={ad.text__wrapper}>
                            <Text14700 text='Загрузить файл' color='#277D59' underline={true}/>
                          </div>
                          <img src={Close} alt="close" />
                       </div>
                     </div>
                     <div className={ad.item}>
                       <ImgTextTemplate image={Ava3} text={<Text15400С text='Alexander Shevchenko'/>}/>
                       <div className={ad.actions}>
                          <div className={ad.text__wrapper}>
                            <Text14700 text='Загрузить файл' color='#277D59' underline={true}/>
                          </div>
                          <img src={Close} alt="close" />
                       </div>
                     </div>
                   </div>
                   <Button205 text={<Text15700 text='Додати до архiву' color='#fff'/>} bg='#277D59'/>
             </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ReviewAddArchiv;
