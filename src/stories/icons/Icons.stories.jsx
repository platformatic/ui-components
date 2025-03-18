import React from 'react'
import PullRequestIcon from '../../components/icons/PullRequestIcon'
import CloseIcon from '../../components/icons/CloseIcon'
import CircleCloseIcon from '../../components/icons/CircleCloseIcon'
import WorkspaceStaticIcon from '../../components/icons/WorkspaceStaticIcon'
import UpgradeIcon from '../../components/icons/UpgradeIcon'
import WorkspaceDynamicIcon from '../../components/icons/WorkspaceDynamicIcon'
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

const PullRequestIconTemplate = (args) => <PullRequestIcon {...args} />
export const PullRequestIconDefault = PullRequestIconTemplate.bind({})
PullRequestIconDefault.args = {}

const CloseIconTemplate = (args) => <CloseIcon {...args} />
export const CloseIconDefault = CloseIconTemplate.bind({})
CloseIconDefault.args = {}

const CircleCloseIconTemplate = (args) => <CircleCloseIcon {...args} />
export const CircleCloseIconDefault = CircleCloseIconTemplate.bind({})
CircleCloseIconDefault.args = {}

const WorkspaceIconsTemplate = () =>
  [<WorkspaceStaticIcon key='a' />, <WorkspaceDynamicIcon key='b' />].map(
    (component, index) => {
      const listElement = []
      listElement.push(React.cloneElement(component, { key: `0${index}` }))
      listElement.push(
        React.cloneElement(component, {
          key: `1${index}`,
          size: 'small',
          color: 'main-green'
        })
      )
      listElement.push(
        React.cloneElement(component, { key: `2${index}`, color: 'error-red' })
      )
      listElement.push(
        React.cloneElement(component, {
          key: `3${index}`,
          size: 'small',
          color: 'error-red'
        })
      )
      listElement.push(
        React.cloneElement(component, {
          key: `4${index}`,
          color: 'main-dark-blue'
        })
      )
      listElement.push(
        React.cloneElement(component, {
          key: `5${index}`,
          size: 'small',
          color: 'main-dark-blue'
        })
      )
      return listElement
    }
  )

export const WorkspaceIconsAll = WorkspaceIconsTemplate.bind({})
WorkspaceIconsAll.args = {}

const LargeIconsTemplate = () =>
  [<UpgradeIcon key='b' size='extra-large' />].map((component) => component)
export const LargeIconsDefault = LargeIconsTemplate.bind({})
LargeIconsDefault.args = {}

const AllSizesIcons = (Icon) => () => {
  const icons = ['small', 'medium', 'large'].map((size) => (
    <div key={size} className='' style={{ backgroundColor: RICH_BLACK }}>
      <Icon size={size} color={RICH_BLACK} />
    </div>

  ))
  return icons
}

export const ExpandIcons = AllSizesIcons(icons.ExpandIcon).bind({})
export const CollapseIcons = AllSizesIcons(icons.CollapseIcon).bind({})
export const EnlargeIcons = AllSizesIcons(icons.EnlargeIcon).bind({})
export const AppOptimizedIcons = AllSizesIcons(icons.AppOptimizedIcon).bind({})
export const AWSIcons = AllSizesIcons(icons.AWSIcon).bind({})
export const ImportIcons = AllSizesIcons(icons.ImportIcon).bind({})
export const ExportIcons = AllSizesIcons(icons.ExportIcon).bind({})
export const InfoCircleIcons = AllSizesIcons(icons.InfoCircleIcon).bind({})
export const CollapseSquareIcons = AllSizesIcons(icons.CollapseSquareIcon).bind({})
export const ExpandSquareIcon = AllSizesIcons(icons.ExpandSquareIcon).bind({})
export const EntrypointIcon = AllSizesIcons(icons.EntrypointIcon).bind({})
export const AlertIcon = AllSizesIcons(icons.AlertIcon).bind({})
export const ScheduledJobSettingsIcons = AllSizesIcons(icons.ScheduledJobSettingsIcon).bind({})
export const ScheduledJobsSuspendIcons = AllSizesIcons(icons.ScheduledJobsSuspendIcon).bind({})
export const ScheduledJobsDetailIcons = AllSizesIcons(icons.ScheduledJobsDetailIcon).bind({})

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
