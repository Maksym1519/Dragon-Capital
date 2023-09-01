import "./date-input.scss";
import dateIcon from'../../../images/date-icon.svg';

const DateInput = (props) => {
    return (
        <div className="date-input" style={{width: props.width}}>
            <input type="text" className="date-input__input" placeholder={ props.placeholder } />
            <img src={dateIcon} alt="" className="date-input__search-icon" />
        </div>
    );
};
export default DateInput;
