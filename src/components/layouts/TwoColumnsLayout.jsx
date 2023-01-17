'use strict'
import React from 'react'
import styles from './TwoColumnsLayout.module.css'

export default function TwoColumnsLayout ({ children, gridTemplate = 'columns' }) {
  const className = styles[`${gridTemplate}`]
  return (
    <div className={className}>
      {children}
    </div>
  )
}
