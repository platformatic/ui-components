'use strict'
import React, { useState } from 'react'
import { ERROR_RED } from '../../components/constants'
import InputWithSeparator from '../../components/forms/InputWithSeparator'

const divStyle = {
  width: '50%',
  height: 'auto',
  padding: '20px',
  backgroundColor: 'white'
}

export default {
  title: 'Platformatic/Forms/InputWithSeparator',
  component: InputWithSeparator,
  decorators: [
    (Story) => (
      <div style={divStyle}>
        <Story />
      </div>
    )
  ]
}

const TemplateDefault = (args) => {
  const [value, setValue] = useState('')
  const [chunks, setChunks] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  // errorMessage: 'error message displayed just for to be see',

  function handleChange ({ value, chunks }) {
    setValue(value)
    setChunks(chunks)
  }

  return (
    <>
      <p>Chunks: {chunks.toString()} </p>
      <p>Value inserted: {value} </p>
      <label>Add Error message: <input type='checkbox' onChange={() => setErrorMessage(errorMessage === '' ? 'custom message' : '')} /></label>
      <InputWithSeparator {...args} value={value} onChange={handleChange} errorMessage={errorMessage} />
    </>
  )
}

export const Default = TemplateDefault.bind({})

Default.args = {
  name: 'test',
  placeholder: 'Initial value',
  borderColor: 'main-dark-blue',
  separator: ',',
  afterIcon: {
    iconName: 'AddIcon',
    color: ERROR_RED,
    handleClick: () => alert('I\'m an AddIcon')
  }
}

const TemplateDefaultWithValues = (args) => {
  const [value, setValue] = useState(args.value)
  const [chunks, setChunks] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  // errorMessage: 'error message displayed just for to be see',

  function handleChange ({ value, chunks }) {
    setValue(value)
    setChunks(chunks)
  }

  return (
    <>
      <p>Chunks: {chunks.toString()} </p>
      <p>Value inserted: {value} </p>
      <label>Add Error message: <input type='checkbox' onChange={() => setErrorMessage(errorMessage === '' ? 'custom message' : '')} /></label>
      <InputWithSeparator {...args} value={value} onChange={handleChange} errorMessage={errorMessage} />
    </>
  )
}

export const PredefinedValues = TemplateDefaultWithValues.bind({})

PredefinedValues.args = {
  name: 'test',
  placeholder: 'Initial value',
  borderColor: 'main-dark-blue',
  separator: ',',
  defaultValue: 'test,test-1,test-2',
  afterIcon: {
    iconName: 'AddIcon',
    color: ERROR_RED,
    handleClick: () => alert('I\'m an AddIcon')
  }

}
