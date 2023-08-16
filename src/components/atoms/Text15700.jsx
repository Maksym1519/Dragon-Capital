import t from './text.module.scss';

const Text15700 = (props) => {
    const textStyle = {
        color: props.color,
        textDecoration: props.underline ? 'underline' : 'none',
      };
    return (
        <p className={t.text15700} style={textStyle}>
            {props.text}
        </p>
    )
}

export default Text15700;