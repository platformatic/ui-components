import React from 'react'
import FollowUs from '../components/FollowUs'

export default {
  title: 'Platformatic/FollowUs',
  component: FollowUs
}

const Template = (args) => <FollowUs {...args} />

export const FollowUsDefault = Template.bind({})
FollowUsDefault.args = {
  label: 'Follow us on'
}
