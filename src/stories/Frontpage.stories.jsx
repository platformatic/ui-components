
import React from 'react'
import FrontpageBackground from '../components/FrontpageBackground'
import TwoColumnsLayout from '../components/layouts/TwoColumnsLayout'
import Box from '../components/Box'
import GHLoginButton from '../components/GHLoginButton'
import Logo from '../components/Logo'
import List from '../components/List'
import ListElement from '../components/ListElement'
import HorizontalSeparator from '../components/HorizontalSeparator'
import FollowUs from '../components/FollowUs'

export default {
  title: 'Platformatic/Frontpage'
}

const Template = (args) =>
  <FrontpageBackground>

    <TwoColumnsLayout>
      <Box>
        <Logo width={80} />
        <List title='platformatic'>
          <ListElement title='Instant edge deploy' detail='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et dui facilisis, molestie urna sed, volutpat nibh.' />
          <ListElement title='Collaborate with previews' detail='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et dui facilisis, molestie urna sed, volutpat nibh.' />
          <ListElement title='Turn static to dynamic' detail='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et dui facilisis, molestie urna sed, volutpat nibh.' />
          <ListElement title='Ship directly to the edge' detail='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et dui facilisis, molestie urna sed, volutpat nibh.' />
        </List>
        <HorizontalSeparator />
        <FollowUs />
      </Box>
      <Box>
        <p className='text-5xl text-main-green font-bold mt-24 mb-16'>Join the best backend teams</p>
        <GHLoginButton />
        <p className='text-white my-8 w-80'> by clicking continue, you agree to our <a href="javascript:alert('todo')">Terms of Service</a> and <a href="javascript:alert('todo')">Privacy policy.</a> </p>
        <HorizontalSeparator />
      </Box>
    </TwoColumnsLayout>
  </FrontpageBackground>

export const Frontpage = Template.bind({})
Frontpage.args = {}
