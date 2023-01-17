import React from 'react'
import Logo from '../components/Logo'

export default {
  title: 'Platformatic/Logo',
  component: Logo
}

const Template = (args) => <Logo {...args} />
export const LogoLarge = Template.bind({})
LogoLarge.args = {
  width: 300,
  heigth: 300
}

export const LogoNormal = Template.bind({})
LogoNormal.args = {}
