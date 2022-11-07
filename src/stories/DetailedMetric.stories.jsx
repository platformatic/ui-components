'use strict'

import DetailedMetric from '../components/DetailedMetric'

export default {
  title: 'Platformatic/DetailedMetric',
  component: DetailedMetric
}

const Template = (args) => <DetailedMetric {...args} />

export const Default = Template.bind({})

Default.args = {
  title: 'Requests',
  color: 'green',
  unit: 'ms',
  value: 120,
  leftDetail: {
    value: 600,
    unit: 'ms',
    color: 'green',
    pre: 'P99'
  },
  rightDetail: {
    value: 4.42,
    unit: 's',
    color: 'green',
    pre: 'P95'
  }
}

// export const Red = Template.bind({})

// Red.args = {
//   title: 'Requests',
//   color: 'red',
//   unit: 'ms',
//   value: 120
// }

// export const WithPrefix = Template.bind({})

// WithPrefix.args = {
//   title: 'Requests',
//   color: 'green',
//   unit: 'ms',
//   value: 120,
//   pre: 'P90'
// }
