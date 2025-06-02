import React from 'react'
import styles from './RadioGroup.module.css'
import commonStyles from '../Common.module.css'

function RadioGroup ({
  name = '',
  radios = [],
  errorMessage = '',
  errorMessageTextClassName = '',
  onChange = () => {},
  disabled = false,
  value = ''
}) {
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

export default RadioGroup
