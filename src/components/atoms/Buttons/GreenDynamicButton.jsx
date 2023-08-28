import "./green-dynamic-button.scss";

const GreenDynamicButton = (props) => {
    return (
        <div className="green-dynamic-button" style={{ width: props.width }}>
            {props.text}
        </div>
    );
};
export default GreenDynamicButton;