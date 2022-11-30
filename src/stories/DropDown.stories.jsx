'use strict'
import DropDown from '../components/DropDown'
import BorderedBox from '../components/BorderedBox'
import HorizontalSeparator from '../components/HorizontalSeparator'
export default {
  title: 'Platformatic/DropDown',
  component: DropDown,
  decorators: [dd => <div className='text-white'>{dd()}</div>]
}

const Template = (args) => (
  <div>
    <DropDown {...args} />
    <HorizontalSeparator />
    <BorderedBox>This is another content</BorderedBox>
  </div>

)
export const DefaultAlignment = Template.bind({})

DefaultAlignment.args = {
  header: 'My Menu',
  items: [
    <span key='1'>Menu 1</span>,
    <span key='2'>Menu 2</span>,
    <span key='3'>This is a very long menu item</span>
  ]
}

export const AlignRight = Template.bind({})

AlignRight.args = {
  header: 'My Menu',
  align: 'right',
  items: [
    <span key='1'>Menu 1</span>,
    <span key='2'>Menu 2</span>,
    <span key='3'>This is a very long menu item</span>
  ]
}

export const AlignLeft = Template.bind({})

AlignLeft.args = {
  header: 'My Menu',
  align: 'left',
  items: [
    <span key='1'>Menu 1</span>,
    <span key='2'>Menu 2</span>,
    <span key='3'>This is a very long menu item</span>
  ]
}
