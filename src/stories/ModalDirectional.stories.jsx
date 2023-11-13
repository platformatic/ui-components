import React, { useState } from 'react'
import ModalDirectional from '../components/ModalDirectional'
import Button from '../components/Button'
import { MAIN_DARK_BLUE, MAIN_GREEN } from '../components/constants'
export default {
  title: 'Platformatic/ModalDirectional',
  component: ModalDirectional,
  argTypes: {
    title: {
      type: 'string'
    },
    titleClassName: {
      type: 'string'
    }
  }
}

const divStyle = {
  width: '100%',
  height: '100vH',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative'
}

const Template = (args) => {
  const [isOpen, setIsOpen] = useState(false)
  const { text, ...rest } = args
  return (
    <div style={divStyle}>
      <div>
        <Button type='button' color={MAIN_GREEN} backgroundColor={MAIN_DARK_BLUE} onClick={() => setIsOpen(true)} label='Open Modal' />
      </div>
      {isOpen && <ModalDirectional setIsOpen={setIsOpen} {...rest}>{text}</ModalDirectional>}
    </div>
  )
}

export const Lefty = Template.bind({})
Lefty.args = {
  title: 'Close me'
}
