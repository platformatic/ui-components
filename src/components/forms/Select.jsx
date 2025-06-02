import React, { useState, useEffect, useRef } from 'react'
import styles from './Select.module.css'
import commonStyles from '../Common.module.css'
import { MAIN_DARK_BLUE, MAIN_GREEN, RICH_BLACK, SIZES, SMALL, WHITE } from '../constants'
import PlatformaticIcon from '../PlatformaticIcon'
import Icons from '../icons'

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
  inputTextClassName = '',
  beforeIcon = {},
  paddingClass = '',
  handleClickOutside = false
}) {
  const wrapperRef = useRef(null)
  const inputRef = useRef()
  const [showOptions, setShowOptions] = useState(false)
  // eslint-disable-next-line  no-unused-vars
  const [isSelected, setIsSelected] = useState(false)
  const [isOnFocus, setIsOnFocus] = useState(false)
  const errorMessageClassName = errorMessageTextClassName || commonStyles['error-message']
  const showError = errorMessage.length > 0
  const containerClassName = `${styles.container} ${defaultContainerClassName} `
  let baseWrapperClassName = `${styles.selectContainer} ${paddingClass || styles.defaultPaddingClass}`
  let inputClassName = `${styles.select} ${inputTextClassName}`
  baseWrapperClassName += ' ' + styles[`select-${mainColor}`]
  baseWrapperClassName += ' ' + commonStyles[`text--${borderColor}`]
  let optionsClassName = `${styles.options} ${defaultOptionsClassName} `
  baseWrapperClassName += ' ' + commonStyles[`background-color-${backgroundColor}`]
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
    return commonStyles[`bordered--${borderColor}-100`] + ' ' + baseWrapperClassName
  }

  function normalClassName () {
    const baseClassName = baseWrapperClassName
    if (showError) {
      baseWrapperClassName += ' ' + commonStyles['bordered--error-red']
    } else {
      baseWrapperClassName += ' ' + commonStyles[`bordered--${borderColor}-70`]
    }
    if (disabled) baseWrapperClassName += ' ' + commonStyles['apply-opacity-30']
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
    if (showOptions && handleClickOutside) {
      function innerHandleClickOutside (event) {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
          setShowOptions(false)
        }
      }
      // Bind the event listener
      document.addEventListener('mousedown', innerHandleClickOutside)
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', innerHandleClickOutside)
      }
    }
  }, [handleClickOutside, showOptions])

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

  function getBeforeIcon () {
    return React.createElement(Icons[`${beforeIcon.iconName}`], {
      color: beforeIcon.color,
      size: beforeIcon.size
    })
  }

  return (
    <div className={containerClassName} {...dataProps} ref={wrapperRef}>
      <div className={wrapperClassName}>
        {beforeIcon?.iconName && getBeforeIcon()}
        <input type='text' name={name} value={value} className={inputClassName} ref={inputRef} disabled={disabled} placeholder={placeholder} onFocus={() => handleFocus()} onBlur={(e) => handleBlur(e)} readOnly />
        <div className={styles.icons}>
          <PlatformaticIcon iconName={showOptions ? 'ArrowDownIcon' : 'ArrowRightIcon'} color={borderColor} disabled={disabled} onClick={() => setShowOptions(!showOptions)} size={SMALL} />
        </div>
      </div>
      {showOptions && !showError && renderOptions()}
      {showError && <span className={errorMessageClassName}>{errorMessage}</span>}
    </div>
  )
}

export default Select
