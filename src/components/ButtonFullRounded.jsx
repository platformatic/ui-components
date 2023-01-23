'use strict'
import React from 'react'
import styles from './ButtonFullRounded.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function ButtonFullRounded (props) {
  // colorClass: white
  // size: small|medium|large
  const { icon, color = 'white', disabled, size = 'small' } = props
  let className = `${styles.buttonRoundedFull} ${styles[color]} ${styles['button-' + size]}`
  if (disabled) className += ` ${styles.disabled}`

  return (
    <button className={className} disabled={disabled} {...props}>
      <FontAwesomeIcon icon={icon} data-testid='button-icon' />
    </button>
  )
}
