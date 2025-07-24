import React, { useState } from 'react'
import styles from './MetricInfoBox.module.css'
import TrendDownIcon from './icons/TrendDownIcon'
import TrendUpIcon from './icons/TrendUpIcon'
import TrendLine from './TrendLine'
import Tooltip from './Tooltip'
import { DIRECTION_TOP, POSITION_CENTER, MEDIUM, WHITE } from './constants'
import PlatformaticIcon from './PlatformaticIcon'

export default function MetricInfoBox ({
  title,
  value,
  unit,
  data = [],
  helper,
  tooltip,
  showGraph = false
}) {
  // set trend variable up or down, depending on the first and last value of the data array
  const trend = data[0] > data[data.length - 1] ? 'up' : 'down'
  const [tooltipVisible, setTooltipVisible] = useState(false)

  return (
    <div className={styles.container}>
      <div className={styles.headerRow}>
        <span className={styles.title}>{title}</span>
        {/* on hover show tooltip */}
        {tooltip && (
          <div
            className={styles.infoIcon}
            onMouseEnter={() => setTooltipVisible(true)}
            onMouseLeave={() => setTooltipVisible(false)}
          >
            <Tooltip
              content={<span>{tooltip}</span>}
              visible={tooltipVisible}
              direction={DIRECTION_TOP}
              position={POSITION_CENTER}
              offset={24}
              delay={100}
              activeDependsOnVisible
            >
              <PlatformaticIcon
                size={MEDIUM}
                iconName='InfoCircleIcon'
                color={WHITE}

              />
            </Tooltip>
          </div>
        )}
      </div>
      <div className={styles.content}>
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

    </div>
  )
}
