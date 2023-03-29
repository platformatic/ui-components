'use strict'
import React from 'react'
import styles from './MetricValue.module.css'
import commonStyles from './Common.module.css'
export default function MetricValue ({ pre, color = 'main-green', value, unit, fontValue = 'small', flexDirectionMetric = 'row' }) {
  let classNameValue = styles.value
  classNameValue += ' ' + commonStyles[`text--${color}`]
  classNameValue += ' ' + styles[`value-${fontValue}`]

  let classNameWrapper = `${styles.metric} `
  classNameWrapper += styles[`flex-direction-${flexDirectionMetric}`]
  return (
    <div className={classNameWrapper}>
      {pre ? <span className={styles.pre}>{pre}</span> : <span className={styles.pre}>&nbsp;</span>}
      <span className={classNameValue}>
        {value}
      </span>
      <span className={styles.unit}>{unit}</span>
    </div>
  )
}
