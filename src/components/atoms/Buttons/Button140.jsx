import b from '../button.module.scss';

const Button140 = (props) => {
    const bgStyle = {
        backgroundColor: props.bg
    }
    return (
        <div className={b.button140__wrapper} style={bgStyle}>
           {props.text}
        </div>
    )
}

export default Button140;