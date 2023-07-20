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
  placeholder: 'Platformatic empty select',
  borderColor: MAIN_GREEN
}

const TemplateBorderMainDarkBlue = (args) => {
  const [value, setValue] = useState('')

  function handleChange (event) {
    setValue(event.target.value)
  }

  function handleSelect (event) {
    setValue(event.detail.label)
  }

  return (
    <div style={{ backgroundColor: 'white', padding: '20px 10px' }}>
      <p>Value of the input {value}</p>
      <Select {...args} value={value} onChange={handleChange} onSelect={handleSelect} />
    </div>
  )
}

const TemplateBorderMainDarkBlue2 = (args) => {
  const [value, setValue] = useState('')

  function handleChange (event) {
    setValue(event.target.value)
  }

  function handleSelect (event) {
    setValue(event.detail.label)
  }

  return (
    <>
      <div style={{ backgroundColor: 'white', padding: '20px 10px' }}>
        <p>Value of the input {value}</p>
        <Select {...args} value={value} onChange={handleChange} onSelect={handleSelect} />
        <br />
        <Select placeholder='Disabled' disabled />

      </div>
    </>
  )
}

export const BorderMainDarkBlue = TemplateBorderMainDarkBlue.bind({})

BorderMainDarkBlue.args = {
  name: 'test',
  placeholder: 'Defaul option',
  options: [...Array(20).keys()].map(ele => ({ label: `Option ${ele}`, value: `Value${ele}`, iconName: 'SocialGitHubIcon' })),
  borderColor: MAIN_DARK_BLUE
}

export const DefaultInvalid = TemplateBorderMainDarkBlue.bind({})

DefaultInvalid.args = {
  name: 'test',
  placeholder: 'Platformatic empty select',
  options: [{ label: 'Option 1', value: '1' }, { label: 'Option 2', value: '2' }, { label: 'Option 3', value: '3' }],
  borderColor: MAIN_GREEN,
  errorMessage: 'This is an error message'
}

export const withDifferentOptions = TemplateBorderMainDarkBlue2.bind({})

withDifferentOptions.args = {
  name: 'test',
  placeholder: 'Platformatic',
  options: [...Array(20).keys()].map(ele => ({
    label: `Option ${ele}`,
    value: `Value${ele}`,
    iconName: 'SocialGitHubIcon'
  })).concat({
    label: 'Last but not least',
    iconName: 'AddIcon',
    value: 123123,
    notSelectable: true,
    onClick: () => alert('you clicked last but not least')
  }).concat({
    label: 'Play',
    iconName: 'PlayIcon',
    value: 123123,
    notSelectable: true
  }),
  borderColor: MAIN_DARK_BLUE
}
