import React from 'react'
import MetricInfoBox from '../components/MetricInfoBox'
import TrendMetric from '../components/TrendMetric'

export default {
  title: 'Platformatic/Metrics/MetricInfoBox',
  component: MetricInfoBox
}

export const Default = () => (
  <MetricInfoBox
    title='Memory Allocation & Usage'
  >
    <TrendMetric
      value={50}
      unit='MB'
      data={[100, 90, 80, 70, 60, 50, 40, 30, 20, 10]}
      helper='Average Usage'
    />
  </MetricInfoBox>
)
export const WithGraph = () => (
  <MetricInfoBox
    title='Memory Allocation & Usage'
  >
    <TrendMetric
      value={50}
      unit='MB'
      data={[100, 90, 80, 70, 60, 50, 40, 30, 20, 10]}
      helper='Average Usage'
      showGraph
    />
  </MetricInfoBox>
)

export const WithTooltip = () => (
  <MetricInfoBox
    title='Memory Allocation & Usage'
    tooltip='This is a tooltip'
  >
    <TrendMetric
      value={50}
      unit='MB'
      data={[100, 90, 80, 70, 60, 50, 40, 30, 20, 10]}
      helper='Average Usage'
      showGraph
    />
  </MetricInfoBox>
)
