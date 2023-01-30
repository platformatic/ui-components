'use strict'
import React from 'react'
import styles from './Input.module.css'
import commonStyles from '../Common.module.css'
export default function Input ({ placeholder, value, name, borderColor = 'green', errorMessage = '', onChange = () => {} }) {
  const className = styles.inputContainer + ' ' + commonStyles[`bordered--${borderColor}`] + ' ' + commonStyles[`text--${borderColor}`] + ' ' + commonStyles.padded
  return (
    <>
      <div className={className}>
        <input type='text' name={name} value={value} placeholder={placeholder} className='grow' onChange={onChange} />
      </div>
      {errorMessage.length > 0 && <span className={commonStyles['error-message']}>{errorMessage}</span>}
    </>
  )
}
