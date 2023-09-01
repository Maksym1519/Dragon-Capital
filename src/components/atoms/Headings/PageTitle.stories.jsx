
import PageTitle from "./PageTitle";

import "../../../fonts.scss";

export default {
    title: 'Titles/PageTitle',
    component: PageTitle
}



const Template = (arg) => <PageTitle {...arg}></PageTitle>

export const Default = Template.bind({});
Default.args = {
    text: "Page",
}