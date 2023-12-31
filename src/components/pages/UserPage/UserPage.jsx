import u from './userPage.module.scss';
import { Link } from 'react-router-dom';
import Header from '../../organisms/Header';
import Footer from "../../organisms/Footer";
import Text60700 from "../../atoms/Text60700";
import Text15400С from "../../atoms/Text15400С";
import Text21700 from "../../atoms/Text21700";
import Text17700 from "../../atoms/Text17700";
import Text15700 from "../../atoms/Text15700";
import Text28700 from "../../atoms/Text28700";
import Event from "../../atoms/Event";
import ButtonsTeam from '../../atoms/Buttons/ButtonsTeam/ButtonsTeam';
import ImgTextTemplate from "../../templates/ImgTextTemplate";
import PhotoZoom from "../../molecules/MyPage/PhotoZoom";
import Pen from "../../../images/pen.svg";
import Ava from "../../../images/avatar-myPage.webp";
import Ava1Sub from "../../../images/ava1-sub.webp";
import Ava2Sub from "../../../images/ava2-sub.webp";
import Ava3Sub from "../../../images/ava3-sub.webp";
import Ava0Sub from "../../../images/ava0-sub.webp";
import Dragon from "../../../images/dragon-myPage.svg";
import Clock from '../../../images/userPage-clock.svg';
import { useState } from 'react';

const UserPage = () => {
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
        <div className={u.userPage__wrapper}>
          <Header />
          <div className={`${u.userPage__bg} ${isZoom ? u.darkOverlay : ""}`}>
            <div className={u.userPage__container}>
            <div className={u.title__wrapper}>
            <Link to='/UserPageBig'>
                <div className={u.title}>
                  <Text60700 text="Александр Шевченко" />
                </div>
               </Link>
                <div className={u.edit}>
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
              <div className={u.userPage__body}>
             <div className={u.person__info__wrapper}>
              <div className={u.person__info}>
                   <div className={u.person__info__header}>
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
                   <div className={u.contactsInformation}>
                    <h4 className={u.title}>
                      <Text17700 text="Контактная информация" />
                    </h4>
                    <div className={u.contactsInformation__line}>
                      <Text15400С
                        text="Телефон рабочий"
                        color="rgba(61, 61, 61, 0.4)"
                      />
                      <Text15700 text="+38 (050) 123-45-67" />
                    </div>
                    <div className={u.contactsInformation__line}>
                      <Text15400С
                        text="Телефон личный"
                        color="rgba(61, 61, 61, 0.4)"
                      />
                      <Text15700 text="+38 (050) 123-45-67" />
                    </div>
                    <div className={u.contactsInformation__line}>
                      <Text15400С
                        text="Внутренний номер"
                        color="rgba(61, 61, 61, 0.4)"
                      />
                      <Text15700 text="441" />
                    </div>
                   <div className={u.contactsInformation__line}>
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
                  <div className={u.workingTime}>
                         <ImgTextTemplate image={Clock} text={<Text15400С text='Рабочее время сотрудника' color='#277D59' underline={true}/>}/>
                    </div>
                </div>
                <div><Text15400С text='История изменений аккаунта' color='#277D59' underline={true}/></div>
              </div>
              <div className={u.workInformation}>
                  <h3 className={u.title}>
                    <Text28700 text="Рабочая информация" />
                  </h3>
                  <div className={u.workInformation__body}>
                    <div className={u.workInformation__descriptions}>
                      <div className={u.item}>
                        <Text17700 text="Департамент" />
                        {
                          <Text15400С
                            text="Директор по маркетингу"
                            color="rgba(61, 61, 61, 1)"
                          />
                        }
                      </div>
                      <div className={u.item}>
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
                  <div className={u.teams__wrapper}>
                     <Text17700 text='Team'/>
                     <ButtonsTeam text={<Text15400С text='Obolon Residences' color='#5F82FF'/>} bg='rgba(95, 130, 255, 0.10)'/>
                     <ButtonsTeam text={<Text15400С text='Green Hills' color='#FE9800'/>} bg='rgba(254, 152, 0, 0.1)'/>
                  </div>
                    </div>
                    <div className={u.workInformation__persons}>
                      <div className={u.chief}>
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
                      <div className={u.subordinates}>
                        <h4 className={u.title}>
                          <Text17700 text="Прямые подчиненные" />
                        </h4>
                        <div className={u.line}>
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
                        <div className={u.line}>
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
                        <div className={u.line}>
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
                        <div className={u.line}>
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
                        <div className={u.line}>
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
                        <div className={u.line}>
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
                        <div className={u.line}>
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
            <div className={u.footer__wrapper}><Footer /></div>
            <img src={Dragon} alt="dragon" className={u.dragon__image} />
          {isZoom && <PhotoZoom close={closeZoom} />}
          </div>
        </div>
    )
}

export default UserPage;