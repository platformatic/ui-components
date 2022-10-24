'use strict'
import BorderedBox from '../components/BorderedBox'
export default {
  title: 'Platformatic/BorderedBox',
  component: BorderedBox,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: { control: 'color' }
  }
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <BorderedBox {...args}>Hello Platformatic</BorderedBox>

export const Green = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Green.args = {
  color: 'green'
}
export const Red = Template.bind({})

Red.args = {
  color: 'red'
}
