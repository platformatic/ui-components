import TextWithLabel from '../components/TextWithLabel'
export default {
  title: 'Platformatic/TextWithLabel',
  component: TextWithLabel,
  argTypes: {
    label: { control: 'text' },
    text: { control: 'text' }
  }
}
const Template = (args) => <TextWithLabel {...args} />

export const Standard = Template.bind({})

Standard.args = {
  label: 'Created By',
  text: 'Platformatic Team'
}

export const WithLink = (args) => (
  <TextWithLabel {...args}>
    <a href='https://example.com'>Standard Link</a>
  </TextWithLabel>
)

WithLink.args = {
  label: 'External Link'
}
