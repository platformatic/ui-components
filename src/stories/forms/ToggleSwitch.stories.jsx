'use strict'
import React, { useState } from 'react'
import ToggleSwitch from '../../components/forms/ToggleSwitch'
export default {
  title: 'Platformatic/Forms/ToggleSwitch',
  component: ToggleSwitch
}

const Template = ({ checked, ...args }) => {
  const [localChecked, setLocalChecked] = useState(checked)
  const onChange = () => { setLocalChecked(!localChecked) }
  return (
    <ToggleSwitch {...args} checked={localChecked} onChange={() => onChange()} />
  )
}

export const Default = Template.bind({})

Default.args = {
  name: 'test',
  label: 'This is a label'
}

export const Checked = Template.bind({})

Checked.args = {
  name: 'test',
  label: 'This is a label',
  checked: true,
  onChange: () => { alert('checked') }
}

export const Disabled = Template.bind({})

Disabled.args = {
  name: 'test',
  label: 'This is a label',
  checked: true,
  onChange: () => { alert('checked') },
  disabled: true
}
