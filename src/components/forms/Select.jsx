'use strict'
import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import styles from './Select.module.css'
import commonStyles from '../Common.module.css'
import { MAIN_DARK_BLUE, MAIN_GREEN, RICH_BLACK, SMALL, WHITE } from '../constants'
import PlatformaticIcon from '../PlatformaticIcon'

function Select ({
  defaultContainerClassName = '',
  placeholder = 'this is the default',
  name = '',
  value = '',
  id = '',
  options = [],
  defaultOptionsClassName = '',
  optionsBorderedBottom = true,
  borderColor = MAIN_GREEN,
  borderListColor = '',
  errorMessage = '',
  errorMessageTextClassName = '',
  onSelect = () => {},
  disabled = false,
  mainColor = MAIN_DARK_BLUE,
  dataAttrName = '',
  dataAttrValue = '',
  backgroundColor = WHITE,
  inputTextClassName = ''
}) {
  const inputRef = useRef()
  const [showOptions, setShowOptions] = useState(false)
  // eslint-disable-next-line  no-unused-vars
  const [isSelected, setIsSelected] = useState(false)
  const [isOnFocus, setIsOnFocus] = useState(false)
  const errorMessageClassName = errorMessageTextClassName || commonStyles['error-message']
  const showError = errorMessage.length > 0
  const containerClassName = `${styles.container} ${defaultContainerClassName} `
  let inputClassName = `${commonStyles.fullWidth} ${styles.select} ${inputTextClassName}`
  inputClassName += ' ' + styles[`select-${mainColor}`]
  inputClassName += ' ' + commonStyles[`text--${borderColor}`]
  let optionsClassName = `${styles.options} ${defaultOptionsClassName} `
  inputClassName += ' ' + commonStyles[`background-color-${backgroundColor}`]
  optionsClassName += commonStyles[`background-color-${backgroundColor}`]

  if (borderListColor) {
    optionsClassName += ' ' + styles['bordered-options']
    optionsClassName += ' ' + commonStyles[`bordered--${borderListColor}-30`]
  }
  let singleOptionClassName = `${styles.option} ` + commonStyles[`bordered--${mainColor}-70`] + ' ' + commonStyles[`hover-background-color-opaque-${mainColor}`]
  if (optionsBorderedBottom) {
    singleOptionClassName += ` ${styles['bordered-bottom']}`
  }

  const optionSpanClassName = commonStyles[`text--${mainColor}-70`]
  const optionSpanClassNameSelected = commonStyles[`text--${mainColor}`]
  const descriptionClassName = commonStyles[`text--${mainColor}`]

  const [wrapperClassName, setWrapperClassName] = useState(normalClassName())

  function onFocusClassName () {
    return inputClassName + ' ' + commonStyles[`bordered--${borderColor}-100`]
  }

  function normalClassName () {
    const baseClassName = inputClassName
    if (showError) {
      inputClassName += ' ' + commonStyles['bordered--error-red']
    } else {
      inputClassName += ' ' + commonStyles[`bordered--${borderColor}-70`]
    }
    if (disabled) inputClassName += ' ' + commonStyles['apply-opacity-30']
    return baseClassName
  }

  const dataProps = {}
  if (dataAttrName && dataAttrValue) {
    dataProps[`data-${dataAttrName}`] = dataAttrValue
  }

  function handleNotSelectable (callback = () => {}) {
    setIsSelected(true)
    setShowOptions(false)
    callback()
  }
  function setSelected ({ label, value }) {
    setIsSelected(true)
    setShowOptions(false)
    /* eslint-disable-next-line no-undef */
    onSelect(new CustomEvent('valueSelected', {
      detail: {
        name,
        label,
        value
      }
    }))
  }

  useEffect(() => {
    if (value.length === 0) {
      setIsSelected(false)
    }
  }, [value])

  useEffect(() => {
    if (disabled) {
      const className = normalClassName() + ' ' + commonStyles['apply-opacity-30']
      setWrapperClassName(className)
    } else {
      setWrapperClassName(normalClassName())
    }
  }, [disabled])

  function renderLi (option, index, isOptionSelected) {
    return (
      <li
        key={index} className={singleOptionClassName} onClick={() => {
          if (option.notSelectable) {
            return handleNotSelectable(option.onClick && option.onClick())
          }
          return setSelected(option)
        }}
      >
        <div className={styles.liContent}>
          {option.iconName && <PlatformaticIcon iconName={option.iconName} color={option.iconColor || mainColor} size={option.iconSize ?? SMALL} onClick={null} inactive={!isOptionSelected} />}
          <span className={isOptionSelected ? optionSpanClassNameSelected : optionSpanClassName}>{option.label}</span>
        </div>
        {option.descriptionValue && <span className={`${descriptionClassName} ${styles.descriptionValue}`}>{option.descriptionValue}</span>}
      </li>
    )
  }

  function renderOptions () {
    const notFilterableOptions = options.filter(option => option.notFilterable)
    return (
      <ul className={optionsClassName}>
        {notFilterableOptions.length > 0 && notFilterableOptions.map((option, index) => renderLi(option, index))}
        {options.length > 0 ? options.map((option, index) => renderLi(option, index, option.label === value)) : <li className={singleOptionClassName}><div className={styles.liContent}><span className={commonStyles[`text--${mainColor}`]}>No data found</span></div></li>}
      </ul>
    )
  }

  function handleFocus () {
    if (!isOnFocus) {
      setIsOnFocus(true)
      setWrapperClassName(onFocusClassName())
    }
    setShowOptions(true)
  }

  function handleBlur (event) {
    event.preventDefault()
    setTimeout(() => {
      if (showOptions) {
        // setShowOptions(false)
        setIsOnFocus(false)
        setWrapperClassName(normalClassName())
      }
    }, 250)
  }

  return (
    <div className={containerClassName} {...dataProps}>
      <div className={styles.selectContainer}>
        <input type='text' name={name} value={value} className={wrapperClassName} ref={inputRef} disabled={disabled} placeholder={placeholder} onFocus={() => handleFocus()} onBlur={(e) => handleBlur(e)} readOnly />
        <div className={styles.icons}>
          <PlatformaticIcon iconName={showOptions ? 'ArrowUpIcon' : 'ArrowDownIcon'} color={borderColor} disabled={disabled} onClick={() => setShowOptions(!showOptions)} size={SMALL} />
        </div>
      </div>
      {showOptions && !showError && renderOptions()}
      {showError && <span className={errorMessageClassName}>{errorMessage}</span>}
    </div>
  )
}

Select.propTypes = {
  /**
   * defaultContainerClassName
   */
  defaultContainerClassName: PropTypes.string,
  /**
   * placeholder
   */
  placeholder: PropTypes.string,
  /**
   * name
   */
  name: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  /**
   * value
   */
  value: PropTypes.string,
  /**
   * options
   */
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.func
    ]),
    iconName: PropTypes.string,
    iconSize: PropTypes.string,
    iconColor: PropTypes.string,
    notSelectable: PropTypes.bool,
    notFilterable: PropTypes.bool,
    onClick: PropTypes.func,
    descriptionValue: PropTypes.string
  })),
  /**
   * defaultOptionsClassName
   */
  defaultOptionsClassName: PropTypes.string,
  /**
   * optionsBorderedBottom
   */
  optionsBorderedBottom: PropTypes.bool,
  /**
   * color of border
   */
  borderColor: PropTypes.oneOf([MAIN_GREEN, MAIN_DARK_BLUE, WHITE]),
  /**
   * color of border UL
   */
  borderListColor: PropTypes.oneOf([MAIN_GREEN, MAIN_DARK_BLUE, WHITE]),
  /**
   * onSelect
   */
  onSelect: PropTypes.func,
  /**
   * Disabled
   */
  disabled: PropTypes.bool,
  /**
   * mainColor
   */
  mainColor: PropTypes.oneOf([MAIN_DARK_BLUE, WHITE]),
  /**
   * dataAttrName
  */
  dataAttrName: PropTypes.string,
  /**
   * dataAttrValue
  */
  dataAttrValue: PropTypes.string,
  /**
   * backgroundColor
  */
  backgroundColor: PropTypes.oneOf([MAIN_DARK_BLUE, WHITE, RICH_BLACK]),
  /**
   * inputTextClassName
  */
  inputTextClassName: PropTypes.string,
  /**
   * errorMessage
   */
  errorMessage: PropTypes.string,
  /**
   * errorMessageTextClassName
  */
  errorMessageTextClassName: PropTypes.string
}

export default Select
