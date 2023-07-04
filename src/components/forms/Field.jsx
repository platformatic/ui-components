import React from 'react'
import PropTypes from 'prop-types'
import styles from './Field.module.css'

function Field ({ title, titleColor, helper, children, disabled }) {
  let className = `${styles.container}`
  if (disabled) className += ` ${styles.disabled}`
  let classnameTitle = `${styles.title} `
  classnameTitle += styles[`text-color-${titleColor}`]

  return (
    <div className={className}>
      <p className={classnameTitle}>{title}</p>
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
  titleColor: PropTypes.oneOf(['error-red', 'main-dark-blue']),
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
  disabled: PropTypes.bool
}

Field.defaultProps = {
  title: '',
  titleColor: 'main-dark-blue',
  helper: '',
  children: null,
  disabled: false
}

export default Field
