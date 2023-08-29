import b from '../button.module.scss';

const Button205 = (props) => {
    const bgStyle = {
        backgroundColor: props.bg
    }
    return (
        <div className={b.button205__wrapper} style={bgStyle}>
           {props.text}
        </div>
    )
}

export default Button205;