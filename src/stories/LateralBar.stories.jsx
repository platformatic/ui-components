'use strict'
import { useState } from 'react'
import LateralBar from '../components/LateralBar'
import BorderedBox from '../components/BorderedBox'

const divStyle = {
  display: 'flex',
  width: '100%',
  minHeight: '400px',
  gap: '10px'
}

export default {
  title: 'Platformatic/LateralBar',
  component: LateralBar,
  decorators: [
    (Story) => (
      <div style={divStyle}>
        <Story />
        <BorderedBox>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</BorderedBox>
      </div>
    )
  ]
}

const Template = (args) => <LateralBar {...args} />

export const EmptyLateralBar = Template.bind({})

EmptyLateralBar.args = {
  title: 'Lateral bar empty',
  addTitle: 'Create',
  onClickAdd: () => alert('clicked on add EmptyLateralBar')
}

const FullLateralTemplate = (args) => {
  const [items, setItems] = useState(['a very very very very very long title 1', 'Title number 2'])
  function onClickAdd () {
    const tmpItem = items.map(item => item)
    tmpItem.push('Title number ' + (items.length + 1))
    setItems(tmpItem)
  }

  return (
    <LateralBar items={items} onClickAdd={() => onClickAdd()} {...args} />
  )
}

export const FullLateralBar = FullLateralTemplate.bind({})

FullLateralBar.args = {
  title: 'Lateral bar Full',
  addTitle: 'Create',
  onClickItemSelected: (index) => alert('selected: ' + index)
}
