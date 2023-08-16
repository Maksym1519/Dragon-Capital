import t from './text.module.scss';

const Text12700 = (props) => {
    const textStyle = {
        color: props.color,
        textDecoration: props.underline ? 'underline' : 'none',
      };
    return (
        <p className={t.text12700} style={textStyle}>
            {props.text}
        </p>
    )
}

export default Text12700;