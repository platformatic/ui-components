import React, { useState } from 'react'
import Modal from '../components/Modal'
import Button from '../components/Button'
export default {
  title: 'Platformatic/Modal',
  component: Modal
}

const Template = (args) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <main>
      <Button color='green' primary='true' onClick={() => setIsOpen(true)} label='Open Modal' />
      {isOpen && <Modal setIsOpen={setIsOpen} title='Modal Title'>Hello world!</Modal>}
    </main>
  )
}

export const Default = Template.bind({})
Default.args = {
  title: 'List Title'
}
