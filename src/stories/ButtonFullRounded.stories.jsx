'use strict'
import { faStop, faRefresh } from '@fortawesome/free-solid-svg-icons'
import ButtonFullRounded from '../components/ButtonFullRounded'

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
        options: ['green', 'red', 'white']
      }
    },
    size: {
      type: 'string',
      control: {
        type: 'radio',
        options: ['small', 'medium', 'large']
      }
    }
  }
}

const Template = (args) => <ButtonFullRounded {...args} />

export const WhiteLarge = Template.bind({})
WhiteLarge.args = {
  icon: faStop,
  size: 'large'
}

export const GreenSmall = Template.bind({})
GreenSmall.args = {
  icon: faStop,
  color: 'green',
  size: 'small'
}

export const Disabled = Template.bind({})

Disabled.args = {
  icon: faRefresh,
  disabled: true
}

export const DisabledRed = Template.bind({})

DisabledRed.args = {
  icon: faRefresh,
  color: 'red',
  disabled: true
}
