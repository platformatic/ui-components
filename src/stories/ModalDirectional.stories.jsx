import React, { useState } from 'react'
import ModalDirectional from '../components/ModalDirectional'
import Button from '../components/Button'
import BorderedBox from '../components/BorderedBox'
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

const Template = (args) => {
  const [isOpen, setIsOpen] = useState(false)
  const { text, ...rest } = args
  return (
    <main>
      <BorderedBox>This Is another Content</BorderedBox>
      <Button color={MAIN_GREEN} backgroundColor={MAIN_DARK_BLUE} onClick={() => setIsOpen(true)} label='Open Modal' />
      {isOpen && <ModalDirectional setIsOpen={setIsOpen} {...rest}>{text}</ModalDirectional>}
    </main>
  )
}

export const Lefty = Template.bind({})
Lefty.args = {
  title: 'Close me'
}
