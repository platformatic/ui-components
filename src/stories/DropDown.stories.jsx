'use strict'
import DropDown from '../components/DropDown'
export default {
  title: 'Platformatic/DropDown',
  component: DropDown,
  decorators: [dd => <div className='text-white'>{dd()}</div>]
}

const Template = (args) => <DropDown {...args} />
export const Default = Template.bind({})

Default.args = {
  header: 'My Menu',
  items: [
    <span key='1'>Menu 1</span>,
    <span key='2'>Menu 2</span>,
    <span key='3'>This is a very long menu item</span>
  ]
}
