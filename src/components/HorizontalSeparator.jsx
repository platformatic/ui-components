'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import commonStyles from './Common.module.css'
import { DARK_GREEN, MAIN_DARK_BLUE, WHITE } from './constants'
import styles from './HorizontalSeparator.module.css'
function HorizontalSeparator ({ marginTop, marginBottom, color, opacity }) {
  function getClassName () {
    let className = `${styles.style} `
    className += commonStyles[`text--${color}`] + ' '
    // margin
    className += (marginTop === marginBottom ? `${styles['marginY-' + marginTop]}` : `${styles['marginT-' + marginTop]} ${styles['marginB-' + marginBottom]}`)
    // opacity
    if (opacity > 1) className += ' ' + styles[`apply-opacity-${opacity}`]
    return className
  }

  return <hr className={getClassName()} />
}

HorizontalSeparator.propTypes = {
  /**
   * marginTop
   */
  marginTop: PropTypes.number,
  /**
   * marginBottom
   */
  marginBottom: PropTypes.number,
  /**
   * color
   */
  color: PropTypes.oneOf([DARK_GREEN, MAIN_DARK_BLUE, WHITE]),
  /**
   * opacity
   */
  opacity: PropTypes.number
}

HorizontalSeparator.defaultProps = {
  marginTop: 4,
  marginBottom: 4,
  color: DARK_GREEN,
  opacity: 1
}

export default HorizontalSeparator
