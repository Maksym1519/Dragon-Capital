
import ServicesDataComponent from "./ServicesDataComponent";


import "../../../fonts.scss";


export default {
    title: 'ServicesComponents/ServicesDataComponent',
    component: ServicesDataComponent
}



const Template = (arg) => <ServicesDataComponent {...arg}></ServicesDataComponent>

export const Default = Template.bind({});
Default.args = {

}