'use strict'
import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import styles from './Select.module.css'
import commonStyles from '../Common.module.css'
import { MAIN_DARK_BLUE, MAIN_GREEN, RICH_BLACK, SMALL, WHITE } from '../constants'
import PlatformaticIcon from '../PlatformaticIcon'

function Select ({
  defaultContainerClassName,
  placeholder,
  name,
  value,
  options,
  defaultOptionsClassName,
  optionsBorderedBottom,
  borderColor,
  borderListColor,
  errorMessage,
  onChange,
  onSelect,
  onClear,
  disabled,
  mainColor,
  optionSelected,
  dataAttrName,
  dataAttrValue,
  backgroundColor,
  inputTextClassName
}) {
  const inputRef = useRef()
  const [showOptions, setShowOptions] = useState(false)
  const [isSelected, setIsSelected] = useState(false)
  const [isOnFocus, setIsOnFocus] = useState(false)
  const showError = errorMessage.length > 0
  const containerClassName = `${styles.container} ${defaultContainerClassName} `
  let inputClassName = `${commonStyles.fullWidth} ${styles.select} ${inputTextClassName}`
  inputClassName += ' ' + styles[`select-${mainColor}`]
  inputClassName += ' ' + commonStyles[`text--${borderColor}`]
  let optionsClassName = `${styles.options} ${defaultOptionsClassName} `
  if (showError) inputClassName += ' ' + commonStyles['bordered--error-red']
  if (disabled) inputClassName += ' ' + commonStyles['apply-opacity-30']
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

  const optionSpanClassName = commonStyles[`text--${mainColor}`]

  const [wrapperClassName, setWrapperClassName] = useState(normalClassName())
  function onFocusClassName () {
    return inputClassName + ' ' + commonStyles[`bordered--${borderColor}-100`]
  }

  function normalClassName () {
    return inputClassName + ' ' + commonStyles[`bordered--${borderColor}-70`]
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
    if (value.length > 0 && !showOptions && !isSelected) {
      setShowOptions(true)
    }
    if (value.length === 0) {
      setIsSelected(false)
    }
  }, [value])

  useEffect(() => {
    if (optionSelected) {
      setSelected(optionSelected)
    }
  }, [optionSelected])

  function renderLi (option, index) {
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
          {option.iconName && <PlatformaticIcon iconName={option.iconName} color={option.iconColor || mainColor} size={option.iconSize ?? SMALL} onClick={null} />}
          <span className={optionSpanClassName}>{option.label}</span>
        </div>
        {option.descriptionValue && <span className={`${optionSpanClassName} ${styles.descriptionValue}`}>{option.descriptionValue}</span>}
      </li>
    )
  }

  function renderOptions () {
    if (value.length === 0) {
      return (
        <ul className={optionsClassName}>
          {options.length > 0 ? options.map((option, index) => renderLi(option, index)) : <li className={singleOptionClassName}><div className={styles.liContent}><span className={commonStyles[`text--${mainColor}`]}>No data found</span></div></li>}
        </ul>
      )
    }
    const notFilterableOptions = options.filter(option => option.notFilterable)
    const filteredOptions = options.filter(option => !option.notFilterable).filter(option => option.label.toLowerCase().includes(value.toLowerCase()))

    return (
      <ul className={optionsClassName}>
        {filteredOptions.length > 0 ? filteredOptions.map((option, index) => renderLi(option, index)) : <li className={singleOptionClassName}><div className={styles.liContent}><span className={commonStyles[`text--${mainColor}`]}>No data found</span></div></li>}
        {notFilterableOptions.length > 0 && notFilterableOptions.map((option, index) => renderLi(option, index))}
      </ul>
    )
  }

  // https://stackoverflow.com/questions/23892547/what-is-the-best-way-to-trigger-change-or-input-event-in-react-js
  function clearValue () {
    const nativeInputValueSetter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set
    nativeInputValueSetter.call(inputRef.current, '')
    const ev2 = new Event('input', { bubbles: true })
    ev2.simulated = true
    inputRef.current.dispatchEvent(ev2)
    onClear()
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
        setShowOptions(false)
        setIsOnFocus(false)
        setWrapperClassName(normalClassName())
      }
    }, 250)
  }

  return (
    <div className={containerClassName} {...dataProps}>
      <div className={styles.selectContainer}>
        <input type='text' name={name} value={value} className={wrapperClassName} ref={inputRef} onChange={onChange} disabled={disabled} placeholder={placeholder} onFocus={() => handleFocus()} onBlur={(e) => handleBlur(e)} />
        <div className={styles.icons}>
          {value?.length > 0 && <PlatformaticIcon iconName='CircleCloseIcon' color={borderColor} onClick={() => clearValue()} size={SMALL} />}
          <PlatformaticIcon iconName={showOptions ? 'ArrowUpIcon' : 'ArrowDownIcon'} color={borderColor} onClick={() => disabled ? null : setShowOptions(!showOptions)} size={SMALL} />
        </div>
      </div>
      {showOptions && !showError && renderOptions()}
      {showError && <span className={commonStyles['error-message']}>{errorMessage}</span>}
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
      PropTypes.number
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
   * onChange
   */
  onChange: PropTypes.func,
  /**
   * onSelect
   */
  onSelect: PropTypes.func,
  /**
   * onClear
   */
  onClear: PropTypes.func,
  /**
   * Disabled
   */
  disabled: PropTypes.bool,
  /**
   * mainColor
   */
  mainColor: PropTypes.oneOf([MAIN_DARK_BLUE, WHITE]),
  /**
   * optionSelected
   */
  optionSelected: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ])
  }),
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
  inputTextClassName: PropTypes.string
}

Select.defaultProps = {
  defaultContainerClassName: '',
  placeholder: 'this is the default',
  name: '',
  value: '',
  id: '',
  options: [],
  defaultOptionsClassName: '',
  optionsBorderedBottom: true,
  borderColor: MAIN_GREEN,
  borderListColor: '',
  errorMessage: '',
  onChange: () => {},
  onSelect: () => {},
  onClear: () => {},
  disabled: false,
  mainColor: MAIN_DARK_BLUE,
  optionSelected: null,
  dataAttrName: '',
  dataAttrValue: '',
  backgroundColor: WHITE,
  inputTextClassName: ''
}

export default Select
