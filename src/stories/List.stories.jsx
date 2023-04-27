import React from 'react'
import { MAIN_DARK_BLUE, WHITE } from '../components/constants'
import List from '../components/List'
import ListElement from '../components/ListElement'

const divStyle = {
  width: '100%',
  height: 'auto',
  padding: '2px',
  backgroundColor: WHITE
}

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
    <ListElement title='List Element 1' detail='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et dui facilisis, molestie urna sed, volutpat nibh.' />
    <ListElement title='List Element 2' detail='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et dui facilisis, molestie urna sed, volutpat nibh.' detailColor={MAIN_DARK_BLUE} titleColor={MAIN_DARK_BLUE} semiBold={false} />
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
    <ListElement title='List Element 1' marginSize='small' />
    <ListElement title='List Element 2' marginSize='small' />
  </List>
)

export const ListWithElementsVariants = TemplateWithElementsVariants.bind({})
ListWithElementsVariants.args = {
  title: 'List Title'
}

const TemplateWithElementsOnWhiteDiv = (args) => (
  <div style={divStyle}>
    <List {...args}>
      <ListElement title='List Element 1' marginSize='small' detailColor={MAIN_DARK_BLUE} titleColor={MAIN_DARK_BLUE} semiBold={false} />
      <ListElement title='List Element 2' marginSize='small' detailColor={MAIN_DARK_BLUE} titleColor={MAIN_DARK_BLUE} semiBold={false} />
    </List>
  </div>
)

export const ListWithElementsOnWhiteDiv = TemplateWithElementsOnWhiteDiv.bind({})
ListWithElementsOnWhiteDiv.args = {
  title: 'List Title on White div'
}
