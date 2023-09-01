import t from './text.module.scss';

const Text16700 = (props) => {
    const textStyle = {
        color: props.color,
        textDecoration: props.underline ? 'underline' : 'none',
      };
    return (
        <p className={t.text16700} style={textStyle}>
            {props.text}
        </p>
    )
}

export default Text16700;