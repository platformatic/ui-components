'use strict'
import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import styles from './Select.module.css'
import commonStyles from '../Common.module.css'
import { MAIN_DARK_BLUE, MAIN_GREEN } from '../constants'
import PlatformaticIcon from '../PlatformaticIcon'

function Select ({ placeholder, name, value, options, borderColor, errorMessage, onChange, onSelect, disabled }) {
  const inputRef = useRef()
  const [showOptions, setShowOptions] = useState(false)
  const [isSelected, setIsSelected] = useState(false)
  const showError = errorMessage.length > 0
  let inputClassName = `${commonStyles.fullWidth} ${styles.select} `
  inputClassName += ' ' + commonStyles[`bordered--${borderColor}`] + ' ' + commonStyles[`text--${borderColor}`]
  if (showError) inputClassName += ' ' + commonStyles['bordered--error-red']
  if (disabled) inputClassName += ' ' + commonStyles['apply-opacity-30']

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

  function renderOptions () {
    const filteredOptions = value.length > 0 ? options.filter(option => option.label.toLowerCase().includes(value.toLowerCase())) : options
    return (
      <ul className={styles.options}>
        {filteredOptions.length > 0 ? filteredOptions.map((option, index) => <li key={index} className={styles.option} onClick={() => setSelected(option)}>{option.label}</li>) : <li className={styles.option}>No data found</li>}
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
  }

  return (
    <div className={styles.container}>
      <div className={styles.selectContainer}>
        <input type='text' name={name} value={value} className={inputClassName} ref={inputRef} onChange={onChange} disabled={disabled} placeholder={placeholder} />
        <div className={styles.icons}>
          {value?.length > 0 && <PlatformaticIcon iconName='CloseIcon' color={borderColor} onClick={() => clearValue()} />}
          <PlatformaticIcon iconName={showOptions ? 'ArrowUpIcon' : 'ArrowDownIcon'} color={borderColor} onClick={() => setShowOptions(!showOptions)} />
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
  name: PropTypes.string,
  /**
   * value
   */
  value: PropTypes.string,
  /**
   * options
   */
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string
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
   * Disabled
   */
  disabled: PropTypes.bool
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
  disabled: false
}

export default Select