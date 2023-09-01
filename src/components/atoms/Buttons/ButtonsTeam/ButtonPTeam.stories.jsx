
import ButtonPTeam from "./ButtonPTeam";

import "../../../../fonts.scss";

export default {
    title: 'Buttons/ButtonPTeam',
    component: ButtonPTeam
}



const Template = (arg) => <ButtonPTeam {...arg}></ButtonPTeam>

export const Default = Template.bind({});
Default.args = {
    text: "Search",
    color: "#5F82FF",
}