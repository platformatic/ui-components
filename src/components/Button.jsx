'use strict'

import React from 'react'
import styles from './Button.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Button (props) {
  // buttonClass: primary|secondary|transparent
  // colorClass: green|white|red
  // size: small|medium|large|extra-large
  const { icon, label, buttonClass = 'secondary', color = 'green', disabled, size = 'large', bold = false, ...rest } = props
  let className = `${styles.button} ${styles[buttonClass + '-' + color]} ${styles['button-' + size]}`
  if (disabled) {
    className += ` ${styles.disabled}`
    if (buttonClass === 'transparent') {
      className += ` ${styles['disabled-transparent']}`
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
