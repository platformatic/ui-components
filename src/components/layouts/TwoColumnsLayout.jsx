import React from 'react'
import styles from './TwoColumnsLayout.module.css'

export default function TwoColumnsLayout (props) {
  const { children, gridTemplate = 'columns' } = props
  const className = styles[`${gridTemplate}`]
  return (
    <div className={className}>
      {children}
    </div>
  )
}
