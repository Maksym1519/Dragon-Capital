import './review-head.scss';
import { useRef, useState, useEffect } from "react";


const ReviewHead = (props) => {
    return (
        <div class="review-head" style={{marginTop: props.marginTop}}>
            <div class="review-head__item item1">Сотрудник</div>
            <div class="review-head__item item2">Head</div>
            <div class="review-head__item item3">Viewers</div>
            <div class="review-head__item item4">Report ready</div>
            <div class="review-head__item item5">Report approved</div>
        </div>
    )
}

export default ReviewHead;