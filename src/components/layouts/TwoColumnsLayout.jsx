'use strict'
import React from 'react'
import styles from './TwoColumnsLayout.module.css'

export default function TwoColumnsLayout ({ children, gridTemplate = 'columns' }) {
  return (
    <div className={styles[`${gridTemplate}`]}>
      {children}
    </div>
  )
}
