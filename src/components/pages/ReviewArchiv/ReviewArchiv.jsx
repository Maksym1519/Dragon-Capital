import rc from "./reviewArchiv.module.scss";
import { Link } from "react-router-dom";
import Header from "../../organisms/Header";
import Footer from "../../organisms/Footer";
import ImgTextTemplate from "../../templates/ImgTextTemplate";
import Button183 from "../../atoms/Buttons/Button183";
import Button186 from "../../atoms/Buttons/Button186";
import Button273 from "../../atoms/Buttons/Button273";
import Text60700 from "../../atoms/Text60700";
import Text15400С from "../../atoms/Text15400С";
import Text15700 from "../../atoms/Text15700";
import Text21700 from "../../atoms/Text21700";
import Text28700 from "../../atoms/Text28700";
import Text16400 from "../../atoms/Text16400C";
import Text14400 from "../../atoms/Text14400";
import Radio from "../../atoms/Radio";
import ReviewArchivItem from "../../organisms/ReviewAdmin/ReviewArchivItem";
import Arrow from "../../../images/green-arrow-down.svg";
import ArrowBack from "../../../images/green-arrow-history.svg";
import Pen from "../../../images/pen.svg";
import Download from "../../../images/button-download.svg";
import ShowIcon from "../../../images/show-icon.svg";
import Search from "../../../images/search-icon.svg";
import InputSearch from "../../../images/input-search.svg";
import Ava1 from "../../../images/ava1-sub.webp";
import Ava2 from "../../../images/ava2-sub.webp";
import Ava3 from "../../../images/ava3-sub.webp";
import Ava4 from "../../../images/ava-girl-30.svg";
import ImagePlus from '../../../images/addCircle.svg'
import Close from "../../../images/close-red.svg";
import ArrowBg from '../../../images/arrowGreen-right.svg';
import Dragon from '../../../images/dragon-reviewAdmin.svg';
import { useState } from "react";

const ReviewAdmin = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };
  return (
    <div className={rc.wrapper}>
      <Header />
      <div className={rc.background}>
        <div className={rc.container}>
          <div className={rc.back__wrapper}>
            <ImgTextTemplate
              image={ArrowBack}
              text={
                <Text15400С text="Назад" color="#277D59" underline={true} />
              }
            />
          </div>
          <div className={rc.functions__wrapper}>
            <h2 className={rc.title}>
              <Text60700 text="Архів рев’ю" />
            </h2>
            <Link to='/ReviewAddArchiv'>
            <div className={rc.buttons__wrapper}>
              <Button186
                text={
                  <ImgTextTemplate
                    text={<Text15700 text="Додати до архiву" color="#fff" />}
                  />
                }
                bg="#277D59"
              />
            </div>
          </Link>
          </div>
          <div className={rc.reviewOptions__wrapper}>
            <div
              className={`${rc.reviewOptions__item} ${
                activeIndex === 0 ? rc.reviewOptions__itemActive : ""
              }`}
              onClick={() => handleItemClick(0)}
            >
              Всі рев’ю
            </div>
            <div
              className={`${rc.reviewOptions__item} ${
                activeIndex === 1 ? rc.reviewOptions__itemActive : ""
              }`}
              onClick={() => handleItemClick(1)}
            >
              Мої рев’ю
            </div>
            <div
              className={`${rc.reviewOptions__item} ${
                activeIndex === 2 ? rc.reviewOptions__itemActive : ""
              }`}
              onClick={() => handleItemClick(2)}
            >
              Рев’ю моїх підлеглих
            </div>
            <div
              className={`${rc.reviewOptions__item} ${
                activeIndex === 3 ? rc.reviewOptions__itemActive : ""
              }`}
              onClick={() => handleItemClick(3)}
            >
              Рев’ю де я В’юер
            </div>
          </div>
          <div className={rc.resultsSorting__wrapper}>
            
            <div className={rc.resultsSorting__body}>
              <div className={rc.itemColumn}>
                <div className={rc.itemColumn__titleWrapper}>
                  <ImgTextTemplate
                    image={ShowIcon}
                    text={<Text14400 text="Показати всіх" color="#277D59" />}
                  />
                  <img src={Arrow} alt="arrow" />
                </div>
                <ImgTextTemplate
                  image={Search}
                  text={<Text16400 text="Співробітник" />}
                />
              </div>
              <div className={rc.itemColumn + " " + rc.itemColumn_input}>
                <div className={rc.itemColumn__titleWrapper}>
                  <ImgTextTemplate
                    image={ShowIcon}
                    text={<Text14400 text="Показати всіх" color="#277D59" />}
                  />
                  <img src={Arrow} alt="arrow" />
                </div>
                <div className={rc.input__wrapper}>
                  <input type="text" placeholder="Search" />
                  <img src={InputSearch} alt="search" />
                </div>
              </div>
              <div className={rc.itemColumn}>
                <div className={rc.itemColumn__titleWrapper}>
                  <ImgTextTemplate
                    image={ShowIcon}
                    text={<Text14400 text="Показати всіх" color="#277D59" />}
                  />
                  <img src={Arrow} alt="arrow" />
                </div>
                <ImgTextTemplate
                  image={Search}
                  text={<Text16400 text="Департамент" />}
                />
              </div>
              <div className={rc.itemColumn}>
                <div className={rc.itemColumn__titleWrapper}>
                  <ImgTextTemplate
                    image={ShowIcon}
                    text={<Text14400 text="Показати всіх" color="#277D59" />}
                  />
                  <img src={Arrow} alt="arrow" />
                </div>
                <ImgTextTemplate
                  image={Search}
                  text={<Text16400 text="Viewers" />}
                />
              </div>
              <div className={rc.itemColumn}>
                <div className={rc.itemColumn__titleWrapper}>
                  <ImgTextTemplate
                    image={ShowIcon}
                    text={<Text14400 text="Показати всіх" color="#277D59" />}
                  />
                  <img src={Arrow} alt="arrow" />
                </div>
                <ImgTextTemplate
                  image={Search}
                  text={<Text16400 text="Report ready" />}
                />
              </div>
              <div className={rc.itemColumn}>
                <div className={rc.itemColumn__titleWrapper}>
                  <ImgTextTemplate
                    image={ShowIcon}
                    text={<Text14400 text="Показати всіх" color="#277D59" />}
                  />
                  <img src={Arrow} alt="arrow" />
                </div>
                <ImgTextTemplate
                  image={Search}
                  text={<Text16400 text="Report approved" />}
                />
              </div>
            </div>
            <div className={rc.header}>
              <Text28700 text="1Н2020" />
              </div>
          </div>
          <div className={rc.results__items__wrapper}>
            {/* //item1----------------------------------------------------------- */}
            <ReviewArchivItem
              image={Ava1}
              text1={<Text15700 text="Alexander Shevchenko" />}
              image2={Ava2}
              image3={Ava3}
              text2={<Text15400С text="Светлана Жулявцева" />}
              name1={
                <Text15400С text='Николай Адокица'/>}
                close={Close}
                prove1={<Text15700 text='Да' color='#1DCA58'/>}
                prove2={<Text15700 text='Да' color='#1DCA58'/>}
                arrowBg={ArrowBg}
                line0={true}
                headTrue={true}
                margin={true}
            />
            {/* //item2----------------------------------------------------------- */}
            <ReviewArchivItem
              image={Ava4}
              text1={<Text15700 text="Светлана Тихонова" />}
              image2={Ava2}
              image3={Ava4}
              image4={Ava3}
              text2={<Text15400С text="Екатерина Бойко" />}
              name1={
                <Text15400С text='Екатерина Бойко'/>}
              name2={
                <Text15400С text='Николай Тихонов'/>}
                close={Close}
                prove1={<Text15700 text='Да' color='#1DCA58'/>}
                prove2={<Text15700 text='Да' color='#1DCA58'/>}
                arrowBg={ArrowBg}
                line0={true}
                line1={true}
                headTrue={true}
                margin={true}
                />
            {/* //item3----------------------------------------------------------- */}
            <ReviewArchivItem
              image={Ava3}
              text1={<Text15700 text="Валерий Меладзе" />}
              image2={Ava1}
              image3={Ava4}
              image4={Ava3}
              text2={<Text15400С text="Афанасий Кисленко" />}
              name1={
                <Text15400С text='Екатерина Бойко'/>}
              name2={
                <Text15400С text='Николай Тихонов'/>}
                close={Close}
                prove1={<Text15700 text='Нет' color='rgba(61, 61, 61, 0.3)'/>}
                prove2={<Text15700 text='Нет' color='rgba(61, 61, 61, 0.3)'/>}
                arrowBg={ArrowBg}
                line0={true}
                line1={true}
                line2={true}
                line3={true}
                headTrue={true}
                margin={true}
            />
            {/* //item4----------------------------------------------------------- */}
            <ReviewArchivItem
              image={Ava1}
              text1={<Text15700 text="Alexander Shevchenko" />}
              image2={Ava2}
              image3={Ava3}
              text2={<Text15400С text="Светлана Жулявцева" />}
              name1={
                <Text15400С text='Николай Адокица'/>}
                close={Close}
                prove1={<Text15700 text='Да' color='#1DCA58'/>}
                prove2={<Text15700 text='Да' color='#1DCA58'/>}
                arrowBg={ArrowBg}
                line0={true}
                headTrue={true}
                margin={true}
            />
            {/* //item5----------------------------------------------------------- */}
            <ReviewArchivItem
              image={Ava1}
              text1={<Text15700 text="Alexander Shevchenko" />}
              image2={Ava2}
              image3={Ava3}
              image4={Ava2}
              text2={<Text15400С text="Светлана Жулявцева" />}
              name1={
                <Text15400С text='Екатерина Бойко'/>}
              name2={
                <Text15400С text='Николай Тихонов'/>}
                close={Close}
                prove1={<Text15700 text='Да' color='#1DCA58'/>}
                prove2={<Text15700 text='Да' color='#1DCA58'/>}
                arrowBg={ArrowBg}
                line0={true}
                line1={true}
                headTrue={true}
                margin={true}
            />
            {/* //item6----------------------------------------------------------- */}
            <ReviewArchivItem
              image={Ava3}
              text1={<Text15700 text="Валерий Меладзе" />}
              image2={Ava1}
              image3={Ava4}
              image4={Ava3}
              text2={<Text15400С text="Афанасий Кисленко" />}
              name1={
                <Text15400С text='Екатерина Бойко'/>}
              name2={
                <Text15400С text='Николай Тихонов'/>}
                close={Close}
                prove1={<Text15700 text='Нет' color='rgba(61, 61, 61, 0.3)'/>}
                prove2={<Text15700 text='Нет' color='rgba(61, 61, 61, 0.3)'/>}
                arrowBg={ArrowBg}
                line0={true}
                line1={true}
                line2={true}
                line3={true}
                headTrue={true}
                margin={true}
            />
            <div className={rc.nextYear__title}>
                 <Text28700 text='2Н2019'/>
            </div>
            {/* //item7----------------------------------------------------------- */}
            <ReviewArchivItem
              image={Ava1}
              text1={<Text15700 text="Alexander Shevchenko" />}
              image2={Ava2}
              image3={Ava3}
              image4={Ava3}
              text2={<Text15400С text="Светлана Жулявцева" />}
              name1={
                <Text15400С text='Николай Адокица'/>}
              name2={
                <Text15400С text='Николай Тихонов'/>}
                close={Close}
                prove1={<Text15700 text='Да' color='#1DCA58'/>}
                prove2={<Text15700 text='Да' color='#1DCA58'/>}
                arrowBg={ArrowBg}
                line0={true}
                headTrue={true}
                margin={true}
            />
            {/* //item8----------------------------------------------------------- */}
            <ReviewArchivItem
              image={Ava4}
              text1={<Text15700 text="Светлана Тихонова" />}
              image2={Ava2}
              image3={Ava4}
              image4={Ava1}
              text2={<Text15400С text="Светлана Жулявцева" />}
              name1={
                <Text15400С text='Екатерина Бойко'/>}
                name2={
                  <Text15400С text='Николай Тихонов'/>}
                close={Close}
                prove1={<Text15700 text='Да' color='#1DCA58'/>}
                prove2={<Text15700 text='Да' color='#1DCA58'/>}
                arrowBg={ArrowBg}
                line0={true}
                line1={true}
                headTrue={true}
                margin={true}
            />
            {/* //item----------------------------------------------------------- */}
           </div>
        </div>
        <Footer />
      </div>
      <img src={Dragon} alt="dragon" className={rc.dragon}/>
    </div>
  );
};

export default ReviewAdmin;
