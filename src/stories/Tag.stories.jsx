'use strict'
import Tag from '../components/Tag'
import { MAIN_GREEN, OPACITY_30, SMALL, TERTIARY_BLUE, WHITE } from '../components/constants'
export default {
  title: 'Platformatic/Tag',
  component: Tag,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    text: { control: 'string' }
  }
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Tag {...args} />

export const Sample = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Sample.args = {
  text: 'Hello Platformatic!'
}

export const Version = Template.bind({})
Version.args = {
  text: 'v1.2.3',
  backgroundColor: MAIN_GREEN,
  bordered: false,
  opaque: 30
}

export const FullRounded = Template.bind({})
FullRounded.args = {
  text: 'v1.2.3',
  backgroundColor: WHITE,
  bordered: false,
  opaque: OPACITY_30,
  fullRounded: true
}

export const WithIcon = Template.bind({})
WithIcon.args = {
  text: 'adding some icon',
  backgroundColor: TERTIARY_BLUE,
  bordered: false,
  opaque: OPACITY_30,
  fullRounded: true,
  platformaticIcon: { iconName: 'AddIcon', size: SMALL, color: WHITE }
}
