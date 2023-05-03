'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import styles from './Input.module.css'
import commonStyles from '../Common.module.css'
import PlatformaticIcon from '../PlatformaticIcon'
import { MAIN_DARK_BLUE, MAIN_GREEN } from '../constants'
import BorderedBox from '../BorderedBox'

function Input ({ placeholder, value, name, borderColor, errorMessage, onChange, disabled, beforeIcon, afterIcon, focused, placeholderApart }) {
  let className = styles.inputContainer + ' ' + commonStyles[`bordered--${borderColor}`] + ' ' + commonStyles[`text--${borderColor}`] + ' ' + commonStyles.padded
  const showError = errorMessage.length > 0
  if (showError) className += ' ' + commonStyles['bordered--error-red']
  if (disabled) className += ' ' + commonStyles['apply-opacity-30']
  const inputPlaceholder = placeholderApart ? '' : placeholder
  const inputClassName = `${commonStyles.fullWidth} ${styles.input}`

  const cmp = (
    <div className={styles.container}>
      <div className={className}>
        {beforeIcon && <PlatformaticIcon iconName={beforeIcon.iconName} classes={styles.beforeInputIcon} size='small' data-testid='before-icon' color={beforeIcon.color} onClick={() => beforeIcon.onClick()} />}
        <input type='text' name={name} value={value} className={inputClassName} onChange={onChange} disabled={disabled} placeholder={inputPlaceholder} />
        {placeholderApart && <p className={styles.placeholderAPart}>{placeholder}</p>}
        {afterIcon && <PlatformaticIcon iconName={afterIcon.iconName} color={afterIcon.color} data-testid='after-icon' onClick={null} />}
      </div>
      {showError && <span className={commonStyles['error-message']}>{errorMessage}</span>}
    </div>
  )

  return focused ? (<BorderedBox classes={styles.paddingFocused} color={MAIN_GREEN} backgroundColor={MAIN_GREEN} opaque={10}>{cmp}</BorderedBox>) : cmp
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
  }),
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
  borderColor: MAIN_GREEN,
  errorMessage: '',
  onChange: () => {},
  disabled: false,
  beforeIcon: null,
  afterIcon: null,
  focused: false,
  shadowPlaceholder: false
}

export default Input
