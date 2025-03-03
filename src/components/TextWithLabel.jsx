import React from 'react'
import PropTypes from 'prop-types'
import { FONT_BASE, FONT_XS, MAIN_DARK_BLUE, WHITE } from './constants'
import commonStyles from './Common.module.css'
import styles from './TextWithLabel.module.css'

function TextWithLabel (props) {
  const {
    label = '',
    text = '',
    children,
    color = WHITE,
    fontSize = FONT_BASE
  } = props

  const className = commonStyles[`text--${color}`] + ' ' + commonStyles[`text--${fontSize}`]
  return (
    <div className={className}>
      <span className={styles.label}>{label}:</span>
      {text && <span className={styles.text}>{text}</span>}
      {children && <span>{children}</span>}
    </div>
  )
}

TextWithLabel.propTypes = {
  /**
   * label
   */
  label: PropTypes.string,
  /**
   * text
   */
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * children
   */
  children: PropTypes.node,
  /**
   * white
   */
  color: PropTypes.oneOf([WHITE, MAIN_DARK_BLUE]),
  /**
   * Font Size
   */
  fontSize: PropTypes.oneOf([FONT_BASE, FONT_XS])
}

export default TextWithLabel
