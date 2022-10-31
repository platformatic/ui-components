'use strict'
import PullRequest from '../components/PullRequest'
export default {
  title: 'Platformatic/PullRequest',
  component: PullRequest,
  argTypes: {
  }
}

const Template = (args) => <PullRequest {...args} />

export const Available = Template.bind({})
Available.args = {
  id: '88',
  title: 'doc: host => hostname, binded to 0.0.0.0 to be more container friendly',
  url: 'http://example.com',
  lastCommit: {
    sha: 'bgb3ffe3',
    author: 'Foobar',
    date: '2022-10-11'
  },
  status: 'available'
}

export const Running = Template.bind({})
Running.args = {
  id: '88',
  title: 'doc: host => hostname, binded to 0.0.0.0 to be more container friendly',
  url: 'http://example.com',
  lastCommit: {
    sha: 'bgb3ffe3',
    author: 'Foobar',
    date: '2022-10-11'
  },
  status: 'running'
}

export const Unavailable = Template.bind({})
Unavailable.args = {
  id: '88',
  title: 'doc: host => hostname, binded to 0.0.0.0 to be more container friendly',
  url: 'http://example.com',
  lastCommit: {
    sha: 'bgb3ffe3',
    author: 'Foobar',
    date: '2022-10-11'
  },
  status: 'unavailable'
}
