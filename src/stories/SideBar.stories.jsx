'use strict'
import { useState } from 'react'
import SideBar from '../components/SideBar'
import BorderedBox from '../components/BorderedBox'

const divStyle = {
  display: 'flex',
  width: '100%',
  minHeight: '400px',
  gap: '10px'
}

export default {
  title: 'Platformatic/SideBar',
  component: SideBar,
  decorators: [
    (Story) => (
      <div style={divStyle}>
        <Story />
        <BorderedBox>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</BorderedBox>
      </div>
    )
  ]
}

const Template = (args) => <SideBar {...args} />

export const EmptySideBar = Template.bind({})

EmptySideBar.args = {
  title: 'SideBar bar empty',
  addTitle: 'Create',
  onClickAdd: () => alert('clicked on add EmptySideBar'),
  onClickSettings: () => alert('settings')
}

const FullSideBarTemplate = (args) => {
  const [items, setItems] = useState(['a very very very very very long title 1', 'Title number 2'])
  function onClickAdd () {
    const tmpItem = items.map(item => item)
    tmpItem.push('Title number ' + (items.length + 1))
    setItems(tmpItem)
  }

  return (
    <SideBar items={items} onClickAdd={() => onClickAdd()} {...args} />
  )
}

export const FullSideBar = FullSideBarTemplate.bind({})

FullSideBar.args = {
  title: 'SideBar bar Full',
  addTitle: 'Create',
  onClickItemSelected: (index) => alert('selected: ' + index),
  onClickSettings: () => alert('settings')
}
