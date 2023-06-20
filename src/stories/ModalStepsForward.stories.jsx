import React, { useState } from 'react'
import ModalStepsForward from '../components/ModalStepsForward'
import Button from '../components/Button'
import { MAIN_DARK_BLUE, MAIN_GREEN, MODAL_LAYOUTS, MODAL_SIZES } from '../components/constants'
export default {
  title: 'Platformatic/ModalStepsForward',
  component: ModalStepsForward,
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
      <Button color={MAIN_GREEN} backgroundColor={MAIN_DARK_BLUE} onClick={() => setIsOpen(true)} label='Open Modal' bold />
      {isOpen && <ModalStepsForward setIsOpen={setIsOpen} {...rest}>{text}</ModalStepsForward>}
    </main>
  )
}

export const Default = Template.bind({})
Default.args = {
  title: 'List Title',
  text: 'Hello World'
}
