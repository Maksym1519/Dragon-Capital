import b from '../button.module.scss';

const Button103 = (props) => {
    const bgStyle = {
        backgroundColor: props.bg
    }
    return (
        <div className={b.button103__wrapper} style={bgStyle}>
           {props.text}
        </div>
    )
}

export default Button103;
