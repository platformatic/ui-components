'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import styles from './Input.module.css'
import commonStyles from '../Common.module.css'
import PlatformaticIcon from '../PlatformaticIcon'

function Input ({ placeholder, value, name, borderColor, errorMessage, onChange, disabled, beforeIcon, afterIcon }) {
  let className = styles.inputContainer + ' ' + commonStyles[`bordered--${borderColor}`] + ' ' + commonStyles[`text--${borderColor}`] + ' ' + commonStyles.padded
  const showError = errorMessage.length > 0
  if (showError) className += ' ' + commonStyles['bordered--error-red']
  if (disabled) className += ' ' + commonStyles['apply-opacity-30']

  return (
    <div className={styles.container}>
      <div className={className}>
        {beforeIcon && <PlatformaticIcon iconName={beforeIcon.iconName} classes={styles.beforeInputIcon} size='small' data-testid='before-icon' color={beforeIcon.color} onClick={() => beforeIcon.onClick()} />}
        <input type='text' name={name} value={value} placeholder={placeholder} className={styles.fullWidth} onChange={onChange} disabled={disabled} />
        {afterIcon && <PlatformaticIcon iconName={afterIcon.iconName} color={afterIcon.color} data-testid='after-icon' onClick={null} />}
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
   * beforeIcon: PlatformaticIcon props
   */
  beforeIcon: PropTypes.shape({
    iconName: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
  }),
  /**
   * afterIcon: PlatformaticIcon props
   */
  afterIcon: PropTypes.shape({
    iconName: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
  })
}

Input.defaultProps = {
  placeholder: '',
  value: '',
  name: '',
  borderColor: 'main-green',
  errorMessage: '',
  onChange: () => {},
  disabled: false,
  beforeIcon: null,
  afterIcon: null
}

export default Input
