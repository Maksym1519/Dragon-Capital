
import GreenDynamicButton from "./GreenDynamicButton";

import "../../../fonts.scss";

export default {
    title: 'Buttons/GreenDynamicButton',
    component: GreenDynamicButton
}



const Template = (arg) => <GreenDynamicButton {...arg}></GreenDynamicButton>

export const Default = Template.bind({});
Default.args = {
    text: "Search",
    width: 269,
}