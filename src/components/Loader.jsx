import React from 'react'
import styles from './Loader.module.css'
import { SpinnerCircular } from 'spinners-react'

export default function Loader ({ loading, children }) {
  return (
    <>
      {
        loading
          ? (
            <div className={styles.container} data-testid='loading'>
              <div data-testid='loading-content' className={styles.content}>
                <SpinnerCircular className={styles.spinner} thickness={180} size={60} />
                <div className={styles.blurred}>{children}</div>
              </div>
            </div>
            )
          : children
      }
    </>
  )
}
