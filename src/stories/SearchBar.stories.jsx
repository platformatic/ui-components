'use strict'
import SearchBar from '../components/SearchBar'
export default {
  title: 'Platformatic/SearchBar',
  component: SearchBar,
  argTypes: {
    onChange: { control: 'function' },
    onSubmit: { control: 'function' },
    title: { control: 'text' }
  }
}
const Template = (args) => {
  return (
    <>
      <SearchBar {...args}>Hello Platformatic</SearchBar>
    </>

  )
}
export const Standard = Template.bind({})
Standard.args = {
  onChange: (value) => {
    console.log('Current search: ' + value)
  },
  onSubmit: (value) => {
    alert('Query value: ' + value)
  }
}
