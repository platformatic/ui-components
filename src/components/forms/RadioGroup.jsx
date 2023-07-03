'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import styles from './RadioGroup.module.css'
import commonStyles from '../Common.module.css'
import { MAIN_DARK_BLUE, MAIN_GREEN } from '../constants'

function RadioGroup ({ name, radios, errorMessage, onChange, disabled, color }) {
  let radioContainerClass = styles.radioContainer
  const showError = errorMessage.length > 0
  if (disabled) radioContainerClass += ' ' + commonStyles['apply-opacity-30']

  return (
    <div className={styles.container}>
      <div className={styles.radioGroupContainer}>
        {radios.map(radio => (
          <div className={radioContainerClass} key={radio.value}>
            <input className={styles.radio} type='radio' name={name} value={radio.value} onChange={onChange} disabled={disabled} />
            <label className={styles.label} for={radio.name}>{radio.label}</label>
          </div>
        ))}
      </div>
      {showError && <span className={commonStyles['error-message']}>{errorMessage}</span>}
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
  color: PropTypes.oneOf([MAIN_GREEN, MAIN_DARK_BLUE])
}

RadioGroup.defaultProps = {
  name: '',
  radios: [],
  errorMessage: '',
  onChange: () => {},
  disabled: false,
  color: MAIN_DARK_BLUE
}

export default RadioGroup
