import React from 'react'
import PullRequestIcon from '../../components/icons/PullRequestIcon'
import CloseIcon from '../../components/icons/CloseIcon'
import CircleCloseIcon from '../../components/icons/CircleCloseIcon'
import WorkspaceStaticIcon from '../../components/icons/WorkspaceStaticIcon'
import UpgradeIcon from '../../components/icons/UpgradeIcon'
import WorkspaceDynamicIcon from '../../components/icons/WorkspaceDynamicIcon'
import { COLORS_ICON, MAIN_GREEN, RICH_BLACK } from '../../components/constants'
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
    <div key={size} className='antani' style={{ backgroundColor: RICH_BLACK }}>
      <Icon size={size} color={MAIN_GREEN} />
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
