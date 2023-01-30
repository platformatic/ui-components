'use strict'
import React from 'react'
import styles from './HorizontalSeparator.module.css'
export default function HorizontalSeparator ({ marginTop = 4, marginBottom = 4, color = 'dark-green', opacity = 1 }) {
  function getClassName () {
    let className = `text-${color} `
    // margin
    className += (marginTop === marginBottom ? `${styles['marginY-' + marginTop]}` : `${styles['marginT-' + marginTop]} ${styles['marginB-' + marginBottom]}`)
    // opacity
    if (opacity > 1) className += ' ' + styles[`apply-opacity-${opacity}`]
    return className
  }

  return <hr className={getClassName()} />
}
