import React from "react";
import Button__103 from './Button103';
import Button__140 from './Button140';
import Button__154 from './Button154';
import Button__183 from './Button183';
import Button__186 from './Button186';
import Button__199 from './Button199';
import Button__20556 from './Button20556';
import Button__211 from './Button211';
import Button__218 from './Button218';
import Button__273 from './Button273';
import Button__310 from './Button310';
import Text15400С from "../Text15400С";
import Text15700 from '../Text15700';
import ImgTextTemplate from '../../templates/ImgTextTemplate';
import Download from '../../../images/download-button-icon.svg'

export default {
    title: "Components/Buttons",
    component: [Button__103,Button__140,Button__154,Button__183,Button__186,Button__199,Button__20556,Button__211,Button__218,Button__273,Button__310],
  };

  const Template2 = args => <Button__103 {...args}/>
  export const Button103 = Template2.bind({})
    Button103.args = {
      text: <Text15400С text='Найти' color='#fff'/>,
      bg: 'rgba(39, 125, 89, 1)'
    }
  const Template5 = args => <Button__140 {...args}/>
  export const Button140 = Template5.bind({})
    Button140.args = {
      text: <Text15400С text='Отмена' color='rgba(61, 61, 61, 1)'/>,
      bg: 'rgba(61, 61, 61, 0.06)'
    }
  const Template7 = args => <Button__140 {...args}/>
  export const Button140s = Template7.bind({})
    Button140s.args = {
      text: <Text15400С text='Відмінити' color='rgba(61, 61, 61, 1)'/>,
      bg: 'rgba(61, 61, 61, 0.06)'
    }
  const Template = args => <Button__154 {...args}/>
  export const Button154 = Template.bind({})
    Button154.args = {
      text: <Text15400С text='Добавить' color='#fff'/>,
      bg: 'rgba(39, 125, 89, 1)'
    }
  const Template11 = args => <Button__183 {...args}/>
  export const Button183 = Template11.bind({})
    Button183.args = {
      text: <Text15700 text='Завершити рев’ю' color='rgba(238, 52, 36, 1)'/>,
      bg: 'rgba(238, 52, 36, 0.06)'
    }
  const Template13 = args => <Button__186 {...args}/>
  export const Button186 = Template13.bind({})
    Button186.args = {
      text: <ImgTextTemplate image={Download} text={<Text15700 text='Отримати звіт' color='#fff'/>}/>,
      bg: 'rgba(39, 125, 89, 1)'
    }
  const Template14 = args => <Button__186 {...args}/>
  export const Button186add = Template14.bind({})
    Button186add.args = {
      text: <Text15700 text='Додати до архiву' color='#fff'/>,
      bg: 'rgba(39, 125, 89, 1)'
    }
  const Template1 = args => <Button__199 {...args}/>
  export const Button199 = Template1.bind({})
    Button199.args = {
      text: <Text15400С text='Рассадка по этажам' color='#fff'/>,
      bg: 'rgba(39, 125, 89, 1)'
    }
  const Template15 = args => <Button__20556 {...args}/>
  export const Button20556 = Template15.bind({})
    Button20556.args = {
      text: <Text15400С text='Додати до архiву' color='#fff'/>,
      bg: 'rgba(39, 125, 89, 1)'
    }
  const Template3 = args => <Button__211 {...args}/>
  export const Button211 = Template3.bind({})
    Button211.args = {
      text: <Text15400С text='Розпочати нове рев’ю' color='#fff'/>,
      bg: 'rgba(39, 125, 89, 1)'
    }
  const Template4 = args => <Button__218 {...args}/>
  export const Button218 = Template4.bind({})
    Button218.args = {
      text: <Text15400С text='Начать новое ревью' color='#fff'/>,
      bg: 'rgba(39, 125, 89, 1)'
    }
  const Template6 = args => <Button__218 {...args}/>
  export const Button218s = Template6.bind({})
    Button218s.args = {
      text: <Text15400С text='Зберегти' color='#fff'/>,
      bg: 'rgba(39, 125, 89, 1)'
    }
  const Template8 = args => <Button__218 {...args}/>
  export const Button218c = Template8.bind({})
    Button218c.args = {
      text: <Text15700 text='Затвердити' color='#fff'/>,
      bg: 'rgba(39, 125, 89, 1)'
    }
  const Template10 = args => <Button__218 {...args}/>
  export const Button218b = Template10.bind({})
    Button218b.args = {
      text: <Text15700 text='Залишити коментар' color='rgba(39, 125, 89, 1)'/>,
      bg: '#fff',
      border: '1px solid rgba(39, 125, 89, 1)'
    }
  const Template12 = args => <Button__273 {...args}/>
  export const Button273 = Template12.bind({})
    Button273.args = {
      text: <Text15700 text='Відправити хедам на перевірку' color='rgba(39, 125, 89, 1)'/>,
      bg: '#fff',
      border: '1px solid rgba(39, 125, 89, 1)'
    }
  const Template9 = args => <Button__310 {...args}/>
  export const Button310 = Template9.bind({})
    Button310.args = {
      text: <Text15700 text='Відправити на доопрацювання' color='rgba(238, 52, 36, 1)'/>,
      bg: 'rgba(238, 52, 36, 0.06)'
    }