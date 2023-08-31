import r from "./roles.module.scss";
import Header from "../Header";
import Text28700 from '../../atoms/Text28700';
import Text21700 from "../../atoms/Text21700";
import Text15400С from "../../atoms/Text15400С";
import Text15700 from "../../atoms/Text15700";
import Text18700T from '../../atoms/Text18700T';
import Text14400P from '../../atoms/Text14400P';
import ImgTextTemplate from "../../templates/ImgTextTemplate";
import Radio from '../../atoms/Radio';
import { useState } from "react";
import Ava1 from '../../../images/ava1-sub.webp';
import Ava2 from '../../../images/ava2-sub.webp';
import Ava3 from '../../../images/ava3-sub.webp';
import Ava0 from '../../../images/ava0-sub.webp';
import Ava4 from '../../../images/ava-girl-30.svg';
import Close from '../../../images/close-red.svg';
import AddPlus from '../../../images/addCircle.svg';
import Arrow from '../../../images/header-arrow-down.svg'

const Roles = () => {
  const [isIndex,setIndex] = useState(0);
  const switchIndex = (index) => {
     setIndex(index)
  }
  return (
  <div className={r.roles__container}>
    <h4 className={r.title}><Text28700 text='Roles'/></h4>
    <div className={r.roles__switcher}>
       <div className={`${r.item} ${isIndex === 0 ? r.itemActive : ''}`} onClick={() => switchIndex(0)}>
       Super Admin
       </div>
       <div className={`${r.item} ${isIndex === 1 ? r.itemActive : ''}`} onClick={() => switchIndex(1)}>
       Admin
       </div>
       <div className={`${r.item} ${isIndex === 2 ? r.itemActive : ''}`} onClick={() => switchIndex(2)}>
       Assistants
       </div>
       <div className={`${r.item} ${isIndex === 3 ? r.itemActive : ''}`} onClick={() => switchIndex(3)}>
       Custom
       </div>
       <div className={`${r.item} ${isIndex === 4 ? r.itemActive : ''}`} onClick={() => switchIndex(4)}>
       Regular user
       </div>
    </div>
   <div className={r.roles__body}>
      <div className={r.persons__wrapper}>
         <h4 className={r.title}><Text21700 text='Who assigned to this role'/></h4>
         <div className={r.item}>
            <ImgTextTemplate image={Ava1} text={<Text15400С text='Alexander Shevchenko'/>}/>
            <img src={Close} alt="close" />
         </div>
         <div className={r.item}>
            <ImgTextTemplate image={Ava2} text={<Text15400С text='Olga Sumska'/>}/>
            <img src={Close} alt="close" />
         </div>
         <div className={r.item}>
            <ImgTextTemplate image={Ava3} text={<Text15400С text='Valeriy Necheporenko'/>}/>
            <img src={Close} alt="close" />
         </div>
         <div className={r.item}>
            <ImgTextTemplate image={Ava4} text={<Text15400С text='Olga Sumska'/>}/>
            <img src={Close} alt="close" />
         </div>
         <div className={r.item}>
            <ImgTextTemplate image={Ava2} text={<Text15400С text='Olga Sumska'/>}/>
            <img src={Close} alt="close" />
         </div>
         <div className={r.item}>
            <ImgTextTemplate image={Ava3} text={<Text15400С text='Valeriy Necheporenko'/>}/>
            <img src={Close} alt="close" />
         </div>
         <div className={r.item}>
            <ImgTextTemplate image={Ava0} text={<Text15400С text='Alexander Shevchenko'/>}/>
            <img src={Close} alt="close" />
         </div>
         <div className={r.addUser__wrapper}>
            <ImgTextTemplate image={AddPlus} text={<Text15700 text='Add new user' color='#277D59'/>}/>
         </div>
      </div>
      <div className={r.features__wrapper}>
        <h4 className={r.title}><Text21700 text='Features'/></h4>
        <div className={r.features__block}>
            <h4 className={r.subtitle}><Text18700T text='Main page'/></h4>
            <div className={r.item}><ImgTextTemplate img={<Radio />} text={<Text15400С text='Important section edit'/>}/></div>
            <div className={r.item}><ImgTextTemplate img={<Radio />} text={<Text15400С text='Holidays edit'/>}/></div>
        </div>
        <div className={r.features__blocks__wrapper}>
          <div className={r.features__block}>
          <h4 className={r.subtitle}><Text18700T text='Calendar'/></h4>
          <div className={r.item}><ImgTextTemplate img={<Radio />} text={<Text15400С text='Requests management'/>}/></div>
          <div className={r.item}><ImgTextTemplate img={<Radio />} text={<Text15400С text='Do not inform head feature'/>}/></div>
          <div className={r.item}><ImgTextTemplate img={<Radio />} text={<Text15400С text='Express requests management'/>}/></div>
          <div className={r.item}><ImgTextTemplate img={<Radio />} text={<Text15400С text='Manage vacation edit'/>}/></div>
          <div className={r.item}><ImgTextTemplate img={<Radio />} text={<Text15400С text='Sick days move management'/>}/></div>
          <div className={r.item}><ImgTextTemplate img={<Radio />} text={<Text15400С text='How to use calendar edit'/>}/></div>
          <div className={r.item}><ImgTextTemplate img={<Radio />} text={<Text15400С text='Requests page management'/>}/></div>
          </div>
          <div className={r.accordions__wrapper}>
             <div className={r.item}>
                <Text14400P text='Everywhere'/>
                <img src={Arrow} alt="arrow" />
             </div>
             <div className={r.item}>
                <Text14400P text='Within department'/>
                <img src={Arrow} alt="arrow" />
             </div>
             <div className={r.item}>
                <Text14400P text='Everywhere'/>
                <img src={Arrow} alt="arrow" />
             </div>
          </div>
        </div>
        <div className={r.features__block + " " + r.managment}>
        <h4 className={r.subtitle}><Text18700T text='User management'/></h4>
        <div className={r.itemAccordion}>
                <Text14400P text='Everywhere'/>
                <img src={Arrow} alt="arrow" />
             </div>
             <div className={r.item}><ImgTextTemplate img={<Radio />} text={<Text15400С text='Manager assignment'/>}/></div>
             <div className={r.item}><ImgTextTemplate img={<Radio />} text={<Text15400С text='Vacation periods edit'/>}/></div>
             <div className={r.item}><ImgTextTemplate img={<Radio />} text={<Text15400С text='Dismisal date edit'/>}/></div>
        </div>
        <div className={r.features__block}>
           <h4 className={r.subtitle}><Text18700T text='User information'/></h4>
           <div className={r.item}><ImgTextTemplate img={<Radio />} text={<Text15400С text='Edit English name'/>}/></div>
           <div className={r.item}><ImgTextTemplate img={<Radio />} text={<Text15400С text='Edit Email'/>}/></div>
           <div className={r.item}><ImgTextTemplate img={<Radio />} text={<Text15400С text='Edit Manager'/>}/></div>
           <div className={r.item}><ImgTextTemplate img={<Radio />} text={<Text15400С text='Edit Ext number'/>}/></div>
           <div className={r.item}><ImgTextTemplate img={<Radio />} text={<Text15400С text='Edit Position'/>}/></div>
           <div className={r.item}><ImgTextTemplate img={<Radio />} text={<Text15400С text='Edit Department'/>}/></div>
           <div className={r.item}><ImgTextTemplate img={<Radio />} text={<Text15400С text='Edit Birthday'/>}/></div>
           <div className={r.item}><ImgTextTemplate img={<Radio />} text={<Text15400С text='Edit Hiring date'/>}/></div>
           <div className={r.item}><ImgTextTemplate img={<Radio />} text={<Text15400С text='Edit Mobile phone number'/>}/></div>
           <div className={r.item}><ImgTextTemplate img={<Radio />} text={<Text15400С text='Edit Ukrainian name'/>}/></div>
           <div className={r.item}><ImgTextTemplate img={<Radio />} text={<Text15400С text='Photo upload'/>}/></div>
           <div className={r.item}><ImgTextTemplate img={<Radio />} text={<Text15400С text='Can assign roles'/>}/></div>
        </div>
      </div>
   </div>
  </div>
  )
};

export default Roles;
