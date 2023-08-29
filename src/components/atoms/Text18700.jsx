import t from './text.module.scss';

const Text18700 = (props) => {
    const textStyle = {
        color: props.color,
        textDecoration: props.underline ? 'underline' : 'none',
      };
    return (
        <p className={t.text18700} style={textStyle}>
            {props.text}
        </p>
    )
}

export default Text18700;