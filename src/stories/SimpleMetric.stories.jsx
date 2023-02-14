'use strict'

import SimpleMetric from '../components/SimpleMetric'

export default {
  title: 'Platformatic/Metrics/SimpleMetric',
  component: SimpleMetric
}

const Template = (args) => <SimpleMetric {...args} />

export const Green = Template.bind({})

Green.args = {
  title: 'Requests',
  color: 'green',
  unit: 'ms',
  value: 120,
  tooltip: 'This is a tooltip for the metric'
}

export const Red = Template.bind({})

Red.args = {
  title: 'Requests',
  color: 'red',
  unit: 'ms',
  value: 120,
  tooltip: 'This is a tooltip for the metric'
}

export const WithPrefix = Template.bind({})

WithPrefix.args = {
  title: 'Requests',
  color: 'green',
  unit: 'ms',
  value: 120,
  pre: 'P90',
  tooltip: 'This is a tooltip for the metric'
}
