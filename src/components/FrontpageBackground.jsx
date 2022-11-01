import React from 'react'
import styles from './FrontpageBackground.module.css'

export default function FrontpageBackgound ({ label = 'platformatic', ...props }) {
  return (
    <div className={styles.bg}>
      <div className={styles.label}> {label} </div>
      {props.children}
    </div>
  )
}
