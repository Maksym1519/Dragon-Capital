
import ServicesEmployeeList from "./ServicesEmployeeList";


import "../../../fonts.scss";


export default {
    title: 'ServicesComponents/ServicesEmployeeList',
    component: ServicesEmployeeList
}



const Template = (arg) => <ServicesEmployeeList {...arg}></ServicesEmployeeList>

export const Default = Template.bind({});
Default.args = {
    employeeList: true
}