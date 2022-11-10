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
    <span>Menu 1</span>,
    <span>Menu 2</span>,
    <span>This is a very long menu item</span>
  ]
}
