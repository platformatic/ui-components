'use strict'
import React, { useState } from 'react'
import Select from '../../components/forms/Select'
import { MAIN_DARK_BLUE, MAIN_GREEN } from '../../components/constants'

const divStyle = {
  width: '100%',
  height: 'auto',
  padding: '20px',
  backgroundColor: 'transparent'
}

export default {
  title: 'Platformatic/Forms/Select',
  component: Select,
  decorators: [
    (Story) => (
      <div style={divStyle}>
        <Story />
      </div>
    )
  ]
}

const Template = (args) => <Select {...args} />

export const Default = Template.bind({})

Default.args = {
  name: 'test',
  defaultOption: 'Platformatic empty select'
}

const TemplateBorderMainDarkBlue = (args) => <div style={{ backgroundColor: 'white', padding: '2px' }}><Select {...args} /></div>

export const BorderMainDarkBlue = TemplateBorderMainDarkBlue.bind({})

BorderMainDarkBlue.args = {
  name: 'test',
  defaultOption: 'Defaul option',
  options: [{ label: 'Option 1', value: '1' }, { label: 'Option 2', value: '2' }, { label: 'Option 3', value: '3' }],
  borderColor: MAIN_DARK_BLUE
}

export const DefaultInvalid = Template.bind({})

DefaultInvalid.args = {
  name: 'test',
  defaultOption: 'Platformatic empty select',
  options: [{ label: 'Option 1', value: '1' }, { label: 'Option 2', value: '2' }, { label: 'Option 3', value: '3' }],
  borderColor: MAIN_GREEN,
  errorMessage: 'This is an error message'
}

const TemplateValuedAndAlertChange = (args) => {
  const [value, setValue] = useState('')

  function handleChange (event) {
    setValue(event.target.value)
  }

  return (
    <>
      <p>Value of the input {value}</p>
      <Select {...args} value={value} onChange={handleChange} />
    </>
  )
}

export const ValuedAndAlertChange = TemplateValuedAndAlertChange.bind({})

ValuedAndAlertChange.args = {
  name: 'test',
  placeholder: 'Platformatic'
}

export const IconBeforeAndAfter = Template.bind({})

IconBeforeAndAfter.args = {
  name: 'test',
  placeholder: 'Platformatic',
  beforeIcon: {
    iconName: 'CopyPasteIcon',
    color: 'main-dark-blue',
    size: 'small',
    onClick: () => { alert('clicked') }
  },
  afterIcon: {
    iconName: 'CircleAddIcon',
    color: 'error-red'
  }
}

export const Focused = TemplateBorderMainDarkBlue.bind({})

Focused.args = {
  name: 'test',
  placeholder: 'Platformatic',
  borderColor: 'main-dark-blue',
  focused: true
}

export const PlaceholderAPart = TemplateValuedAndAlertChange.bind({})

PlaceholderAPart.args = {
  name: 'test',
  placeholder: 'Give me some loving',
  borderColor: 'main-dark-blue',
  placeholderApart: true
}
