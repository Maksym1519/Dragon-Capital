import b from '../button.module.scss';

const Button172 = (props) => {
    const bgStyle = {
        backgroundColor: props.bg
    }
    return (
        <div className={b.button172__wrapper} style={bgStyle}>
           {props.text}
        </div>
    )
}

export default Button172;
