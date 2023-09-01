import React from "react";
import ButtonTeam from './ButtonsTeam';
import Text15400С from "../../Text15400С";

export default {
    title: "Components/ButtonTeam",
    component: ButtonTeam,
  };

  const Template = args => <ButtonTeam {...args}/>

export const ObolonResidences = Template.bind({})
ObolonResidences.args = {
  width: "218px",
  text: <Text15400С text='Obolon Residences' color='#5F82FF'/>,
  bg:'rgba(95, 130, 255, 0.10',
  }
export const GreenHills = Template.bind({})
GreenHills.args = {
  width: "218px",
  text: <Text15400С text='Green Hill' color='rgba(254, 152, 0, 0.5)'/>,
  bg:'rgba(254, 152, 0, 0.1)',
  }
export const Dilova = Template.bind({})
  Dilova.args = {
  width: "218px",
  text: <Text15400С text='Green Hill' color='rgba(103, 65, 7, 1)'/>,
  bg:'rgba(103, 65, 7, 0.10)',
  }
export const WhiteLines = Template.bind({})
  WhiteLines.args = {
  width: "218px",
  text: <Text15400С text='Green Hill' color='rgba(94, 36, 169, 1)'/>,
  bg:'rgba(94, 36, 169, 0.10)',
  }
export const MoesTavern = Template.bind({})
  MoesTavern.args = {
  width: "218px",
  text: <Text15400С text='Green Hill' color='rgba(20, 42, 118, 1)'/>,
  bg:'rgba(20, 42, 118, 0.10)',
  }
