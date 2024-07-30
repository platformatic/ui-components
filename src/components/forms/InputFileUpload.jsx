'use strict'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './InputFileUpload.module.css'
import commonStyles from '../Common.module.css'
import PlatformaticIcon from '../PlatformaticIcon'
import Button from '../Button'
import { ERROR_RED, MAIN_DARK_BLUE, MAIN_GREEN, RICH_BLACK, TRANSPARENT, WHITE } from '../constants'

function InputFileUpload ({
  placeholder = '',
  borderColor = MAIN_GREEN,
  errorMessage = '',
  errorMessageTextClassName = '',
  onFileSelect = () => {},
  disabled = false,
  beforeIcon = null,
  afterIcon = null,
  backgroundColor = WHITE,
  inputTextClassName = '',
  verticalPaddingClassName = '',
  dataAttrName = '',
  dataAttrValue = '',
  readOnly = false,
  removeFileButton = {},
  onClickDetail = () => {}
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
  const inputPlaceholder = placeholder
  const [file, setFile] = useState(null)

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

  function handleFileInput (e) {
    setFile(e.target.files[0])
    onFileSelect(e.target.files[0])
  }

  function clearFile () {
    setFile(null)
    onFileSelect(null)
  }

  return (
    <div className={styles.container} {...dataProps}>
      <div className={styles.inputContainer}>
        {beforeIcon && <div className={styles.beforeInputIcon}><PlatformaticIcon iconName={beforeIcon.iconName} size='small' data-testid='before-icon' color={beforeIcon.color} onClick={() => beforeIcon.onClick()} /></div>}
        <input
          type='file'
          className={focus ? focusedClassName() : normalClassName()}
          onChange={handleFileInput}
          disabled={disabled}
          placeholder={inputPlaceholder}
          readOnly={readOnly}
          aria-readonly={readOnly}
          onFocus={() => handleFocus()}
          onBlur={() => handleBlur()}
        />
        {file !== null && <span onClick={() => onClickDetail()}>Detail</span>}
        {file !== null && (
          <Button
            textClass={removeFileButton?.textClass ?? ''}
            paddingClass={removeFileButton?.paddingClass ?? ''}
            label={removeFileButton?.label ?? 'Remove file'}
            color={removeFileButton?.color ?? ERROR_RED}
            type='button'
            onClick={() => clearFile()}
          />
        )}
      </div>
      {showError && <span className={errorMessageClassName}>{errorMessage}</span>}
    </div>
  )
}

InputFileUpload.propTypes = {
  /**
   * placeholder
   */
  placeholder: PropTypes.string,
  /**
   * color of border
   */
  borderColor: PropTypes.oneOf([MAIN_GREEN, MAIN_DARK_BLUE, WHITE, RICH_BLACK]),
  /**
   * color of border
   */
  backgroundColor: PropTypes.oneOf([MAIN_GREEN, MAIN_DARK_BLUE, WHITE, RICH_BLACK, TRANSPARENT]),
  /**
   * onFileSelect
   */
  onFileSelect: PropTypes.func,
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
  errorMessageTextClassName: PropTypes.string,
  /**
   * removeFileButton
  */
  removeFileButton: PropTypes.object,
  /**
     * onClickDetail
    */
  onClickDetail: PropTypes.func
}

export default InputFileUpload
