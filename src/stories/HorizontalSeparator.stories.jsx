import React from 'react'
import HorizontalSeparator from '../components/HorizontalSeparator'

export default {
  title: 'Platformatic/HorizontalSeparator',
  component: HorizontalSeparator
}

const Template = (args) => <HorizontalSeparator {...args} />

export const HorizontalSeparatorDefault = Template.bind({})
HorizontalSeparatorDefault.args = {}
