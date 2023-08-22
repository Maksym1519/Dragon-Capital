import e from '../../pages/Employees/employees.module.scss';
import Event from '../../atoms/Event';
import ButtonTeam from '../../atoms/Buttons/ButtonsTeam/ButtonsTeam'
import Text13700 from '../../atoms/Text13700';
import Text15700 from '../../atoms/Text15700';
import Text13400 from '../../atoms/Text13400';
import Text15400С from '../../atoms/Text15400С';
import TextUnderLine from '../../templates/TextUnderline'
import Ava1 from '../../../images/main-ava1.webp';

const EmployeeItem = (props) => {
    const borderColor = {
        borderLeft: `3px solid ${props.color}`
    }
    return (
        <div className={e.item__wrapper} style={borderColor}>
          
        <div className={e.item__wrapper__cell}>
          <div className={e.item__personInfo}>
          <div className={e.status}><Text13700 text={props.text} color={props.color}/></div>
            <div className={e.avaName__wrapper}>
           <img src={props.img} alt="img" />
           <Event text1={<Text15700 text='Alexander Shevchenko'/>} text2={<Text13400 text='Marketing director' color='rgba(61, 61, 61, 0.4)'/>}/>
            </div>
          </div>
          </div>
          <div className={e.item__wrapper__cell}>
          <div className={e.department}>
            <Event text1={<Text15400С text='Marketing and'/>} text2={<Text15400С text='Communications'/>}/>
             <div className={e.teams__wrapper}>
            <ButtonTeam text={<Text15400С text={props.text2} color={props.bColor}/>} bg='rgba(95, 130, 255, 0.10)'/>
            {props.team1}
            {props.team2}
            </div>
            </div>
            </div>
            <div className={e.item__wrapper__cell}>
            <div><Text15400С text='411'/></div>
            </div>
            <div className={e.item__wrapper__cell}>
            <div><Text15400С text='+38 (050) 123-45-67'/></div>
            </div>
            <div className={e.item__wrapper__cell}>
            <div><TextUnderLine text={<Text15400С text='shevchenko@dragon-capital.com' color='#277D59'/>}/></div>
            </div>
        </div>
    )
}

export default EmployeeItem;