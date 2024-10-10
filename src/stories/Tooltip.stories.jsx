'use strict'
import React from 'react'
import Tooltip from '../components/Tooltip'
import {
  ANTI_FLASH_WHITE,
  CHANGE_BACKGROUND_COLOR,
  DIRECTIONS,
  POSITIONS,
  RICH_BLACK,
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
    immediateActive: {
      type: 'boolean'
    },
    direction: {
      type: 'radio',
      options: DIRECTIONS
    },
    visible: {
      type: 'boolean'
    },
    activeDependsOnVisible: {
      type: 'boolean'
    },
    content: {
      type: 'node'
    },
    delay: {
      type: 'number'
    },
    children: {
      type: 'node'
    },
    tooltipClassName: {
      type: 'string',
      control: 'text'
    },
    offset: {
      type: 'number'
    },
    position: {
      type: 'radio',
      options: POSITIONS
    }
  }
}

const TemplateWithButton = (args) => (
  <div style={{ width: '100%', textAlign: 'center' }}>
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
  </div>
)

export const TooltipBase = TemplateWithButton.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TooltipBase.args = {
  content: <span>I'm a tooltip over a button</span>,
  delay: 0,
  offset: 14,
  immediateActive: false
}
