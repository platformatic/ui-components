'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import commonStyles from './Common.module.css'
import styles from './Tag.module.css'
import { COLORS_BUTTON } from './constants'

function Tag ({ text, color, backgroundColor, bordered, opaque }) {
  const stylesColor = commonStyles[`text--${color}`]
  let stylesBorderColor = ''
  if (bordered) {
    stylesBorderColor = `${styles.bordered} `
    stylesBorderColor += commonStyles[`bordered--${color}`]
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
  opaque: PropTypes.oneOf([100, 60, 30, 20])

}

Tag.defaultProps = {
  backgroundColor: '',
  color: 'white',
  text: '',
  bordered: true,
  opaque: 100
}

export default Tag
