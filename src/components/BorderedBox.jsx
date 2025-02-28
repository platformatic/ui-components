import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styles from './BorderedBox.module.css'
import commonStyles from './Common.module.css'
import { COLORS_BORDERED_BOX, DARK_BLUE, TRANSPARENT, OPACITIES, OPACITY_100 } from './constants'
function BorderedBox ({
  classes = '',
  color = TRANSPARENT,
  children,
  backgroundColor = DARK_BLUE,
  backgroundColorOpacity = OPACITY_100,
  borderColorOpacity = OPACITY_100,
  clickable = false,
  onClick = () => {},
  internalOverHandling = false,
  backgroundColorOver = null,
  backgroundColorOpacityOver = null,
  borderColorOpacityOver = null
}) {
  const [over, setOver] = useState(false)
  const [className, setClassName] = useState(normalClassName())

  useEffect(() => {
    if (over) {
      setClassName(overClassName())
    } else {
      setClassName(normalClassName())
    }
  }, [over])

  function normalClassName () {
    const borderColor = color === TRANSPARENT ? commonStyles[`bordered--${color}`] : commonStyles[`bordered--${color}-${borderColorOpacity}`]
    const styledBackgroundColor = commonStyles[`background-color-${backgroundColor}`]
    const opacity = commonStyles[`background-color-opaque-${backgroundColorOpacity}`]
    let className = `${styles.borderedBox} ${commonStyles.bordered} ${classes} ${borderColor} ${styledBackgroundColor} ${opacity}`
    className += clickable ? ` ${styles.clickable}` : ''
    return className
  }

  function overClassName () {
    const borderColor = color === TRANSPARENT ? commonStyles[`bordered--${color}`] : commonStyles[`bordered--${color}-${borderColorOpacityOver}`]
    const styledBackgroundColor = commonStyles[`background-color-${backgroundColorOver}`]
    const opacity = commonStyles[`background-color-opaque-${backgroundColorOpacityOver}`]
    let className = `${styles.borderedBox} ${commonStyles.bordered} ${classes} ${borderColor} ${styledBackgroundColor} ${opacity}`
    className += clickable ? ` ${styles.clickable}` : ''
    return className
  }

  return (
    <div
      className={className}
      onMouseOver={() => internalOverHandling && setOver(true)} onMouseLeave={() => internalOverHandling && setOver(false)}
      onClick={() => clickable ? onClick() : {}}
    >
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
  backgroundColorOpacity: PropTypes.oneOf(OPACITIES),
  /**
   * borderColorOpacity
   */
  borderColorOpacity: PropTypes.oneOf(OPACITIES),
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
