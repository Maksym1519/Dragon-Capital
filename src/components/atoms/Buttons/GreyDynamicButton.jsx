import "./dynamic-button.scss";

const GreyDynamicButton = (props) => {
    return (
        <div className="grey-dynamic-button" style={{ width: props.width }}>
            {props.text}
        </div>
    );
};
export default GreyDynamicButton;