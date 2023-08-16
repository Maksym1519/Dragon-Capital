import t from './text.module.scss';

const Text13700 = (props) => {
    const textStyle = {
        color: props.color,
        textDecoration: props.underline ? 'underline' : 'none',
      };
    return (
        <p className={t.text13700} style={textStyle}>
            {props.text}
        </p>
    )
}

export default Text13700;