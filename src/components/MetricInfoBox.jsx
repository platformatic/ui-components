import React, { useState } from 'react'
import styles from './MetricInfoBox.module.css'
import Tooltip from './Tooltip'
import { DIRECTION_TOP, POSITION_CENTER, MEDIUM, WHITE } from './constants'
import PlatformaticIcon from './PlatformaticIcon'

export default function MetricInfoBox ({
  title,
  children,
  tooltip = null
}) {
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
        {children}
      </div>

    </div>
  )
}
