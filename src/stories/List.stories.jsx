import React from 'react'
import List from '../components/List'
import ListElement from '../components/ListElement'

export default {
  title: 'Platformatic/List',
  component: List
}

const Template = (args) => <List {...args} />
export const ListWithNoElements = Template.bind({})
ListWithNoElements.args = {
  title: 'List Title'
}

const TemplateWithElements = (args) => (
  <List {...args}>
    <ListElement title='List Element 1' detail='List Element 1 Detail' />
    <ListElement title='List Element 2' detail='List Element 2 Detail' />
  </List>
)

export const ListWithElements = TemplateWithElements.bind({})
ListWithElements.args = {
  title: 'List Title'
}

export const ListWithElementsNoTitle = TemplateWithElements.bind({})
ListWithElementsNoTitle.args = {}
