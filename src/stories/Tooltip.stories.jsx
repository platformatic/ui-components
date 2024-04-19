'use strict'
import React from 'react'
import Tooltip from '../components/Tooltip'
import {
  ANTI_FLASH_WHITE,
  CHANGE_BACKGROUND_COLOR,
  COLORS_BUTTON,
  HOVER_EFFECTS_BUTTONS,
  RICH_BLACK,
  SIZES,
  WHITE
} from '../components/constants'
import Button from '../components/Button'

const divStyle = {
  width: '100%',
  height: 'auto',
  padding: '40px'
}

export default {
  title: 'Platformatic/Tooltip',
  component: Tooltip,
  decorators: [
    (Story) => (
      <div style={divStyle}>
        <Story />
      </div>
    )
  ],
  argTypes: {
    label: {
      type: 'string',
      control: 'text'
    },
    bold: {
      type: 'boolean'
    },
    backgroundColor: {
      type: 'radio',
      options: COLORS_BUTTON
    },
    color: {
      type: 'radio',
      options: COLORS_BUTTON
    },
    disabled: {
      type: 'boolean'
    },
    size: {
      type: 'string',
      control: {
        type: 'radio',
        options: SIZES
      }
    },
    hoverEffect: {
      type: 'radio',
      options: HOVER_EFFECTS_BUTTONS
    },
    bordered: {
      type: 'boolean'
    },
    fullWidth: {
      type: 'boolean'
    },
    selected: {
      type: 'boolean'
    }
  }
}

const TemplateWithButton = (args) => (
  <Tooltip {...args}>
    <Button
      color={RICH_BLACK}
      backgroundColor={WHITE}
      onClick={() => alert('clicked Disabled WHITE')}
      bordered={false}
      hoverEffect={CHANGE_BACKGROUND_COLOR}
      hoverEffectProperties={{ changeBackgroundColor: ANTI_FLASH_WHITE }}
      label='Test button'
    />
  </Tooltip>
)

export const TooltipBase = TemplateWithButton.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TooltipBase.args = {
  content: <span>I'm a tooltip over a button</span>,
  delay: 100,
  offset: 44
}
