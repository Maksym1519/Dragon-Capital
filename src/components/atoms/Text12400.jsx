import t from './text.module.scss';

const Text12400 = (props) => {
    const textStyle = {
        color: props.color || 'inherit',
        textDecoration: props.underline ? 'underline' : 'none',
      };
    return (
        <p className={t.text12400} style={textStyle}>
            {props.text}
        </p>
    )
}

export default Text12400;