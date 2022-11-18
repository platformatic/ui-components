'use strict'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear, faPowerOff } from '@fortawesome/free-solid-svg-icons'
import DropDown from '../components/DropDown'
export default {
  title: 'Platformatic/DropDown',
  component: DropDown,
  decorators: [dd => <div className='text-white'>{dd()}</div>]
}

const Template = (args) => <DropDown {...args} />
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
