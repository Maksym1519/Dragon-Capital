import a from './assistants.module.scss';
import { useState } from 'react';
import Text28700 from '../../atoms/Text28700';
import Text21700 from "../../atoms/Text21700";
import Text15400С from "../../atoms/Text15400С";
import Text15700 from "../../atoms/Text15700";
import Text18700T from '../../atoms/Text18700T';
import Text14400P from '../../atoms/Text14400P';
import Text16700 from '../../atoms/Text16700';
import Text12400P from '../../atoms/Text12400P';
import Text17700 from '../../atoms/Text17700';
import ImgTextTemplate from "../../templates/ImgTextTemplate";
import Radio from '../../atoms/Radio';
import Event from '../../atoms/Event';
import Ava1 from '../../../images/ava1-sub.webp';
import Ava2 from '../../../images/ava2-sub.webp';
import Ava3 from '../../../images/ava3-sub.webp';
import Ava0 from '../../../images/ava0-sub.webp';
import Ava4 from '../../../images/ava-girl-30.svg';
import Ava60 from '../../../images/avatar-man-60.svg';
import Close from '../../../images/close-red.svg';
import AddPlus from '../../../images/addCircle.svg';
import Arrow from '../../../images/header-arrow-down.svg'

const Assistants = () => {
    const [isIndex,setIndex] = useState(0);
  const switchIndex = (index) => {
     setIndex(index)
  }
    return (
        <div className={a.assistants__container}>
            <h4 className={a.title}><Text28700 text='Assistants'/></h4>
            <div className={a.roles__switcher}>
       <div className={`${a.item} ${isIndex === 0 ? a.itemActive : ''}`} onClick={() => switchIndex(0)}>
       Users with assistants
       </div>
       <div className={`${a.item} ${isIndex === 1 ? a.itemActive : ''}`} onClick={() => switchIndex(1)}>
       Assistants
       </div>
     </div>
     <div className={a.assistants__body}>
     <div className={a.persons__wrapper}>
         <h4 className={a.title}><Text21700 text='Users with assistants'/></h4>
         <div className={a.item}>
            <ImgTextTemplate image={Ava1} text={<Text15400С text='Alexander Shevchenko'/>}/>
         </div>
         <div className={a.item}>
            <ImgTextTemplate image={Ava2} text={<Text15400С text='Olga Sumska'/>}/>
         </div>
         <div className={a.item}>
            <ImgTextTemplate image={Ava3} text={<Text15400С text='Valeriy Necheporenko'/>}/>
         </div>
         <div className={a.item}>
            <ImgTextTemplate image={Ava4} text={<Text15400С text='Olga Sumska'/>}/>
         </div>
         <div className={a.item}>
            <ImgTextTemplate image={Ava2} text={<Text15400С text='Olga Sumska'/>}/>
         </div>
         <div className={a.item}>
            <ImgTextTemplate image={Ava3} text={<Text15400С text='Valeriy Necheporenko'/>}/>
         </div>
         <div className={a.item}>
            <ImgTextTemplate image={Ava0} text={<Text15400С text='Alexander Shevchenko'/>}/>
         </div>
         <div className={a.addUser__wrapper}>
            <ImgTextTemplate image={AddPlus} text={<Text15700 text='Add new user' color='#277D59'/>}/>
         </div>
      </div>
      <div className={a.assistant__wrapper}>
         <div className={a.header}>
           <ImgTextTemplate image={Ava60} text={<Event text1={<Text16700 text='Valeriy Necheporenko'/>} text2={<Text12400P text='Dragon Capital Partners' color='rgba(61, 61, 61, 0.4)'/>}/>}/>
         </div>
         <div className={a.items__wrapper}>
         <h4 className={a.title}><Text17700 text='Assistants'/></h4>
         <div className={a.item}>
            <ImgTextTemplate image={Ava1} text={<Text15400С text='Alexander Shevchenko'/>}/>
            <img src={Close} alt="close" />
         </div>
         <div className={a.item}>
            <ImgTextTemplate image={Ava2} text={<Text15400С text='Olga Sumska'/>}/>
            <img src={Close} alt="close" />
         </div>
         <div className={a.item}>
            <ImgTextTemplate image={Ava3} text={<Text15400С text='Valeriy Necheporenko'/>}/>
            <img src={Close} alt="close" />
         </div>
         <div className={a.item}>
            <ImgTextTemplate image={Ava4} text={<Text15400С text='Olga Sumska'/>}/>
            <img src={Close} alt="close" />
         </div>
         <div className={a.addUser__wrapper}>
            <ImgTextTemplate image={AddPlus} text={<Text15700 text='Add new assistant' color='#277D59'/>}/>
         </div>
         <div className={a.addUser__wrapper}>
            <ImgTextTemplate image={AddPlus} text={<Text15700 text='Add department' color='#277D59'/>}/>
         </div>
         </div>
      </div>
     </div>
        </div>
    )
}

export default Assistants;