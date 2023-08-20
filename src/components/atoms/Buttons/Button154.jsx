import b from '../button.module.scss';

const Button154 = (props) => {
    const bgStyle = {
        backgroundColor: props.bg
    }
    return (
        <div className={b.button154__wrapper} style={bgStyle}>
           {props.text}
        </div>
    )
}

export default Button154;
