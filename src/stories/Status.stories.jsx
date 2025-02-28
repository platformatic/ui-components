import Status from '../components/Status'

export default {
  title: 'Platformatic/Status',
  component: Status,
  argTypes: {}
}

const Template = (args) => <Status {...args} />

export const White = Template.bind({})

White.args = {
  color: 'white',
  status: 'available'
}

export const Green = Template.bind({})

Green.args = {
  color: 'main-green',
  status: 'online'
}

export const Red = Template.bind({})

Red.args = {
  color: 'error-red',
  status: 'offline'
}
