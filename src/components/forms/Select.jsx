'use strict'
import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import styles from './Select.module.css'
import commonStyles from '../Common.module.css'
import { MAIN_DARK_BLUE, MAIN_GREEN, SMALL } from '../constants'
import PlatformaticIcon from '../PlatformaticIcon'

function Select ({
  placeholder,
  name,
  value,
  options,
  borderColor,
  errorMessage,
  onChange,
  onSelect,
  onClear,
  disabled,
  optionsIconColor,
  optionSelected
}) {
  const inputRef = useRef()
  const [showOptions, setShowOptions] = useState(false)
  const [isSelected, setIsSelected] = useState(false)
  const showError = errorMessage.length > 0
  let inputClassName = `${commonStyles.fullWidth} ${styles.select} `
  inputClassName += ' ' + commonStyles[`bordered--${borderColor}`] + ' ' + commonStyles[`text--${borderColor}`]
  if (showError) inputClassName += ' ' + commonStyles['bordered--error-red']
  if (disabled) inputClassName += ' ' + commonStyles['apply-opacity-30']

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
        key={index} className={styles.option} onClick={() => {
          if (option.notSelectable) {
            return handleNotSelectable(option.onClick && option.onClick())
          }
          return setSelected(option)
        }}
      >
        {option.iconName && <PlatformaticIcon iconName={option.iconName} color={optionsIconColor} size={SMALL} onClick={null} />}
        <span>{option.label}</span>
      </li>
    )
  }

  function renderOptions () {
    if (value.length === 0) {
      return (
        <ul className={styles.options}>
          {options.length > 0 ? options.map((option, index) => renderLi(option, index)) : <li className={styles.option}>No data found</li>}
        </ul>
      )
    }
    const notFilterableOptions = options.filter(option => option.notFilterable)
    const filteredOptions = options.filter(option => !option.notFilterable).filter(option => option.label.toLowerCase().includes(value.toLowerCase()))

    return (
      <ul className={styles.options}>
        {filteredOptions.length > 0 ? filteredOptions.map((option, index) => renderLi(option, index)) : <li className={styles.option}>No data found</li>}
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
    setShowOptions(true)
  }

  function handleBlur (event) {
    event.preventDefault()
    setTimeout(() => {
      if (showOptions) {
        setShowOptions(false)
      }
    }, 100)
  }

  return (
    <div className={styles.container}>
      <div className={styles.selectContainer}>
        <input type='text' name={name} value={value} className={inputClassName} ref={inputRef} onChange={onChange} disabled={disabled} placeholder={placeholder} onFocus={() => handleFocus()} onBlur={(e) => handleBlur(e)} />
        <div className={styles.icons}>
          {value?.length > 0 && <PlatformaticIcon iconName='CloseIcon' color={borderColor} onClick={() => clearValue()} />}
          <PlatformaticIcon iconName={showOptions ? 'ArrowUpIcon' : 'ArrowDownIcon'} color={borderColor} onClick={() => disabled ? null : setShowOptions(!showOptions)} />
        </div>
      </div>
      {showOptions && !showError && renderOptions()}
      {showError && <span className={commonStyles['error-message']}>{errorMessage}</span>}
    </div>
  )
}

Select.propTypes = {
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
    icon: PropTypes.string,
    notSelectable: PropTypes.bool,
    notFilterable: PropTypes.bool,
    onClick: PropTypes.func
  })),
  /**
   * color of border
   */
  borderColor: PropTypes.oneOf([MAIN_GREEN, MAIN_DARK_BLUE]),
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
   * optionsIconColor
   */
  optionsIconColor: PropTypes.string,
  /**
   * optionSelected
   */
  optionSelected: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ])
  })
}

Select.defaultProps = {
  placeholder: 'this is the default',
  name: '',
  value: '',
  id: '',
  options: [],
  borderColor: MAIN_GREEN,
  errorMessage: '',
  onChange: () => {},
  onSelect: () => {},
  onClear: () => {},
  disabled: false,
  optionsIconColor: MAIN_DARK_BLUE,
  optionSelected: null
}

export default Select
