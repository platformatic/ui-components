import React from 'react'
import styles from './TextWithLabel.module.css'
export default function TextWithLabel ({ label, text, children }) {
  return (
    <div className={styles.container}>
      <span className={styles.label}>{label}:</span>
      {text && <span className={styles.text}>{text}</span>}
      {children && <span>{children}</span>}
    </div>
  )
}
