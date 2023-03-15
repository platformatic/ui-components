import React from 'react'
import PullRequestIcon from '../../components/icons/PullRequestIcon'
import CloseIcon from '../../components/icons/CloseIcon'
import CircleCloseIcon from '../../components/icons/CircleCloseIcon'
import WorkspaceStaticIcon from '../../components/icons/WorkspaceStaticIcon'
import UpgradeIcon from '../../components/icons/UpgradeIcon'
import WorkspaceDynamicIcon from '../../components/icons/WorkspaceDynamicIcon'
import { COLORS_ICON } from '../../components/constants'

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
        options: [COLORS_ICON]
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

const WorkspaceIconsTemplate = () => (
  [<WorkspaceStaticIcon key='a' />, <WorkspaceDynamicIcon key='b' />].map((component, index) => {
    const listElement = []
    listElement.push(React.cloneElement(component, { key: `0${index}` }))
    listElement.push(React.cloneElement(component, { key: `1${index}`, size: 'small', color: 'main-green' }))
    listElement.push(React.cloneElement(component, { key: `2${index}`, color: 'error-red' }))
    listElement.push(React.cloneElement(component, { key: `3${index}`, size: 'small', color: 'error-red' }))
    listElement.push(React.cloneElement(component, { key: `4${index}`, color: 'main-dark-blue' }))
    listElement.push(React.cloneElement(component, { key: `5${index}`, size: 'small', color: 'main-dark-blue' }))
    return listElement
  })
)

export const WorkspaceIconsAll = WorkspaceIconsTemplate.bind({})
WorkspaceIconsAll.args = {}

const LargeIconsTemplate = () => ([<UpgradeIcon key='b' size='extra-large' />].map(component => component))
export const LargeIconsDefault = LargeIconsTemplate.bind({})
LargeIconsDefault.args = {}
