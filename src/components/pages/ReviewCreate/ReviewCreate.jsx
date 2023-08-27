import r from "./reviewCreate.module.scss";
import Header from "../../organisms/Header";
import Footer from "../../organisms/Footer";
import ImgTextTemplate from "../../templates/ImgTextTemplate";
import Button218 from '../../atoms/Buttons/Button218';
import Button140 from "../../atoms/Buttons/Button140";
import Text60700 from "../../atoms/Text60700";
import Text15400С from "../../atoms/Text15400С";
import Text15700 from "../../atoms/Text15700";
import Text28700 from "../../atoms/Text28700";
import Text21700 from "../../atoms/Text21700";
import SortingItem from "../../molecules/ReviewCreate/SortingItem";
import NotitficationItem from "../../molecules/ReviewCreate/NotificationItem";
import Arrow from "../../../images/header-arrow-down.svg";
import Calendar from "../../../images/holiday-calendar.svg";
import Close from "../../../images/close-red.svg";
import AddCircle from "../../../images/addCircle.svg";
import Dragon from '../../../images/dragon-reviewMain.svg'

const ReviewCreate = () => {
  return (
    <div className={r.wrapper}>
      <Header />
      <div className={r.background}>
        <div className={r.container}>
          <h2 className={r.title}>
            <Text60700 text="Розпочати нове рев’ю" />
          </h2>
          <div className={r.sortings__wrapper}>
            <div className={r.sortings__column}>
              <SortingItem
                text1={
                  <Text15400С text="Тип рев’ю" color="rgba(61, 61, 61, 0.4)" />
                }
                text2={<Text15400С text="Название типа" />}
                arrow={Arrow}
              />
              <SortingItem
                text1={
                  <Text15400С
                    text="Дата старту"
                    color="rgba(61, 61, 61, 0.4)"
                  />
                }
                text2={<Text15400С text="20.06.2019" />}
                calendar={Calendar}
              />
              <SortingItem
                text1={
                  <Text15400С
                    text="Дата старту 2 етапу"
                    color="rgba(61, 61, 61, 0.4)"
                  />
                }
                text2={<Text15400С text="20.06.2019" />}
                calendar={Calendar}
              />
              <SortingItem
                text1={
                  <Text15400С
                    text="Дата завершення"
                    color="rgba(61, 61, 61, 0.4)"
                  />
                }
                text2={<Text15400С text="20.06.2019" />}
                calendar={Calendar}
              />
            </div>
            <div className={r.sortings__column}>
              <SortingItem
                text1={
                  <Text15400С
                    text="Рік проведення"
                    color="rgba(61, 61, 61, 0.4)"
                  />
                }
                text2={<Text15400С text="2019" />}
                arrow={Arrow}
              />
              <SortingItem
                text1={
                  <Text15400С text="Час старту" color="rgba(61, 61, 61, 0.4)" />
                }
                text2={<Text15400С text="09:00" />}
                arrow={Arrow}
              />
              <SortingItem
                text1={
                  <Text15400С text="Час старту" color="rgba(61, 61, 61, 0.4)" />
                }
                text2={<Text15400С text="09:00" />}
                arrow={Arrow}
              />
              <SortingItem
                text1={
                  <Text15400С
                    text="Час завершення"
                    color="rgba(61, 61, 61, 0.4)"
                  />
                }
                text2={<Text15400С text="09:00" />}
                arrow={Arrow}
              />
            </div>
            <div className={r.sortings__column + " " + r.verticalAlign}>
              <SortingItem
                text1={
                  <Text15400С
                    text="Дата завершення 1 етапу"
                    color="rgba(61, 61, 61, 0.4)"
                  />
                }
                text2={<Text15400С text="20.06.2019" />}
                calendar={Calendar}
              />
              <SortingItem
                text1={
                  <Text15400С
                    text="Дата завершення 2 етапу"
                    color="rgba(61, 61, 61, 0.4)"
                  />
                }
                text2={<Text15400С text="20.06.2019" />}
                calendar={Calendar}
              />
            </div>
            <div className={r.sortings__column + " " + r.verticalAlign}>
              <SortingItem
                text1={
                  <Text15400С
                    text="Час завершення 1 етапу"
                    color="rgba(61, 61, 61, 0.4)"
                  />
                }
                text2={<Text15400С text="09:00" />}
                arrow={Arrow}
              />
              <SortingItem
                text1={
                  <Text15400С
                    text="Час завершення"
                    color="rgba(61, 61, 61, 0.4)"
                  />
                }
                text2={<Text15400С text="09:00" />}
                arrow={Arrow}
              />
            </div>
          </div>
          <div className={r.questions__wrapper}>
            <h3 className={r.title}>
              <Text28700 text="Питання" />
            </h3>
            <div className={r.items__wrapper}>
              <div className={r.item}>
                <span className={r.number}>
                  <Text21700 text="1" />
                </span>
                <div className={r.input__wrapper}>
                  <input type="text" placeholder="Введіть питання" />
                </div>
                <div className={r.input__wrapper}>
                  <input
                    type="text"
                    placeholder="Write a question in English"
                  />
                </div>
                <img src={Close} alt="close" />
              </div>
              <div className={r.item}>
                <span className={r.number}>
                  <Text21700 text="2" />
                </span>
                <div className={r.input__wrapper}>
                  <input type="text" placeholder="Введіть питання" />
                </div>
                <div className={r.input__wrapper}>
                  <input
                    type="text"
                    placeholder="Write a question in English"
                  />
                </div>
                <img src={Close} alt="close" />
              </div>
              <div className={r.item}>
                <span className={r.number}>
                  <Text21700 text="3" />
                </span>
                <div className={r.input__wrapper}>
                  <input type="text" placeholder="Введіть питання" />
                </div>
                <div className={r.input__wrapper}>
                  <input
                    type="text"
                    placeholder="Write a question in English"
                  />
                </div>
                <img src={Close} alt="close" />
              </div>
              <ImgTextTemplate
                image={AddCircle}
                text={
                  <Text15400С
                    text="Додати ще питання"
                    color="#277D59"
                    underline={true}
                  />
                }
              />
            </div>
          </div>
          <div className={r.notifications__wrapper}>
            <Text28700 text="Повідомлення" />
            <div className={r.items__wrapper}>
              <div className={r.item__header}>
                <div className={r.cell}>
                  <Text15400С
                    text="Назва повідомлення"
                    color="rgba(61, 61, 61, 0.4)"
                  />
                </div>
                <div className={r.cell}>
                  <Text15400С text="Статус" color="rgba(61, 61, 61, 0.4)" />
                </div>
                <div className={r.cell}>
                  <Text15400С
                    text="Хто отримує"
                    color="rgba(61, 61, 61, 0.4)"
                  />
                </div>
                <div className={r.cell}>
                  <Text15400С
                    text="Етап отримання листа"
                    color="rgba(61, 61, 61, 0.4)"
                  />
                </div>
                <div className={r.cell}>
                  <Text15400С text="Відправка" color="rgba(61, 61, 61, 0.4)" />
                </div>
                <div className={r.cell}>
                  <Text15400С
                    text="Буде відправлено"
                    color="rgba(61, 61, 61, 0.4)"
                  />
                </div>
              </div>
              <NotitficationItem
                text1={
                  <Text15700 text="Повідомлення про початок піврічної оцінки розвитку працівників" />
                }
                text3={
                  <Text15400С text="Всі співробітники, які можуть проходити рев’ю" />
                }
                text4={
                  <Text15400С text="Етап 1" />
                }
                text5={
                  <Text15400С text="1 раз у день старту етапу " />
                }
                text6={
                  <Text15400С text="01.07.2020     10:00" />
                }
              />
              <NotitficationItem
                text1={
                  <Text15700 text="Повідомлення про1-й етап піврічної оцінки розвитку працівників" />
                }
                text3={
                  <Text15400С text="Всі співробітники, які можуть проходити рев’ю" />
                }
                text4={
                  <Text15400С text="Етап 1" />
                }
                text5={
                  <Text15400С text="1 раз у день старту етапу " />
                }
                text6={
                  <Text15400С text="05.07.2020     10:00" />
                }
              />
              <NotitficationItem
                text1={
                  <Text15700 text="Нагадування про необхідність заповнити форму" />
                }
                text3={
                  <Text15400С text="Співробітники, які не відправили рев’ю керівнику" />
                }
                text4={
                  <Text15400С text="Етап 1" />
                }
                text5={
                  <Text15400С text="48 годин після початку етапу;   48 годин до кінця етапу;" />
                }
                text6={
                  <Text15400С text="01.07.2020     10:00" />
                }
              />
              <NotitficationItem
                text1={
                  <Text15700 text="Повідомлення про дату завершення 1-го етапу піврічної оцінки працівників" />
                }
                text3={
                  <Text15400С text="Всі співробітники, які можуть проходити рев’ю" />
                }
                text4={
                  <Text15400С text="Етап 1" />
                }
                text5={
                  <Text15400С text="24 години до кінця етапу" />
                }
                text6={
                  <Text15400С text="01.07.2020     10:00" />
                }
              />
              <NotitficationItem
                text1={
                  <Text15700 text="Повідомлення про надсилання ревью керівнику та вьюверам" />
                }
                text3={
                  <Text15400С text="Назначені керівники і в’ювери" />
                }
                text4={
                  <Text15400С text="" />
                }
                text5={
                  <Text15400С text="У момент відправки рев’ю працівником" />
                }
                text6={
                  <Text15400С text="" />
                }
                flex='flex-end'
              />
              <NotitficationItem
                text1={
                  <Text15700 text="Повідомлення про залишений керівником коментар для працівника" />
                }
                text3={
                  <Text15400С text="Співробітники, який заповняв рев’ю" />
                }
                text4={
                  <Text15400С text="" />
                }
                text5={
                  <Text15400С text="У момент відправки коментаря керівником" />
                }
                text6={
                  <Text15400С text="" />
                }
                flex='flex-end'
              />
              <NotitficationItem
                text1={
                  <Text15700 text="Повідомлення про залишений працівником коментар для керівника" />
                }
                text3={
                  <Text15400С text="Всі співробітники, які можуть проходити рев’ю" />
                }
                text4={
                  <Text15400С text="" />
                }
                text5={
                  <Text15400С text="У момент відправки коментаря працівником" />
                }
                text6={
                  <Text15400С text="" />
                }
                flex='flex-end'
              />
              <NotitficationItem
                text1={
                  <Text15700 text="Повідомлення про початок 2-го етапу піврічної оцінки працівників" />
                }
                text3={
                  <Text15400С text="Всі співробітники, які можуть проходити рев’ю" />
                }
                text4={
                  <Text15400С text="Етап 2" />
                }
                text5={
                  <Text15400С text="1 раз у день старту етапу " />
                }
                text6={
                  <Text15400С text="01.07.2020     10:00" />
                }
                 />
              <NotitficationItem
                text1={
                  <Text15700 text="Нагадування про необхідність назначити зустріч 1 на 1" />
                }
                text3={
                  <Text15400С text="Всі співробітники, які можуть проходити рев’ю" />
                }
                text4={
                  <Text15400С text="Дата старту Етапу 2" />
                }
                text5={
                  <Text15400С text="48 годин після початку етапу;   48 годин до кінця етапу;" />
                }
                text6={
                  <Text15400С text="05.07.2020     10:00" />
                }
                 />
              <NotitficationItem
                text1={
                  <Text15700 text="Повідомлення про дату завершення 2-го етапу піврічної оцінки працівників" />
                }
                text3={
                  <Text15400С text="Всі співробітники, які можуть проходити рев’ю" />
                }
                text4={
                  <Text15400С text="Етап 2" />
                }
                text5={
                  <Text15400С text="24 години до кінця етапу" />
                }
                text6={
                  <Text15400С text="01.07.2020     10:00" />
                }
                 />
              <NotitficationItem
                text1={
                  <Text15700 text="Повідомлення про необхідність затвердити форму піврічної оцінки пацівників" />
                }
                text3={
                  <Text15400С text="Керівники, які мають незатверджені рев’ю" />
                }
                text4={
                  <Text15400С text="Етап 1" />
                }
                text5={
                  <Text15400С text="48 годин до кінця етапу;" />
                }
                text6={
                  <Text15400С text="01.07.2020     10:00" />
                }
                 />
              <NotitficationItem
                text1={
                  <Text15700 text="Повідомлення про зміну статусу форми піврічної оцінки працівника" />
                }
                text3={
                  <Text15400С text="Підлеглому керівника" />
                }
                text4={
                  <Text15400С text="" />
                }
                text5={
                  <Text15400С text="У момент зміни статусу" />
                }
                text6={
                  <Text15400С text="" />
                }
                flex="flex-end"
                 />
              <NotitficationItem
                text1={
                  <Text15700 text="Повідомлення про дату завершення піврічної оцінки працівників" />
                }
                text3={
                  <Text15400С text="Всі співробітники, які можуть проходити рев’ю" />
                }
                text4={
                  <Text15400С text="Етап 1" />
                }
                text5={
                  <Text15400С text="48 годин до кінця етапу; 24 години до кінця етапу;" />
                }
                text6={
                  <Text15400С text="01.07.2020     10:00" />
                }
                />
            </div>
            <div className={r.buttons__wrapper}>
              <Button218 bg='#277D59' text={<Text15700 text='Начать новый ревью' color='#fff'/>}/>
              <Button140 bg='rgba(61, 61, 61, 0.1)' text={<Text15700 text='Отмена' />}/>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <img src={Dragon} alt="dragon" className={r.dragon}/>
    </div>
  );
};

export default ReviewCreate;
