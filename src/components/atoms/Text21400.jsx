import t from './text.module.scss';

const Text21400 = (props) => {
    const textStyle = {
        color: props.color,
        textDecoration: props.underline ? 'underline' : 'none',
      };
    return (
        <p className={t.text21400} style={textStyle}>
            {props.text}
        </p>
    )
}

export default Text21400;