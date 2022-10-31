import React from 'react'
import ListElement from '../components/ListElement'

export default {
  title: 'Platformatic/ListElement',
  component: ListElement
}

const Template = (args) => <ListElement {...args} />

export const ListElementFull = Template.bind({})
ListElementFull.args = {
  title: 'List Element Title',
  detail: 'Lorem Ipsum dolor sit amet consectetur adipiscing elit. Qui enim potest, nisi quis potest, negare'
}
