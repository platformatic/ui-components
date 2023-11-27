'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import styles from './Input.module.css'
import commonStyles from '../Common.module.css'
import PlatformaticIcon from '../PlatformaticIcon'
import { MAIN_DARK_BLUE, MAIN_GREEN, WHITE } from '../constants'
import BorderedBox from '../BorderedBox'

function Input ({
  placeholder,
  value,
  name,
  borderColor,
  errorMessage,
  onChange,
  disabled,
  beforeIcon,
  afterIcon,
  focused,
  placeholderApart,
  backgroundTransparent,
  inputTextClassName,
  verticalPaddingClassName,
  dataAttrName,
  dataAttrValue,
  readOnly
}) {
  let inputClassName = `${commonStyles.fullWidth} ${styles.input} ${inputTextClassName}`
  inputClassName += verticalPaddingClassName || `${styles.inputDefaultVerticalPadding}`
  inputClassName += commonStyles[`bordered--${borderColor}`] + ' ' + commonStyles[`text--${borderColor}`]
  if (backgroundTransparent) inputClassName += ` ${commonStyles['background-color-transparent']}`
  const showError = errorMessage.length > 0
  if (showError) inputClassName += ' ' + commonStyles['bordered--error-red']
  if (disabled) inputClassName += ' ' + commonStyles['apply-opacity-30']
  if (beforeIcon) inputClassName += ' ' + styles.beforeIconPadding
  if (afterIcon) inputClassName += ' ' + styles.afterIconPadding
  const inputPlaceholder = placeholderApart ? '' : placeholder

  const dataProps = {}
  if (dataAttrName && dataAttrValue) {
    dataProps[`data-${dataAttrName}`] = dataAttrValue
  }

  const cmp = (
    <div className={styles.container} {...dataProps}>
      <div className={styles.inputContainer}>
        {beforeIcon && <div className={styles.beforeInputIcon}><PlatformaticIcon iconName={beforeIcon.iconName} size='small' data-testid='before-icon' color={beforeIcon.color} onClick={() => beforeIcon.onClick()} /></div>}
        <input
          type='text'
          name={name}
          value={value}
          className={inputClassName}
          onChange={onChange}
          disabled={disabled}
          placeholder={inputPlaceholder}
          readOnly={readOnly}
          aria-readonly={readOnly}
        />
        {placeholderApart && <p className={styles.placeholderAPart}>{placeholder}</p>}
        {afterIcon && <div className={styles.afterInputIcon}><PlatformaticIcon iconName={afterIcon.iconName} color={afterIcon.color} data-testid='after-icon' onClick={null} /></div>}
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
  borderColor: PropTypes.oneOf([MAIN_GREEN, MAIN_DARK_BLUE, WHITE]),
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
  readOnly: PropTypes.bool
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
  shadowPlaceholder: false,
  backgroundTransparent: false,
  inputTextClassName: '',
  verticalPaddingClassName: '',
  dataAttrName: '',
  dataAttrValue: '',
  readOnly: false
}

export default Input
