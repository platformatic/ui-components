'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import styles from './Input.module.css'
import commonStyles from '../Common.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Input ({ placeholder, value, name, borderColor, errorMessage, onChange, disabled, beforeInputIcon, afterInputIcon, afterInputIconColor, onClickBeforeIcon }) {
  const className = styles.inputContainer + ' ' + commonStyles[`bordered--${borderColor}`] + ' ' + commonStyles[`text--${borderColor}`] + ' ' + commonStyles.padded
  return (
    <div className={styles.container}>
      <div className={className}>
        {beforeInputIcon && <FontAwesomeIcon icon={beforeInputIcon} className={styles.beforeInputIcon} data-testid='before-icon' color='white' onClick={() => onClickBeforeIcon()} />}
        <input type='text' name={name} value={value} placeholder={placeholder} className={styles.fullWidth} onChange={onChange} disabled={disabled} />
        {afterInputIcon && <FontAwesomeIcon icon={afterInputIcon} className={styles[`color-${afterInputIconColor}`]} data-testid='after-icon' />}
      </div>
      {errorMessage.length > 0 && <span className={commonStyles['error-message']}>{errorMessage}</span>}
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
  borderColor: PropTypes.oneOf(['main-green', 'main-dark-blue']),
  /**
   * onChange
   */
  onChange: PropTypes.func,
  /**
   * Disabled
   */
  disabled: PropTypes.bool,
  /**
   * beforeInputIcon
   */
  beforeInputIcon: PropTypes.object,
  /**
   * afterInputIcon
   */
  afterInputIcon: PropTypes.object,
  /**
   * afterInputIconColor
   */
  afterInputIconColor: PropTypes.oneOf(['error-red', 'main-dark-blue']),
  /**
   * onClickBeforeIcon
   */
  onClickBeforeIcon: PropTypes.func
}

Input.defaultProps = {
  placeholder: '',
  value: null,
  name: '',
  borderColor: 'main-green',
  errorMessage: '',
  onChange: () => {},
  disabled: false,
  beforeInputIcon: null,
  afterInputIcon: null,
  onClickBeforeIcon: () => {},
  afterInputIconColor: 'main-dark-blue'
}

export default Input
