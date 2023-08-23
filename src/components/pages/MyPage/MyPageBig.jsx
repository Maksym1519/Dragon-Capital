import mb from "./myPageBig.module.scss";
import Header from "../../organisms/Header";
import Footer from "../../organisms/Footer";
import Text60700 from "../../atoms/Text60700";
import Text15400С from "../../atoms/Text15400С";
import Text21700 from "../../atoms/Text21700";
import Text17700 from "../../atoms/Text17700";
import Text15700 from "../../atoms/Text15700";
import Text28700 from "../../atoms/Text28700";
import ImgTextTemplate from "../../templates/ImgTextTemplate";
import TextUnderLine from "../../templates/TextUnderline";
import Event from "../../atoms/Event";
import PhotoZoom from "../../molecules/MyPage/PhotoZoom";
import Pen from "../../../images/pen.svg";
import Ava from "../../../images/avatar-bigPhoto.webp";
import Ava1Sub from "../../../images/ava1-sub.webp";
import Ava2Sub from "../../../images/ava2-sub.webp";
import Ava3Sub from "../../../images/ava3-sub.webp";
import Ava0Sub from "../../../images/ava0-sub.webp";
import Dragon from "../../../images/dragon-myPage.svg";
import Clock from '../../../images/userPage-clock.svg';
import ArrowDown from '../../../images/arrow-down-myPage.svg';
import { useState } from "react";

const MyPageBig = () => {
    const [isZoom, setIsZoom] = useState(false);
  const [isPhotoZoomOpen, setIsPhotoZoomOpen] = useState(false);
  const openZoom = () => {
    setIsZoom(true);
    setIsPhotoZoomOpen(true);
  };
  const closeZoom = () => {
    setIsZoom(false);
    setIsPhotoZoomOpen(false);
  };
  return (
  
    <div className={mb.myPage__wrapper}>
       <div>
        <Header />
     
        <div className={`${mb.myPage__bg} ${isZoom ? mb.darkOverlay : ""}`}>
         
       
            <div className={mb.myPage__container}>
           
              <div className={mb.title__wrapper}>
                <div className={mb.title}>
                  <Text60700 text="Александр Шевченко" />
                </div>
                <div className={mb.edit}>
                  <ImgTextTemplate
                    image={Pen}
                    text={
                      <Text15400С
                        text="Редактировать"
                        color="#277D59"
                        underline={true}
                      />
                    }
                  />
                </div>
              </div>
              <div className={mb.myPage__body}>
              <div className={mb.person__info}>
                   <div className={mb.person__info__header}>
                    <img src={Ava} alt="ava" onClick={openZoom} />
                    <Event
                      text1={<Text21700 text="Alexander Shevchenko" />}
                      text2={
                        <Text15400С
                          text={
                            <>
                              Директор по маркетингу${<br />} Marketing director
                            </>
                          }
                          color="rgba(61, 61, 61, 0.4)"
                          align='center'
                        />
                      }
                      align='center'
                      gap='10px'
                      />
                  </div>
                   <div className={mb.contactsInformation}>
                    <h4 className={mb.title}>
                      <Text17700 text="Контактная информация" />
                    </h4>
                    <div className={mb.contactsInformation__line}>
                      <Text15400С
                        text="Телефон рабочий"
                        color="rgba(61, 61, 61, 0.4)"
                      />
                      <Text15700 text="+38 (050) 123-45-67" />
                    </div>
                    <div className={mb.contactsInformation__line}>
                      <Text15400С
                        text="Телефон личный"
                        color="rgba(61, 61, 61, 0.4)"
                      />
                      <Text15700 text="+38 (050) 123-45-67" />
                    </div>
                    <div className={mb.contactsInformation__line}>
                      <Text15400С
                        text="Внутренний номер"
                        color="rgba(61, 61, 61, 0.4)"
                      />
                      <Text15700 text="441" />
                    </div>
                    <div className={mb.contactsInformation__line}>
                      <Text15400С
                        text="Страховка"
                        color="rgba(61, 61, 61, 0.4)"
                      />
                      <Event
                        text1={<Text15700 text="568952367" />}
                        text2={
                          <Text15700
                            text="(до 05.11.2019)"
                            color="rgba(61, 61, 61, 0.4)"
                          />
                        }
                        align="flex-end"
                      />
                    </div>
                   <div className={mb.contactsInformation__line}>
                      <Text15400С text="Email" color="rgba(61, 61, 61, 0.4)" />
                      {
                        <Text15400С
                          text="shevchenko@dragon-capital.com"
                          color="#277D59"
                          underline={true}
                        />
                      }
                    </div>
                  </div>
                 </div>
                <div className={mb.statistics__wrapper}>
                  <h3 className={mb.statistics__title}>
                    <Text28700 text="Статистика" />
                  </h3>
                  <div className={mb.statistics}>
                    <h4 className={mb.title}>
                      <Text17700 text="Отпуск" />
                    </h4>
                    <div className={mb.vacation}>
                      <Text15700 text="14 дней осалось" color="#1DCA58" />
                      <Text15700
                        text="7 дней использовано"
                        color="rgba(61, 61, 61, 0.4)"
                      />
                    </div>
                    <div className={mb.sickness}>
                      <h4 className={mb.title}>
                        <Text17700 text="Больничные" />
                      </h4>
                      <div className={mb.margin}>
                        <Text15700 text="14 дней осалось" color="#1DCA58" />
                      </div>
                      {
                        <Text15400С
                          text="Corporate rules on a vacations and sick days"
                          color="#277D59"
                          underline={true}
                        />
                      }
                    </div>
                  </div>
                </div>
                <div className={mb.review__wrapper}>
                  <Text28700 text='Ревью'/>
                   <div className={mb.review}>
                     <div className={mb.item__line}>
                      <Event text1={<Text15400С text='Этап 1' color='rgba(61, 61, 61, 0.4)'/>} text2={<Text17700 text='Заполнение анкеты'/>}/>
                      <Text15700 text='Готово' color='#1DCA58'/>
                      </div>
                      <div className={mb.link__wrapper}><Text15400С text='Перейти к анкете' color='#277D59' underline={true}/></div>
                      <div className={mb.arrow__wrapper}><img src={ArrowDown} alt="arrow" /></div>
                      <div className={mb.item__line}>
                      <Event text1={<Text15400С text='Этап 2' color='rgba(61, 61, 61, 0.4)'/>} text2={<Text17700 text='Собеседование с Head'/>}/>
                      <Text15700 text='Ожидается' color='#FFC700'/>
                      </div>
                      <div className={mb.arrow__wrapper}><img src={ArrowDown} alt="arrow" /></div>
                      <div className={mb.item__line}>
                      <Event text1={<Text15400С text='Этап 3' color='rgba(61, 61, 61, 0.4)'/>} text2={<Text17700 text='Результат Review'/>}/>
                      <Text15700 text='Ожидается' color='#FFC700'/>
                      </div>
                   </div>
                </div>
                <div className={mb.workInformation}>
                  <h3 className={mb.title}>
                    <Text28700 text="Рабочая информация" />
                  </h3>
                  <div className={mb.workInformation__body}>
                    <div className={mb.workInformation__descriptions}>
                      <div className={mb.item}>
                        <Text17700 text="Департамент" />
                        {
                          <Text15400С
                            text="Директор по маркетингу"
                            color="rgba(61, 61, 61, 1)"
                          />
                        }
                      </div>
                      <div className={mb.item}>
                        <Text17700 text="Должность" />
                        <Event
                          text1={
                            <Text15400С
                              text="Marketing and Communications"
                              color="rgba(61, 61, 61, 1)"
                            />
                          }
                          text2={
                            <Text15400С
                              text="Marketing director"
                              color="rgba(61, 61, 61, 1)"
                            />
                          }
                          align="flex-start"
                        />
                      </div>
                      <div className={mb.item}>
                        <Text17700 text="Страховка" />
                        <Event
                          text1={
                            <Text15400С
                              text="Медицинская страховка"
                              color="rgba(61, 61, 61, 1)"
                            />
                          }
                          text2={
                            <Text15400С
                              text="+ для детей"
                              color="rgba(61, 61, 61, 1)"
                            />
                          }
                          align="flex-start"
                        />
                      </div>
                      <div className={mb.item}>
                        <Text17700 text="Срок действия страховки" />
                        {
                          <Text15400С
                            text="До 31.08.2019"
                            color="rgba(61, 61, 61, 1)"
                          />
                        }
                      </div>
                      <div className={mb.item}>
                        <Text17700 text="№ пропуска" />
                        {
                          <Text15400С
                            text="777888"
                            color="rgba(61, 61, 61, 1)"
                          />
                        }
                      </div>
                    </div>
                    <div className={mb.workInformation__persons}>
                      <div className={mb.chief}>
                        <Text17700 text="Руководитель" />
                        <ImgTextTemplate
                          image={Ava1Sub}
                          text={
                            <Text15400С
                              text="Alexander Shevchenko"
                              color="#277D59"
                              underline={true}
                            />
                          }
                        />
                      </div>
                      <div className={mb.subordinates}>
                        <h4 className={mb.title}>
                          <Text17700 text="Прямые подчиненные" />
                        </h4>
                        <div className={mb.line}>
                          <ImgTextTemplate
                            image={Ava1Sub}
                            text={
                              <Text15400С
                                text="Alexander Shevchenko"
                                color="#277D59"
                                underline={true}
                              />
                            }
                          />
                        </div>
                        <div className={mb.line}>
                          <ImgTextTemplate
                            image={Ava2Sub}
                            text={
                              <Text15400С
                                text="Olga Sumska"
                                color="#277D59"
                                underline={true}
                              />
                            }
                          />
                        </div>
                        <div className={mb.line}>
                          <ImgTextTemplate
                            image={Ava3Sub}
                            text={
                              <Text15400С
                                text="Valeriy Necheporenko"
                                color="#277D59"
                                underline={true}
                              />
                            }
                          />
                        </div>
                        <div className={mb.line}>
                          <ImgTextTemplate
                            image={Ava2Sub}
                            text={
                              <Text15400С
                                text="Olga Sumska"
                                color="#277D59"
                                underline={true}
                              />
                            }
                          />
                        </div>
                        <div className={mb.line}>
                          <ImgTextTemplate
                            image={Ava2Sub}
                            text={
                              <Text15400С
                                text="Olga Sumska"
                                color="#277D59"
                                underline={true}
                              />
                            }
                          />
                        </div>
                        <div className={mb.line}>
                          <ImgTextTemplate
                            image={Ava3Sub}
                            text={
                              <Text15400С
                                text="Valeriy Necheporenko"
                                color="#277D59"
                                underline={true}
                              />
                            }
                          />
                        </div>
                        <div className={mb.line}>
                          <ImgTextTemplate
                            image={Ava0Sub}
                            text={
                              <Text15400С
                                text="Alexander Shevchenko"
                                color="#277D59"
                                underline={true}
                              />
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Footer />
   </div>
          <img src={Dragon} alt="dragon" className={mb.dragon__image} />
          {isZoom && <PhotoZoom close={closeZoom} />}
         </div> 
      </div>
  );
}

export default MyPageBig;