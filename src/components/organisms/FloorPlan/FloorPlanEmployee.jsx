import './floor-plan-components.scss';
import { useRef, useState, useEffect } from "react";

import applicationAvatar from '../../../images/application-avatar.png';

const FloorPlanEmployee = (props) => {


    return (
        <>

            <div class="floor-plan-emp">
                <div class="floor-plan-emp__head">
                    <img src={applicationAvatar} alt="" class="floor-plan-emp__avatarr" />
                    <div class="floor-plan-emp__haed-texts">
                        <div class="floor-plan-emp__status">
                            <div class="floor-plan-emp__dot"></div>
                            В офисе
                        </div>
                        <div class="floor-plan-emp__name">Александр Шевченко</div>
                        <div class="floor-plan-emp__job">Директор по маркетингу</div>
                    </div>
                </div>
                <div class="floor-plan-emp__line"></div>
                <div class="floor-plan-emp__contacts">
                    <div class="floor-plan-emp__heading">Контактная информация</div>
                    <div class="floor-plan-emp__contacts-list">
                        <div class="floor-plan-emp__row">
                            <div class="floor-plan-emp__row-name">
                                Телефон рабочий
                            </div>
                            <div class="floor-plan-emp__row-content">
                                +38 (050) 123-45-67
                            </div>
                        </div>
                        <div class="floor-plan-emp__row">
                            <div class="floor-plan-emp__row-name">
                                Телефон личный
                            </div>
                            <div class="floor-plan-emp__row-content">
                                +38 (050) 123-45-67
                            </div>
                        </div>
                        <div class="floor-plan-emp__row">
                            <div class="floor-plan-emp__row-name">
                                Внутренний номер
                            </div>
                            <div class="floor-plan-emp__row-content">
                                441
                            </div>
                        </div>
                        <div class="floor-plan-emp__row">
                            <div class="floor-plan-emp__row-name">
                                Email
                            </div>
                            <div class="floor-plan-emp__row-content link">
                                shevchenko@dragon-capital.com
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default FloorPlanEmployee;