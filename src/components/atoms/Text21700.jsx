import t from './text.module.scss';

const Text21700 = (props) => {
    const textStyle = {
        color: props.color,
        textDecoration: props.underline ? 'underline' : 'none',
      };
    return (
        <p className={t.text21700} style={textStyle}>
            {props.text}
        </p>
    )
}

export default Text21700;