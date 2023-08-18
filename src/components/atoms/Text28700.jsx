import t from './text.module.scss';

const Text28700 = (props) => {
    const textStyle = {
        color: props.color,
        textDecoration: props.underline ? 'underline' : 'none',
      };
    return (
        <p className={t.text28700} style={textStyle}>
            {props.text}
        </p>
    )
}

export default Text28700;