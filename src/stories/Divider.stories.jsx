import React from 'react'
import Divider from '../components/Divider'

export default {
  title: 'Platformatic/Divider',
  component: Divider
}

const Template = (args) => <Divider {...args} />

export const DividerDefault = Template.bind({})
DividerDefault.args = {}
