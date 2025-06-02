import React, { useState, useEffect, useRef } from 'react'
import styles from './SelectWithInput.module.css'
import commonStyles from '../Common.module.css'
import { MAIN_DARK_BLUE, MAIN_GREEN, RICH_BLACK, SMALL, WHITE } from '../constants'
import PlatformaticIcon from '../PlatformaticIcon'

function SelectWithInput ({
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
  onChange = () => {},
  onSelect = () => {},
  onClear = () => {},
  disabled = false,
  mainColor = MAIN_DARK_BLUE,
  optionSelected = null,
  dataAttrName = '',
  dataAttrValue = '',
  backgroundColor = WHITE,
  inputTextClassName = ''
}) {
  const inputRef = useRef()
  const [showOptions, setShowOptions] = useState(false)
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

  const optionSpanClassName = commonStyles[`text--${mainColor}`]

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

  useEffect(() => {
    if (disabled) {
      const className = normalClassName() + ' ' + commonStyles['apply-opacity-30']
      setWrapperClassName(className)
    } else {
      setWrapperClassName(normalClassName())
    }
  }, [disabled])

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
          {value?.length > 0 && !disabled && <PlatformaticIcon iconName='CircleCloseIcon' color={borderColor} onClick={() => clearValue()} size={SMALL} />}
          <PlatformaticIcon iconName={showOptions ? 'ArrowUpIcon' : 'ArrowDownIcon'} color={borderColor} disabled={disabled} onClick={() => setShowOptions(!showOptions)} size={SMALL} />
        </div>
      </div>
      {showOptions && !showError && renderOptions()}
      {showError && <span className={errorMessageClassName}>{errorMessage}</span>}
    </div>
  )
}

export default SelectWithInput
