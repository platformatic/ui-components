import React from 'react'
import styles from './List.module.css'

export default function List (props) {
  const { title, children, ...rest } = props
  return (
    <div className={styles.container}>
      {title &&
        <div
          className={styles.title}
          data-testid='list-title'
          {...rest}
        >
          {title}
        </div>}
      <div className={styles.elements}>
        {children}
      </div>
    </div>
  )
}
