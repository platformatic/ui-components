'use strict'
import React from 'react'
import InputFileUpload from '../../components/forms/InputFileUpload'
import { RICH_BLACK } from '../../components/constants'

const divStyle = {
  width: '100%',
  height: 'auto',
  padding: '20px',
  backgroundColor: 'white'
}

export default {
  title: 'Platformatic/Forms/InputFileUpload',
  component: InputFileUpload,
  decorators: [
    (Story) => (
      <div style={divStyle}>
        <Story />
      </div>
    )
  ]
}

const Template = (args) => (
  <div style={{ backgroundColor: 'white', padding: '2px' }}>
    <InputFileUpload {...args} />
  </div>
)

export const Default = Template.bind({})

Default.args = {
  name: 'test',
  placeholder: 'Select txt file',
  borderColor: 'main-dark-blue',
  beforeIcon: {
    iconName: 'AddIcon',
    color: RICH_BLACK,
    onClick: null
  },
  acceptFiles: '.txt'
}
