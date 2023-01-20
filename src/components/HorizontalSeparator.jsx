'use strict'
import React from 'react'
import styles from './HorizontalSeparator.module.css'
export default function HorizontalSeparator ({ marginTop = 4, marginBottom = 4 }) {
  function getClassName () {
    return 'text-dark-green ' + (marginTop === marginBottom ? `${styles['marginY-' + marginTop]}` : `${styles['marginT-' + marginTop]} ${styles['marginB-' + marginBottom]}`)
  }

  return <hr className={getClassName()} />
}
