
import BlockHeading from "./BlockHeading";

import "../../../fonts.scss";

export default {
    title: 'Titles/BlockHeading',
    component: BlockHeading
}



const Template = (arg) => <BlockHeading {...arg}></BlockHeading>

export const Default = Template.bind({});
Default.args = {
    text: "Page",
}