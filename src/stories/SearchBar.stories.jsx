'use strict'
import SearchBar from '../components/SearchBar'
export default {
  title: 'Platformatic/SearchBar',
  component: SearchBar,
  argTypes: {
    color: { control: 'color' }
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
