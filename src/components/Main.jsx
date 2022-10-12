'use strict'

import SearchBar from './SearchBar'
import Api from './Api'
import ApiDetails from './ApiDetail'
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
      online: true
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
  return (
    <div className='container mx-auto px-4 my-5 flex flex-col gap-10'>
      <h1 className='text-white text-2xl font-bold'>My APIs</h1>
      <SearchBar action={() => alert('asd')} />
      <div className='flex flex-col'>
        <ApiDetails />
      </div>
      {apis.map((api) => { return (<Api key={api.id} data={api} />) })}

    </div>
  )
}
