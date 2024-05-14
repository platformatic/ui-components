'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import { DARK_GREEN, MAIN_DARK_BLUE, OPACITY_10, OPACITY_20, OPACITY_30, OPACITY_60, OPACITY_100, WHITE } from './constants'
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

VerticalSeparator.propTypes = {
  /**
   * color
   */
  color: PropTypes.oneOf([DARK_GREEN, MAIN_DARK_BLUE, WHITE]),
  /**
   * backgroundColorOpacity
   */
  backgroundColorOpacity: PropTypes.oneOf([OPACITY_10,
    OPACITY_20,
    OPACITY_30,
    OPACITY_60,
    OPACITY_100]),
  /**
   * backgroundColorOpacity
   */
  classes: PropTypes.string

}

export default VerticalSeparator
