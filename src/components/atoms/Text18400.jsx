import t from './text.module.scss';

const Text18400 = (props) => {
    const textStyle = {
        color: props.color,
        textDecoration: props.underline ? 'underline' : 'none',
      };
    return (
        <p className={t.text18400} style={textStyle}>
            {props.text}
        </p>
    )
}

export default Text18400;