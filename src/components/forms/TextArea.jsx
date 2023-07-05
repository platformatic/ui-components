'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import styles from './TextArea.module.css'
import commonStyles from '../Common.module.css'
import PlatformaticIcon from '../PlatformaticIcon'
import { MAIN_DARK_BLUE, MAIN_GREEN } from '../constants'

function TextArea ({ placeholder, value, name, borderColor, errorMessage, onChange, disabled, afterIcon, rows, cols }) {
  let className = styles.textAreaContainer + ' ' + commonStyles[`bordered--${borderColor}`] + ' ' + commonStyles[`text--${borderColor}`]
  const showError = errorMessage.length > 0
  if (showError) className += ' ' + commonStyles['bordered--error-red']
  if (disabled) className += ' ' + commonStyles['apply-opacity-30']
  const textAreaClassName = `${commonStyles.fullWidth} ${styles.textarea}`

  return (
    <div className={styles.container}>
      <div className={className}>
        <textarea name={name} className={textAreaClassName} onChange={onChange} disabled={disabled} placeholder={placeholder} rows={rows} cols={cols} value={value} />
        {afterIcon && <div className={styles.afterIcon}><PlatformaticIcon iconName={afterIcon.iconName} color={afterIcon.color} data-testid='after-icon' onClick={null} /></div>}
      </div>
      {showError && <span className={commonStyles['error-message']}>{errorMessage}</span>}
    </div>
  )
}

TextArea.propTypes = {
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
   * afterIcon: PlatformaticIcon props
   */
  afterIcon: PropTypes.shape({
    iconName: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
  }),
  /**
   * rows
   */
  rows: PropTypes.number,
  /**
   * cols
   */
  cols: PropTypes.number
}

TextArea.defaultProps = {
  placeholder: '',
  value: '',
  name: '',
  borderColor: MAIN_DARK_BLUE,
  errorMessage: '',
  onChange: () => {},
  disabled: false,
  afterIcon: null,
  rows: 5,
  cols: 20
}

export default TextArea
