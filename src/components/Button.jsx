'use strict'

import React from 'react'
import styles from './Button.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Button (props) {
  const { icon, label, primary, color, disabled } = props
  let buttonClass = 'primary'
  if (!primary) {
    buttonClass = 'secondary'
  }

  let colorClass = 'green'
  if (color === 'red') {
    colorClass = 'red'
  }
  return (
    <button className={`${styles.button} ${styles[buttonClass + '-' + colorClass]} ${disabled ? styles.disabled : null}`} disabled={disabled} {...props}>
      {icon ? <FontAwesomeIcon icon={icon} className='mr-2' data-testid='button-icon' /> : null}
      <span>{label}</span>
    </button>
  )
}
