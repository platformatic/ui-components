'use strict'
import styles from './BorderedText.module.css'
import React from 'react'
export default function BorderedText (props) {
  return (
    <span className={styles.bordered}>{props.text}</span>
  )
}
