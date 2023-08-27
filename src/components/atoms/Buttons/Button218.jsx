import b from '../button.module.scss';

const Button218 = (props) => {
    const bgStyle = {
        backgroundColor: props.bg
    }
    return (
        <div className={b.button218__wrapper} style={bgStyle}>
           {props.text}
        </div>
    )
}

export default Button218;