'use strict'
// https://loading.io/css/
import React from 'react'
import PropTypes from 'prop-types'
import styles from './SpinnerCircular.module.css'
import { COLORS_BUTTON, WHITE } from '../constants'

function SpinnerCircular ({
  className = '',
  color = WHITE,
  size = 80,
  thickness = 4
}) {
  const styleRing = { width: `${size}px`, height: `${size}px` }
  const styleDiv = {
    width: `${size - 16}px`,
    height: `${size - 16}px`,
    margin: `${thickness}px`,
    borderWidth: `${thickness}px`
  }

  const spinnerClassName = styles[`ring${color}`] + ` ${styles.ring} ${className}`
  return (
    <div className={spinnerClassName} style={styleRing}>
      <div style={styleDiv} />
      <div style={styleDiv} />
      <div style={styleDiv} />
      <div style={styleDiv} />
    </div>
  )
}

SpinnerCircular.propTypes = {
  /**
   * className
   */
  className: PropTypes.string,
  /**
   * color
   */
  color: PropTypes.oneOf(COLORS_BUTTON),
  /**
   * size
   */
  size: PropTypes.number,
  /**
   * thickness
   */
  thickness: PropTypes.number
}

export default SpinnerCircular
