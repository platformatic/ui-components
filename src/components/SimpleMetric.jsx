'use strict'

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import BorderedBox from './BorderedBox'
import styles from './SimpleMetric.module.css'
import MetricValue from './MetricValue'

export default function SimpleMetric ({ title, pre, color, unit, value, children }) {
  return (
    <BorderedBox>
      <div className={styles.header}>
        <span className={styles.title}>{title}</span>
        <FontAwesomeIcon icon={faCircleInfo} className='text-white' />
      </div>
      <div>
        <MetricValue pre={pre} color={color} unit={unit} value={value} />
        {children}
      </div>
    </BorderedBox>
  )
}
