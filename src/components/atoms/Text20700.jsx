import t from './text.module.scss';

const Text20700 = (props) => {
    const textStyle = {
        color: props.color,
        textDecoration: props.underline ? 'underline' : 'none',
      };
    return (
        <p className={t.text20700} style={textStyle}>
            {props.text}
        </p>
    )
}

export default Text20700;