import b from '../button.module.scss';

const Button310 = (props) => {
    const bgStyle = {
        backgroundColor: props.bg,
        border: props.border
    }
    return (
        <div className={b.button310__wrapper} style={bgStyle}>
           {props.text}
        </div>
    )
}

export default Button310;