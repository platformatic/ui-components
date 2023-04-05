'use strict'
import TabbedWindow from '../components/TabbedWindow'
import TextWithLabel from '../components/TextWithLabel'
export default {
  title: 'Platformatic/TabbedWindow',
  component: TabbedWindow
}
const Template = (args) => {
  return (
    <>
      <TabbedWindow {...args} />
    </>

  )
}
export const Default = Template.bind({})
Default.args = {
  tabs: [{
    label: 'First',
    component: () => <TextWithLabel label='First component' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' />
  }, {
    label: 'Second',
    component: () => <TextWithLabel label='Second component' text='Sed et dui facilisis, molestie urna sed, volutpat nibh' />
  }, {
    label: 'Third',
    component: () => <TextWithLabel label='Third component' text='ivamus est nisl, maximus aliquet urna eu, consequat semper nisi' />
  }]
}