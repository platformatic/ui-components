import React, { useState } from 'react'
import Button from '../components/Button'
import {
  ALTERNATE_RICH_BLACK,
  ANTI_FLASH_WHITE,
  BOX_SHADOW,
  CHANGE_BACKGROUND_COLOR,
  COLORS_BUTTON,
  ERROR_RED,
  FIRE_ENGINE_RED,
  HOVER_EFFECTS_BUTTONS,
  LARGE,
  RICH_BLACK,
  SIZES,
  WHITE,
  ACTIVE_AND_INACTIVE_STATUS,
  MEDIUM
} from '../components/constants'

const divStyle = {
  width: '100%',
  height: 'auto',
  padding: '2px'
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
      {COLORS_BUTTON.map((color) => (
        <React.Fragment key={color}>
          <div className='grid grid-cols-6 gap-2 items-center' key={color}>
            <span className='text-sm'>{color}</span>
            <Button
              color={color}
              onClick={() => alert('clicked ' + color)}
              {...args}
            />
            <Button
              color={color}
              onClick={() => alert('clicked ' + color)}
              disabled
              {...args}
            />
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
      {COLORS_BUTTON.map((color) => (
        <React.Fragment key={color}>
          <div className='grid grid-cols-6 gap-2 items-center'>
            <span className='text-sm'>{color}</span>
            <Button
              backgroundColor={color}
              onClick={() => alert('clicked ' + color)}
              {...args}
            />
            <Button
              backgroundColor={color}
              onClick={() => alert('clicked ' + color)}
              disabled
              {...args}
            />
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

const DesignSystem = (args) => {
  return (
    <div className='grid grid-cols-5 gap-2 items-center'>
      <span className='text-sm text-white col-span-1'>
        Disabled with Background Color
      </span>
      <div className='grid grid-cols-2 gap-x-2 bg-rich-black p-2 col-span-2'>
        <Button
          color={RICH_BLACK}
          backgroundColor={WHITE}
          onClick={() => alert('clicked Disabled WHITE')}
          bordered={false}
          disabled
          hoverEffect={CHANGE_BACKGROUND_COLOR}
          hoverEffectProperties={{ changeBackgroundColor: ANTI_FLASH_WHITE }}
          {...args}
        />
        <Button
          color={WHITE}
          backgroundColor={ERROR_RED}
          onClick={() => alert('clicked Disabled ERROR_RED')}
          bordered={false}
          disabled
          hoverEffect={CHANGE_BACKGROUND_COLOR}
          hoverEffectProperties={{ changeBackgroundColor: FIRE_ENGINE_RED }}
          {...args}
        />
      </div>
      <div className='grid grid-cols-2 gap-x-2 bg-white p-2 col-span-2'>
        <Button
          color={WHITE}
          backgroundColor={RICH_BLACK}
          onClick={() => alert('clicked Disabled RICH_BLACK')}
          bordered={false}
          disabled
          hoverEffect={CHANGE_BACKGROUND_COLOR}
          hoverEffectProperties={{
            changeBackgroundColor: ALTERNATE_RICH_BLACK
          }}
          {...args}
        />
        <Button
          color={WHITE}
          backgroundColor={ERROR_RED}
          onClick={() => alert('clicked Disabled ERROR_RED')}
          bordered={false}
          disabled
          hoverEffect={CHANGE_BACKGROUND_COLOR}
          hoverEffectProperties={{ changeBackgroundColor: FIRE_ENGINE_RED }}
          {...args}
        />
      </div>
      <span className='text-sm text-white col-span-1'>
        Default with Background Color
      </span>
      <div className='grid grid-cols-2 gap-x-2 bg-rich-black p-2 col-span-2'>
        <Button
          color={RICH_BLACK}
          backgroundColor={WHITE}
          onClick={() => alert('clicked Default WHITE')}
          hoverEffect={CHANGE_BACKGROUND_COLOR}
          hoverEffectProperties={{ changeBackgroundColor: ANTI_FLASH_WHITE }}
          bordered={false}
          {...args}
        />
        <Button
          color={WHITE}
          backgroundColor={ERROR_RED}
          onClick={() => alert('clicked Default ERROR_RED')}
          hoverEffect={CHANGE_BACKGROUND_COLOR}
          hoverEffectProperties={{ changeBackgroundColor: FIRE_ENGINE_RED }}
          bordered={false}
          {...args}
        />
      </div>
      <div className='grid grid-cols-2 gap-x-2 bg-white p-2 col-span-2'>
        <Button
          color={WHITE}
          backgroundColor={RICH_BLACK}
          onClick={() => alert('clicked Default RICH_BLACK')}
          bordered={false}
          hoverEffect={CHANGE_BACKGROUND_COLOR}
          hoverEffectProperties={{
            changeBackgroundColor: ALTERNATE_RICH_BLACK
          }}
          {...args}
        />
        <Button
          color={WHITE}
          backgroundColor={ERROR_RED}
          onClick={() => alert('clicked Default ERROR_RED')}
          hoverEffect={CHANGE_BACKGROUND_COLOR}
          hoverEffectProperties={{ changeBackgroundColor: FIRE_ENGINE_RED }}
          bordered={false}
          {...args}
        />
      </div>
      <span className='text-sm text-white col-span-1'>
        Disabled with Background Color 2
      </span>
      <div className='grid grid-cols-2 gap-x-2 bg-rich-black p-2 col-span-2'>
        <Button
          color={RICH_BLACK}
          backgroundColor={WHITE}
          onClick={() => alert('clicked Disabled WHITE')}
          bordered={false}
          disabled
          hoverEffect={CHANGE_BACKGROUND_COLOR}
          hoverEffectProperties={{ changeBackgroundColor: ANTI_FLASH_WHITE }}
          platformaticIcon={{
            iconName: 'GearIcon',
            size: MEDIUM,
            color: RICH_BLACK
          }}
          platformaticIconAfter={{
            iconName: 'GearIcon',
            size: MEDIUM,
            color: RICH_BLACK
          }}
          {...args}
        />
        <Button
          color={WHITE}
          backgroundColor={ERROR_RED}
          onClick={() => alert('clicked Disabled ERROR_RED')}
          bordered={false}
          disabled
          hoverEffect={CHANGE_BACKGROUND_COLOR}
          hoverEffectProperties={{ changeBackgroundColor: FIRE_ENGINE_RED }}
          platformaticIcon={{
            iconName: 'GearIcon',
            size: MEDIUM,
            color: WHITE
          }}
          platformaticIconAfter={{
            iconName: 'GearIcon',
            size: MEDIUM,
            color: WHITE
          }}
          {...args}
        />
      </div>
      <div className='grid grid-cols-2 gap-x-2 bg-white p-2 col-span-2'>
        <Button
          color={WHITE}
          backgroundColor={RICH_BLACK}
          onClick={() => alert('clicked Disabled RICH_BLACK')}
          bordered={false}
          disabled
          hoverEffect={CHANGE_BACKGROUND_COLOR}
          hoverEffectProperties={{
            changeBackgroundColor: ALTERNATE_RICH_BLACK
          }}
          platformaticIcon={{
            iconName: 'GearIcon',
            size: MEDIUM,
            color: WHITE
          }}
          platformaticIconAfter={{
            iconName: 'GearIcon',
            size: MEDIUM,
            color: WHITE
          }}
          {...args}
        />
        <Button
          color={WHITE}
          backgroundColor={ERROR_RED}
          onClick={() => alert('clicked Disabled ERROR_RED')}
          bordered={false}
          disabled
          hoverEffect={CHANGE_BACKGROUND_COLOR}
          hoverEffectProperties={{ changeBackgroundColor: FIRE_ENGINE_RED }}
          platformaticIcon={{
            iconName: 'GearIcon',
            size: MEDIUM,
            color: WHITE
          }}
          platformaticIconAfter={{
            iconName: 'GearIcon',
            size: MEDIUM,
            color: WHITE
          }}
          {...args}
        />
      </div>
      <span className='text-sm text-white col-span-1'>
        Default with Background Color 2
      </span>
      <div className='grid grid-cols-2 gap-x-2 bg-rich-black p-2 col-span-2'>
        <Button
          color={RICH_BLACK}
          backgroundColor={WHITE}
          onClick={() => alert('clicked Default WHITE')}
          hoverEffect={CHANGE_BACKGROUND_COLOR}
          hoverEffectProperties={{ changeBackgroundColor: ANTI_FLASH_WHITE }}
          bordered={false}
          platformaticIcon={{
            iconName: 'GearIcon',
            size: MEDIUM,
            color: RICH_BLACK
          }}
          platformaticIconAfter={{
            iconName: 'GearIcon',
            size: MEDIUM,
            color: RICH_BLACK
          }}
          {...args}
        />
        <Button
          color={WHITE}
          backgroundColor={ERROR_RED}
          onClick={() => alert('clicked Default ERROR_RED')}
          hoverEffect={CHANGE_BACKGROUND_COLOR}
          hoverEffectProperties={{ changeBackgroundColor: FIRE_ENGINE_RED }}
          bordered={false}
          platformaticIcon={{
            iconName: 'GearIcon',
            size: MEDIUM,
            color: WHITE
          }}
          platformaticIconAfter={{
            iconName: 'GearIcon',
            size: MEDIUM,
            color: WHITE
          }}
          {...args}
        />
      </div>
      <div className='grid grid-cols-2 gap-x-2 bg-white p-2 col-span-2'>
        <Button
          color={WHITE}
          backgroundColor={RICH_BLACK}
          onClick={() => alert('clicked Default RICH_BLACK')}
          bordered={false}
          hoverEffect={CHANGE_BACKGROUND_COLOR}
          hoverEffectProperties={{
            changeBackgroundColor: ALTERNATE_RICH_BLACK
          }}
          platformaticIcon={{
            iconName: 'GearIcon',
            size: MEDIUM,
            color: WHITE
          }}
          platformaticIconAfter={{
            iconName: 'GearIcon',
            size: MEDIUM,
            color: WHITE
          }}
          {...args}
        />
        <Button
          color={WHITE}
          backgroundColor={ERROR_RED}
          onClick={() => alert('clicked Default ERROR_RED')}
          hoverEffect={CHANGE_BACKGROUND_COLOR}
          hoverEffectProperties={{ changeBackgroundColor: FIRE_ENGINE_RED }}
          bordered={false}
          platformaticIcon={{
            iconName: 'GearIcon',
            size: MEDIUM,
            color: WHITE
          }}
          platformaticIconAfter={{
            iconName: 'GearIcon',
            size: MEDIUM,
            color: WHITE
          }}
          {...args}
        />
      </div>
      <span className='text-sm text-white col-span-1'>Disabled </span>
      <div className='grid grid-cols-2 gap-x-2 bg-rich-black p-2 col-span-2'>
        <Button
          color={WHITE}
          backgroundColor={RICH_BLACK}
          onClick={() => alert('clicked Disabled WHITE')}
          bordered={false}
          disabled
          hoverEffect={ACTIVE_AND_INACTIVE_STATUS}
          {...args}
        />
        <Button
          color={ERROR_RED}
          backgroundColor={RICH_BLACK}
          onClick={() => alert('clicked Disabled ERROR_RED')}
          bordered={false}
          disabled
          hoverEffect={ACTIVE_AND_INACTIVE_STATUS}
          {...args}
        />
      </div>
      <div className='grid grid-cols-2 gap-x-2 bg-white p-2 col-span-2'>
        <Button
          color={RICH_BLACK}
          backgroundColor={WHITE}
          onClick={() => alert('clicked Disabled RICH_BLACK')}
          bordered={false}
          disabled
          hoverEffect={ACTIVE_AND_INACTIVE_STATUS}
          {...args}
        />
        <Button
          color={ERROR_RED}
          backgroundColor={WHITE}
          onClick={() => alert('clicked Disabled ERROR_RED')}
          bordered={false}
          disabled
          hoverEffect={ACTIVE_AND_INACTIVE_STATUS}
          {...args}
        />
      </div>
      <span className='text-sm text-white col-span-1'>Default</span>
      <div className='grid grid-cols-2 gap-x-2 bg-rich-black p-2 col-span-2'>
        <Button
          color={WHITE}
          backgroundColor={RICH_BLACK}
          onClick={() => alert('clicked Default WHITE')}
          hoverEffect={ACTIVE_AND_INACTIVE_STATUS}
          bordered={false}
          {...args}
        />
        <Button
          color={ERROR_RED}
          backgroundColor={RICH_BLACK}
          onClick={() => alert('clicked Default ERROR_RED')}
          hoverEffect={ACTIVE_AND_INACTIVE_STATUS}
          bordered={false}
          {...args}
        />
      </div>
      <div className='grid grid-cols-2 gap-x-2 bg-white p-2 col-span-2'>
        <Button
          color={RICH_BLACK}
          backgroundColor={WHITE}
          onClick={() => alert('clicked Default RICH_BLACK')}
          bordered={false}
          hoverEffect={ACTIVE_AND_INACTIVE_STATUS}
          {...args}
        />
        <Button
          color={ERROR_RED}
          backgroundColor={WHITE}
          onClick={() => alert('clicked Default ERROR_RED')}
          hoverEffect={ACTIVE_AND_INACTIVE_STATUS}
          bordered={false}
          {...args}
        />
      </div>
      <span className='text-sm text-white col-span-1'>Disabled </span>
      <div className='grid grid-cols-2 gap-x-2 bg-rich-black p-2 col-span-2'>
        <Button
          color={WHITE}
          backgroundColor={RICH_BLACK}
          onClick={() => alert('clicked Disabled WHITE')}
          bordered={false}
          disabled
          hoverEffect={ACTIVE_AND_INACTIVE_STATUS}
          platformaticIcon={{
            iconName: 'GearIcon',
            size: MEDIUM,
            color: WHITE
          }}
          platformaticIconAfter={{
            iconName: 'GearIcon',
            size: MEDIUM,
            color: WHITE
          }}
          {...args}
        />
        <Button
          color={ERROR_RED}
          backgroundColor={RICH_BLACK}
          onClick={() => alert('clicked Disabled ERROR_RED')}
          bordered={false}
          disabled
          hoverEffect={ACTIVE_AND_INACTIVE_STATUS}
          platformaticIcon={{
            iconName: 'GearIcon',
            size: MEDIUM,
            color: ERROR_RED
          }}
          platformaticIconAfter={{
            iconName: 'GearIcon',
            size: MEDIUM,
            color: ERROR_RED
          }}
          {...args}
        />
      </div>
      <div className='grid grid-cols-2 gap-x-2 bg-white p-2 col-span-2'>
        <Button
          color={RICH_BLACK}
          backgroundColor={WHITE}
          onClick={() => alert('clicked Disabled RICH_BLACK')}
          bordered={false}
          disabled
          hoverEffect={ACTIVE_AND_INACTIVE_STATUS}
          platformaticIcon={{
            iconName: 'GearIcon',
            size: MEDIUM,
            color: RICH_BLACK
          }}
          platformaticIconAfter={{
            iconName: 'GearIcon',
            size: MEDIUM,
            color: RICH_BLACK
          }}
          {...args}
        />
        <Button
          color={ERROR_RED}
          backgroundColor={WHITE}
          onClick={() => alert('clicked Disabled ERROR_RED')}
          bordered={false}
          disabled
          hoverEffect={ACTIVE_AND_INACTIVE_STATUS}
          platformaticIcon={{
            iconName: 'GearIcon',
            size: MEDIUM,
            color: ERROR_RED
          }}
          platformaticIconAfter={{
            iconName: 'GearIcon',
            size: MEDIUM,
            color: ERROR_RED
          }}
          {...args}
        />
      </div>
      <span className='text-sm text-white col-span-1'>Default</span>
      <div className='grid grid-cols-2 gap-x-2 bg-rich-black p-2 col-span-2'>
        <Button
          color={WHITE}
          backgroundColor={RICH_BLACK}
          onClick={() => alert('clicked Default WHITE')}
          hoverEffect={ACTIVE_AND_INACTIVE_STATUS}
          bordered={false}
          platformaticIcon={{
            iconName: 'GearIcon',
            size: MEDIUM,
            color: WHITE
          }}
          platformaticIconAfter={{
            iconName: 'GearIcon',
            size: MEDIUM,
            color: WHITE
          }}
          {...args}
        />
        <Button
          color={ERROR_RED}
          backgroundColor={RICH_BLACK}
          onClick={() => alert('clicked Default ERROR_RED')}
          hoverEffect={ACTIVE_AND_INACTIVE_STATUS}
          bordered={false}
          platformaticIcon={{
            iconName: 'GearIcon',
            size: MEDIUM,
            color: ERROR_RED
          }}
          platformaticIconAfter={{
            iconName: 'GearIcon',
            size: MEDIUM,
            color: ERROR_RED
          }}
          {...args}
        />
      </div>
      <div className='grid grid-cols-2 gap-x-2 bg-white p-2 col-span-2'>
        <Button
          color={RICH_BLACK}
          backgroundColor={WHITE}
          onClick={() => alert('clicked Default RICH_BLACK')}
          bordered={false}
          hoverEffect={ACTIVE_AND_INACTIVE_STATUS}
          platformaticIcon={{
            iconName: 'GearIcon',
            size: MEDIUM,
            color: RICH_BLACK
          }}
          platformaticIconAfter={{
            iconName: 'GearIcon',
            size: MEDIUM,
            color: RICH_BLACK
          }}
          {...args}
        />
        <Button
          color={ERROR_RED}
          backgroundColor={WHITE}
          onClick={() => alert('clicked Default ERROR_RED')}
          hoverEffect={ACTIVE_AND_INACTIVE_STATUS}
          bordered={false}
          platformaticIcon={{
            iconName: 'GearIcon',
            size: MEDIUM,
            color: ERROR_RED
          }}
          platformaticIconAfter={{
            iconName: 'GearIcon',
            size: MEDIUM,
            color: ERROR_RED
          }}
          {...args}
        />
      </div>
    </div>
  )
}

export const FigmaTemplate = DesignSystem.bind({})

FigmaTemplate.args = {
  label: 'Sample label'
}

export const LoadingButton = Template.bind({})
LoadingButton.args = {
  label: 'Loading Button',
  loading: true
}

export const ClickToLoad = (args) => {
  const [loading, setLoading] = useState(false)
  return (
    <Button
      label='Click to Load'
      loading={loading}
      onClick={() => {
        setLoading(true)
        setTimeout(() => setLoading(false), 2000)
      }}
    />
  )
}

ClickToLoad.args = {
  label: 'Click to Load',
  loading: false
}
