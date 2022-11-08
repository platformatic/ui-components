'use strict'

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// The icon that is in design is not in the free version of fontawesome
// Temporary using this one
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import ReactTooltip from 'react-tooltip'
import BorderedBox from './BorderedBox'
import styles from './SimpleMetric.module.css'
import MetricValue from './MetricValue'

export default function SimpleMetric ({ title, pre, color, unit, value, tooltip, children }) {
  return (
    <>
      <BorderedBox>
        <div className={styles.header}>
          <span className={styles.title}>{title}</span>
          <FontAwesomeIcon
            icon={faCircleExclamation}
            data-tip={tooltip}
          />
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
