import React from 'react'
import PropTypes from 'prop-types'
import styles from './LoadingSpinner.module.css'
import { SpinnerCircular } from 'spinners-react'

function LoadingSpinner ({ loading, children }) {
  // If null then loading not started, if true then loading, if false then done loading
  return (
    <div className={styles.container} data-testid='loadable-v2'>
      {
        loading
          ? (
            <>
              <div data-testid='loadable-v2-content' className={styles.relative}>
                <SpinnerCircular className={styles.spinner} thickness={180} size={60} />
                <div className={styles.blurred}>{children}</div>
              </div>
            </>
            )
          : <>{children}</>
      }
    </div>
  )
}

LoadingSpinner.propTypes = {
  /**
   * children
   */
  children: PropTypes.node,
  /**
   * loading
   */
  loading: PropTypes.bool
}

LoadingSpinner.defaultProps = {
  children: null,
  loading: false
}

export default LoadingSpinner
