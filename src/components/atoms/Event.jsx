import e from './event.module.scss';

const Event = (props) => {
    const styled = {
        alignItems: props.align
    }
    return (
        <div className={e.event__wrapper} style={styled}>
         <span className={e.upperText}>{props.text1}</span>
         <span>{props.text2}</span>
        </div>
    )
}
export default Event;