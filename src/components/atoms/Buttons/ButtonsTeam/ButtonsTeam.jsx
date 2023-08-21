import bt from './buttonsTeam.module.scss';

const ButtonsTeam = (props) => {
    const bgStyle = {
        backgroundColor: props.bg
    }
    return (
        <div className={bt.buttonsTeam__wrapper} style={bgStyle}>
           {props.text}
        </div>
    )
}

export default ButtonsTeam;