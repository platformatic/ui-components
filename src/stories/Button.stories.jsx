'use strict'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import Button from '../components/Button'

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
    buttonClass: {
      type: 'string',
      control: {
        type: 'radio',
        options: ['primary', 'secondary', 'transparent']
      }
    },
    color: {
      type: 'string',
      control: {
        type: 'radio',
        options: ['green', 'red', 'white']
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
    }
  }
}

const Template = (args) => <Button {...args} />

export const PrimaryGreen = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PrimaryGreen.args = {
  buttonClass: 'primary',
  label: 'Primary Green',
  color: 'green',
  bold: true
}

export const SecondaryRed = Template.bind({})
SecondaryRed.args = {
  label: 'Secondary Green',
  color: 'red'
}

export const TransparentWhite = Template.bind({})
TransparentWhite.args = {
  buttonClass: 'transparent',
  label: 'Secondary Green',
  color: 'white'
}

export const PrimaryWithIcon = Template.bind({})
PrimaryWithIcon.args = {
  buttonClass: 'primary',
  label: 'Primary with Icon',
  icon: faCheck
}

export const SecondaryWithIcon = Template.bind({})
SecondaryWithIcon.args = {
  buttonClass: 'secondary',
  label: 'Secondary with Icon',
  icon: faCheck,
  color: 'white'
}

export const PrimaryRed = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PrimaryRed.args = {
  buttonClass: 'primary',
  label: 'Primary Red',
  color: 'red'
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
        <Button label='Toggle Disabled' primary='true' onClick={() => setEnabled(!enabled)} />
      </div>

    </div>

  )
}

export const DisabledGreen = DisabledTemplate.bind({})

DisabledGreen.args = {
  buttonClass: 'primary',
  label: 'A simple button',
  color: 'green',
  disabled: true
}

export const DisabledRed = DisabledTemplate.bind({})

DisabledRed.args = {
  buttonClass: 'primary',
  label: 'A simple button',
  color: 'red',
  disabled: true
}
