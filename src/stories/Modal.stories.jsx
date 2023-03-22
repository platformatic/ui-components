import React, { useState } from 'react'
import Modal from '../components/Modal'
import Button from '../components/Button'
import BorderedBox from '../components/BorderedBox'
import DropDown from '../components/DropDown'
import HorizontalSeparator from '../components/HorizontalSeparator'
import { FULL_WIDTH, MODAL_COVERING, MODAL_LAYOUTS, MODAL_SIZES } from '../components/constants'
export default {
  title: 'Platformatic/Modal',
  component: Modal,
  argTypes: {
    layout: {
      type: 'string',
      control: {
        type: 'radio',
        options: MODAL_LAYOUTS
      }
    },
    size: {
      type: 'string',
      control: {
        type: 'radio',
        options: MODAL_SIZES
      }
    }
  }
}

const Template = (args) => {
  const [isOpen, setIsOpen] = useState(false)
  const { text, ...rest } = args
  return (
    <main>
      <BorderedBox>This Is another Content</BorderedBox>
      <ContentThatLoads />
      <Button color='main-green' buttonClass='primary' onClick={() => setIsOpen(true)} label='Open Modal' />
      {isOpen && <Modal setIsOpen={setIsOpen} {...rest}>{text}</Modal>}
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
  title: 'List Title',
  text: 'Hello World'
}

export const WithLongText = Template.bind({})

WithLongText.args = {
  title: 'Modal',
  text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum, lorem nec tincidunt pellentesque, odio orci posuere lacus, et hendrerit turpis dolor nec metus. Nunc quis finibus enim. Vestibulum a mollis velit. Ut nec vestibulum urna. Phasellus ut odio nec leo hendrerit laoreet eget at turpis. Nulla facilisi. Vivamus accumsan arcu malesuada, imperdiet ligula vitae, varius elit. Morbi blandit eros nec eros rutrum mattis. Nulla nibh nisi, pellentesque a ornare at, ultrices sit amet felis. Nulla bibendum metus diam, vitae gravida dui semper iaculis.
  
  `.repeat(5)
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

export const FullscreenLayout = Template.bind({})
FullscreenLayout.args = {
  title: 'Give me an invite',
  size: FULL_WIDTH,
  layout: MODAL_COVERING
}
