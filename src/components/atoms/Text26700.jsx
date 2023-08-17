import t from './text.module.scss';

const Text26700 = (props) => {
    const textStyle = {
        color: props.color,
        textDecoration: props.underline ? 'underline' : 'none',
      };
    return (
        <p className={t.text26700} style={textStyle}>
            {props.text}
        </p>
    )
}

export default Text26700;