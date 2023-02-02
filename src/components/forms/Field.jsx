import React from 'react'
import styles from './Field.module.css'
import HorizontalSeparator from '../HorizontalSeparator'

export default function Field ({ title, helper, children, disabled }) {
  let className = `${styles.container}`
  if (disabled) className += ` ${styles.disabled}`
  return (
    <>
      <div className={className}>
        <p className={styles.title}>{title}</p>
        <p className={styles.helper}>{helper}</p>
        <div className={styles.content}>
          {children}
        </div>
      </div>
      <HorizontalSeparator color='main-dark-green' opacity={20} marginBottom={10} marginTop={10} />
    </>
  )
}
