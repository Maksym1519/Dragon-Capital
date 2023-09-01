import SingleCheckBox from "./SingleCheckBox";

import "../../../fonts.scss";

export default {
    title: 'Inputs/SingleCheckBox',
    component: SingleCheckBox
}



const Template = (arg) => <SingleCheckBox {...arg}></SingleCheckBox>

export const Default = Template.bind({});
Default.args = {
    text: "Публичный комментарий",
}