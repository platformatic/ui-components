import React from 'react'
import styles from './LoadingSpinner.module.css'
import SpinnerCircular from './loaders/SpinnerCircular'

function LoadingSpinner ({ loading = false, size = 60 }) {
  // If null then loading not started, if true then loading, if false then done loading
  return loading
    ? (
      <div className={styles.container} data-testid='loading-spinner'>
        <div data-testid='loading-spinner-content' className={styles.relative}>
          <SpinnerCircular className={styles.spinner} size={size} />
        </div>
      </div>
      )
    : <></>
}

export default LoadingSpinner
