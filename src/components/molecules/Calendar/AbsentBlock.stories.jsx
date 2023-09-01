
import AbsentBlock from "./AbsentBlock";

import "../../../fonts.scss";
import employeeAvatar1 from '../../../images/employee-avatar-small-1.svg';
export default {
    title: 'CalendarComponents/AbsentBlock',
    component: AbsentBlock
}



const Template = (arg) => <AbsentBlock {...arg}></AbsentBlock>

export const Default = Template.bind({});
Default.args = {
    color: "#5F82FF",
    title: "Business trip",
    img: employeeAvatar1,
    name:"Alexander Shevchenko",
    time:"21.09.2018 - 29.09.2018",
    time2:"21.09.2018",
    description:"Бизнес ужин в da Vinci"
}