'use strict'
import Input from '../components/Input'
export default {
  title: 'Platformatic/Input',
  component: Input
}

const Template = (args) => <Input {...args} />

export const Default = Template.bind({})

Default.args = {
  name: 'test',
  placeholder: 'Platformatic'
}
