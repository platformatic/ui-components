import React, { useState } from 'react'
import RadioGroup from '../../components/forms/RadioGroup'

const divStyle = {
  width: '100%',
  height: 'auto',
  padding: '20px',
  backgroundColor: 'white'
}

const radios = [
  { label: 'One', value: '1' },
  { label: 'Two', value: '2' },
  { label: 'Three', value: '3' }
]

export default {
  title: 'Platformatic/Forms/RadioGroup',
  component: RadioGroup,
  decorators: [
    (Story) => (
      <div style={divStyle}>
        <Story />
      </div>
    )
  ]
}

const Template = (args) => {
  const [value, setValue] = useState(args.value || '')

  function handleChange (event) {
    setValue(event.target.value)
  }

  return (
    <>
      <p>Value of the radio {value}</p>
      <RadioGroup {...args} value={value} onChange={handleChange} />
    </>
  )
}

export const Default = Template.bind({})

Default.args = {
  name: 'test',
  radios
}

export const DefaultInvalid = Template.bind({})

DefaultInvalid.args = {
  name: 'test',
  radios,
  errorMessage: 'This is an error message'
}

export const Disabled = Template.bind({})

Disabled.args = {
  name: 'test',
  radios,
  disabled: true
}

export const Empty = Template.bind({})

Empty.args = {
  name: 'test',
  radios: []
}

export const ValueSelected = Template.bind({})

ValueSelected.args = {
  name: 'test',
  radios,
  value: '3'
}
