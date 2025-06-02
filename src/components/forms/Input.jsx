import React, { useState } from 'react'
import styles from './Input.module.css'
import commonStyles from '../Common.module.css'
import PlatformaticIcon from '../PlatformaticIcon'
import { ERROR_RED, MAIN_GREEN, WHITE } from '../constants'

function Input ({
  placeholder = '',
  value = '',
  name = '',
  borderColor = MAIN_GREEN,
  errorMessage = '',
  errorMessageTextClassName = '',
  onChange = () => {},
  disabled = false,
  beforeIcon = null,
  afterIcon = null,
  placeholderApart = '',
  backgroundColor = WHITE,
  inputTextClassName = '',
  verticalPaddingClassName = '',
  dataAttrName = '',
  dataAttrValue = '',
  readOnly = false
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

export default Input
