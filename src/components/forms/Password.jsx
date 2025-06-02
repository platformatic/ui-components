import React, { useEffect, useState } from 'react'
import styles from './Password.module.css'
import commonStyles from '../Common.module.css'
import PlatformaticIcon from '../PlatformaticIcon'
import { MAIN_DARK_BLUE, MAIN_GREEN } from '../constants'

function Password ({
  placeholder = '',
  value = '',
  name = '',
  borderColor = MAIN_DARK_BLUE,
  errorMessage = '',
  errorMessageTextClassName = '',
  onChange = () => {},
  disabled = false
}) {
  const [type, setType] = useState('password')
  let passwordClassName = `${commonStyles.fullWidth} ${styles.password} `
  passwordClassName += commonStyles[`bordered--${borderColor}`] + ' ' + commonStyles[`text--${borderColor}`] + ' ' + styles.afterIconPadding
  const errorMessageClassName = errorMessageTextClassName || commonStyles['error-message']
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
      {showError && <span className={errorMessageClassName}>{errorMessage}</span>}
    </div>
  )
}

export default Password
