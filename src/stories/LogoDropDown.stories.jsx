'use strict'
import LogoDropDown from '../components/LogoDropDown'
import BorderedBox from '../components/BorderedBox'
import HorizontalSeparator from '../components/HorizontalSeparator'
import { useState } from 'react'
export default {
  title: 'Platformatic/LogoDropDown',
  component: LogoDropDown,
  decorators: [dd => <div className='text-white'>{dd()}</div>]
}

const Template = (args) => (
  <div>
    <LogoDropDown {...args} />
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

export const Default = Template.bind({})

Default.args = {
  header: 'My Menu',
  itemSelected: 'Organization-name-1',
  items: [
    <span key='1' id='111111'>Organization-name-1</span>,
    <span key='2' id='222222'>Organization-name-2</span>,
    <span key='3' id='333333'>Organization-name-name-name-name-name-3</span>
  ]
}
