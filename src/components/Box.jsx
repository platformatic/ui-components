import styles from './Box.module.css'
import React from 'react'
export default function Box ({ justifyCentered, children }) {
  let className = `${styles.box}`
  if (justifyCentered) className += ` ${styles.justifyCentered}`

  return (
    <div className={className}>
      {children}
    </div>
  )
}
