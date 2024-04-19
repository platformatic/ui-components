'use strict'
import Preview from '../../components/forms/Preview'

const divStyle = {
  width: '100%',
  height: 'auto',
  padding: '10px',
  backgroundColor: 'white'
}

export default {
  title: 'Platformatic/Forms/Preview',
  component: Preview,
  decorators: [
    (Story) => (
      <div style={divStyle}>
        <Story />
      </div>
    )
  ]
}

const Template = (args) => <Preview {...args} />

export const NormalPreview = Template.bind({})

NormalPreview.args = {
  title: 'My title',
  value: 'My value'
}

export const WithLink = Template.bind({})

WithLink.args = {
  title: 'My value is a link',
  value: 'https://example.com',
  isLink: true
}

const TemplateWithChildren = (args) => (
  <Preview {...args}>
    <p>1st paragraph</p>
    <p>2nd paragraph</p>
  </Preview>
)

export const WithChildren = TemplateWithChildren.bind({})

WithChildren.args = {
  title: 'My title',
  value: 'My value'
}

export const WithPlatformaticIcon = Template.bind({})

WithPlatformaticIcon.args = {
  title: 'My title',
  value: 'My value',
  usePlatformaticIcon: true,
  platformaticIcon: {
    iconName: 'WorkspaceStaticIcon',
    color: 'main-green',
    onClick: () => alert('icon clicked')
  }
}

export const WithCopyAndPasteIcon = Template.bind({})

WithCopyAndPasteIcon.args = {
  title: 'My title',
  value: 'My value',
  useCopyAndPaste: true,
  copyAndPaste: {
    color: 'main-dark-blue',
    value: 'My value',
    tooltipLabel: 'Great! My Value copied!!'
  }
}
