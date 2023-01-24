import React from 'react'
import PullRequestIcon from '../../components/icons/PullRequestIcon'

export default {
  title: 'Platformatic/Icons',
  component: PullRequestIcon,
  argTypes: {
    color: {
      type: 'string',
      control: {
        type: 'radio',
        options: ['green', 'white', 'red']
      }
    }
  }
}

const Template = (args) => <PullRequestIcon {...args} />
export const PullRequestIconDefault = Template.bind({})
PullRequestIconDefault.args = {}
