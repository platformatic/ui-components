'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import commonStyles from './Common.module.css'
import styles from './Tag.module.css'
import { COLORS_BUTTON, OPACITY_100, OPACITY_20, OPACITY_30, OPACITY_60, WHITE } from './constants'

function Tag ({
  text = '',
  textClassName = '',
  color = WHITE,
  backgroundColor = '',
  bordered = true,
  opaque = OPACITY_100,
  fullRounded = false
}) {
  const stylesColor = textClassName || commonStyles[`text--${color}`]
  let stylesBorderColor = ''
  if (bordered) {
    stylesBorderColor = `${styles.bordered} `
    stylesBorderColor += commonStyles[`bordered--${color}`]
  }
  if (fullRounded) {
    stylesBorderColor += ` ${styles.fullRounded}`
  }
  const stylesBackgroundColor = backgroundColor ? commonStyles[`background-color-${backgroundColor}`] : ''
  const opacity = commonStyles[`background-color-opaque-${opaque}`]
  const className = `${styles.tag} ${stylesColor} ${stylesBorderColor} ${stylesBackgroundColor} ${opacity}`

  return (
    <span className={className}>{text}</span>
  )
}
Tag.propTypes = {
  /**
   * color
   */
  color: PropTypes.oneOf(COLORS_BUTTON),
  /**
   * text
   */
  text: PropTypes.string,
  /**
  /**
   * textClassName
   */
  textClassName: PropTypes.string,
  /**
   * backgroundColor
   */
  backgroundColor: PropTypes.oneOf(COLORS_BUTTON),
  /**
   * bordered
   */
  bordered: PropTypes.bool,
  /**
   * opaque
   */
  opaque: PropTypes.oneOf([OPACITY_100, OPACITY_60, OPACITY_30, OPACITY_20]),
  /**
     * fullRounded
     */
  fullRounded: PropTypes.bool

}

export default Tag
