import t from './text.module.scss';

const Text20400 = (props) => {
    const textStyle = {
        color: props.color,
        textDecoration: props.underline ? 'underline' : 'none',
      };
    return (
        <p className={t.text20400} style={textStyle}>
            {props.text}
        </p>
    )
}

export default Text20400;