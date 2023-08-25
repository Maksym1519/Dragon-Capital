import './floor-plan-components.scss';
import { useRef, useState, useEffect } from "react";

import SearchInput from '../../atoms/Inputs/SearchInput';

import Text17700 from '../../atoms/Text17700';
import Text15400С from '../../atoms/Text15400С';


import checkIcon from '../../../images/check-icon.svg';
import dropdownArrow from "../../../images/dropdown-arrow-down.svg";
import chosenIcon from '../../../images/chosen-icon.svg';


import employeeAvatar1 from '../../../images/employee-avatar-small-1.svg';
import employeeAvatar2 from '../../../images/employee-avatar-small-2.svg';
import employeeAvatar3 from '../../../images/employee-avatar-small-3.svg';
import employeeAvatar4 from '../../../images/employee-avatar-small-4.svg';
import employeeAvatar5 from '../../../images/employee-avatar-small-5.svg';
import employeeAvatar6 from '../../../images/employee-avatar-small-6.svg';


const FloorPlanSetEmployee = (props) => {
    const [dropsActive, setDropsActive] = useState([false, false, false, false, false, false, false,]);
    const handleDropsClick = (index) => {
        const newActiveItems = dropsActive.map((item, i) => i === index ? !item : false);
        setDropsActive(newActiveItems);
    };



    const [buttonActive, setButtonActive] = useState(Array(15).fill(false));

    const handleButtonClick = (index) => {
        const newActiveItems = buttonActive.map((item, i) => {
            if (i === index) {
                return !item; // Toggle the value
            } else {
                return false; // Set others to false
            }
        });
        setButtonActive(newActiveItems);
    };


    return (
        <>

            <div class="floor-plan-set-emp">
                <div class="floor-plan-set-emp__title">Назначить сотрудника <br />  на свободное место</div>
                <div class="floor-plan-set-emp__card">
                    <SearchInput placeholder="Search by name" width={338}></SearchInput>
                    <div class="floor-plan-set-emp__dropdowns">
                        <div class="floor-plan-set-emp__row drop" >
                            <div class="floor-plan-set-emp__preview" onClick={() => { handleDropsClick(0); }}>
                                <Text17700 text="Administration"></Text17700>
                                <img src={dropdownArrow} alt="" class={dropsActive[0] === true ? " floor-plan-set-emp__dropdown-arrow active" : "floor-plan-set-emp__dropdown-arrow"} />
                            </div>
                            <div class={dropsActive[0] === true ? "floor-plan-set-emp__dropdown active" : "floor-plan-set-emp__dropdown"}>
                                <div class="floor-plan-set-emp__link" onClick={() => { handleButtonClick(0) }}>
                                    <div className="floor-plan-set-emp__row-content">
                                        <img src={employeeAvatar1} alt="" class="floor-plan-set-emp__avatar" />
                                        <Text15400С color={buttonActive[0] ? "#277D59" : "#3D3D3D"} text="Alexander Shevchenko"></Text15400С>
                                    </div>
                                    <img src={chosenIcon} alt="" class={buttonActive[0] === true ? "floor-plan-set-emp__chosen-icon active" : "floor-plan-set-emp__chosen-icon"} />
                                </div>

                                <div class="floor-plan-set-emp__link" onClick={() => { handleButtonClick(1) }}>
                                    <div className="floor-plan-set-emp__row-content">
                                        <img src={employeeAvatar3} alt="" class="floor-plan-set-emp__avatar" />
                                        <Text15400С color={buttonActive[1] ? "#277D59" : "#3D3D3D"} text="Alexander Shevchenko"></Text15400С>
                                    </div>
                                    <img src={chosenIcon} alt="" class={buttonActive[1] === true ? "floor-plan-set-emp__chosen-icon active" : "floor-plan-set-emp__chosen-icon"} />
                                </div>

                                <div class="floor-plan-set-emp__link" onClick={() => { handleButtonClick(2) }}>
                                    <div className="floor-plan-set-emp__row-content">
                                        <img src={employeeAvatar4} alt="" class="floor-plan-set-emp__avatar" />
                                        <Text15400С color={buttonActive[2] ? "#277D59" : "#3D3D3D"} text="Alexander Shevchenko"></Text15400С>
                                    </div>
                                    <img src={chosenIcon} alt="" class={buttonActive[2] === true ? "floor-plan-set-emp__chosen-icon active" : "floor-plan-set-emp__chosen-icon"} />
                                </div>

                                <div class="floor-plan-set-emp__link" onClick={() => { handleButtonClick(3) }}>
                                    <div className="floor-plan-set-emp__row-content">
                                        <img src={employeeAvatar3} alt="" class="floor-plan-set-emp__avatar" />
                                        <Text15400С color={buttonActive[3] ? "#277D59" : "#3D3D3D"} text="Alexander Shevchenko"></Text15400С>
                                    </div>
                                    <img src={chosenIcon} alt="" class={buttonActive[3] === true ? "floor-plan-set-emp__chosen-icon active" : "floor-plan-set-emp__chosen-icon"} />
                                </div>

                                <div class="floor-plan-set-emp__link" onClick={() => { handleButtonClick(4) }}>
                                    <div className="floor-plan-set-emp__row-content">
                                        <img src={employeeAvatar3} alt="" class="floor-plan-set-emp__avatar" />
                                        <Text15400С color={buttonActive[4] ? "#277D59" : "#3D3D3D"} text="Alexander Shevchenko"></Text15400С>
                                    </div>
                                    <img src={chosenIcon} alt="" class={buttonActive[4] === true ? "floor-plan-set-emp__chosen-icon active" : "floor-plan-set-emp__chosen-icon"} />
                                </div>

                                <div class="floor-plan-set-emp__link" onClick={() => { handleButtonClick(5) }}>
                                    <div className="floor-plan-set-emp__row-content">
                                        <img src={employeeAvatar4} alt="" class="floor-plan-set-emp__avatar" />
                                        <Text15400С color={buttonActive[5] ? "#277D59" : "#3D3D3D"} text="Alexander Shevchenko"></Text15400С>
                                    </div>
                                    <img src={chosenIcon} alt="" class={buttonActive[5] === true ? "floor-plan-set-emp__chosen-icon active" : "floor-plan-set-emp__chosen-icon"} />
                                </div>

                                <div class="floor-plan-set-emp__link" onClick={() => { handleButtonClick(6) }}>
                                    <div className="floor-plan-set-emp__row-content">
                                        <img src={employeeAvatar5} alt="" class="floor-plan-set-emp__avatar" />
                                        <Text15400С color={buttonActive[6] ? "#277D59" : "#3D3D3D"} text="Alexander Shevchenko"></Text15400С>
                                    </div>
                                    <img src={chosenIcon} alt="" class={buttonActive[6] === true ? "floor-plan-set-emp__chosen-icon active" : "floor-plan-set-emp__chosen-icon"} />
                                </div>
                            </div>
                        </div>
                        <div class="floor-plan-set-emp__row drop" >
                            <div class="floor-plan-set-emp__preview" onClick={() => { handleDropsClick(1); }}>
                                <Text17700 text="Back office"></Text17700>
                                <img src={dropdownArrow} alt="" class={dropsActive[1] === true ? " floor-plan-set-emp__dropdown-arrow active" : "floor-plan-set-emp__dropdown-arrow"} />
                            </div>
                            <div class={dropsActive[1] === true ? "floor-plan-set-emp__dropdown active" : "floor-plan-set-emp__dropdown"}>
                                <div class="floor-plan-set-emp__link" onClick={() => { handleButtonClick(7) }}>
                                    <div className="floor-plan-set-emp__row-content">
                                        <img src={employeeAvatar1} alt="" class="floor-plan-set-emp__avatar" />
                                        <Text15400С color={buttonActive[0] ? "#277D59" : "#3D3D3D"} text="Alexander Shevchenko"></Text15400С>
                                    </div>
                                    <img src={chosenIcon} alt="" class={buttonActive[7] === true ? "floor-plan-set-emp__chosen-icon active" : "floor-plan-set-emp__chosen-icon"} />
                                </div>
                            </div>
                        </div>
                        <div class="floor-plan-set-emp__row drop" >
                            <div class="floor-plan-set-emp__preview" onClick={() => { handleDropsClick(2); }}>
                                <Text17700 text="Complience"></Text17700>
                                <img src={dropdownArrow} alt="" class={dropsActive[2] === true ? " floor-plan-set-emp__dropdown-arrow active" : "floor-plan-set-emp__dropdown-arrow"} />
                            </div>
                            <div class={dropsActive[2] === true ? "floor-plan-set-emp__dropdown active" : "floor-plan-set-emp__dropdown"}>
                                <div class="floor-plan-set-emp__link" onClick={() => { handleButtonClick(8) }}>
                                    <div className="floor-plan-set-emp__row-content">
                                        <img src={employeeAvatar1} alt="" class="floor-plan-set-emp__avatar" />
                                        <Text15400С color={buttonActive[0] ? "#277D59" : "#3D3D3D"} text="Alexander Shevchenko"></Text15400С>
                                    </div>
                                    <img src={chosenIcon} alt="" class={buttonActive[8] === true ? "floor-plan-set-emp__chosen-icon active" : "floor-plan-set-emp__chosen-icon"} />
                                </div>
                            </div>
                        </div>
                        <div class="floor-plan-set-emp__row drop" >
                            <div class="floor-plan-set-emp__preview" onClick={() => { handleDropsClick(3); }}>
                                <Text17700 text="Custody"></Text17700>
                                <img src={dropdownArrow} alt="" class={dropsActive[3] === true ? " floor-plan-set-emp__dropdown-arrow active" : "floor-plan-set-emp__dropdown-arrow"} />
                            </div>
                            <div class={dropsActive[3] === true ? "floor-plan-set-emp__dropdown active" : "floor-plan-set-emp__dropdown"}>
                                <div class="floor-plan-set-emp__link" onClick={() => { handleButtonClick(7) }}>
                                    <div className="floor-plan-set-emp__row-content">
                                        <img src={employeeAvatar1} alt="" class="floor-plan-set-emp__avatar" />
                                        <Text15400С color={buttonActive[0] ? "#277D59" : "#3D3D3D"} text="Alexander Shevchenko"></Text15400С>
                                    </div>
                                    <img src={chosenIcon} alt="" class={buttonActive[9] === true ? "floor-plan-set-emp__chosen-icon active" : "floor-plan-set-emp__chosen-icon"} />
                                </div>
                            </div>
                        </div>
                        <div class="floor-plan-set-emp__row drop" >
                            <div class="floor-plan-set-emp__preview" onClick={() => { handleDropsClick(4); }}>
                                <Text17700 text="Dragon Capital Partners"></Text17700>
                                <img src={dropdownArrow} alt="" class={dropsActive[4] === true ? " floor-plan-set-emp__dropdown-arrow active" : "floor-plan-set-emp__dropdown-arrow"} />
                            </div>
                            <div class={dropsActive[4] === true ? "floor-plan-set-emp__dropdown active" : "floor-plan-set-emp__dropdown"}>
                                <div class="floor-plan-set-emp__link" onClick={() => { handleButtonClick(10) }}>
                                    <div className="floor-plan-set-emp__row-content">
                                        <img src={employeeAvatar1} alt="" class="floor-plan-set-emp__avatar" />
                                        <Text15400С color={buttonActive[0] ? "#277D59" : "#3D3D3D"} text="Alexander Shevchenko"></Text15400С>
                                    </div>
                                    <img src={chosenIcon} alt="" class={buttonActive[10] === true ? "floor-plan-set-emp__chosen-icon active" : "floor-plan-set-emp__chosen-icon"} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default FloorPlanSetEmployee;