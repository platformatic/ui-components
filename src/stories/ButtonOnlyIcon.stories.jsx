import React from 'react'
import ButtonOnlyIcon from '../components/ButtonOnlyIcon'
import {
  COLORS_BUTTON,
  HOVER_EFFECTS_BUTTONS,
  SIZES,
  WHITE,
  RICH_BLACK,
  DULLS_BACKGROUND_COLOR,
  SMALL
} from '../components/constants'

const divStyle = {
  width: '100%',
  height: 'auto',
  padding: '2px',
  backgroundColor: 'white'
}

export default {
  title: 'Platformatic/ButtonOnlyIcon',
  component: ButtonOnlyIcon,
  decorators: [
    (Story) => (
      <div style={divStyle}>
        <Story />
      </div>
    )
  ],
  argTypes: {
    altLabel: {
      type: 'string',
      control: 'text'
    },
    bold: {
      type: 'boolean'
    },
    backgroundColor: {
      type: 'radio',
      options: COLORS_BUTTON
    },
    color: {
      type: 'radio',
      options: COLORS_BUTTON
    },
    disabled: {
      type: 'boolean'
    },
    size: {
      type: 'string',
      control: {
        type: 'radio',
        options: SIZES
      }
    },
    hoverEffect: {
      type: 'radio',
      options: HOVER_EFFECTS_BUTTONS
    },
    bordered: {
      type: 'boolean'
    },
    fullWidth: {
      type: 'boolean'
    },
    selected: {
      type: 'boolean'
    },
    fullRounded: {
      type: 'boolean'
    }

  }
}

const OnlyIconTemplate = (args) => <ButtonOnlyIcon {...args} />

export const OnlyIcon = OnlyIconTemplate.bind({})

OnlyIcon.args = {
  color: WHITE,
  backgroundColor: RICH_BLACK,
  onClick: () => {
    alert('hit!')
  },
  hoverEffect: DULLS_BACKGROUND_COLOR,
  platformaticIcon: { size: SMALL, iconName: 'RunningIcon', color: WHITE }
}
