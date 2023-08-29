import b from '../button.module.scss';

const Button273 = (props) => {
    const bgStyle = {
        backgroundColor: props.bg,
        border: props.border
    }
    return (
        <div className={b.button273__wrapper} style={bgStyle}>
           {props.text}
        </div>
    )
}

export default Button273;