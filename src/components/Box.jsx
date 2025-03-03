import styles from './Box.module.css'
import React from 'react'

export default function Box (props) {
  const { justifyCentered, children } = props
  let className = `${styles.box}`
  if (justifyCentered) className += ` ${styles.justifyCentered}`

  return (
    <div className={className}>
      {children}
    </div>
  )
}
