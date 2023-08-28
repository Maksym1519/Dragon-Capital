import './review-row.scss';
import { useRef, useState, useEffect } from "react";

import greenArrow from "../../../images/green-arrow-right.svg";

const ReviewRow = (props) => {

    return (
        <div class="review-row" style={{marginTop: props.marginTop}}>
            <div class="review-row__block main">
                <img src={props.avatar1} alt="" class="review-row__img" />
                { props.name1 }
            </div>
            <div class="review-row__block block2">
                <img src={props.avatar2} alt="" class="review-row__img" />
                { props.name2 }
            </div>
            <div class="review-row__block block3">
                <img src={props.avatar3} alt="" class="review-row__img" />
                { props.name3 }
            </div>

            <div class="review-row__report first">Да</div>
            <div class="review-row__report second">Да</div>

            <div class={props.button === true ? "review-row__button active" : "review-row__button"} >
                <img src={greenArrow} alt="" className="review-row__green-arrow" />
            </div>
        </div>
    )
}

export default ReviewRow;