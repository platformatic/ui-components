import React from 'react'
import ArcMetric from '../components/ArcMetric'

export default {
  title: 'Platformatic/Metrics/ArcMetric',
  component: ArcMetric
}

export const Default = () => (
  <ArcMetric
    value={50}
    max={100}
    unit='MB'
    title='Memory Allocation & Usage'
    helper={<><span>100 MB</span><br /><span>Allocated</span></>}
  />
)
