import t from './text.module.scss';

const Text16400С = (props) => {
    const textStyle = {
        color: props.color,
        textDecoration: props.underline ? 'underline' : 'none',
        };
    return (
        <p className={t.text16400} style={textStyle}>
            {props.text}
        </p>
    )
}

export default Text16400С;