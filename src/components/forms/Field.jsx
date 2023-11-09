import React from 'react'
import PropTypes from 'prop-types'
import styles from './Field.module.css'
import { ERROR_RED, MAIN_DARK_BLUE, WHITE } from '../constants'

function Field ({ title, titleColor, helper, children, disabled, required }) {
  let className = `${styles.container}`
  if (disabled) className += ` ${styles.disabled}`
  let classnameTitle = `${styles.title} `
  classnameTitle += styles[`text-color-${titleColor}`]
  let titleTmp = title
  if (required) { titleTmp += ' *' }

  return (
    <div className={className}>
      <p className={classnameTitle}>{titleTmp}</p>
      {helper && <p className={styles.helper}>{helper}</p>}
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}

Field.propTypes = {
  /**
   * title
   */
  title: PropTypes.string,
  /**
   * titleColor
   */
  titleColor: PropTypes.oneOf([ERROR_RED, MAIN_DARK_BLUE, WHITE]),
  /**
   * helper
   */
  helper: PropTypes.string,
  /**
   * color of border
   */
  children: PropTypes.node,
  /**
   * disabled
   */
  disabled: PropTypes.bool,
  /**
   * required
   */
  required: PropTypes.bool
}

Field.defaultProps = {
  title: '',
  titleColor: 'main-dark-blue',
  helper: '',
  children: null,
  disabled: false,
  required: false
}

export default Field
