import hc from "./historyChanges.module.scss";
import { Link } from "react-router-dom";
import Header from "../../organisms/Header";
import Footer from '../../organisms/Footer';
import ImgTextTemplate from "../../templates/ImgTextTemplate";
import Text15400C from "../../atoms/Text15400С";
import Text60700 from "../../atoms/Text60700";
import Text28700 from "../../atoms/Text28700";
import Text17700 from '../../atoms/Text17700';
import Arrow from "../../../images/green-arrow-history.svg";
import Dragon from '../../../images/dragon-myPage.svg'

const HistoryChanges = () => {
  return (
    <div className={hc.wrapper}>
      <Header />
      <div className={hc.background}>
        <div className={hc.container}>
         <Link to='/Employees'>
          <div className={hc.back__wrapper}>
            <ImgTextTemplate
              image={Arrow}
              text={
                <Text15400C
                  text="Назад в аккаунт"
                  color="#277D59"
                  underline={true}
                />
              }
            />
          </div>
        </Link>
          <h3 className={hc.title}>
            <Text60700 text="История изменений" />
          </h3>
          <h4 className={hc.subtitle}>
            <Text28700 text="Александр Шевченко" />
          </h4>
          <div className={hc.historyItems__wrapper}>
            <div className={hc.item__header}>
              <div className={hc.item__cell}>
                <Text15400C text='Событие' color='rgba(61, 61, 61, 0.4)'/>
              </div>
              <div className={hc.item__cell}>
                <Text15400C text='Старое значение' color='rgba(61, 61, 61, 0.4)'/>
              </div>
              <div className={hc.item__cell}>
                <Text15400C text='Новое значение' color='rgba(61, 61, 61, 0.4)'/>
              </div>
              <div className={hc.item__cell}>
                <Text15400C text='Кто внес изменения' color='rgba(61, 61, 61, 0.4)'/>
              </div>
              <div className={hc.item__cell}>
                <Text15400C text='Дата' color='rgba(61, 61, 61, 0.4)'/>
              </div>
            </div>
            {/* //item------------------------------------------------------ */}
            <div className={hc.item}>
              <div className={hc.item__cell}>
                <Text17700 text='Смена фамилии'/>
              </div>
              <div className={hc.item__cell}>
                <Text15400C text='Василенко'/>
              </div>
              <div className={hc.item__cell}>
                <Text15400C text='Шевченко'/>
              </div>
              <div className={hc.item__cell}>
                <Text15400C text='Ярослав Кошевой'/>
              </div>
              <div className={hc.item__cell}>
                <Text15400C text='21.04.2019'/>
              </div>
             </div>
             {/* //item2------------------------------------------------------ */}
             <div className={hc.item}>
              <div className={hc.item__cell}>
                <Text17700 text='Смена рабочего телефона'/>
              </div>
              <div className={hc.item__cell}>
                <Text15400C text='+38 (050) 123-45-67'/>
              </div>
              <div className={hc.item__cell}>
                <Text15400C text='+38 (095) 765-43-21'/>
              </div>
              <div className={hc.item__cell}>
                <Text15400C text='Ярослав Кошевой'/>
              </div>
              <div className={hc.item__cell}>
                <Text15400C text='21.04.2019'/>
              </div>
             </div>
             {/* //item3------------------------------------------------------ */}
             <div className={hc.item}>
              <div className={hc.item__cell}>
                <Text17700 text='Смена email'/>
              </div>
              <div className={hc.item__cell}>
                <Text15400C text='vasilenko@dragon-capital.com'/>
              </div>
              <div className={hc.item__cell}>
                <Text15400C text='shevchenko@dragon-capital.com'/>
              </div>
              <div className={hc.item__cell}>
                <Text15400C text='Ярослав Кошевой'/>
              </div>
              <div className={hc.item__cell}>
                <Text15400C text='21.04.2019'/>
              </div>
             </div>
             {/* //item4------------------------------------------------------ */}
             <div className={hc.item}>
              <div className={hc.item__cell}>
                <Text17700 text='Смена фамилии'/>
              </div>
              <div className={hc.item__cell}>
                <Text15400C text='Василенко'/>
              </div>
              <div className={hc.item__cell}>
                <Text15400C text='Шевченко'/>
              </div>
              <div className={hc.item__cell}>
                <Text15400C text='Ярослав Кошевой'/>
              </div>
              <div className={hc.item__cell}>
                <Text15400C text='21.04.2019'/>
              </div>
             </div>
             {/* //item5------------------------------------------------------ */}
             <div className={hc.item}>
              <div className={hc.item__cell}>
                <Text17700 text='Смена рабочего телефона'/>
              </div>
              <div className={hc.item__cell}>
                <Text15400C text='+38 (050) 123-45-67'/>
              </div>
              <div className={hc.item__cell}>
                <Text15400C text='+38 (095) 765-43-21'/>
              </div>
              <div className={hc.item__cell}>
                <Text15400C text='Ярослав Кошевой'/>
              </div>
              <div className={hc.item__cell}>
                <Text15400C text='21.04.2019'/>
              </div>
             </div>
             {/* //item6------------------------------------------------------ */}
             <div className={hc.item}>
              <div className={hc.item__cell}>
                <Text17700 text='Смена email'/>
              </div>
              <div className={hc.item__cell}>
                <Text15400C text='vasilenko@dragon-capital.com'/>
              </div>
              <div className={hc.item__cell}>
                <Text15400C text='shevchenko@dragon-capital.com'/>
              </div>
              <div className={hc.item__cell}>
                <Text15400C text='Ярослав Кошевой'/>
              </div>
              <div className={hc.item__cell}>
                <Text15400C text='21.04.2019'/>
              </div>
             </div>
             {/* //item7------------------------------------------------------ */}
             <div className={hc.item}>
              <div className={hc.item__cell}>
                <Text17700 text='Смена рабочего телефона'/>
              </div>
              <div className={hc.item__cell}>
                <Text15400C text='+38 (050) 123-45-67'/>
              </div>
              <div className={hc.item__cell}>
                <Text15400C text='+38 (095) 765-43-21'/>
              </div>
              <div className={hc.item__cell}>
                <Text15400C text='Ярослав Кошевой'/>
              </div>
              <div className={hc.item__cell}>
                <Text15400C text='21.04.2019'/>
              </div>
             </div>
             {/* //item8------------------------------------------------------ */}
             <div className={hc.item}>
              <div className={hc.item__cell}>
                <Text17700 text='Смена email'/>
              </div>
              <div className={hc.item__cell}>
                <Text15400C text='vasilenko@dragon-capital.com'/>
              </div>
              <div className={hc.item__cell}>
                <Text15400C text='shevchenko@dragon-capital.com'/>
              </div>
              <div className={hc.item__cell}>
                <Text15400C text='Ярослав Кошевой'/>
              </div>
              <div className={hc.item__cell}>
                <Text15400C text='21.04.2019'/>
              </div>
             </div>
             {/* //item------------------------------------------------------ */}

          </div>
        </div>
      <div className={hc.footer__wrapper}><Footer /></div>
        </div>
      <img src={Dragon} alt="dragon" className={hc.dragon}/>
    </div>
  );
};

export default HistoryChanges;
