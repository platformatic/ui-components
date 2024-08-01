'use strict'
import React, { useState } from 'react'
import Select from '../../components/forms/Select'
import {
  ERROR_RED,
  LARGE,
  MAIN_DARK_BLUE,
  MAIN_GREEN,
  RICH_BLACK,
  WHITE
} from '../../components/constants'

const divStyle = {
  width: '100%',
  height: 'auto',
  padding: '20px',
  backgroundColor: 'transparent'
}

export default {
  title: 'Platformatic/Forms/Select',
  component: Select,
  decorators: [
    (Story) => (
      <div style={divStyle}>
        <Story />
      </div>
    )
  ]
}

const Template = (args) => <Select {...args} />

export const Default = Template.bind({})

Default.args = {
  name: 'test',
  placeholder: 'Platformatic empty select',
  borderColor: MAIN_GREEN
}

const TemplateBorderMainDarkBlue = (args) => {
  const [value, setValue] = useState('')

  function handleSelect (event) {
    setValue(event.detail.label)
  }

  return (
    <div style={{ backgroundColor: 'white', padding: '20px 10px' }}>
      <Select {...args} value={value} onSelect={handleSelect} />
    </div>
  )
}

const TemplateBorderMainDarkBlue2 = (args) => {
  const [value, setValue] = useState('')

  function handleSelect (event) {
    setValue(event.detail.label)
  }

  return (
    <>
      <div style={{ backgroundColor: 'white', padding: '20px 10px' }}>
        <p>Value of the input {value}</p>
        <Select {...args} value={value} onSelect={handleSelect} />
        <br />
        <Select placeholder='Disabled' disabled />
      </div>
    </>
  )
}

export const BorderMainDarkBlue = TemplateBorderMainDarkBlue.bind({})

BorderMainDarkBlue.args = {
  name: 'test',
  placeholder: 'Defaul option',
  options: [...Array(20).keys()].map((ele) => ({
    label: `Option ${ele}`,
    value: `Value${ele}`,
    iconName: 'SocialGitHubIcon'
  })),
  borderColor: MAIN_DARK_BLUE
}

export const DefaultInvalid = TemplateBorderMainDarkBlue.bind({})

DefaultInvalid.args = {
  name: 'test',
  placeholder: 'Platformatic empty select',
  options: [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' }
  ],
  borderColor: MAIN_GREEN,
  errorMessage: 'This is an error message'
}

export const withDifferentOptions = TemplateBorderMainDarkBlue2.bind({})

withDifferentOptions.args = {
  name: 'test',
  placeholder: 'Platformatic',
  options: [...Array(20).keys()]
    .map((ele) => ({
      label: `Option ${ele}`,
      value: `Value${ele}`,
      iconName: 'SocialGitHubIcon'
    }))
    .concat({
      label: 'Last but not least',
      iconName: 'AddIcon',
      value: 123123,
      notSelectable: true,
      onClick: () => alert('you clicked last but not least')
    })
    .concat({
      label: 'Play',
      iconName: 'PlayIcon',
      value: 123123,
      notSelectable: true
    }),
  borderColor: MAIN_DARK_BLUE
}

export const githubRepoExample = TemplateBorderMainDarkBlue2.bind({})

githubRepoExample.args = {
  name: 'test',
  placeholder: 'Platformatic',
  options: [...Array(4).keys()]
    .map((ele) => ({
      label: `GitHub Repo ${ele}`,
      value: `Value${ele}`,
      iconName: 'SocialGitHubIcon'
    }))
    .concat({
      label: 'this is an option that is not selectable',
      iconName: 'AddIcon',
      value: 123123,
      notSelectable: true,
      onClick: () => alert('you clicked last but not least')
    })
    .concat({
      label: 'Add Github repo',
      iconName: 'PlayIcon',
      value: 123123,
      notSelectable: true,
      notFilterable: true
    }),
  borderColor: MAIN_DARK_BLUE
}

const TemplateTransparent = (args) => {
  const [value, setValue] = useState('')

  function handleSelect (event) {
    setValue(event.detail.label)
  }

  return (
    <div style={{ padding: '20px 10px' }}>
      <p>Value of the input {value}</p>
      <Select {...args} value={value} onSelect={handleSelect} />
    </div>
  )
}

export const TemplateBackgroundTransparent = TemplateTransparent.bind({})

TemplateBackgroundTransparent.args = {
  name: 'test',
  placeholder: 'Defaul option',
  optionsBorderedBottom: false,
  options: [...Array(20).keys()].map((ele) => ({
    label: `Option ${ele}`,
    value: `Value${ele}`,
    iconName: 'OrganizationIcon'
  })),
  borderColor: WHITE,
  mainColor: WHITE,
  backgroundColor: RICH_BLACK,
  borderListColor: WHITE
}

const TemplateWithBeforeIcon = (args) => <Select {...args} />

export const WithBeforeIcon = TemplateWithBeforeIcon.bind({})

WithBeforeIcon.args = {
  name: 'test',
  placeholder: 'Platformatic empty select',
  borderColor: MAIN_GREEN,
  beforeIcon: {
    iconName: 'AddIcon',
    color: ERROR_RED,
    size: LARGE
  }
}
