'use strict'
import React from 'react'
import styles from './MetricValue.module.css'
import { getColor } from '../lib/utils'
export default function MetricValue ({ pre, color, value, unit }) {
  return (
    <div className={styles.metric}>
      {pre && <span>{pre}</span>}
      <span className={`${styles.value} ${getColor('text', color)}`}>
        {value}
      </span>
      <span>{unit}</span>
    </div>
  )
}
