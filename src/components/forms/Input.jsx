'use strict'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './Input.module.css'
import commonStyles from '../Common.module.css'
import PlatformaticIcon from '../PlatformaticIcon'
import { ERROR_RED, MAIN_DARK_BLUE, MAIN_GREEN, RICH_BLACK, TRANSPARENT, WHITE } from '../constants'

function Input ({
  placeholder,
  value,
  name,
  borderColor,
  errorMessage,
  errorMessageTextClassName,
  onChange,
  disabled,
  beforeIcon,
  afterIcon,
  placeholderApart,
  backgroundColor,
  inputTextClassName,
  verticalPaddingClassName,
  dataAttrName,
  dataAttrValue,
  readOnly
}) {
  let baseInputClassName = `${commonStyles.fullWidth} ${styles.input} ${inputTextClassName} `
  baseInputClassName += verticalPaddingClassName || ` ${styles.inputDefaultVerticalPadding} `
  baseInputClassName += ' ' + commonStyles[`text--${borderColor}`] + ' ' + commonStyles[`background-color-${backgroundColor}`]
  const errorMessageClassName = errorMessageTextClassName || commonStyles['error-message']
  const showError = errorMessage.length > 0
  if (disabled) baseInputClassName += ' ' + commonStyles['apply-opacity-30']
  if (beforeIcon) baseInputClassName += ' ' + styles.beforeIconPadding
  if (afterIcon) baseInputClassName += ' ' + styles.afterIconPadding
  const [focus, setFocus] = useState(false)
  const inputPlaceholder = placeholderApart ? '' : placeholder

  const dataProps = {}
  if (dataAttrName && dataAttrValue) {
    dataProps[`data-${dataAttrName}`] = dataAttrValue
  }

  function focusedClassName () {
    const useEffectColor = showError ? ERROR_RED : borderColor
    return (baseInputClassName + ' ' + commonStyles[`bordered--${useEffectColor}-100`])
  }

  function normalClassName () {
    const useEffectColor = showError ? ERROR_RED : borderColor
    return baseInputClassName + ' ' + commonStyles[`bordered--${useEffectColor}-70`]
  }

  function handleFocus () {
    if (!disabled) {
      setFocus(true)
    }
  }

  function handleBlur () {
    if (!disabled) setFocus(false)
  }

  return (
    <div className={styles.container} {...dataProps}>
      <div className={styles.inputContainer}>
        {beforeIcon && <div className={styles.beforeInputIcon}><PlatformaticIcon iconName={beforeIcon.iconName} size='small' data-testid='before-icon' color={beforeIcon.color} onClick={() => beforeIcon.onClick()} /></div>}
        <input
          type='text'
          name={name}
          value={value}
          className={focus ? focusedClassName() : normalClassName()}
          onChange={onChange}
          disabled={disabled}
          placeholder={inputPlaceholder}
          readOnly={readOnly}
          aria-readonly={readOnly}
          onFocus={() => handleFocus()}
          onBlur={() => handleBlur()}
        />
        {placeholderApart && <p className={styles.placeholderAPart}>{placeholder}</p>}
        {afterIcon && <div className={styles.afterInputIcon}><PlatformaticIcon iconName={afterIcon.iconName} color={afterIcon.color} data-testid='after-icon' onClick={null} /></div>}
      </div>
      {showError && <span className={errorMessageClassName}>{errorMessage}</span>}
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
  borderColor: PropTypes.oneOf([MAIN_GREEN, MAIN_DARK_BLUE, WHITE, RICH_BLACK]),
  /**
   * color of border
   */
  backgroundColor: PropTypes.oneOf([MAIN_GREEN, MAIN_DARK_BLUE, WHITE, RICH_BLACK, TRANSPARENT]),
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
   * placeholderApart
   */
  placeholderApart: PropTypes.bool,
  /**
   * backgroundTransparent
   */
  backgroundTransparent: PropTypes.bool,
  /**
   * inputTextClassName
   */
  inputTextClassName: PropTypes.string,
  /**
   * verticalPaddingClassName
   */
  verticalPaddingClassName: PropTypes.string,
  /**
   * dataAttrName
  */
  dataAttrName: PropTypes.string,
  /**
   * dataAttrValue
  */
  dataAttrValue: PropTypes.string,
  /**
   * readOnly
  */
  readOnly: PropTypes.bool,
  /**
   * errorMessage
  */
  errorMessage: PropTypes.string,
  /**
   * errorMessageTextClassName
  */
  errorMessageTextClassName: PropTypes.string
}

Input.defaultProps = {
  placeholder: '',
  value: '',
  name: '',
  borderColor: MAIN_GREEN,
  backgroundColor: WHITE,
  errorMessage: '',
  errorMessageTextClassName: '',
  onChange: () => {},
  disabled: false,
  beforeIcon: null,
  afterIcon: null,
  shadowPlaceholder: false,
  inputTextClassName: '',
  verticalPaddingClassName: '',
  dataAttrName: '',
  dataAttrValue: '',
  readOnly: false
}

export default Input
