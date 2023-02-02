import React from 'react'
import styles from './Preview.module.css'
import HorizontalSeparator from '../HorizontalSeparator'

export default function Preview ({ title, value, isLink = false }) {
  return (
    <>
      <div className={styles.container}>
        <p className={styles.title}>{title}</p>
        {isLink ? <a className={styles.link} href={value} target='_blank' rel='noreferrer'>{value}</a> : <p className={styles.value}>{value}</p>}
      </div>
      <HorizontalSeparator color='main-dark-green' opacity={20} marginBottom={10} marginTop={10} />
    </>
  )
}
