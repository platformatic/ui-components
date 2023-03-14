'use strict'
import BorderedBox from '../components/BorderedBox'
import { COLORS_BORDERED_BOX } from '../components/constants'
export default {
  title: 'Platformatic/BorderedBox',
  component: BorderedBox,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: {
      options: COLORS_BORDERED_BOX,
      type: 'radio'
    }
  }
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <BorderedBox {...args}>Hello Platformatic</BorderedBox>

export const Green = Template.bind({})

Green.args = {
  color: 'main-green'
}
export const Red = Template.bind({})

Red.args = {
  color: 'error-red'
}

export const White = Template.bind({})
White.args = {
  color: 'white'
}
