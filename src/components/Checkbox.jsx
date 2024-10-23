'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import styles from './Checkbox.module.css'
import { MAIN_DARK_BLUE, MEDIUM, RICH_BLACK, SMALL, WHITE } from './constants'
function Checkbox ({
  disabled = false,
  color = MAIN_DARK_BLUE,
  size = MEDIUM,
  ...rest
}) {
  let className = `${styles.checkbox}`
  className += ' ' + styles[`checkbox--${size}`]
  className += ' ' + styles[`checkbox--${color}`]
  if (disabled) className += ` ${styles.disabled}`
  return (
    <input type='checkbox' className={className} disabled={disabled} {...rest} />
  )
}

Checkbox.propTypes = {
  /**
   * disabled
   */
  disabled: PropTypes.bool,
  /**
   * color
   */
  color: PropTypes.oneOf([WHITE, MAIN_DARK_BLUE, RICH_BLACK]),
  /**
   * size
   */
  size: PropTypes.oneOf([SMALL, MEDIUM])
}

export default Checkbox
