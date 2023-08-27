import n from "./notificationItem.module.scss";
import Text15400C from '../../atoms/Text15400С';
import Pen from '../../../images/pen.svg'


const NotitficationItem = (props) => {
  const styled = {
    justifyContent: props.flex
  }
  return (
   <div className={n.item}>
      <div className={n.cell}>
        {props.text1}
      </div>
      <div className={n.cell}>
        <Text15400C text='Активне' color='#1DCA58'/>
      </div>
      <div className={n.cell}>
        {props.text3}
      </div>
      <div className={n.cell}>
        {props.text4}
      </div>
      <div className={n.cell}>
        {props.text5}
      </div>
      <div className={n.cell + " " + n.cell_edit} style={styled}>
         {props.text6 &&<>{props.text6}</>}
        <img src={Pen} alt="pen" />
      </div>
  </div>
  )
};

export default NotitficationItem;
