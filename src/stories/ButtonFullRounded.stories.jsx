'use strict'
import ButtonFullRounded from '../components/ButtonFullRounded'
import {
  COLORS_ICON,
  SIZES,
  SMALL,
  MEDIUM,
  LARGE
} from '../components/constants'
import Icons from '../components/icons'

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
  title: 'Platformatic/ButtonFullRounded',
  component: ButtonFullRounded,
  argTypes: {
    label: {
      type: 'string',
      control: 'text'
    },
    bold: {
      type: 'boolean'
    },
    iconColor: {
      type: 'string',
      control: {
        type: 'radio',
        options: COLORS_ICON
      }
    },
    iconSize: {
      type: 'string',
      control: {
        type: 'radio',
        options: SIZES
      }
    },
    selected: {
      type: 'boolean'
    }
  }
}

const Template = (args) => <ButtonFullRounded {...args} />

export const SingleButton = Template.bind({})
SingleButton.args = {
  iconName: 'PlayIcon'
}

const AllCircleButtonsTemplate = (args) => {
  const icons = Object.keys(Icons).filter(
    (icon) => icon.indexOf('Circle') > -1
  )

  return (
    <>
      <div style={divStyle}>
        <p style={paragraph}>All Buttons with Circle Icons: {icons.length} </p>
        {icons.map((icon, index) => (
          <div style={row} key={index}>
            <div style={col}>
              <p style={paragraph}>
                #{index + 1}: {icon}
              </p>
            </div>
            <div style={col}>
              <ButtonFullRounded
                key={icon}
                iconName={icon}
                iconSize={SMALL}
                {...args}
              />
            </div>
            <div style={col}>
              <ButtonFullRounded
                key={icon}
                iconName={icon}
                iconSize={MEDIUM}
                {...args}
              />
            </div>
            <div style={col}>
              <ButtonFullRounded
                key={icon}
                iconName={icon}
                iconSize={LARGE}
                {...args}
              />
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
export const AllButtonFullRounded = AllCircleButtonsTemplate.bind({})
AllButtonFullRounded.args = {
  iconColor: 'white',
  onClick: null
}
