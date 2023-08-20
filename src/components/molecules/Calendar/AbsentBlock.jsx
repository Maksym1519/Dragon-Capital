import './absent-block.scss';

import greenArrow from '../../../images/green-arrow-down.svg';
const AbsentBlock = (props) => {
    return (
        <div class="absent-block">
            <div class="absent-block__color-tag" style={{ background: props.color }} ></div>
            <div class="absent-block__main-part">
                <div class="absent-block__title" style={{ color: props.color }}>{props.title}</div>
                <div class="absent-block__account">
                    <img src={props.img} alt="" class="absent-block__accont-avatar" />
                    <div class="absent-block__acconut-texts">
                        <div class="absent-block__account-name">{props.name}</div>
                        <div class="absent-block__accont-partner">Dragon Capital Partners</div>
                    </div>
                </div>
                <div class="absent-block__description">{props.description}</div>
            </div>
            <div class="absent-block__time-block">
                <div class="absent-block__time-numbers">{props.time}</div>
                <div class="absent-block__time-numbers">{props.time2}</div>
                <button class="absent-block__time-button">
                    <img src={greenArrow} alt="" class="absent-block__green-arrow" />
                    Більше
                </button>
            </div>
        </div>
    )
}

export default AbsentBlock;