import b from '../button.module.scss';

const Button186 = (props) => {
    const bgStyle = {
        backgroundColor: props.bg
    }
    return (
        <div className={b.button186__wrapper} style={bgStyle}>
           {props.text}
        </div>
    )
}

export default Button186;