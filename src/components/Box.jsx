'use strict'

import styles from './Box.module.css'
import React from 'react'
export default function Box (props) {
  return (
    <div className={styles.box}>
      {props.children}
    </div>
  )
}
