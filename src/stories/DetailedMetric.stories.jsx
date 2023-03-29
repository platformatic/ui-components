'use strict'

import { MAIN_GREEN } from '../components/constants'
import DetailedMetric from '../components/DetailedMetric'

export default {
  title: 'Platformatic/Metrics/DetailedMetric',
  component: DetailedMetric
}

const Template = (args) => <DetailedMetric {...args} />

export const Default = Template.bind({})

Default.args = {
  title: 'Requests',
  color: MAIN_GREEN,
  unit: 'ms',
  value: 120,
  pre: 'P90',
  tooltip: 'This is a tooltip for the metric',
  leftDetail: {
    value: 600,
    unit: 'ms',
    color: MAIN_GREEN,
    pre: 'P99'
  },
  rightDetail: {
    value: 4.42,
    unit: 's',
    color: MAIN_GREEN,
    pre: 'P95'
  }
}
