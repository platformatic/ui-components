'use strict'
import { render } from '@testing-library/react'
import Tag from '../components/Tag'
import { ELECTRIC_PURPLE, ERROR_RED, MAIN_GREEN, OPACITY_30, RICH_BLACK, SMALL, TERTIARY_BLUE, WARNING_YELLOW, WHITE } from '../components/constants'
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

const MultiColorTemplate = {
  render: ({ colors }) => {
    const tags = colors.map((color) => {
      return (
        <Tag
          bordered={false}
          opaque={OPACITY_30}
          fullRounded
          backgroundColor={color}
          color={color}
          text={color.toUpperCase()}
        />
      )
    })
    return <div>{tags}</div>
  }

}

export const MultiColor = {
  ...MultiColorTemplate,
  args: {
    colors: [ERROR_RED, TERTIARY_BLUE, WHITE, WARNING_YELLOW, ELECTRIC_PURPLE, MAIN_GREEN]
  }
}
