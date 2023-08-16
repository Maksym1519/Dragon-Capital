import e from './event.module.scss';

const Event = (props) => {
    return (
        <div className={e.event__wrapper}>
         <span>{props.text1}</span>
         <span>{props.text2}</span>
        </div>
    )
}
export default Event;