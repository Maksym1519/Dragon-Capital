import './floor-plan-components.scss';
import { useRef, useState, useEffect } from "react";



const FloorPlanMeet = (props) => {


    return (
        <>

            <div class="floor-plan-meet">
                <div class="floor-plan-meet__title">Переговорная Dnipro</div>
                <div class="floor-plan-meet__card">
                    <div class="floor-plan-meet__heading">Посадочных мест: 6</div>
                    <div class="floor-plan-meet__list">
                        <div class="floor-plan-meet__row">- Проектор</div>
                        <div class="floor-plan-meet__row">- Кофемашина</div>
                        <div class="floor-plan-meet__row">- Бронированые окна</div>
                        <div class="floor-plan-meet__row">- Мягкие стулья</div>
                    </div>
                    <div class="floor-plan-meet__how-button" onClick={()=>{props.setPopUpActive(true)}}>Как забронировать переговорную?</div>
                </div>
            </div>

        </>
    )
}

export default FloorPlanMeet;