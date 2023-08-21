import './absent-block.scss';

import greenArrow from '../../../images/green-arrow-down.svg';
const AbsentBlock = (props) => {
    return (
        <div className="absent-block">
            <div className="absent-block__color-tag" style={{ background: props.color }} ></div>
            <div className="absent-block__main-part">
                <div className="absent-block__title" style={{ color: props.color }}>{props.title}</div>
                <div className="absent-block__account">
                    <img src={props.img} alt="" className="absent-block__accont-avatar" />
                    <div className="absent-block__acconut-texts">
                        <div className="absent-block__account-name">{props.name}</div>
                        <div className="absent-block__accont-partner">Dragon Capital Partners</div>
                    </div>
                </div>
                <div className="absent-block__description">{props.description}</div>
            </div>
            <div className="absent-block__time-block">
                <div className="absent-block__time-numbers">{props.time}</div>
                <div className="absent-block__time-numbers">{props.time2}</div>
                <button className="absent-block__time-button">
                    <img src={greenArrow} alt="" className="absent-block__green-arrow" />
                    Більше
                </button>
            </div>
        </div>
    )
}

export default AbsentBlock;