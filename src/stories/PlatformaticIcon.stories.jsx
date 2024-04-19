import React from 'react'
import PlatformaticIcon from '../components/PlatformaticIcon'
import Icons from '../components/icons'
import {
  COLORS_ICON,
  EXTRA_LARGE,
  EXTRA_SMALL,
  LARGE,
  MEDIUM,
  SIZES,
  SMALL,
  WHITE
} from '../components/constants'

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
    checked: {
      type: 'boolean',
      control: {
        type: 'boolean'
      }
    },
    classes: {
      type: 'string'
    },
    color: {
      options: COLORS_ICON,
      control: { type: 'radio' }
    },
    size: {
      options: SIZES,
      control: { type: 'radio' }
    },
    tip: {
      type: 'string'
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
  const icons = Object.keys(Icons)

  return (
    <>
      <div style={divStyle}>
        <p style={paragraph}> All Platformatic Icons: {icons.length} </p>
        {icons.map((icon, index) => (
          <div style={row} key={index}>
            <div style={col}>
              <p style={paragraph}>
                #{index + 1}: {icon}
              </p>
            </div>
            <div style={col}>
              <PlatformaticIcon
                key={icon}
                iconName={icon}
                size={EXTRA_SMALL}
                {...args}
              />
            </div>
            <div style={col}>
              <PlatformaticIcon
                key={icon}
                iconName={icon}
                size={SMALL}
                {...args}
              />
            </div>
            <div style={col}>
              <PlatformaticIcon
                key={icon}
                iconName={icon}
                size={MEDIUM}
                {...args}
              />
            </div>
            <div style={col}>
              <PlatformaticIcon
                key={icon}
                iconName={icon}
                size={LARGE}
                {...args}
              />
            </div>
            <div style={col}>
              <PlatformaticIcon
                key={icon}
                iconName={icon}
                size={EXTRA_LARGE}
                {...args}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
export const PlatformaticIconAll = AllIconsTemplate.bind({})
PlatformaticIconAll.args = {
  color: WHITE,
  classes: '',
  tip: '',
  onClick: () => alert('clicked')
}
