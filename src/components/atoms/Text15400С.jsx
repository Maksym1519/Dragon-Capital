import t from './text.module.scss';

const Text15400С = (props) => {
    const textStyle = {
        color: props.color,
        textDecoration: props.underline ? 'underline' : 'none',
        textAlign: props.align
        };
    return (
        <p className={t.text15400С} style={textStyle}>
            {props.text}
        </p>
    )
}

export default Text15400С;