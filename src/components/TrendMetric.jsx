import React from 'react'
import styles from './TrendMetric.module.css'
import TrendUpIcon from './icons/TrendUpIcon'
import TrendDownIcon from './icons/TrendDownIcon'
import TrendLine from './TrendLine'

export default function TrendMetric ({ value, unit, helper, showGraph = false, data }) {
  // set trend variable up or down, depending on the first and last value of the data array
  const trend = data[0] > data[data.length - 1] ? 'up' : 'down'

  return (
    <div className={styles.container}>
      <div className={styles.contentText}>
        <div>
          <div className={styles.value}>
            <span className={styles.valueNumber}>{value}</span>
            <span className={styles.valueUnit}>{unit}</span>
            <div className={styles.trend}>
              {trend === 'up' ? <TrendUpIcon color='white' /> : <TrendDownIcon color='white' />}
            </div>
          </div>

        </div>
        <div className={styles.helperBox}>
          {helper}
        </div>

      </div>

      {showGraph && (
        <div className={styles.contentGraph}>
          <TrendLine yValues={data} />
        </div>
      )}
    </div>
  )
}
