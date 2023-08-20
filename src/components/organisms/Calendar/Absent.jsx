import './absent.scss';
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


import AbsentBlock from '../../molecules/Calendar/AbsentBlock';

const Absent = (props) => {

    return (
        <div className="absent">
            <BlockHeading text="Детали"></BlockHeading>

            <div className="absent__container">
                <AbsentBlock color="#1DCA58" title="Business trip" img={employeeAvatar1} name="Alexander Shevchenko" time="21.09.2018 - 29.09.2018" time2="21.09.2018" description="Бизнес ужин в da Vinci" ></AbsentBlock>
                <AbsentBlock color="#7CD8FF" title="Work on holiday" img={employeeAvatar4} name="Valeriy Necheporenko" time="21.09.2018 - 29.09.2018" time2="21.09.2018"  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit eu dui eu nunc massa sed cras enim sed. Elit eu du" ></AbsentBlock>
                <AbsentBlock color="#FFC700" title="Vacation" img={employeeAvatar2} name="Olga Sumska" time="21.09.2018 - 29.09.2018" time2="21.09.2018"  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit eu dui eu nunc massa sed cras enim sed. Elit eu du" ></AbsentBlock>
                <AbsentBlock color="#FF68F0" title="Study leave" img={employeeAvatar3} name="Natalia Petrenko" time="21.09.2018 - 29.09.2018" time2="21.09.2018"  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit eu dui eu nunc massa sed cras enim sed. Elit eu du" ></AbsentBlock>
                <AbsentBlock color="#5F82FF" title="Sick leave" img={employeeAvatar4} name="Valeriy Necheporenko" time="21.09.2018 - 29.09.2018" time2="21.09.2018"  description="" ></AbsentBlock>
                <AbsentBlock color="#FFC700" title="Vacation" img={employeeAvatar1} name="Alexander Shevchenko" time="21.09.2018 - 29.09.2018" time2="21.09.2018"  description="" ></AbsentBlock>
                <AbsentBlock color="#1DCA58" title="Business trip" img={employeeAvatar2} name="Olga Sumska" time="21.09.2018 - 29.09.2018" time2="21.09.2018"  description="Бизнес ужин в da Vinci" ></AbsentBlock>
            </div>
        </div>
    )
}

export default Absent;