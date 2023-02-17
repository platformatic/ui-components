'use strict'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import Button from '../components/Button'

const colors = ['main-green', 'dark-green', 'light-green', 'main-dark-blue', 'dark-blue', 'light-blue', 'white', 'error-red', 'tertiary-blue', 'transparent']

export default {
  title: 'Platformatic/Button',
  component: Button,
  argTypes: {
    label: {
      type: 'string',
      control: 'text'
    },
    bold: {
      type: 'boolean'
    },
    backgroundColor: {
      type: 'string',
      control: {
        type: 'radio',
        options: colors
      }
    },
    color: {
      type: 'string',
      control: {
        type: 'radio',
        options: colors
      }
    },
    disabled: {
      type: 'boolean'
    },
    size: {
      type: 'string',
      control: {
        type: 'radio',
        options: ['small', 'medium', 'large', 'extra-large']
      }
    },
    hoverEffect: {
      type: 'radio',
      options: ['hover', 'underline']
    },
    bordered: {
      type: 'boolean'
    }
  }
}

const Template = (args) => <Button {...args} />

export const OnlyLabel = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
OnlyLabel.args = {
  label: 'Sample label',
  backgroundColor: 'main-green'
}

export const BorderedRed = Template.bind({})
BorderedRed.args = {
  label: 'Borderer Red',
  color: 'error-red'
}

export const TransparentWhite = Template.bind({})
TransparentWhite.args = {
  label: 'White',
  color: 'white',
  icon: faCheck
}

const DisabledTemplate = (args) => {
  const [enabled, setEnabled] = useState(false)
  return (
    <div className='flex flex-col gap-y-6 text-white'>
      <div>
        <Button {...args} disabled={!enabled} onClick={() => alert('clicked')} />
        <span className='ml-4 text-xl'>👈 This button is {enabled ? 'enabled' : 'disabled'}</span>
      </div>
      <div>
        <Button label='Toggle Disabled' backgroundColor='main-green' onClick={() => setEnabled(!enabled)} />
      </div>
    </div>
  )
}

export const DisabledGreen = DisabledTemplate.bind({})

DisabledGreen.args = {
  backgroundColor: 'main-green',
  label: 'A simple button',
  color: 'main-dark-blue',
  disabled: true
}

export const DisabledRed = DisabledTemplate.bind({})

DisabledRed.args = {
  label: 'A simple button',
  color: 'error-red',
  disabled: true
}
