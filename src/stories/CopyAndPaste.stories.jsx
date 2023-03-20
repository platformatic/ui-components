import React from 'react'
import CopyAndPaste from '../components/CopyAndPaste'

const divStyle = {
  width: '100%',
  height: 'auto',
  padding: '50px',
  backgroundColor: 'white'
}

export default {
  title: 'Platformatic/CopyAndPaste',
  component: CopyAndPaste,
  decorators: [
    (Story) => (
      <div style={divStyle}>
        <Story />
      </div>
    )
  ]
}

const Template = (args) => <CopyAndPaste {...args} />
export const CopyAndPasteDefault = Template.bind({})
CopyAndPasteDefault.args = {
  value: 'copy this value',
  tooltipLabel: 'Tooltip show'
}
