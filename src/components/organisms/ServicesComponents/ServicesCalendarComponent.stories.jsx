
import ServicesCalendarComponent from "./ServicesCalendarComponent";


import "../../../fonts.scss";


export default {
    title: 'ServicesComponents/ServicesCalendarComponent',
    component: ServicesCalendarComponent
}



const Template = (arg) => <ServicesCalendarComponent {...arg}></ServicesCalendarComponent>

export const Default = Template.bind({});
Default.args = {

}