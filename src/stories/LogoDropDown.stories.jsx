'use strict'
import React, { useState } from 'react'
import LogoDropDown from '../components/LogoDropDown'
export default {
  title: 'Platformatic/LogoDropDown',
  component: LogoDropDown,
  decorators: [dd => <div className='text-white'>{dd()}</div>]
}

const Template = ({ items }) => {
  const [selected, setSelected] = useState('1')

  function getItems () {
    return items.map(item => ({ handleClick: () => setSelected(item.id), ...item }))
  }
  return (
    <div>
      <LogoDropDown items={getItems()} itemSelected={selected} />
    </div>

  )
}

export const Default = Template.bind({})

Default.args = {
  items: [{
    id: '1',
    name: 'Organization-name-1'
  }, {
    id: '2',
    name: 'Organization-name-name-name-name-name-name-2'
  }, {
    id: '3',
    name: 'Organization-name-3'
  }, {
    id: '4',
    name: 'Short-name'
  }, {
    id: '5',
    name: 'abc'
  }]
}
