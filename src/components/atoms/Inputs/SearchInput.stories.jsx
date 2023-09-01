
import SearchInput from "./SearchInput";

import "../../../fonts.scss";

export default {
    title: 'Inputs/SearchInput',
    component: SearchInput
}



const Template = (arg) => <SearchInput {...arg}></SearchInput>

export const Default = Template.bind({});
Default.args = {
    placeholder: "Search",
    width: 269,
}