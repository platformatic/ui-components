'use strict'
import DropDown from '../components/DropDown'
import BorderedBox from '../components/BorderedBox'
import Button from '../components/Button'
import HorizontalSeparator from '../components/HorizontalSeparator'
import { useState } from 'react'
import { BOX_SHADOW, LIGHT_BLUE, MAIN_DARK_BLUE, RICH_BLACK, WHITE } from '../components/constants'
export default {
  title: 'Platformatic/DropDown',
  component: DropDown,
  decorators: [dd => <div className='text-white'>{dd()}</div>]
}

const Template = (args) => (
  <div>
    <DropDown {...args} />
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

export const DefaultAlignment = Template.bind({})

DefaultAlignment.args = {
  header: 'My Menu',
  items: [
    <span className='text-white' key='1'>Menu 1</span>,
    <span className='text-white' key='2'>Menu 2</span>,
    <span className='text-white' key='3'>This is a very long menu item</span>
  ]
}

export const AlignRight = Template.bind({})

AlignRight.args = {
  header: 'My Menu',
  align: 'right',
  items: [
    <span key='1'>Menu 1</span>,
    <span key='2'>Menu 2</span>,
    <span key='3'>This is a very long menu item</span>
  ],
  backgroundColor: LIGHT_BLUE
}

export const withButton = Template.bind({})

withButton.args = {
  header: 'My Menu',
  backgroundColor: LIGHT_BLUE,
  items: [
    <span key='1'>Menu 1</span>,
    <span key='2'>Menu 2</span>,
    <span key='3'>This is a very long menu item</span>
  ],
  lastButton: <Button
    backgroundColor={MAIN_DARK_BLUE}
    color={WHITE}
    label='Test'
    platformaticIcon={{ iconName: 'WorkspaceStaticIcon', color: WHITE }}
    fullWidth
    bold
    bordered={false}
    hoverEffect={BOX_SHADOW}
              />,
  borderColor: MAIN_DARK_BLUE

}

export const BlackVersion = Template.bind({})

BlackVersion.args = {
  header: 'My Menu',
  backgroundColor: RICH_BLACK,
  borderColor: WHITE,
  items: [
    <span className='text-white' key='1'>Menu 1</span>,
    <span className='text-white' key='2'>Menu 2</span>,
    <span className='text-white' key='3'>Menu3</span>
  ]
}
