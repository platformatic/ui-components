'use strict'
import SearchBarV2 from '../components/SearchBarV2'
export default {
  title: 'Platformatic/SearchBarV2',
  component: SearchBarV2
}
const Template = (args) => {
  return (
    <>
      <SearchBarV2 {...args} />
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
