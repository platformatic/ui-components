'use strict'
import React, { useState } from 'react'
import Password from '../../components/forms/Password'

const divStyle = {
  width: '100%',
  height: 'auto',
  padding: '20px',
  backgroundColor: 'white'
}

export default {
  title: 'Platformatic/Forms/Password',
  component: Password,
  decorators: [
    (Story) => (
      <div style={divStyle}>
        <Story />
      </div>
    )
  ]
}

const Template = (args) => {
  const [value, setValue] = useState('')

  function handleChange (event) {
    setValue(event.target.value)
  }

  return (
    <>
      <p>Value of the input {value}</p>
      <Password {...args} value={value} onChange={handleChange} />
    </>
  )
}

export const Default = Template.bind({})

Default.args = {
  name: 'test',
  placeholder: 'Platformatic'
}

const TemplateBorderMainDarkBlue = (args) => <div style={{ backgroundColor: 'white', padding: '2px' }}><Password {...args} /></div>

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
