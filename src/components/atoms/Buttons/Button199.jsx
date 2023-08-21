import b from '../button.module.scss';

const Button199 = (props) => {
    const bgStyle = {
        backgroundColor: props.bg
    }
    return (
        <div className={b.button199__wrapper} style={bgStyle}>
           {props.text}
        </div>
    )
}

export default Button199;
