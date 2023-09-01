
import ServicesChangesList from "./ServicesChangesList";


import "../../../fonts.scss";


export default {
    title: 'ServicesComponents/ServicesChangesList',
    component: ServicesChangesList
}



const Template = (arg) => <ServicesChangesList {...arg}></ServicesChangesList>

export const Default = Template.bind({});
Default.args = {
    changesList: true
}