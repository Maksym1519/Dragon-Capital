import t from './text.module.scss';

const Text17400 = (props) => {
    const textStyle = {
        color: props.color,
        textDecoration: props.underline ? 'underline' : 'none',
      };
    return (
        <p className={t.text17400} style={textStyle}>
            {props.text}
        </p>
    )
}

export default Text17400;