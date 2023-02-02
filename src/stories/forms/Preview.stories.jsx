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
  parameters: {
    backgrounds: {
      default: 'white'
    }
  }
}

const SimpleTemplate = (args) => <div style={divStyle}><Preview {...args} /></div>

export const NormalPreview = SimpleTemplate.bind({})

NormalPreview.args = {
  title: 'My title',
  value: 'My value'
}

export const WithLink = SimpleTemplate.bind({})

WithLink.args = {
  title: 'My value is a link',
  value: 'https://example.com',
  isLink: true
}
