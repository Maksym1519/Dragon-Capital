import t from './text.module.scss';

const Text14400 = (props) => {
    const textStyle = {
        color: props.color,
        textDecoration: props.underline ? 'underline' : 'none',
      };
    return (
        <p className={t.text14400P} style={textStyle}>
            {props.text}
        </p>
    )
}

export default Text14400;