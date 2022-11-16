import React, { useState, cloneElement, Children } from 'react'
import styles from './Loadable.module.css'
import { SpinnerCircular } from 'spinners-react'

export default function List ({ ...props }) {
  // If null then loading not started, if true then loading, if false then done loading
  const [loading, setLoading] = useState(null)
  const startLoading = (reset = false) => {
    // We can start only once (unless we reset)
    if (loading === null || reset) {
      setLoading(true)
    }
  }
  const stopLoading = () => setLoading(false)

  const children = Children.map(props.children, child => cloneElement(child, { startLoading, stopLoading }))

  return (
    <div className={styles.container} data-testid='loadable'>
      {
        loading
          ? (
            <>
              <div data-testid='loadable-content' className={styles.relative}>
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
