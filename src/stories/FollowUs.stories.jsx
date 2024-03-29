import React from 'react'
import { MAIN_GREEN, SMALL, WHITE } from '../components/constants'
import FollowUs from '../components/FollowUs'

export default {
  title: 'Platformatic/FollowUs',
  component: FollowUs
}

const Template = (args) => <FollowUs {...args} />

export const FollowUsFrontpage = Template.bind({})
FollowUsFrontpage.args = {
  label: 'Follow us on'
}

export const FollowUsDashboard = Template.bind({})
FollowUsDashboard.args = {
  label: 'Follow us:',
  useOnFrontpage: false,
  labelColor: WHITE,
  iconSize: SMALL,
  iconColor: MAIN_GREEN
}
