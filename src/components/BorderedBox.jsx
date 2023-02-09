'use strict'

import { getColor } from '../lib/utils'
import styles from './BorderedBox.module.css'
import commonStyles from './Common.module.css'
import React from 'react'
export default function BorderedBox (props) {
  const { classes, color, children, backgroundColor = 'dark-blue' } = props
  const borderColor = getColor('border', color)
  const className = `${styles.borderedBox} ${commonStyles.bordered} ${classes} ${borderColor} ` + styles[`background-color-${backgroundColor}`]

  return (
    <div className={className}>
      {children}
    </div>
  )
}
