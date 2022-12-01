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
    primary: {
      type: 'boolean'
    },
    color: {
      type: 'string',
      control: {
        type: 'radio',
        options: ['green', 'red']
      }
    }
  }
}

const Template = (args) => <Button {...args} />

export const PrimaryGreen = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PrimaryGreen.args = {
  primary: true,
  label: 'Primary Green',
  color: 'green'
}

export const SecondaryGreen = Template.bind({})
SecondaryGreen.args = {
  primary: false,
  label: 'Secondary Green',
  color: 'green'
}

export const PrimaryWithIcon = Template.bind({})
PrimaryWithIcon.args = {
  primary: true,
  label: 'Primary with Icon',
  icon: faCheck
}

export const SecondaryWithIcon = Template.bind({})
SecondaryWithIcon.args = {
  primary: false,
  label: 'Secondary with Icon',
  icon: faCheck

}

export const PrimaryRed = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
PrimaryRed.args = {
  primary: true,
  label: 'Primary Red',
  color: 'red'
}

export const SecondaryRed = Template.bind({})
SecondaryRed.args = {
  primary: false,
  label: 'Secondary Red',
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
  primary: true,
  label: 'A simple button',
  color: 'green',
  disabeld: true
}

export const DisabledRed = DisabledTemplate.bind({})

DisabledRed.args = {
  primary: true,
  label: 'A simple button',
  color: 'red',
  disabeld: true
}
