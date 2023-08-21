import './findemployee.scss';
import { useRef, useState, useEffect } from "react";
import BlockHeading from '../../atoms/Headings/BlockHeading';
import SearchInput from '../../atoms/Inputs/SearchInput';

import Text15400С from "../../atoms/Text15400С";
import Text17700 from "../../atoms/Text17700";

import employeeAvatar1 from '../../../images/employee-avatar-small-1.svg';
import employeeAvatar2 from '../../../images/employee-avatar-small-2.svg';
import employeeAvatar3 from '../../../images/employee-avatar-small-3.svg';
import employeeAvatar4 from '../../../images/employee-avatar-small-4.svg';
import employeeAvatar5 from '../../../images/employee-avatar-small-5.svg';
import employeeAvatar6 from '../../../images/employee-avatar-small-6.svg';
import dropdownArrow from "../../../images/dropdown-arrow-down.svg";

const FindEmployee = (props) => {
    const [dropsActive, setDropsActive] = useState([false, false, false, false, false, false, false,]);
    const handleDropsClick = (index) => {
        const newActiveItems = dropsActive.map((item, i) => i === index ? !item : false);
        setDropsActive(newActiveItems);
    };
    return (
        <div className="calendar-find">
            <BlockHeading text="Найти сотрудника"></BlockHeading>

            <div className="calendar-find__card">
                <SearchInput width={340} placeholder="Search by name"></SearchInput>
                <div className="calendar-find__dropdowns">
                    <div className="calendar-find__row drop" >
                        <div className="calendar-find__preview" onClick={() => { handleDropsClick(0); }}>
                            <Text17700 text="Administration"></Text17700>
                            <img src={dropdownArrow} alt="" className={dropsActive[0] === true ? " calendar-find__dropdown-arrow active" : "calendar-find__dropdown-arrow"} />
                        </div>
                        <div className={dropsActive[0] === true ? "calendar-find__dropdown active" : "calendar-find__dropdown"}>
                            <div className="calendar-find__link">
                                <img src={employeeAvatar1} alt="" className="calendar-find__avatar" />
                                <Text15400С text="Alexander Shevchenko"></Text15400С>
                            </div>
                            <div className="calendar-find__link">
                                <img src={employeeAvatar2} alt="" className="calendar-find__avatar" />
                                <Text15400С text="Natalia Petrenko"></Text15400С>
                            </div>
                            <div className="calendar-find__link">
                                <img src={employeeAvatar3} alt="" className="calendar-find__avatar" />
                                <Text15400С text="Olga Sumska"></Text15400С>
                            </div>
                            <div className="calendar-find__link">
                                <img src={employeeAvatar4} alt="" className="calendar-find__avatar" />
                                <Text15400С text="Valeriy Necheporenko"></Text15400С>
                            </div>
                            <div className="calendar-find__link">
                                <img src={employeeAvatar5} alt="" className="calendar-find__avatar" />
                                <Text15400С text="Alexander Shevchenko"></Text15400С>
                            </div>
                            <div className="calendar-find__link">
                                <img src={employeeAvatar6} alt="" className="calendar-find__avatar" />
                                <Text15400С text="Natalia Petrenko"></Text15400С>
                            </div>

                        </div>
                    </div>
                    <div className="calendar-find__row drop" >
                        <div className="calendar-find__preview" onClick={() => { handleDropsClick(1); }}>
                            <Text17700 text="Back office"></Text17700>
                            <img src={dropdownArrow} alt="" className={dropsActive[1] === true ? " calendar-find__dropdown-arrow active" : "calendar-find__dropdown-arrow"} />
                        </div>
                        <div className={dropsActive[1] === true ? "calendar-find__dropdown active" : "calendar-find__dropdown"}>
                            <div className="calendar-find__link">
                                <img src={employeeAvatar1} alt="" className="calendar-find__avatar" />
                                <Text15400С text="Alexander Shevchenko"></Text15400С>
                            </div>

                        </div>
                    </div>
                    <div className="calendar-find__row drop" >
                        <div className="calendar-find__preview" onClick={() => { handleDropsClick(2); }}>
                            <Text17700 text="Complience"></Text17700>
                            <img src={dropdownArrow} alt="" className={dropsActive[2] === true ? " calendar-find__dropdown-arrow active" : "calendar-find__dropdown-arrow"} />
                        </div>
                        <div className={dropsActive[2] === true ? "calendar-find__dropdown active" : "calendar-find__dropdown"}>
                            <div className="calendar-find__link">
                                <img src={employeeAvatar1} alt="" className="calendar-find__avatar" />
                                <Text15400С text="Alexander Shevchenko"></Text15400С>
                            </div>

                        </div>
                    </div>
                    <div className="calendar-find__row drop" >
                        <div className="calendar-find__preview" onClick={() => { handleDropsClick(3); }}>
                            <Text17700 text="Custody"></Text17700>
                            <img src={dropdownArrow} alt="" className={dropsActive[3] === true ? " calendar-find__dropdown-arrow active" : "calendar-find__dropdown-arrow"} />
                        </div>
                        <div className={dropsActive[3] === true ? "calendar-find__dropdown active" : "calendar-find__dropdown"}>
                            <div className="calendar-find__link">
                                <img src={employeeAvatar1} alt="" className="calendar-find__avatar" />
                                <Text15400С text="Alexander Shevchenko"></Text15400С>
                            </div>

                        </div>
                    </div>
                    <div className="calendar-find__row drop" >
                        <div className="calendar-find__preview" onClick={() => { handleDropsClick(4); }}>
                            <Text17700 text="Dragon Capital Partners"></Text17700>
                            <img src={dropdownArrow} alt="" className={dropsActive[4] === true ? " calendar-find__dropdown-arrow active" : "calendar-find__dropdown-arrow"} />
                        </div>
                        <div className={dropsActive[4] === true ? "calendar-find__dropdown active" : "calendar-find__dropdown"}>
                            <div className="calendar-find__link">
                                <img src={employeeAvatar1} alt="" className="calendar-find__avatar" />
                                <Text15400С text="Alexander Shevchenko"></Text15400С>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FindEmployee;