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
    <ListElement title='List Element 1' detail='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et dui facilisis, molestie urna sed, volutpat nibh.' titleAspect='boldAndGreen' />
    <ListElement title='List Element 2' detail='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et dui facilisis, molestie urna sed, volutpat nibh.' />
  </List>
)

export const ListWithElements = TemplateWithElements.bind({})
ListWithElements.args = {
  title: 'List Title'
}

export const ListWithElementsNoTitle = TemplateWithElements.bind({})
ListWithElementsNoTitle.args = {}

const TemplateWithElementsVariants = (args) => (
  <List {...args}>
    <ListElement title='List Element 1' titleAspect='boldAndGreen' marginSize='small' />
    <ListElement title='List Element 2' titleAspect='lightAndWhite' marginSize='small' />
  </List>
)

export const ListWithElementsVariants = TemplateWithElementsVariants.bind({})
ListWithElementsVariants.args = {
  title: 'List Title'
}
