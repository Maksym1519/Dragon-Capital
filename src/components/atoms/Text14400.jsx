import t from './text.module.scss';

const Text14400 = (props) => {
    return (
        <p className={t.text14400} style={props.color}>
            {props.text}
        </p>
    )
}

export default Text14400;