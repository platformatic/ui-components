import React from 'react'
import MetricInfoBox from '../components/MetricInfoBox'

export default {
  title: 'Platformatic/Metrics/MetricInfoBox',
  component: MetricInfoBox
}

export const Default = () => (
  <MetricInfoBox
    title='Memory Allocation & Usage'
    value={50}
    unit='MB'
    data={[100, 90, 80, 70, 60, 50, 40, 30, 20, 10]}
    helper='Average Usage'
  />
)
export const WithGraph = () => (
  <MetricInfoBox
    title='Memory Allocation & Usage'
    value={50}
    unit='MB'
    data={[100, 90, 80, 70, 60, 50, 40, 30, 20, 10]}
    helper='Average Usage'
    showGraph
  />
)

export const WithTooltip = () => (
  <MetricInfoBox
    title='Memory Allocation & Usage'
    value={50}
    unit='MB'
    data={[100, 90, 80, 70, 60, 50, 40, 30, 20, 10]}
    helper='Average Usage'
    showGraph
    tooltip='This is a tooltip'
  />
)
