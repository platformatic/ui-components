import React from 'react'
import styles from './TextArea.module.css'
import commonStyles from '../Common.module.css'
import PlatformaticIcon from '../PlatformaticIcon'
import { MAIN_DARK_BLUE } from '../constants'

function TextArea ({
  placeholder = '',
  value = '',
  name = '',
  borderColor = MAIN_DARK_BLUE,
  errorMessage = '',
  errorMessageTextClassName = '',
  onChange = () => {},
  disabled = false,
  afterIcon = null,
  rows = 5,
  cols = 20
}) {
  let className = styles.textAreaContainer + ' ' + commonStyles[`bordered--${borderColor}`] + ' ' + commonStyles[`text--${borderColor}`]
  const showError = errorMessage.length > 0
  const errorMessageClassName = errorMessageTextClassName || commonStyles['error-message']
  if (showError) className += ' ' + commonStyles['bordered--error-red']
  if (disabled) className += ' ' + commonStyles['apply-opacity-30']
  const textAreaClassName = `${commonStyles.fullWidth} ${styles.textarea}`

  return (
    <div className={styles.container}>
      <div className={className}>
        <textarea name={name} className={textAreaClassName} onChange={onChange} disabled={disabled} placeholder={placeholder} rows={rows} cols={cols} value={value} />
        {afterIcon && <div className={styles.afterIcon}><PlatformaticIcon iconName={afterIcon.iconName} color={afterIcon.color} data-testid='after-icon' onClick={null} /></div>}
      </div>
      {showError && <span className={errorMessageClassName}>{errorMessage}</span>}
    </div>
  )
}

export default TextArea
