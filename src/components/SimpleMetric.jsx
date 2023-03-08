'use strict'

import React from 'react'
// The icon that is in design is not in the free version of fontawesome
// Temporary using this one
import ReactTooltip from 'react-tooltip'
import BorderedBox from './BorderedBox'
import styles from './SimpleMetric.module.css'
import MetricValue from './MetricValue'
import Icons from './icons'

export default function SimpleMetric ({ title, pre, color, unit, value, tooltip, children }) {
  return (
    <>
      <BorderedBox>
        <div className={styles.header}>
          <span className={styles.title}>{title}</span>
          <Icons.CircleExclamationIcon tip={tooltip} size='medium' color='white' />
        </div>
        <div>
          <MetricValue pre={pre} color={color} unit={unit} value={value} />
          {children}
        </div>
      </BorderedBox>
      <ReactTooltip />
    </>
  )
}
