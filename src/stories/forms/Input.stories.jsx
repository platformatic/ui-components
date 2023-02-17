'use strict'
import React, { useState } from 'react'
import Input from '../../components/forms/Input'
import { faAdd, faCheckCircle } from '@fortawesome/free-solid-svg-icons'

export default {
  title: 'Platformatic/Forms/Input',
  component: Input
}

const Template = (args) => <Input {...args} />

export const Default = Template.bind({})

Default.args = {
  name: 'test',
  placeholder: 'Platformatic'
}

const TemplateBorderMainDarkBlue = (args) => <div style={{ backgroundColor: 'white', padding: '2px' }}><Input {...args} /></div>

export const BorderMainDarkBlue = TemplateBorderMainDarkBlue.bind({})

BorderMainDarkBlue.args = {
  name: 'test',
  placeholder: 'Platformatic',
  borderColor: 'main-dark-blue'
}

export const DefaultInvalid = Template.bind({})

DefaultInvalid.args = {
  name: 'test',
  placeholder: 'Platformatic',
  borderColor: 'main-dark-blue',
  errorMessage: 'This is an error message'
}

const TemplateValuedAndAlertChange = (args) => {
  const [value, setValue] = useState('Initial value')

  function handleChange (event) {
    setValue(event.target.value)
  }

  return (
    <>
      <p>Value of the input {value}</p>
      <Input {...args} value={value} onChange={handleChange} />
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
  beforeInputIcon: faAdd,
  afterInputIcon: faCheckCircle,
  afterInputIconColor: 'error-red'
}