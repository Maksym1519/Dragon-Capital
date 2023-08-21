import b from '../button.module.scss';

const Button245 = (props) => {
    const bgStyle = {
        backgroundColor: props.bg
    }
    const plusStyle = {
        marginRight: props.gap
    }
    return (
        <div className={b.button245__wrapper} style={bgStyle}>
           <img src={props.img} alt="icon" style={plusStyle}/>
           <div>{props.text}</div>
        </div>
    )
}

export default Button245;