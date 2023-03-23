'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import styles from './ToggleSwitch.module.css'
import commonStyles from '../Common.module.css'

function ToggleSwitch ({ name, label, errorMessage, onChange, checked, disabled }) {
  let className = `${styles.switch} `
  if (disabled) className += styles.disabled

  return (
    <>
      <div className={styles.container}>
        <label className={className}>
          <input type='checkbox' name={name} onChange={onChange} checked={checked} disabled={disabled} />
          <span className={`${styles.slider} ${styles.round}`} />
        </label>
        <span className={styles.label}>{label}</span>
      </div>
      {errorMessage.length > 0 && <span className={commonStyles['error-message']}>{errorMessage}</span>}
    </>
  )
}

ToggleSwitch.propTypes = {
  /**
   * name
   */
  name: PropTypes.string,
  /**
   * label
   */
  label: PropTypes.string,
  /**
   * errorMessage
   */
  errorMessage: PropTypes.string,
  /**
   * checked
   */
  checked: PropTypes.bool,
  /**
   * disabled
   */
  disabled: PropTypes.bool,
  /**
   * onChange of border
   */
  onChange: PropTypes.func
}

ToggleSwitch.defaultProps = {
  name: '',
  label: '',
  errorMessage: '',
  checked: false,
  disabled: false,
  onChange: () => {}
}

export default ToggleSwitch
