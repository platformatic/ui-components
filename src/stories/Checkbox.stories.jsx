'use strict'
import Checkbox from '../components/Checkbox'

export default {
  title: 'Platformatic/Checkbox',
  component: Checkbox,
  argTypes: {
    id: {
      type: 'string',
      control: 'text'
    },
    disabled: {
      type: 'boolean'
    }
  }
}

const Template = (args) => <Checkbox {...args} />

export const CheckboxRegular = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
CheckboxRegular.args = {}

export const CheckboxDisabled = Template.bind({})
CheckboxDisabled.args = {
  disabled: true
}
