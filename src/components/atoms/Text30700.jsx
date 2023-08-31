import t from './text.module.scss';

const Text30700 = (props) => {
    const textStyle = {
        color: props.color,
        textDecoration: props.underline ? 'underline' : 'none',
      };
    return (
        <p className={t.text30700} style={textStyle}>
            {props.text}
        </p>
    )
}

export default Text30700;