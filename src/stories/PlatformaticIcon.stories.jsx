import React from 'react'
import PlatformaticIcon from '../components/PlatformaticIcon'
import Icons from '../components/icons'

const divStyle = {
  width: '100%',
  display: 'flex',
  flexGap: '10px'
}

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

const AllIconsTemplate = (args) => {
  const icons = Object.values(Icons)
  return (
    <div style={divStyle}>
      {icons.map(IconComponent => <PlatformaticIcon key={IconComponent.name} iconName={IconComponent.name} {...args} />)}
    </div>
  )
}
export const PlatformaticIconAll = AllIconsTemplate.bind({})
PlatformaticIconAll.args = {
  color: 'white',
  size: 'small'
}
