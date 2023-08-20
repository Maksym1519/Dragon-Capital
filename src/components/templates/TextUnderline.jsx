import t from './textUnderline.module.scss';

const TextUnderLine = (props) => {
    const underLineStyle = {
        borderBottom: `1px solid ${props.color}`
    }
    return (
        <div className={t.underline__wrapper} style={underLineStyle}>
           {props.text}
        </div>
    )
}

export default TextUnderLine;