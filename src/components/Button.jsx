'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import styles from './Button.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Button (props) {
  const { icon, label, color, backgroundColor, size, disabled, bold, hoverEffect, bordered, ...rest } = props
  let className = `${styles.button} ${styles['background-color-' + backgroundColor]} ${styles['color-' + color]} ${styles['button-' + size]}`
  if (!bordered) className += ` ${styles['no-border']}`
  if (disabled) {
    className += ` ${styles.disabled}`
  } else {
    if (hoverEffect === 'hover') {
      className += ` ${styles['hover-' + backgroundColor]}`
    } else {
      className += ` ${styles['underline-effect']}`
    }
  }
  if (bold) className += ` ${styles.fontBold}`

  return (
    <button className={className} disabled={disabled} alt={label} {...rest}>
      {icon ? <FontAwesomeIcon icon={icon} className={`${styles['margin-right-' + size]}`} data-testid='button-icon' /> : null}
      <span>{label}</span>
    </button>
  )
}

Button.propTypes = {
  /**
   * Icon
   */
  icon: PropTypes.object,
  /**
   * label
   */
  label: PropTypes.string,
  /**
   * color of text, icon and borders
   */
  color: PropTypes.oneOf(['main-green', 'dark-green', 'light-green', 'main-dark-blue', 'dark-blue', 'light-blue', 'white', 'error-red', 'tertiary-blue', 'transparent']),
  /**
   * background color of the button
   */
  backgroundColor: PropTypes.oneOf(['main-green', 'dark-green', 'light-green', 'main-dark-blue', 'dark-blue', 'light-blue', 'white', 'error-red', 'tertiary-blue', 'transparent']),
  /**
   * Size
   */
  size: PropTypes.oneOf(['small', 'medium', 'large', 'extra-large']),
  /**
   * Disabled
   */
  disabled: PropTypes.bool,
  /**
   * Bold
   */
  bold: PropTypes.bool,
  /**
   * Effect on hover
   */
  hoverEffect: PropTypes.oneOf(['hover', 'underline']),
  /**
   * Apply border: default true
   */
  bordered: PropTypes.bool
}

Button.defaultProps = {
  color: 'main-dark-blue',
  backgroundColor: 'transparent',
  disabled: false,
  size: 'large',
  bold: false,
  hoverEffect: 'hover',
  bordered: true
}

export default Button
