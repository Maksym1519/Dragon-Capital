
import ServicesRow from "./ServicesRow";

import "../../../fonts.scss";

export default {
    title: 'ServicesComponents/ServicesRow',
    component: ServicesRow
}



const Template = (arg) => <ServicesRow {...arg}></ServicesRow>

export const Default = Template.bind({});
Default.args = {
    rowName:"Paid off",
    firstDrop: true,
    firstText1:"Date",
    firstText: ["Первая", "Вторая", "Полный"],
    secondDrop: true,
    secondText1:"Between dates",
    secondText: ["Первая", "Вторая", "Полный"],
    input: true,
    plusButton: true,
    date: true
}