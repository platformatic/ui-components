import React from 'react'
import PropTypes from 'prop-types'
import styles from './Field.module.css'
import { ERROR_RED, MAIN_DARK_BLUE, WHITE } from '../constants'

function Field ({
  title = '',
  titleColor = MAIN_DARK_BLUE,
  helper = '',
  children,
  disabled = false,
  required = false,
  titleClassName = '',
  helperClassName = ''
}) {
  let className = `${styles.container}`
  if (disabled) className += ` ${styles.disabled}`
  const styledTitle = titleClassName || (`${styles.title} ` + styles[`text-color-${titleColor}`])
  const styledHelper = helperClassName || styles.helper
  let titleTmp = title
  if (required) { titleTmp += ' *' }

  return (
    <div className={className}>
      <p className={styledTitle}>{titleTmp}</p>
      {helper && <p className={styledHelper}>{helper}</p>}
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
  required: PropTypes.bool,
  /**
   * titleClassName
   */
  titleClassName: PropTypes.string,
  /**
   * titleClassName
   */
  helperClassName: PropTypes.string
}

export default Field
