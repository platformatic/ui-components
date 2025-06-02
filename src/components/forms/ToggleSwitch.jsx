import React from 'react'
import styles from './ToggleSwitch.module.css'
import commonStyles from '../Common.module.css'
import { MEDIUM, SMALL } from '../constants'

function ToggleSwitch ({
  name = '',
  label = '',
  labelClassName = '',
  errorMessage = '',
  errorMessageTextClassName = '',
  onChange = () => {},
  checked = false,
  disabled = false,
  size = MEDIUM
}) {
  let className = `${styles.switch} `
  className += styles[`switch--${size}`] + ' '
  if (disabled) className += styles.disabled
  const styleLabel = labelClassName || styles.defaultLabel
  const errorMessageClassName = errorMessageTextClassName || commonStyles['error-message']
  let sliderClassName = `${styles.slider} ${styles.round} `
  sliderClassName += styles[`slider--${size}`]

  return (
    <>
      <div className={styles.container}>
        <label className={className}>
          <input type='checkbox' name={name} onChange={onChange} checked={checked} disabled={disabled} />
          <span className={sliderClassName} />
        </label>
        <span className={styleLabel}>{label}</span>
      </div>
      {errorMessage.length > 0 && <span className={errorMessageClassName}>{errorMessage}</span>}
    </>
  )
}

export default ToggleSwitch
