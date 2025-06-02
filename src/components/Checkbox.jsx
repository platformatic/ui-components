import React from 'react'
import styles from './Checkbox.module.css'
import { MAIN_DARK_BLUE, MEDIUM } from './constants'
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

export default Checkbox
