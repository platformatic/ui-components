import React from 'react'
import { DARK_GREEN, OPACITY_100 } from './constants'
import commonStyles from './Common.module.css'
import styles from './VerticalSeparator.module.css'

function VerticalSeparator ({
  color = DARK_GREEN,
  backgroundColorOpacity = OPACITY_100,
  classes = ''
}) {
  const backgroundColor = commonStyles[`background-color-${color}`]
  const backgroundOpacity = commonStyles[`background-color-opaque-${backgroundColorOpacity}`]
  const className = `${backgroundColor} ${backgroundOpacity} ${styles.fullHeight} ${classes}`
  return <div className={className} />
}

export default VerticalSeparator
