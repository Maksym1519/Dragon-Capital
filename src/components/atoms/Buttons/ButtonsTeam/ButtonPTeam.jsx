import "./button-p-team.scss";

const ButtonPTeam = (props) => {
    return (
        <div className="team-p-button" style={{  color: props.color }}>
            <div className="team-p-button__background"  style={{ background: props.color }}></div>
            {props.text}
        </div>
    );
};
export default ButtonPTeam;