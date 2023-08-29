import ra from './reviewAdminItem.module.scss';
import ImgTextTemplate from '../../templates/ImgTextTemplate';
import Text15400С from '../../atoms/Text15400С';
import Download from '../../../images/download-review.svg';

const ReviewAdminItem = (props) => {
    return (
        <div className={ra.wrapper}>
        <div className={ra.container}>
          <div className={ra.cell}>
            <ImgTextTemplate image={props.image} text={props.text1}/>
          </div>
          <div className={ra.cell}>
            <Text15400С text='Marketing and Communications'/>
          </div>
          <div className={ra.cell + " " + ra.column}>
          {props.headTrue && <ImgTextTemplate image={props.image2} text={props.text2}/>}
          {props.headAssign && <Text15400С text='Head не назначен' color='#EE3424'/>}
          <div className={`${props.margin ? ra.column_margin : ra.column_margin2}`}>{<img src={props.plusIcon}/>}{props.changeViewer}</div>
          </div>
          <div className={ra.cell + " " + ra.column} >
         {props.line0 && <div className={ra.row_close}><ImgTextTemplate image={props.image3} text={props.name1}/><img src={props.close} /></div>}
         {props.line1 && <div className={ra.row_close}><ImgTextTemplate image={props.image4} text={props.name2}/><img src={props.close} /></div>}
         {props.line2 && <div className={ra.row_close}><ImgTextTemplate image={props.image3} text={props.name1}/><img src={props.close} /></div>}
         {props.line3 && <div className={ra.row_close}><ImgTextTemplate image={props.image4} text={props.name2}/><img src={props.close} /></div>}

          <ImgTextTemplate image={props.imagePlus} text={props.addViewer}/>
          </div>
          <div className={ra.cell}>
              {props.prove1}
          </div>
          <div className={ra.cell}>
              {props.prove2}
          </div>
         
        </div>
        <div className={ra.continue}>
          <img src={Download} alt="icon" className={ra.download}/>
            <img src={props.arrowBg}/>
          </div>
        </div>
    )
}

export default ReviewAdminItem;