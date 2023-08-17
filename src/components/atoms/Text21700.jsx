import t from './text.module.scss';

const Text17700 = (props) => {
    const textStyle = {
        color: props.color,
        textDecoration: props.underline ? 'underline' : 'none',
      };
    return (
        <p className={t.text17700} style={textStyle}>
            {props.text}
        </p>
    )
}

export default Text17700;