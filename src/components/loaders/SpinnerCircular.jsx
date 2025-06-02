// https://loading.io/css/
import React from 'react'
import styles from './SpinnerCircular.module.css'
import { COLORS_BUTTON, WHITE } from '../constants'

function SpinnerCircular ({
  className = '',
  color = WHITE,
  size = 60,
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

export default SpinnerCircular
