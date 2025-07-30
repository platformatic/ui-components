import React from 'react'
import PullRequestIcon from '../../components/icons/PullRequestIcon'
import { COLORS_ICON, LARGE, MEDIUM, RICH_BLACK, SIZES, SMALL } from '../../components/constants'
import icons from '../../components/icons/index.js'

const divStyle = {
  display: 'flex',
  width: '100%',
  minHeight: '400px',
  gap: '10px',
  backgroundColor: 'white'
}

export default {
  title: 'Platformatic/Icons',
  component: PullRequestIcon,
  decorators: [
    (Story) => (
      <div style={divStyle}>
        <Story />
      </div>
    )
  ],
  argTypes: {
    color: {
      type: 'string',
      control: {
        type: 'radio',
        options: COLORS_ICON
      }
    }
  }
}

const IconPreviewTemplate = ({ iconName, size, color }) => {
  const Icon = icons[iconName]
  if (!Icon) return <div>Icon not found</div>

  return (
    <div style={{ backgroundColor: RICH_BLACK, padding: '20px', display: 'flex', gap: '10px' }}>
      <Icon size={SMALL} color={color} />
      <Icon size={MEDIUM} color={color} />
      <Icon size={LARGE} color={color} />
    </div>
  )
}

export const IconPreview = IconPreviewTemplate.bind({})
IconPreview.args = {
  iconName: 'AddIcon',
  color: 'rich-black'
}
IconPreview.argTypes = {
  iconName: {
    control: 'select',
    options: Object.keys(icons),
    description: 'Select an icon to preview'
  },
  size: {
    control: 'select',
    options: SIZES,
    description: 'Select icon size'
  },
  color: {
    control: 'select',
    options: COLORS_ICON,
    description: 'Select icon color'
  }
}
