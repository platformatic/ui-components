import React from 'react'
import FrontpageBackground from '../components/FrontpageBackground'

export default {
  title: 'Platformatic/FrontpageBackground',
  component: FrontpageBackground
}

const Template = (args) =>
  <FrontpageBackground>
    <div className='grid h-screen place-items-center'>
      <p className='text-main-green text-4xl'>Frontpage Background</p>
    </div>
  </FrontpageBackground>

export const FrontpageBackgroundDefault = Template.bind({})
FrontpageBackgroundDefault.args = {}
