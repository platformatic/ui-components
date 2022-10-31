import React from 'react'
import styles from './List.module.css'

export default function List ({ title, ...props }) {
  return (
    <div className={styles.container}>
      { title ? 
        <div
          className={styles.title}
          data-testid='list-title'
          {...props}
        >
          {title}
        </div>
      :null }
      <div className={styles.elements}>
        {props.children}
      </div>
    </div>
  )
}
