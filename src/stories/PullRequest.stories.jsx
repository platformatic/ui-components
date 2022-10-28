'use strict'
import PullRequest from '../components/PullRequest'
export default {
  title: 'Platformatic/PullRequest',
  component: PullRequest,
  argTypes: {
    color: { control: 'color' }
  }
}

const Template = (args) => <PullRequest {...args}>Hello Platformatic</PullRequest>

export const Standard = Template.bind({})
Standard.args = {
  id: '88',
  title: 'doc: host => hostname, binded to 0.0.0.0 to be more container friendly',
  url: 'http://example.com',
  lastCommit: {
    sha: 'bgb3ffe3',
    author: 'Foobar',
    date: '2022-10-11'
  }
}
