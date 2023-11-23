'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import styles from './LoadingSpinnerV2.module.css'
import { SpinnerCircular } from 'spinners-react'

function LoadingSpinnerV2 ({ loading, applySentences, color }) {
  // If null then loading not started, if true then loading, if false then done loading
  return loading
    ? (
      <div className={styles.container} data-testid='loading-spinner'>
        <div className={styles.content}>
          <SpinnerCircular thickness={180} size={80} color={color} />
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
   * color
   */
  color: PropTypes.string
}

LoadingSpinnerV2.defaultProps = {
  loading: false,
  applySentences: {},
  color: '#FFFFFF'
}

export default LoadingSpinnerV2
