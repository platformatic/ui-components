'use strict'

import React from 'react'
import BorderedBox from './BorderedBox'
import styles from './SimpleMetric.module.css'
import MetricValue from './MetricValue'
import ButtonFullRounded from './ButtonFullRounded'
import { BACKGROUND_COLOR_OPAQUE, MEDIUM, WHITE } from './constants'

export default function SimpleMetric ({ title, pre, color, unit, value, tooltip, children }) {
  const withoutChildrenSingleMetric = !children ? styles.centerMetric : ''
  return (
    <BorderedBox>
      <div className={styles.header}>
        <span className={styles.title}>{title}</span>
        <ButtonFullRounded hoverEffect={BACKGROUND_COLOR_OPAQUE} iconColor={WHITE} iconSize={MEDIUM} iconName='CircleExclamationIcon' tip={tooltip} onClick={() => {}} />
      </div>
      <div className={withoutChildrenSingleMetric}>
        <MetricValue pre={pre} color={color} unit={unit} value={value} fontValue='large' />
        {children}
      </div>
    </BorderedBox>
  )
}
