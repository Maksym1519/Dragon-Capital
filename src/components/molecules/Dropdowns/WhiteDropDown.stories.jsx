
import WhiteWithGreyBorderDrop from "./WhiteWithGreyBorderDrop";

import "../../../fonts.scss";

export default {
    title: 'DropDowns/WhiteWithGreyBorderDrop',
    component: WhiteWithGreyBorderDrop
}



const Template = (arg) => <WhiteWithGreyBorderDrop {...arg}></WhiteWithGreyBorderDrop>

export const Default = Template.bind({});
Default.args = {
    text: "Page",
    width: 269,
    background: "#FFF",
    text1: "Choose Something",
    text: ["Something1", "Something2","Something3"],
}