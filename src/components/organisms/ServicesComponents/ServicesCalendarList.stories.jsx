
import ServicesCalendarList from "./ServicesCalendarList";


import "../../../fonts.scss";


export default {
    title: 'ServicesComponents/ServicesCalendarList',
    component: ServicesCalendarList
}



const Template = (arg) => <ServicesCalendarList {...arg}></ServicesCalendarList>

export const Default = Template.bind({});
Default.args = {
    calendarList: true
}