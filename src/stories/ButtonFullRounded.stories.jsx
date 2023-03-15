'use strict'
import ButtonFullRounded from '../components/ButtonFullRounded'
import { COLORS_ICON, SIZES } from '../components/constants'

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
    color: {
      type: 'string',
      control: {
        type: 'radio',
        options: [COLORS_ICON]
      }
    },
    size: {
      type: 'string',
      control: {
        type: 'radio',
        options: [SIZES]
      }
    }
  }
}

const Template = (args) => <ButtonFullRounded {...args} />

export const WhiteLarge = Template.bind({})
WhiteLarge.args = {
  iconName: 'PlayIcon',
  iconSize: 'large'
}

export const GreenSmall = Template.bind({})
GreenSmall.args = {
  iconName: 'StopIcon',
  iconColor: 'main-green',
  iconSize: 'small'
}

export const Disabled = Template.bind({})

Disabled.args = {
  iconName: 'BellIcon',
  disabled: true
}

export const DisabledRed = Template.bind({})

DisabledRed.args = {
  iconName: 'StopIcon',
  iconColor: 'error-red',
  disabled: true
}
