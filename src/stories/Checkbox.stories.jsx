'use strict'
import Checkbox from '../components/Checkbox'
import { WHITE } from '../components/constants'
const divStyle = {
  width: '100%',
  height: 'auto',
  padding: '50px'
}

export default {
  title: 'Platformatic/Checkbox',
  component: Checkbox,
  decorators: [
    (Story) => (
      <div style={divStyle}>
        <Story />
      </div>
    )
  ],
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

export const CheckboxWhite = Template.bind({})
CheckboxWhite.args = {
  color: WHITE
}
