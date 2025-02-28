import React, { useState } from 'react'
import TextArea from '../../components/forms/TextArea'

const divStyle = {
  width: '100%',
  height: 'auto',
  padding: '20px',
  backgroundColor: 'white'
}

export default {
  title: 'Platformatic/Forms/TextArea',
  component: TextArea,
  decorators: [
    (Story) => (
      <div style={divStyle}>
        <Story />
      </div>
    )
  ]
}

const Template = (args) => <TextArea {...args} />

export const Default = Template.bind({})

Default.args = {
  name: 'test',
  placeholder: 'Platformatic'
}

export const DefaultInvalid = Template.bind({})

DefaultInvalid.args = {
  name: 'test',
  placeholder: 'Platformatic',
  borderColor: 'main-dark-blue',
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
      <TextArea {...args} value={value} onChange={handleChange} />
    </>
  )
}

export const ValuedAndAlertChange = TemplateValuedAndAlertChange.bind({})

ValuedAndAlertChange.args = {
  name: 'test',
  placeholder: 'Platformatic'
}

export const IconAfter = Template.bind({})

IconAfter.args = {
  name: 'test',
  placeholder: 'Platformatic',
  afterIcon: {
    iconName: 'CircleAddIcon',
    color: 'error-red'
  }
}
