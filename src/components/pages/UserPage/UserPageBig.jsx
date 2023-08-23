import ub from "./userPageBig.module.scss";
import { Link } from "react-router-dom";
import Header from "../../organisms/Header";
import Footer from "../../organisms/Footer";
import Text60700 from "../../atoms/Text60700";
import Text15400С from "../../atoms/Text15400С";
import Text21700 from "../../atoms/Text21700";
import Text17700 from "../../atoms/Text17700";
import Text15700 from "../../atoms/Text15700";
import Text28700 from "../../atoms/Text28700";
import Text17400 from "../../atoms/Text17400";
import Event from "../../atoms/Event";
import ButtonsTeam from "../../atoms/Buttons/ButtonsTeam/ButtonsTeam";
import ImgTextTemplate from "../../templates/ImgTextTemplate";
import PhotoZoom from "../../molecules/MyPage/PhotoZoom";
import Pen from "../../../images/pen.svg";
import Ava from "../../../images/avatar-bigPhoto.webp";
import Ava1Sub from "../../../images/ava1-sub.webp";
import Ava2Sub from "../../../images/ava2-sub.webp";
import Ava3Sub from "../../../images/ava3-sub.webp";
import Ava0Sub from "../../../images/ava0-sub.webp";
import Dragon from "../../../images/dragon-myPage.svg";
import Clock from "../../../images/userPage-clock.svg";
import BigCake from '../../../images/big-cake.svg';
import { useState } from "react";

const userPageBig = () => {
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
    <div className={ub.userPageBig__wrapper}>
      <Header />
      <div className={`${ub.userPageBig__bg} ${isZoom ? ub.darkOverlay : ""}`}>
        <div className={ub.userPageBig__container}>
        <div className={ub.title__wrapper}>
            <Link to='/userPageBigBig'>
                <div className={ub.title}>
                  <Text60700 text="Александр Шевченко" />
                </div>
               </Link>
                <div className={ub.edit}>
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
              <div className={ub.userPageBig__body}>
             <div className={ub.person__info__wrapper}>
              <div className={ub.person__info}>
                   <div className={ub.person__info__header}>
                    <img src={Ava} alt="ava" onClick={openZoom} loading="lazy"/>
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
                   <div className={ub.contactsInformation}>
                    <h4 className={ub.title}>
                      <Text17700 text="Контактная информация" />
                    </h4>
                    <div className={ub.contactsInformation__line}>
                      <Text15400С
                        text="Телефон рабочий"
                        color="rgba(61, 61, 61, 0.4)"
                      />
                      <Text15700 text="+38 (050) 123-45-67" />
                    </div>
                    <div className={ub.contactsInformation__line}>
                      <Text15400С
                        text="Телефон личный"
                        color="rgba(61, 61, 61, 0.4)"
                      />
                      <Text15700 text="+38 (050) 123-45-67" />
                    </div>
                    <div className={ub.contactsInformation__line}>
                      <Text15400С
                        text="Внутренний номер"
                        color="rgba(61, 61, 61, 0.4)"
                      />
                      <Text15700 text="441" />
                    </div>
                   <div className={ub.contactsInformation__line}>
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
                  <div className={ub.workingTime}>
                         <ImgTextTemplate image={Clock} text={<Text15400С text='Рабочее время сотрудника' color='#277D59' underline={true}/>}/>
                    </div>
                </div>
                <div><Text15400С text='История изменений аккаунта' color='#277D59' underline={true}/></div>
              </div>
              <div className={ub.workInformation}>
                <div className={ub.birthday__wrapper}>
                    <h3 className={ub.title}><Text28700 text='День рождения!'/></h3>
                    <p className={ub.text}><Text17400 text='Поздравьте вашего коллегу с Днем Рождения.'/></p>
                    <img src={BigCake} alt="cake" className={ub.bigCake} loading="lazy"/>
                </div>
                  <h3 className={ub.title}>
                    <Text28700 text="Рабочая информация" />
                  </h3>
                  <div className={ub.workInformation__body}>
                    <div className={ub.workInformation__descriptions}>
                      <div className={ub.item}>
                        <Text17700 text="Департамент" />
                        {
                          <Text15400С
                            text="Директор по маркетингу"
                            color="rgba(61, 61, 61, 1)"
                          />
                        }
                      </div>
                      <div className={ub.item}>
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
                      <div className={ub.item}>
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
                    </div>
                    <div className={ub.workInformation__persons}>
                      <div className={ub.chief}>
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
                      <div className={ub.subordinates}>
                        <h4 className={ub.title}>
                          <Text17700 text="Прямые подчиненные" />
                        </h4>
                        <div className={ub.line}>
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
                        <div className={ub.line}>
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
                        <div className={ub.line}>
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
                        <div className={ub.line}>
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
                        <div className={ub.line}>
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
                        <div className={ub.line}>
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
                        <div className={ub.line}>
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
      <div className={ub.footer__wrapper}><Footer /></div>
            <img src={Dragon} alt="dragon" className={ub.dragon__image} />
          {isZoom && <PhotoZoom close={closeZoom} />}
    </div>
    </div>
  );
};

export default userPageBig;
