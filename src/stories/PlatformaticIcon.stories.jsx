import React from 'react'
import PlatformaticIcon from '../components/PlatformaticIcon'
import Icons from '../components/icons'
import { COLORS_ICON } from '../components/constants'


const divStyle = {
  width: '100%'
}

const row = {
  display: 'flex',
  width: '100%',
  columnGap: '1rem',
  alignItems: 'center'
}

const col = {
  flex: 1
}

const paragraph = {
  color: 'white',
  fontSize: '12px'
}

export default {
  title: 'Platformatic/PlatformaticIcon',
  component: PlatformaticIcon,
  argTypes: {
    color: {
      type: 'string',
      control: {
        type: 'radio',
        options: COLORS_ICON
      }
    },
    size: {
      type: 'string',
      control: {
        type: 'radio',
        options: ['small', 'medium', 'large', 'extra-large']
      }
    }
  }
}

const Template = (args) => <PlatformaticIcon {...args} />
export const PlatformaticIconDefault = Template.bind({})
PlatformaticIconDefault.args = {
  iconName: 'CopyPasteIcon',
  onClick: () => alert('clicked')
}

const AllIconsTemplate = (args) => {
  const icons = Object.values(Icons)

  return (
    <>
      <div style={divStyle}>
        <p style={paragraph}> All Platformatic Icons: {icons.length} </p>
        {icons.map((IconComponent, index) => (
          <div style={row} key={index}>
            <div style={col}>
              <p style={paragraph}>#{index + 1}: {IconComponent.name}</p>
            </div>
            <div style={col}>
              <PlatformaticIcon key={IconComponent.name} iconName={IconComponent.name} size='small' {...args} />
            </div>
            <div style={col}>
              <PlatformaticIcon key={IconComponent.name} iconName={IconComponent.name} size='medium' {...args} />
            </div>
            <div style={col}>
              <PlatformaticIcon key={IconComponent.name} iconName={IconComponent.name} size='large' {...args} />
            </div>
            <div style={col}>
              <PlatformaticIcon key={IconComponent.name} iconName={IconComponent.name} size='extra-large' {...args} />
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
export const PlatformaticIconAll = AllIconsTemplate.bind({})
PlatformaticIconAll.args = {
  color: 'white',
  onClick: null
}
