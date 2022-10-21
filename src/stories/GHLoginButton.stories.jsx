import React from 'react'
import GHLoginButton from '../components/GHLoginButton'

export default {
  title: 'Example/GHLoginButton',
  component: GHLoginButton
}

const Template = (args) => <GHLoginButton {...args} />

export const Default = Template.bind({})
Default.args = {
  onClick: () => alert('clicked')
}
