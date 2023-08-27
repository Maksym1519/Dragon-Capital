import b from '../button.module.scss';

const Button211 = (props) => {
    const bgStyle = {
        backgroundColor: props.bg
    }
    return (
        <div className={b.button211__wrapper} style={bgStyle}>
           {props.text}
        </div>
    )
}

export default Button211;
