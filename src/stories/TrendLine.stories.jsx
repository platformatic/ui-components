import React from 'react'
import TrendLine from '../components/TrendLine'

export default {
  title: 'Components/TrendLine',
  component: TrendLine
}

const Template = (args) => (
  <div style={{ background: '#0B1016', padding: 24, minHeight: 180 }}>
    <TrendLine {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  yValues: [20, 40, 30, 50, 35, 60, 55, 70, 65, 80, 60, 75, 70, 90, 85],
  width: 400,
  height: 120
}
