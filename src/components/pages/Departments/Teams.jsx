import React from "react";
import { lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import "./teams.scss";
import { useRef, useState, useEffect } from "react";
import Header from "../../organisms/Header";
import Footer from "../../organisms/Footer";



import PageTitle from "../../atoms/Headings/PageTitle";
import ButtonPTeam from "../../atoms/Buttons/ButtonsTeam/ButtonPTeam";
import EmployeeItem from "../../organisms/Employee/EmployeeItem";



import editIcon from '../../../images/edit-icon.svg';
import plusIcon from "../../../images/plus-icon.svg";
import teamAvatar1 from "../../../images/team-avatar-1.svg";
import teamAvatar2 from "../../../images/team-avatar-2.svg";

const Teams = (props) => {
    const [currentComponent, setCurrentComponent] = useState(0);
    return (
        <>
            <Header />
            <div class="p-wrapper">

                <div class="p-wrapper__page-container floor-plan-container">

                    <PageTitle text="Команди"></PageTitle>

                    <div class="teams-controls">
                        <button class="teams-controls__add-button">
                            <img src={plusIcon} alt="" class="teams-controls__plus" />
                            Додати команду
                        </button>
                        <div class="teams-controls__edit-button">
                            <img src={editIcon} alt="" class="teams-controls__edit-icon" />
                            Редагувати команду
                        </div>
                    </div>


                    <div class="teams">
                        <div className="teams__nav-buttons">
                            <div className="teams__nav-button">
                                Obolon Residences
                            </div>
                            <ButtonPTeam  color="#FFA011" text="Green Hills"></ButtonPTeam>
                            <ButtonPTeam  color="#674107" text="Dilova"></ButtonPTeam>
                            <ButtonPTeam  color="#5E24A9" text="White Lines"></ButtonPTeam>
                        </div>
                        <div className="teams__employees">
                            <EmployeeItem color="#7CD8FF" img={teamAvatar1} text="Work on holiday" text2="Obolon Residences" bColor="#5F82FF"></EmployeeItem>
                            <EmployeeItem color="#7CD8FF" img={teamAvatar1} text="Work on holiday" text2="Obolon Residences" bColor="#5F82FF"></EmployeeItem>
                            <EmployeeItem color="#1DCA58" img={teamAvatar2} text="Business trip" text2="Obolon Residences" bColor="#5F82FF"></EmployeeItem>
                            <EmployeeItem color="#7CD8FF" img={teamAvatar1} text="Work on holiday" text2="Obolon Residences" bColor="#5F82FF"></EmployeeItem>
                            <EmployeeItem color="#1DCA58" img={teamAvatar2} text="Business trip" text2="Obolon Residences" bColor="#5F82FF"></EmployeeItem>
                        </div>
                    </div>


                    <Footer />
                </div>


            </div>

        </>
    );
};
export default Teams;
