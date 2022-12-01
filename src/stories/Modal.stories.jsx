import React, { useState } from 'react'
import Modal from '../components/Modal'
import Button from '../components/Button'
import BorderedBox from '../components/BorderedBox'
import DropDown from '../components/DropDown'
import HorizontalSeparator from '../components/HorizontalSeparator'
export default {
  title: 'Platformatic/Modal',
  component: Modal
}

const Template = (args) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <main>
      <BorderedBox>This Is another Content</BorderedBox>
      <ContentThatLoads />
      <Button color='green' primary='true' onClick={() => setIsOpen(true)} label='Open Modal' />
      {isOpen && <Modal setIsOpen={setIsOpen} title='Modal Title'>Hello world!</Modal>}
    </main>
  )
}

const ContentThatLoads = () => {
  const [content, setContent] = useState(null)
  setTimeout(() => {
    setContent(<div className='mt-4'><BorderedBox>This is a Future Component</BorderedBox></div>)
  }, 1000)

  return content
}

export const Default = Template.bind({})
Default.args = {
  title: 'List Title'
}

const MenuTemplate = () => {
  const [isOpen, setIsOpen] = useState(false)
  const dropDownArgs = {
    header: 'My Menu',
    items: [
      <span className='hover:cursor-pointer' key='2' onClick={() => setIsOpen(true)}>Show Modal</span>
    ]
  }
  return (
    <div>
      <div className='text-white'><DropDown {...dropDownArgs} /></div>
      <HorizontalSeparator />
      {isOpen && <Modal setIsOpen={setIsOpen} title='Modal Title'>Hello world!</Modal>}
      <ContentThatLoads />
    </div>
  )
}
export const WithDropDown = MenuTemplate.bind({})
