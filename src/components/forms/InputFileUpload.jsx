import React, { useState } from 'react'
import styles from './InputFileUpload.module.css'
import commonStyles from '../Common.module.css'
import PlatformaticIcon from '../PlatformaticIcon'
import Button from '../Button'
import { ACTIVE_AND_INACTIVE_STATUS, ERROR_RED, MAIN_DARK_BLUE, MAIN_GREEN, RICH_BLACK, TRANSPARENT, WHITE } from '../constants'

function InputFileUpload ({
  idInputFile = 'fileUpload',
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
  showDetailButton = true,
  detailFileButton = {},
  onClickDetail = () => {},
  acceptFiles = '*'
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
    if ((e.target.files?.length ?? 0) > 0) {
      setFile(e.target.files[0])
      onFileSelect(e.target.files[0])
    } else {
      // Ignore the Cancel Button
      if (file !== null) {
        document.getElementById(idInputFile).value = file.name
      }
    }
  }

  function clearFile () {
    document.getElementById(idInputFile).value = ''
    setFile(null)
    onFileSelect(null)
  }

  return (
    <div className={styles.container} {...dataProps}>
      <div className={styles.content}>
        <div className={styles.inputContainer}>
          {beforeIcon && <div className={styles.beforeInputIcon}><PlatformaticIcon iconName={beforeIcon.iconName} size='small' data-testid='before-icon' color={beforeIcon.color} onClick={() => beforeIcon.onClick()} /></div>}
          <input
            id={idInputFile}
            type='file'
            className={focus ? focusedClassName() : normalClassName()}
            onChange={handleFileInput}
            disabled={disabled}
            placeholder={inputPlaceholder}
            readOnly={readOnly}
            aria-readonly={readOnly}
            onFocus={() => handleFocus()}
            onBlur={() => handleBlur()}
            accept={acceptFiles}
            style={{ display: 'none' }}
          />
          <label
            for={idInputFile}
            className={focus ? focusedClassName() : normalClassName()}
          >
            {file !== null ? file.name : <span className={styles.inputPlaceholderClassName}>{inputPlaceholder}</span>}
          </label>
          {file !== null && showDetailButton && (
            <div className={styles.afterInputDetail}>
              <Button
                textClass={detailFileButton?.textClass ?? ''}
                paddingClass={detailFileButton?.paddingClass ?? ''}
                label={detailFileButton?.label ?? 'Details'}
                color={detailFileButton?.color ?? WHITE}
                type='button'
                onClick={() => onClickDetail()}
                bordered={false}
                hoverEffect={ACTIVE_AND_INACTIVE_STATUS}
              />
            </div>
          )}
        </div>
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

export default InputFileUpload
