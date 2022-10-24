'use strict'
import BorderedText from '../components/BorderedText'
export default {
  title: 'Platformatic/BorderedText',
  component: BorderedText,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    text: { control: 'string' }
  }
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <BorderedText {...args} />

export const Sample = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Sample.args = {
  text: 'Hello Platformatic!'
}
export const Version = Template.bind({})

Version.args = {
  text: 'v1.2.3'
}
