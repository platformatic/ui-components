'use strict'
import ToggleSwitch from '../../components/forms/ToggleSwitch'
export default {
  title: 'Platformatic/ToggleSwitch',
  component: ToggleSwitch
}

const Template = (args) => <ToggleSwitch {...args} />

export const Default = Template.bind({})

Default.args = {
  name: 'test',
  label: 'This is a label'
}
