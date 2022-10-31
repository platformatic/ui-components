import React from 'react'
import Logo from '../components/Logo'

export default {
  title: 'Platformatic/Logo',
  component: Logo
}

const Template = (args) => <Logo {...args} />
export const LogoSmall = Template.bind({})
LogoSmall.args = {
  width: 300,
  heigth: 300,
}

