import React from 'react'
import PlatformaticIcon from '../components/PlatformaticIcon'

export default {
  title: 'Platformatic/PlatformaticIcon',
  component: PlatformaticIcon
}

const Template = (args) => <PlatformaticIcon {...args} />
export const PlatformaticIconDefault = Template.bind({})
PlatformaticIconDefault.args = {
  iconName: 'CopyIcon',
  onClick: () => alert('clicked')
}
