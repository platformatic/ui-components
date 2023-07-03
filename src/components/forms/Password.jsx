'use strict'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './Password.module.css'
import commonStyles from '../Common.module.css'
import PlatformaticIcon from '../PlatformaticIcon'
import { MAIN_DARK_BLUE, MAIN_GREEN } from '../constants'

function Input ({ placeholder, value, name, borderColor, errorMessage, onChange, disabled }) {
  const [type, setType] = useState('password')
  let passwordClassName = `${commonStyles.fullWidth} ${styles.password} `
  passwordClassName += commonStyles[`bordered--${borderColor}`] + ' ' + commonStyles[`text--${borderColor}`] + ' ' + styles.afterIconPadding
  const showError = errorMessage.length > 0
  if (showError) passwordClassName += ' ' + commonStyles['bordered--error-red']
  if (disabled) passwordClassName += ' ' + commonStyles['apply-opacity-30']

  return (
    <div className={styles.container}>
      <div className={styles.passwordContainer}>
        <input type={type} name={name} value={value} className={passwordClassName} onChange={onChange} disabled={disabled} placeholder={placeholder} />
        <div className={styles.afterInputIcon}>
          {type === 'password'
            ? <PlatformaticIcon iconName='EyeOpenedIcon' color={MAIN_DARK_BLUE} data-testid='after-eye-opened-icon' onClick={() => setType('text')} />
            : <PlatformaticIcon iconName='EyeClosedIcon' color={MAIN_DARK_BLUE} data-testid='after-eye-closed-icon' onClick={() => setType('password')} />}
        </div>
      </div>
      {showError && <span className={commonStyles['error-message']}>{errorMessage}</span>}
    </div>
  )
}

Input.propTypes = {
  /**
   * placeholder
   */
  placeholder: PropTypes.string,
  /**
   * value
   */
  value: PropTypes.string,
  /**
   * name
   */
  name: PropTypes.string,
  /**
   * color of border
   */
  borderColor: PropTypes.oneOf([MAIN_GREEN, MAIN_DARK_BLUE]),
  /**
   * onChange
   */
  onChange: PropTypes.func,
  /**
   * Disabled
   */
  disabled: PropTypes.bool,
  /**
   * addFocus
   */
  focused: PropTypes.bool,
  /**
   * placeholderApart
   */
  placeholderApart: PropTypes.bool
}

Input.defaultProps = {
  placeholder: '',
  value: '',
  name: '',
  borderColor: MAIN_DARK_BLUE,
  errorMessage: '',
  onChange: () => {},
  disabled: false,
  focused: false,
  shadowPlaceholder: false
}

export default Input
