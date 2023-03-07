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
    <>
      <p className='text-white'> Platformatic all icons size {args.size}</p>
      <div style={divStyle}>
        {icons.map(IconComponent => <PlatformaticIcon key={IconComponent.name} iconName={IconComponent.name} {...args} />)}
      </div>
    </>
  )
}
export const PlatformaticIconSmall = AllIconsTemplate.bind({})
PlatformaticIconSmall.args = {
  color: 'white',
  size: 'small',
  onClick: null
}

export const PlatformaticIconNormal = AllIconsTemplate.bind({})
PlatformaticIconNormal.args = {
  color: 'white',
  size: 'normal'
}

export const PlatformaticIconLarge = AllIconsTemplate.bind({})
PlatformaticIconLarge.args = {
  color: 'green',
  size: 'large'
}

export const PlatformaticIconExtraLarge = AllIconsTemplate.bind({})
PlatformaticIconExtraLarge.args = {
  color: 'green',
  size: 'extra-large'
}
