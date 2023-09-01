
import GreyDynamicButton from "./GreyDynamicButton";

import "../../../fonts.scss";

export default {
    title: 'Buttons/GreyDynamicButton',
    component: GreyDynamicButton
}



const Template = (arg) => <GreyDynamicButton {...arg}></GreyDynamicButton>

export const Default = Template.bind({});
Default.args = {
    text: "Search",
    width: 269,
} 