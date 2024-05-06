'use strict'
import PropTypes from 'prop-types'
import styles from './BorderedBox.module.css'
import commonStyles from './Common.module.css'
import React from 'react'
import { COLORS_BORDERED_BOX, DARK_BLUE, MAIN_GREEN, OPACITY_100 } from './constants'
function BorderedBox ({
  classes = '',
  color = MAIN_GREEN,
  children = null,
  backgroundColor = DARK_BLUE,
  backgroundColorOpacity = OPACITY_100,
  borderColorOpacity = OPACITY_100,
  clickable = false,
  onClick = () => {}
}) {
  const borderColor = commonStyles[`bordered--${color}-${borderColorOpacity}`]
  const styledBackgroundColor = commonStyles[`background-color-${backgroundColor}`]
  const opacity = commonStyles[`background-color-opaque-${backgroundColorOpacity}`]
  let className = `${styles.borderedBox} ${commonStyles.bordered} ${classes} ${borderColor} ${styledBackgroundColor} ${opacity}`
  className += clickable ? ` ${styles.clickable}` : ''

  return (
    <div className={className} onClick={() => clickable ? onClick() : {}}>
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
  borderColorOpacity: PropTypes.oneOf([100, 60, 30, 20, 10]),
  /**
   * clickable
   */
  clickable: PropTypes.bool,
  /**
   * onClick
   */
  onClick: PropTypes.func
}

export default BorderedBox
