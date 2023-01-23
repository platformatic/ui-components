'use strict'
import React from 'react'
import styles from './Checkbox.module.css'
export default function Checkbox (props) {
  const { disabled, ...rest } = props
  let className = `${styles.checkbox}`
  if (disabled) className += ` ${styles.disabled}`
  return (
    <input type='checkbox' className={className} disabled={disabled} {...rest} />
  )
}
