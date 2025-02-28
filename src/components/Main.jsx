
import SearchBar from './SearchBar'
import TabbedWindow from './TabbedWindow'
import Playground from './Playground'
import Versions from './Versions'
import React, { useState } from 'react'
export default function Main () {
  const [currentSearch, setCurrentSearch] = useState('')
  const tabs = [
    {
      label: 'Playground',
      component: () => <Playground />
    },
    {
      label: 'Versions',
      component: () => <Versions />
    }

  ]
  return (
    <>
      <h1 className='text-white text-2xl font-bold'>My APIs</h1>
      <SearchBar action={(value) => setCurrentSearch(value)} />
      {currentSearch !== '' && (
        <span className='text-main-green'>You searched for {currentSearch}</span>
      )}
      <TabbedWindow
        tabs={tabs}
      />
    </>
  )
}
