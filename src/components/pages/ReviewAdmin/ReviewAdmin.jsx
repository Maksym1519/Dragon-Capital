import r from "./reviewAdmin.module.scss";
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
import Text16400 from "../../atoms/Text16400C";
import Text14400 from "../../atoms/Text14400";
import Radio from "../../atoms/Radio";
import ReviewAdminItem from "../../organisms/ReviewAdmin/ReviewAdminItem";
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
    <div className={r.wrapper}>
      <Header />
      <div className={r.background}>
        <div className={r.container}>
          <div className={r.back__wrapper}>
            <ImgTextTemplate
              image={ArrowBack}
              text={
                <Text15400С text="Назад" color="#277D59" underline={true} />
              }
            />
          </div>
          <div className={r.functions__wrapper}>
            <h2 className={r.title}>
              <Text60700 text="Рев’ю 1H2019" />
            </h2>
            <div className={r.buttons__wrapper}>
              <ImgTextTemplate
                image={Pen}
                text={
                  <Text15400С
                    text="Редагувати"
                    color="#277D59"
                    underline={true}
                  />
                }
              />
              <Button183
                text={<Text15700 text="Завершити рев’ю" color="#EE3424" />}
                bg="rgba(238, 52, 36, 0.06)"
              />
              <Button273
                text={
                  <Text15700
                    text="Відправити хедам на перевірку"
                    color="#277D59"
                  />
                }
                border="1px solid #277D59"
              />
              <Button186
                text={
                  <ImgTextTemplate
                    image={Download}
                    text={<Text15700 text="Отримати звіт" color="#fff" />}
                  />
                }
                bg="#277D59"
              />
            </div>
          </div>
          <div className={r.reviewOptions__wrapper}>
            <div
              className={`${r.reviewOptions__item} ${
                activeIndex === 0 ? r.reviewOptions__itemActive : ""
              }`}
              onClick={() => handleItemClick(0)}
            >
              Всі рев’ю
            </div>
            <div
              className={`${r.reviewOptions__item} ${
                activeIndex === 1 ? r.reviewOptions__itemActive : ""
              }`}
              onClick={() => handleItemClick(1)}
            >
              Мої рев’ю
            </div>
            <div
              className={`${r.reviewOptions__item} ${
                activeIndex === 2 ? r.reviewOptions__itemActive : ""
              }`}
              onClick={() => handleItemClick(2)}
            >
              Рев’ю моїх підлеглих
            </div>
            <div
              className={`${r.reviewOptions__item} ${
                activeIndex === 3 ? r.reviewOptions__itemActive : ""
              }`}
              onClick={() => handleItemClick(3)}
            >
              Рев’ю де я В’юер
            </div>
          </div>
          <div className={r.resultsSorting__wrapper}>
            <div className={r.header}>
              <Text21700 text="Результати" />
              <div className={r.row__option}>
                <ImgTextTemplate
                  img={<Radio />}
                  text={<Text16400 text="Показати неназначених" />}
                />
              </div>
            </div>
            <div className={r.resultsSorting__body}>
              <div className={r.itemColumn}>
                <div className={r.itemColumn__titleWrapper}>
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
              <div className={r.itemColumn + " " + r.itemColumn_input}>
                <div className={r.itemColumn__titleWrapper}>
                  <ImgTextTemplate
                    image={ShowIcon}
                    text={<Text14400 text="Показати всіх" color="#277D59" />}
                  />
                  <img src={Arrow} alt="arrow" />
                </div>
                <div className={r.input__wrapper}>
                  <input type="text" placeholder="Search" />
                  <img src={InputSearch} alt="search" />
                </div>
              </div>
              <div className={r.itemColumn}>
                <div className={r.itemColumn__titleWrapper}>
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
              <div className={r.itemColumn}>
                <div className={r.itemColumn__titleWrapper}>
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
              <div className={r.itemColumn}>
                <div className={r.itemColumn__titleWrapper}>
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
              <div className={r.itemColumn}>
                <div className={r.itemColumn__titleWrapper}>
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
          </div>
          <div className={r.results__items__wrapper}>
            {/* //item1----------------------------------------------------------- */}
            <ReviewAdminItem
              image={Ava1}
              text1={<Text15700 text="Alexander Shevchenko" />}
              image2={Ava2}
              image3={Ava3}
              text2={<Text15400С text="Светлана Жулявцева" />}
              changeViewer={
                <Text15400С
                  text="Изменить Head’a"
                  color="#277D59"
                  underline={true}
                />
              }
              name1={
                <Text15400С text='Николай Адокица'/>}
                imagePlus={ImagePlus}
                addViewer={<Text15400С text='Додати в’ювера' color='#277D59' underline={true}/>}
                close={Close}
                prove1={<Text15700 text='Да' color='#1DCA58'/>}
                prove2={<Text15700 text='Да' color='#1DCA58'/>}
                arrowBg={ArrowBg}
                line0={true}
                headTrue={true}
                margin={true}
            />
            {/* //item2----------------------------------------------------------- */}
            <ReviewAdminItem
              image={Ava4}
              text1={<Text15700 text="Светлана Тихонова" />}
              image2={Ava2}
              image3={Ava4}
              image4={Ava3}
              text2={<Text15400С text="Екатерина Бойко" />}
              changeViewer={
                <Text15400С
                  text="Изменить Head’a"
                  color="#277D59"
                  underline={true}
                />
              }
              name1={
                <Text15400С text='Екатерина Бойко'/>}
              name2={
                <Text15400С text='Николай Тихонов'/>}
                imagePlus={ImagePlus}
                addViewer={<Text15400С text='Додати в’ювера' color='#277D59' underline={true}/>}
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
            <ReviewAdminItem
              image={Ava3}
              text1={<Text15700 text="Валерий Меладзе" />}
              image2={Ava1}
              image3={Ava4}
              image4={Ava3}
              text2={<Text15400С text="Афанасий Кисленко" />}
              changeViewer={
                <Text15400С
                  text="Изменить Head’a"
                  color="#277D59"
                  underline={true}
                />
              }
              name1={
                <Text15400С text='Екатерина Бойко'/>}
              name2={
                <Text15400С text='Николай Тихонов'/>}
                imagePlus={ImagePlus}
                addViewer={<Text15400С text='Додати в’ювера' color='#277D59' underline={true}/>}
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
            <ReviewAdminItem
              image={Ava1}
              text1={<Text15700 text="Alexander Shevchenko" />}
              image2={Ava1}
              image3={Ava4}
              image4={Ava3}
              text2={<Text15400С text="Афанасий Кисленко" />}
              changeViewer={
                <Text15400С
                  text="Изменить Head’a"
                  color="#277D59"
                  underline={true}
                />
              }
              name1={
                <Text15400С text='Екатерина Бойко'/>}
              name2={
                <Text15400С text='Николай Тихонов'/>}
                imagePlus={ImagePlus}
                addViewer={<Text15400С text='Додати в’ювера' color='#277D59' underline={true}/>}
                close={Close}
                prove1={<Text15700 text='Да' color='#1DCA58'/>}
                prove2={<Text15700 text='Да' color='#1DCA58'/>}
                arrowBg={ArrowBg}
                headTrue={false}
                headAssign={true}
                plusIcon={ImagePlus}
            />
            {/* //item5----------------------------------------------------------- */}
            <ReviewAdminItem
              image={Ava1}
              text1={<Text15700 text="Alexander Shevchenko" />}
              image2={Ava2}
              image3={Ava3}
              text2={<Text15400С text="Светлана Жулявцева" />}
              changeViewer={
                <Text15400С
                  text="Изменить Head’a"
                  color="#277D59"
                  underline={true}
                />
              }
              name1={
                <Text15400С text='Николай Адокица'/>}
                imagePlus={ImagePlus}
                addViewer={<Text15400С text='Додати в’ювера' color='#277D59' underline={true}/>}
                close={Close}
                prove1={<Text15700 text='Да' color='#1DCA58'/>}
                prove2={<Text15700 text='Да' color='#1DCA58'/>}
                arrowBg={ArrowBg}
                line0={true}
                headTrue={true}
                margin={true}
            />
            {/* //item6----------------------------------------------------------- */}
            <ReviewAdminItem
              image={Ava4}
              text1={<Text15700 text="Светлана Тихонова" />}
              image2={Ava1}
              image3={Ava4}
              image4={Ava3}
              text2={<Text15400С text="Афанасий Кисленко" />}
              changeViewer={
                <Text15400С
                  text="Изменить Head’a"
                  color="#277D59"
                  underline={true}
                />
              }
              name1={
                <Text15400С text='Екатерина Бойко'/>}
              name2={
                <Text15400С text='Николай Тихонов'/>}
                imagePlus={ImagePlus}
                addViewer={<Text15400С text='Додати в’ювера' color='#277D59' underline={true}/>}
                close={Close}
                prove1={<Text15700 text='Нет' color='rgba(61, 61, 61, 0.3)'/>}
                prove2={<Text15700 text='Нет' color='rgba(61, 61, 61, 0.3)'/>}
                arrowBg={ArrowBg}
                headTrue={false}
                headAssign={true}
                plusIcon={ImagePlus}
                line0={true}
                line1={true}
            />
            {/* //item7----------------------------------------------------------- */}
            <ReviewAdminItem
              image={Ava3}
              text1={<Text15700 text="Валерий Меладзе" />}
              image2={Ava1}
              image3={Ava4}
              image4={Ava3}
              text2={<Text15400С text="Афанасий Кисленко" />}
              changeViewer={
                <Text15400С
                  text="Изменить Head’a"
                  color="#277D59"
                  underline={true}
                />
              }
              name1={
                <Text15400С text='Екатерина Бойко'/>}
              name2={
                <Text15400С text='Николай Тихонов'/>}
                imagePlus={ImagePlus}
                addViewer={<Text15400С text='Додати в’ювера' color='#277D59' underline={true}/>}
                close={Close}
                prove1={<Text15700 text='Да' color='#1DCA58'/>}
                prove2={<Text15700 text='Да' color='#1DCA58'/>}
                arrowBg={ArrowBg}
                line0={true}
                line1={true}
                line2={true}
                line3={true}
                headTrue={true}
                margin={true}
            />
            {/* //item8----------------------------------------------------------- */}
            <ReviewAdminItem
              image={Ava1}
              text1={<Text15700 text="Alexander Shevchenko" />}
              image2={Ava2}
              image3={Ava3}
              text2={<Text15400С text="Светлана Жулявцева" />}
              changeViewer={
                <Text15400С
                  text="Изменить Head’a"
                  color="#277D59"
                  underline={true}
                />
              }
              name1={
                <Text15400С text='Николай Адокица'/>}
                imagePlus={ImagePlus}
                addViewer={<Text15400С text='Додати в’ювера' color='#277D59' underline={true}/>}
                close={Close}
                prove1={<Text15700 text='Да' color='#1DCA58'/>}
                prove2={<Text15700 text='Да' color='#1DCA58'/>}
                arrowBg={ArrowBg}
                line0={true}
                headTrue={true}
                margin={true}
            />
            {/* //item----------------------------------------------------------- */}
            {/* //item----------------------------------------------------------- */}
          </div>
        </div>
        <Footer />
      </div>
      <img src={Dragon} alt="dragon" className={r.dragon}/>
    </div>
  );
};

export default ReviewAdmin;
