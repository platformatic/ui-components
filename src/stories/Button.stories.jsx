'use strict'
import React from 'react'
import Button from '../components/Button'
import { BOX_SHADOW, COLORS_BUTTON, HOVER_EFFECTS_BUTTONS, LARGE, SIZES, WHITE } from '../components/constants'

const divStyle = {
  width: '100%',
  height: 'auto',
  padding: '2px',
  backgroundColor: 'white'
}

export default {
  title: 'Platformatic/Button',
  component: Button,
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
      type: 'string',
      control: {
        type: 'radio',
        options: COLORS_BUTTON
      }
    },
    color: {
      type: 'string',
      control: {
        type: 'radio',
        options: COLORS_BUTTON
      }
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
    }
  }
}

const Template = (args) => <Button {...args} />

export const OnlyLabel = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
OnlyLabel.args = {
  label: 'Sample label',
  backgroundColor: 'main-green'
}

const AllBorderedTemplate = (args) => {
  return (
    <>
      {COLORS_BUTTON.map(color => (
        <React.Fragment key={color}>
          <div className='grid grid-cols-6 gap-2 items-center' key={color}>
            <span className='text-sm'>{color}</span>
            <Button color={color} onClick={() => alert('clicked ' + color)} {...args} />
            <Button color={color} onClick={() => alert('clicked ' + color)} disabled {...args} />
          </div>
          <br />
        </React.Fragment>
      ))}
    </>
  )
}

export const AllBordered = AllBorderedTemplate.bind({})

AllBordered.args = {
  label: 'Sample label',
  size: LARGE
}

const AllFilledTemplate = (args) => {
  return (
    <>
      {COLORS_BUTTON.map(color => (
        <React.Fragment key={color}>
          <div className='grid grid-cols-6 gap-2 items-center'>
            <span className='text-sm'>{color}</span>
            <Button backgroundColor={color} onClick={() => alert('clicked ' + color)} {...args} />
            <Button backgroundColor={color} onClick={() => alert('clicked ' + color)} disabled {...args} />
          </div>
          <br />
        </React.Fragment>
      ))}
    </>
  )
}

export const AllFilled = AllFilledTemplate.bind({})

AllFilled.args = {
  label: 'Sample label',
  size: LARGE,
  color: WHITE,
  bordered: false,
  hoverEffect: BOX_SHADOW,
  bold: true
}
