'use strict'
import TwoColumnsLayout from '../components/layouts/TwoColumnsLayout'
import BorderedBox from '../components/BorderedBox'
export default {
  title: 'Platformatic/TwoColumnsLayout',
  component: TwoColumnsLayout
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  /* argTypes: {
    gridTemplate: {
      type: 'string',
      control: {
        type: 'radio',
        options: ['Default', 'Columns', 'Rows', 'Responsive' ],
      }
    }
  } */
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <TwoColumnsLayout {...args}><BorderedBox>1st</BorderedBox><BorderedBox>2nd</BorderedBox></TwoColumnsLayout>

export const Default = Template.bind({})

Default.args = { }

export const Columns = Template.bind({})

Columns.args = {
  gridTemplate: 'columns'
}

export const Rows = Template.bind({})

Rows.args = {
  gridTemplate: 'rows'
}

export const Responsive = Template.bind({})

Responsive.args = {
  gridTemplate: 'responsive'
}
