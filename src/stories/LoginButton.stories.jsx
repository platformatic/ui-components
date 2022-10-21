import React from 'react'
import { LoginButton } from '../components/LoginButton'
import { GHLoginButton } from '../components/GHLoginButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
