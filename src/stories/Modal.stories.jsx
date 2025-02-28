import React, { useState } from 'react'
import Modal from '../components/Modal'
import Button from '../components/Button'
import BorderedBox from '../components/BorderedBox'
import DropDown from '../components/DropDown'
import HorizontalSeparator from '../components/HorizontalSeparator'
import {
  FULL_WIDTH,
  MAIN_DARK_BLUE,
  MAIN_GREEN,
  MODAL_COVER,
  MODAL_FULL_DARK,
  MODAL_FULL_LIGHT,
  MODAL_LAYOUTS,
  MODAL_POPUP_V2,
  MODAL_SIZES
} from '../components/constants'
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
  const [isOpenInside, setIsOpenInside] = useState(false)
  const { text, ...rest } = args
  return (
    <main style={{ height: '100vh', overflow: 'scroll' }} className='flex flex-col gap-y-4'>
      <div className='flex flex-col gap-y-4'>
        <BorderedBox>This Is another Content</BorderedBox>
        <Button
          color={MAIN_GREEN}
          backgroundColor={MAIN_DARK_BLUE}
          onClick={() => setIsOpen(true)}
          label='Open Modal'
        />
        {isOpen && (
          <Modal setIsOpen={setIsOpen} {...rest}>
            {text}
          </Modal>
        )}
      </div>

      <div>
        <BorderedBox style={{ position: 'relative' }}>
          <p>This Is another Component with Modal inside</p>

          <Button
            color={MAIN_GREEN}
            backgroundColor={MAIN_DARK_BLUE}
            onClick={() => setIsOpenInside(true)}
            label='Open Modal Inside'
          />
          {isOpenInside && (
            <Modal setIsOpen={setIsOpenInside} {...rest}>
              {text}
            </Modal>
          )}
        </BorderedBox>
      </div>

    </main>
  )
}

const ContentThatLoads = () => {
  const [content, setContent] = useState(null)
  setTimeout(() => {
    setContent(
      <div className='mt-4'>
        <BorderedBox>This is a Future Component</BorderedBox>
      </div>
    )
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
      <span
        className='hover:cursor-pointer'
        key='2'
        onClick={() => setIsOpen(true)}
      >
        Show Modal
      </span>
    ]
  }
  return (
    <div>
      <div className='text-white'>
        <DropDown {...dropDownArgs} />
      </div>
      <HorizontalSeparator />
      {isOpen && (
        <Modal setIsOpen={setIsOpen} title='Modal Title'>
          Hello world!
        </Modal>
      )}
      <ContentThatLoads />
    </div>
  )
}
export const WithDropDown = MenuTemplate.bind({})

export const FullscreenLayoutLightBlue = Template.bind({})
FullscreenLayoutLightBlue.args = {
  title: 'Give me an invite',
  size: FULL_WIDTH,
  layout: MODAL_COVER
}

export const FullscreenLayoutDark = Template.bind({})
FullscreenLayoutDark.args = {
  size: FULL_WIDTH,
  layout: MODAL_FULL_DARK
}

export const FullscreenLayoutLight = Template.bind({})
FullscreenLayoutLight.args = {
  size: FULL_WIDTH,
  layout: MODAL_FULL_LIGHT
}

const NestedModalsTemplate = () => {
  const [isOpen1, setIsOpen1] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)
  const [isOpen3, setIsOpen3] = useState(false)

  return (
    <main style={{ height: '1440px', overflow: 'scroll' }}>
      <Button
        color={MAIN_GREEN}
        backgroundColor={MAIN_DARK_BLUE}
        onClick={() => setIsOpen1(true)}
        label='Open 1st Modal'
      />
      {isOpen1 && (
        <Modal setIsOpen={setIsOpen1} title='Fist One' layout={MODAL_POPUP_V2}>
          <p style={{ color: 'white' }}>This Is the first</p>
          <Button
            color={MAIN_GREEN}
            backgroundColor={MAIN_DARK_BLUE}
            onClick={() => setIsOpen2(true)}
            label='Open 2nd Modal'
          />
          {isOpen2 && (
            <Modal
              setIsOpen={setIsOpen2}
              title='Second One'
              layout={MODAL_POPUP_V2}
            >
              <p style={{ color: 'white' }}>This Is the second</p>
              <Button
                color={MAIN_GREEN}
                backgroundColor={MAIN_DARK_BLUE}
                onClick={() => setIsOpen3(true)}
                label='Open 3rd Modal'
              />
              {isOpen3 && (
                <Modal
                  setIsOpen={setIsOpen3}
                  title='Third One'
                  layout={MODAL_POPUP_V2}
                >
                  <p style={{ color: 'white' }}>This Is the third</p>
                </Modal>
              )}
            </Modal>
          )}
        </Modal>
      )}
    </main>
  )
}

export const NestedModals = NestedModalsTemplate.bind({})
NestedModals.args = {}

export const Permanent = Template.bind({})
Permanent.args = {
  title: 'Permanent modal',
  text: 'Close clicking on Cancel or X or Esc',
  permanent: true
}
