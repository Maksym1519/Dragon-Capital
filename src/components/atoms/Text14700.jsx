import t from './text.module.scss';

const Text14700 = (props) => {
    const textStyle = {
        color: props.color,
        textDecoration: props.underline ? 'underline' : 'none',
        textAlign: props.align,
        };
    return (
        <p className={t.text14700} style={textStyle}>
            {props.text}
        </p>
    )
}

export default Text14700;