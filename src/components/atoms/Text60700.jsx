import t from './text.module.scss';

const Text60700 = (props) => {
    const textStyle = {
        color: props.color,
        textDecoration: props.underline ? 'underline' : 'none',
      };
    return (
        <p className={t.text60700} style={textStyle}>
            {props.text}
        </p>
    )
}

export default Text60700;