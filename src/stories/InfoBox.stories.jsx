import React from 'react'
import InfoBox from '../components/InfoBox'

const divStyle = {
  width: '100%',
  height: 'auto',
  padding: '10px',
  backgroundColor: 'white'
}

export default {
  title: 'Platformatic/InfoBox',
  component: InfoBox,
  decorators: [
    (Story) => (
      <div style={divStyle}>
        <Story />
      </div>
    )
  ]
}

const Template = (args) => <InfoBox {...args}><p>this will be your custom title</p></InfoBox>
export const InfoBoxSample = Template.bind({})
InfoBoxSample.args = {
  iconName: 'UpgradeIcon',
  helpText: 'Helper text',
  buttonProps: {
    label: 'Sample button',
    backgroundColor: 'main-green',
    color: 'red',
    onClick: () => alert('Clicked InfoBoxSample')
  }
}

const ContainedTemplate = (args) => <div style={{ maxWidth: '300px' }}><InfoBox {...args} /></div>
export const InfoBoxContained = ContainedTemplate.bind({})
InfoBoxContained.args = {
  iconName: 'UpgradeIcon',
  helpText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et dui facilisis, molestie urna sed, volutpat nibh.',
  buttonProps: {
    label: 'Sample button',
    color: 'white',
    onClick: () => alert('Clicked ContainedTemplate')
  }
}

export const InfoBoxErrorContained = ContainedTemplate.bind({})
InfoBoxErrorContained.args = {
  iconName: 'WorkspaceFailIcon',
  iconColor: 'red',
  helpText: 'Write your own content',
  buttonProps: {
    label: 'Sample button',
    color: 'white',
    onClick: () => alert('Clicked ContainedErrorTemplate')
  }
}
