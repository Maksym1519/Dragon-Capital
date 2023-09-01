import "./dynamic-button.scss";

const GreenDynamicButton = (props) => {
    return (
        <div className="green-dynamic-button" style={{ width: props.width }} onClick={()=>{props.handleClick()}}>
            {props.text}
        </div>
    );
};
export default GreenDynamicButton;