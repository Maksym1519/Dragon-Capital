import b from '../button.module.scss';

const Button183 = (props) => {
    const bgStyle = {
        backgroundColor: props.bg
    }
    return (
        <div className={b.button183__wrapper} style={bgStyle}>
           {props.text}
        </div>
    )
}

export default Button183;