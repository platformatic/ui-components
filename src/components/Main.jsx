'use strict'

import SearchBar from './SearchBar'
import Api from './Api'
import ApiDetails from './ApiDetail'
import TabbedWindow from './TabbedWindow'
import Prs from './Pr'
import Playground from './Playground'
export default function Main () {
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
      label: 'Overview',
      component: () => <ApiDetails data={apis[0]} />
    },
    {
      label: 'PRs',
      component: () => <Prs />
    },
    {
      label: 'Playground',
      component: () => <Playground />
    },
    {
      label: 'Versions',
      component: () => <h1>Versions</h1>
    }

  ]
  return (
    <div className='container mx-auto px-4 my-5 flex flex-col gap-10'>
      <h1 className='text-white text-2xl font-bold'>My APIs</h1>
      <SearchBar action={() => alert('asd')} />
      <TabbedWindow
        tabs={tabs}
      />
      {apis.map((api) => { return (<Api key={api.id} data={api} />) })}

    </div>
  )
}
