'use strict'

import { getColor } from '../lib/utils'
import styles from './BorderedBox.module.css'
import commonStyles from './Common.module.css'
import React from 'react'
export default function BorderedBox (props) {
  const { classes, color, children } = props
  const borderColor = getColor('border', color)

  return (
    <div className={`${styles.borderedBox} ${commonStyles.bordered} ${classes} ${borderColor}`}>
      {children}
    </div>
  )
}
