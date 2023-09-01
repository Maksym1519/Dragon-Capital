
import DateInput from "./DateInput";

import "../../../fonts.scss";

export default {
    title: 'Inputs/DateInput',
    component: DateInput
}



const Template = (arg) => <DateInput {...arg}></DateInput>

export const Default = Template.bind({});
Default.args = {
    placeholder: "Search",
    width: 269,
}