'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import styles from './RadioGroup.module.css'
import commonStyles from '../Common.module.css'
import { MAIN_DARK_BLUE, MAIN_GREEN } from '../constants'

function RadioGroup ({ name, radios, errorMessage, errorMessageTextClassName, onChange, disabled, value }) {
  let radioContainerClass = styles.radioContainer
  const errorMessageClassName = errorMessageTextClassName || commonStyles['error-message']

  const showError = errorMessage.length > 0
  if (disabled) radioContainerClass += ' ' + commonStyles['apply-opacity-30']

  return (
    <div className={styles.container}>
      <div className={styles.radioGroupContainer}>
        {radios.map(radio => (
          <div className={radioContainerClass} key={radio.value}>
            <input className={styles.radio} type='radio' id={radio.name} name={name} value={radio.value} onChange={onChange} disabled={disabled} checked={radio.value === value} />
            <label className={styles.label} htmlFor={radio.name}>{radio.label}</label>
          </div>
        ))}
      </div>
      {showError && <span className={errorMessageClassName}>{errorMessage}</span>}
    </div>
  )
}

RadioGroup.propTypes = {
  /**
   * name
   */
  name: PropTypes.string,
  /**
   * radios
   */
  radios: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    label: PropTypes.string
  })),
  /**
   * errorMessage
   */
  errorMessage: PropTypes.string,
  /**
   * errorMessageTextClassName
  */
  errorMessageTextClassName: PropTypes.string,
  /**
   * onChange
   */
  onChange: PropTypes.func,
  /**
   * Disabled
   */
  disabled: PropTypes.bool,
  /**
   * color
   */
  color: PropTypes.oneOf([MAIN_GREEN, MAIN_DARK_BLUE]),
  /**
   * value
   */
  value: PropTypes.string
}

RadioGroup.defaultProps = {
  name: '',
  radios: [],
  errorMessage: '',
  errorMessageTextClassName: '',
  onChange: () => {},
  disabled: false,
  color: MAIN_DARK_BLUE,
  value: ''
}

export default RadioGroup
