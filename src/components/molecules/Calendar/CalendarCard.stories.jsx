
import CalendarCard from "./CalendarCard";

import "../../../fonts.scss";
import employeeAvatar1 from '../../../images/employee-avatar-small-1.svg';
export default {
    title: 'CalendarComponents/CalendarCard',
    component: CalendarCard
}



const Template = (arg) => <CalendarCard {...arg}></CalendarCard>

export const Default = Template.bind({});
Default.args = {
    title: "April",
}