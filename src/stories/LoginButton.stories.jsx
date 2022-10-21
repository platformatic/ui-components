import React from 'react'
import LoginButton  from '../components/LoginButton'

export default {
  title: 'Example/LoginButton',
  component: LoginButton
}

const Template = (args) => <LoginButton {...args} />

export const NoIcon = Template.bind({})
NoIcon.args = {
  label: 'Click here',
  onClick: () => alert('clicked')
}
