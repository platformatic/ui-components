import React from 'react'
import PlatformaticIcon from '../components/PlatformaticIcon'
import Icons from '../components/icons'
import { COLORS_ICON, EXTRA_LARGE, EXTRA_SMALL, LARGE, MEDIUM, SIZES, SMALL } from '../components/constants'

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
        options: SIZES
      }
    },
    checked: {
      type: 'boolean',
      control: {
        type: 'boolean'
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
        {icons.map((IconComponent, index) => {
          return (
            <div style={row} key={index}>
              <div style={col}>
                <p style={paragraph}>#{index + 1}: {IconComponent.name}</p>
              </div>
              <div style={col}>
                <PlatformaticIcon key={IconComponent.name} iconName={IconComponent.name} size={EXTRA_SMALL} {...args} />
              </div>
              <div style={col}>
                <PlatformaticIcon key={IconComponent.name} iconName={IconComponent.name} size={SMALL} {...args} />
              </div>
              <div style={col}>
                <PlatformaticIcon key={IconComponent.name} iconName={IconComponent.name} size={MEDIUM} {...args} />
              </div>
              <div style={col}>
                <PlatformaticIcon key={IconComponent.name} iconName={IconComponent.name} size={LARGE} {...args} />
              </div>
              <div style={col}>
                <PlatformaticIcon key={IconComponent.name} iconName={IconComponent.name} size={EXTRA_LARGE} {...args} />
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
export const PlatformaticIconAll = AllIconsTemplate.bind({})
PlatformaticIconAll.args = {
  color: 'white',
  classes: '',
  onClick: null,
  tip: ''
}
