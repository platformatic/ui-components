'use strict'
import React from 'react'
import styles from './ToggleSwitch.module.css'
import commonStyles from '../Common.module.css'
export default function ToggleSwitch ({ name, label, errorMessage = '', onChange = () => {} }) {
  return (
    <>
      <div className={styles.container}>
        <label className={styles.switch}>
          <input type='checkbox' name={name} onChange={onChange} />
          <span className={`${styles.slider} ${styles.round}`} />
        </label>
        <span className={styles.label}>{label}</span>
      </div>
      {errorMessage.length > 0 && <span className={commonStyles['error-message']}>{errorMessage}</span>}
    </>
  )
}
