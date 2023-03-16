import React from 'react'
import PropTypes from 'prop-types'
import styles from './LoadingSpinner.module.css'
import { SpinnerCircular } from 'spinners-react'

function LoadingSpinner ({ loading }) {
  // If null then loading not started, if true then loading, if false then done loading
  return loading
    ? (
      <div className={styles.container} data-testid='loading-spinner'>
        <div data-testid='loading-spinner-content' className={styles.relative}>
          <SpinnerCircular className={styles.spinner} thickness={180} size={60} />
        </div>
      </div>
      )
    : <></>
}

LoadingSpinner.propTypes = {
  /**
   * loading
   */
  loading: PropTypes.bool
}

LoadingSpinner.defaultProps = {
  loading: false
}

export default LoadingSpinner
