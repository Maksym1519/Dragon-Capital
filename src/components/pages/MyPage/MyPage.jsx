import m from "./myPage.module.scss";
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
import Ava from "../../../images/avatar-myPage.webp";
import Ava1Sub from "../../../images/ava1-sub.webp";
import Ava2Sub from "../../../images/ava2-sub.webp";
import Ava3Sub from "../../../images/ava3-sub.webp";
import Ava0Sub from "../../../images/ava0-sub.webp";
import Dragon from "../../../images/dragon-myPage.svg";
import { useState } from "react";

const MyPage = () => {
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
  
    <div className={m.myPage__wrapper}>
       <div>
        <Header />
     
       
         
       
            <div className={m.myPage__container}>
           
              <div className={m.title__wrapper}>
                <div className={m.title}>
                  <Text60700 text="Александр Шевченко" />
                </div>
                <div className={m.edit}>
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
              <div className={m.myPage__body}>
                <div className={m.person__info}>
                  <div className={m.person__info__header}>
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
                        />
                      }
                    />
                  </div>
                  <div className={m.contactsInformation}>
                    <h4 className={m.title}>
                      <Text17700 text="Контактная информация" />
                    </h4>
                    <div className={m.contactsInformation__line}>
                      <Text15400С
                        text="Телефон рабочий"
                        color="rgba(61, 61, 61, 0.4)"
                      />
                      <Text15700 text="+38 (050) 123-45-67" />
                    </div>
                    <div className={m.contactsInformation__line}>
                      <Text15400С
                        text="Телефон личный"
                        color="rgba(61, 61, 61, 0.4)"
                      />
                      <Text15700 text="+38 (050) 123-45-67" />
                    </div>
                    <div className={m.contactsInformation__line}>
                      <Text15400С
                        text="Внутренний номер"
                        color="rgba(61, 61, 61, 0.4)"
                      />
                      <Text15700 text="441" />
                    </div>
                    <div className={m.contactsInformation__line}>
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
                    <div className={m.contactsInformation__line}>
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
                <div className={m.statistics__wrapper}>
                  <h3 className={m.statistics__title}>
                    <Text28700 text="Статистика" />
                  </h3>
                  <div className={m.statistics}>
                    <h4 className={m.title}>
                      <Text17700 text="Отпуск" />
                    </h4>
                    <div className={m.vacation}>
                      <Text15700 text="14 дней осалось" color="#1DCA58" />
                      <Text15700
                        text="7 дней использовано"
                        color="rgba(61, 61, 61, 0.4)"
                      />
                    </div>
                    <div className={m.sickness}>
                      <h4 className={m.title}>
                        <Text17700 text="Больничные" />
                      </h4>
                      <div className={m.margin}>
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
                <div className={m.workInformation}>
                  <h3 className={m.title}>
                    <Text28700 text="Рабочая информация" />
                  </h3>
                  <div className={m.workInformation__body}>
                    <div className={m.workInformation__descriptions}>
                      <div className={m.item}>
                        <Text17700 text="Департамент" />
                        {
                          <Text15400С
                            text="Директор по маркетингу"
                            color="rgba(61, 61, 61, 1)"
                          />
                        }
                      </div>
                      <div className={m.item}>
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
                      <div className={m.item}>
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
                      <div className={m.item}>
                        <Text17700 text="Срок действия страховки" />
                        {
                          <Text15400С
                            text="До 31.08.2019"
                            color="rgba(61, 61, 61, 1)"
                          />
                        }
                      </div>
                      <div className={m.item}>
                        <Text17700 text="№ пропуска" />
                        {
                          <Text15400С
                            text="777888"
                            color="rgba(61, 61, 61, 1)"
                          />
                        }
                      </div>
                    </div>
                    <div className={m.workInformation__persons}>
                      <div className={m.chief}>
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
                      <div className={m.subordinates}>
                        <h4 className={m.title}>
                          <Text17700 text="Прямые подчиненные" />
                        </h4>
                        <div className={m.line}>
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
                        <div className={m.line}>
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
                        <div className={m.line}>
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
                        <div className={m.line}>
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
                        <div className={m.line}>
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
                        <div className={m.line}>
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
                        <div className={m.line}>
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
            <div className={`${m.myPage__bg} ${isZoom ? m.darkOverlay : ""}`}>
   </div>
          <img src={Dragon} alt="dragon" className={m.dragon__image} />
          {isZoom && <PhotoZoom close={closeZoom} />}
         </div> 
      </div>
  );
};

export default MyPage;
