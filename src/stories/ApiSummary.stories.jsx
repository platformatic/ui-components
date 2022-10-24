'use strict'
import ApiSummary from '../components/ApiSummary'
export default {
  title: 'Platformatic/ApiSummary',
  component: ApiSummary,
  argTypes: {
    text: { control: 'string' }
  }
}

const Template = (args) => <ApiSummary {...args} />

export const Online = Template.bind({})

Online.args = {
  id: 1,
  name: 'api-online',
  version: '1.2.3',
  source: 'Platformatic DB',
  lastDeploy: '2022-10-10',
  graphql: true,
  openapi: true,
  online: true,
  url: 'https://example.com',
  repository: 'platformatic/example',
  db: 'SQLite'
}

export const Offline = Template.bind({})

Offline.args = {
  id: 1,
  name: 'api-offline',
  version: '1.2.3',
  source: 'Platformatic DB',
  lastDeploy: '2022-10-10',
  graphql: true,
  openapi: true,
  online: false,
  url: 'https://example.com',
  repository: 'platformatic/example',
  db: 'PostgreSQL'
}
