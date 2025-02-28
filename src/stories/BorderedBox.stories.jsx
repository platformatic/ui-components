'use strict'
import React from 'react'
import BorderedBox from '../components/BorderedBox'
import { COLORS_BORDERED_BOX, ERROR_RED, OPACITY_30, OPACITY_100, TERTIARY_BLUE, WHITE } from '../components/constants'
export default {
  title: 'Platformatic/BorderedBox',
  component: BorderedBox,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    color: {
      options: COLORS_BORDERED_BOX,
      type: 'radio'
    }
  }
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <BorderedBox {...args}>Hello Platformatic</BorderedBox>
)

export const Green = Template.bind({})

Green.args = {
  color: 'main-green'
}
export const Red = Template.bind({})

Red.args = {
  color: 'error-red'
}

export const White = Template.bind({})
White.args = {
  color: 'white'
}

export const HandlingOver = Template.bind({})
HandlingOver.args = {
  color: WHITE,
  backgroundColor: ERROR_RED,
  borderColorOpacity: OPACITY_30,
  internalOverHandling: true,
  borderColorOpacityOver: OPACITY_100,
  backgroundColorOver: TERTIARY_BLUE
}
