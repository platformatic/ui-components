'use strict'
import DropDown from '../components/DropDown'
import BorderedBox from '../components/BorderedBox'
import HorizontalSeparator from '../components/HorizontalSeparator'
import { useState } from 'react'
export default {
  title: 'Platformatic/DropDown',
  component: DropDown,
  decorators: [dd => <div className='text-white'>{dd()}</div>]
}

const Template = (args) => (
  <div>
    <DropDown {...args} />
    <HorizontalSeparator />
    <ContentThatLoads />
  </div>
)

const ContentThatLoads = () => {
  const [content, setContent] = useState(null)
  setTimeout(() => {
    setContent(<div className='mt-4'><BorderedBox>This is rendered after</BorderedBox></div>)
  }, 1000)

  return content
}

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
