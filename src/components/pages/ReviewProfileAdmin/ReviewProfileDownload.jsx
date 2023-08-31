import rd from "./reviewProfileDownload.module.scss";
import { Link } from "react-router-dom";
import Text15400С from "../../atoms/Text15400С";
import Text60700 from "../../atoms/Text60700";
import Text15700 from "../../atoms/Text15700";
import Text21700 from "../../atoms/Text21700";
import Text21400 from '../../atoms/Text21400';
import Text14700 from "../../atoms/Text14700";
import Text20400P from '../../atoms/Text20400P';
import Text30700 from '../../atoms/Text30700';
import Text16400 from '../../atoms/Text16400C';
import Text16700 from '../../atoms/Text16700';
import Text14400 from "../../atoms/Text14400";
import Text13400 from '../../atoms/Text13400';
import Text17700 from '../../atoms/Text17700';
import Header from "../../organisms/Header";
import Footer from "../../organisms/Footer";
import ImgTextTemplate from "../../templates/ImgTextTemplate";
import Event from "../../atoms/Event";
import ArrowBack from "../../../images/green-arrow-history.svg";
import Arrow from "../../../images/header-arrow-down.svg";
import BigAva from '../../../images/avatar-bigPhoto.webp';
import Ava70 from '../../../images/avatar70-woman.svg';
import Ava1 from '../../../images/ava1-sub.webp';
import Ava2 from '../../../images/ava3-sub.webp';
import Info from '../../../images/reviewEdit-info.svg';
import PDF from '../../../images/pdf.svg';
import Download from '../../../images/download-icon.svg';
import Close from '../../../images/close-red.svg'

const ReviewProfileDownload = () => {
    return (
        <div className={rd.wrapper}>
        <Header />
        <div className={rd.background}>
          <div className={rd.container}>
            <Link to="/ReviewArchiv">
              <div className={rd.back__wrapper}>
                <ImgTextTemplate
                  image={ArrowBack}
                  text={
                    <Text15400С text="Назад" color="#277D59" underline={true} />
                  }
                />
              </div>
            </Link>
            <div className={rd.title__wrapper}>
              <Text60700 text="Анкета рев’ю 2Н2020" />
             </div>
             <div className={rd.status__wrapper}>
            <Text21700 text='Статус'/>
            <Text21700 text='Необхідно заповнити' color='#FFC700'/>
          </div>
             <div className={rd.employeeInfo__wrapper}>
              <div className={rd.employee__item}>
                 <Text21400 text='Співробітник'/>
                 <div className={rd.ava__wrapper}>
                   <img src={BigAva} alt="ava" />
                   <div className={rd.ava__info}>
                     <Text21700 text='Alexander Shevchenko'/>
                     <div><Text15400С text='Маркетолог'/><Text15400С text='Marketing '/></div>
                     <Text14700 text='Перейти в аккаунт' color='#277D59' underline={true}/>
                   </div>
                 </div>
              </div>
              <div className={rd.head__item}>
                 <h4 className={rd.title}><Text21700 text='Хед'/></h4>
                 <div className={rd.ava__wrapper}>
                   <img src={Ava70} alt="ava" />
                   <Text20400P text='Светлана Жулявцева'/>
                 </div>
              </div>
              <div className={rd.viewer__item}>
                  <h4 className={rd.title}><Text21700 text='В’юери'/></h4>
                  <ImgTextTemplate image={Ava1} text={<Text15400С text='Екатерина Бойко'/>}/>
                  <ImgTextTemplate image={Ava2} text={<Text15400С text='Николай Тихонов'/>}/>
              </div>
          </div>
          <div className={rd.download__wrapper}>
           <h4 className={rd.title}><Text21700 text='Ревью'/></h4>
           <div className={rd.body}>
              <ImgTextTemplate image={PDF} text={<Event text1={<Text13400 text='27.08.2015'/>} text2={<Text17700 text='Ревью сотрудника.pdf'/>}/>}/>
              <div className={rd.functions__wrapper}>
                 <div className={rd.cell}><Text13400 text='1,2 Mb'/></div>
                 <div className={rd.cell + " " + rd.cell_border}><img src={Download}/></div>
                 <div className={rd.cell}><img src={Close} alt="close" /></div>
              </div>
           </div>
           <Text14700 text='Загрузить файл' color='#277D59' underline={true}/>
          </div>
            </div>
            <Footer />
            </div>
            </div>
    )
}

export default ReviewProfileDownload;