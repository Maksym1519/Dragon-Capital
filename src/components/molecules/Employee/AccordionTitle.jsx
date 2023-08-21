import e from '../../pages/Employees/employees.module.scss';
import Arrow from '../../../images/header-arrow-down.svg'

const AccordionTitle = (props) => {
    return (
        <div className={e.field__wrapper}>
        <span className={e.field__title}>{props.text}</span>
        <img src={Arrow} alt="arrow" />
      </div>
    )
}

export default AccordionTitle;