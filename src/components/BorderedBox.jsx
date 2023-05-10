'use strict'
import PropTypes from 'prop-types'
import styles from './BorderedBox.module.css'
import commonStyles from './Common.module.css'
import React from 'react'
import { COLORS_BORDERED_BOX } from './constants'
function BorderedBox (props) {
  const { classes, color, children, backgroundColor, backgroundColorOpacity, borderColorOpacity } = props
  const borderColor = commonStyles[`bordered--${color}-${borderColorOpacity}`]
  const styledBackgroundColor = commonStyles[`background-color-${backgroundColor}`]
  const opacity = commonStyles[`background-color-opaque-${backgroundColorOpacity}`]
  const className = `${styles.borderedBox} ${commonStyles.bordered} ${classes} ${borderColor} ${styledBackgroundColor} ${opacity}`

  return (
    <div className={className}>
      {children}
    </div>
  )
}

BorderedBox.propTypes = {
  /**
   * children
   */
  children: PropTypes.node,
  /**
   * color of text, icon and borders
   */
  color: PropTypes.oneOf(COLORS_BORDERED_BOX),
  /**
   * background color of the button
   */
  backgroundColor: PropTypes.oneOf(COLORS_BORDERED_BOX),
  /**
   * classes
   */
  classes: PropTypes.string,
  /**
   * backgroundColorOpacity
   */
  backgroundColorOpacity: PropTypes.oneOf([100, 60, 30, 20, 10]),
  /**
   * borderColorOpacity
   */
  borderColorOpacity: PropTypes.oneOf([100, 60, 30, 20, 10])
}

BorderedBox.defaultProps = {
  children: null,
  color: 'main-green',
  backgroundColor: 'dark-blue',
  classes: '',
  backgroundColorOpacity: 100,
  borderColorOpacity: 100
}

export default BorderedBox
