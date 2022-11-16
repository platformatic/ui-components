'use strict'

import SearchBar from './SearchBar'
import TabbedWindow from './TabbedWindow'
import Playground from './Playground'
import Versions from './Versions'
import React, { useState } from 'react'
export default function Main () {
  const [currentSearch, setCurrentSearch] = useState('')
  const apis = [
    {
      id: 1,
      name: 'api-online',
      version: '1.2.3',
      source: 'Platformatic DB',
      lastDeploy: '2022-10-10',
      graphql: true,
      openapi: true,
      online: true,
      url: 'https://example.com',
      repository: 'platformatic/example'
    },
    {
      id: 2,
      name: 'api-offline',
      version: '1.2.3',
      source: 'Platformatic DB',
      lastDeploy: '2022-10-10',
      graphql: true,
      openapi: true,
      online: false
    }
  ]
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
