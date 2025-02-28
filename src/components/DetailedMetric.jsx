import React from 'react'
import SimpleMetric from './SimpleMetric'
import HorizontalSeparator from './HorizontalSeparator'
import VerticalSeparator from './VerticalSeparator'
import styles from './DetailedMetric.module.css'
import MetricValue from './MetricValue'
export default function DetailedMetric (props) {
  const { leftDetail, rightDetail } = props
  return (
    <SimpleMetric {...props}>
      <HorizontalSeparator />
      <div className={styles.detailContainer}>
        <MetricValue
          pre={leftDetail.pre}
          unit={leftDetail.unit}
          color={leftDetail.color}
          value={leftDetail.value}
          flexDirectionMetric='col'
        />
        <VerticalSeparator />
        <MetricValue
          pre={rightDetail.pre}
          unit={rightDetail.unit}
          color={rightDetail.color}
          value={rightDetail.value}
          flexDirectionMetric='col'
        />
      </div>
    </SimpleMetric>

  )
}
