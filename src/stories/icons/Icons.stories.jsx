import React from 'react'
import PullRequestIcon from '../../components/icons/PullRequestIcon'
import CloseIcon from '../../components/icons/CloseIcon'
import CircleCloseIcon from '../../components/icons/CircleCloseIcon'
import TriangleExclamationIcon from '../../components/icons/TriangleExclamationIcon'

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

const PullRequestIconTemplate = (args) => <PullRequestIcon {...args} />
export const PullRequestIconDefault = PullRequestIconTemplate.bind({})
PullRequestIconDefault.args = {}

const CloseIconTemplate = (args) => <CloseIcon {...args} />
export const CloseIconDefault = CloseIconTemplate.bind({})
CloseIconDefault.args = {}

const CircleCloseIconTemplate = (args) => <CircleCloseIcon {...args} />
export const CircleCloseIconDefault = CircleCloseIconTemplate.bind({})
CircleCloseIconDefault.args = {}

const TriangleExclamationIconTemplate = (args) => <TriangleExclamationIcon {...args} />
export const TriangleExclamationIconDefault = TriangleExclamationIconTemplate.bind({})
TriangleExclamationIconDefault.args = {}
