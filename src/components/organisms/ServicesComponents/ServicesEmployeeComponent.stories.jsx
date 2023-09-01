
import ServicesEmployeesComponent from "./ServicesEmployeesComponent";


import "../../../fonts.scss";


export default {
    title: 'ServicesComponents/ServicesEmployeesComponent',
    component: ServicesEmployeesComponent
}



const Template = (arg) => <ServicesEmployeesComponent {...arg}></ServicesEmployeesComponent>

export const Default = Template.bind({});
Default.args = {

}