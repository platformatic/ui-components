import React from 'react'
import PropTypes from 'prop-types'
import styles from './LoadingSpinnerV2.module.css'
import SpinnerCircular from './loaders/SpinnerCircular'

function LoadingSpinnerV2 ({
  loading = false,
  applySentences = {},
  spinnerProps = {},
  containerClassName = ''
}) {
  const defaultContainerClassName = containerClassName || `${styles.container}`
  // If null then loading not started, if true then loading, if false then done loading
  return loading
    ? (
      <div className={defaultContainerClassName} data-testid='loading-spinner'>
        <div className={styles.content}>
          <SpinnerCircular {...spinnerProps} />
          {applySentences?.sentences.length > 0 && (
            <div className={applySentences.containerClassName}>
              {applySentences.sentences.map((sentence, index) => (<p key={index} className={sentence.style}>{sentence.text}</p>))}
            </div>)}
        </div>
      </div>
      )
    : <></>
}

LoadingSpinnerV2.propTypes = {
  /**
   * loading
   */
  loading: PropTypes.bool,
  /**
   * applySentences
   */
  applySentences: PropTypes.object,
  /**
   * spinnerProps
   */
  spinnerProps: PropTypes.shape({
    className: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.number,
    thickness: PropTypes.number
  }),
  /**
   * containerClassName
   */
  containerClassName: PropTypes.string
}

export default LoadingSpinnerV2
