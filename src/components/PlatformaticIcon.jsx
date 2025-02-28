import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Icons from './icons'
import styles from './PlatformaticIcon.module.css'
import { COLORS_ICON, MAIN_GREEN, SIZES, SMALL } from './constants'

function PlatformaticIcon ({
  iconName = '',
  color = MAIN_GREEN,
  onClick = () => {},
  size = SMALL,
  classes = '',
  tip = '',
  disabled = false,
  inactive = false,
  internalOverHandling = false,
  ...rest
}) {
  const [hover, setHover] = useState(false)
  let icon = <></>
  if (iconName) {
    icon = React.createElement(Icons[`${iconName}`], {
      color,
      size,
      tip,
      disabled,
      inactive: internalOverHandling ? !hover : inactive,
      ...rest
    })
    if (onClick && !disabled) {
      let className = `${styles.cursorPointer} ${tip ? styles.pltTooltip : ''}`
      if (classes) className += ` ${classes}`
      icon = (
        <div
          className={className}
          onClick={onClick}
          onMouseOver={() => internalOverHandling && !disabled ? setHover(true) : {}}
          onMouseLeave={() => internalOverHandling && !disabled ? setHover(false) : {}}
        >
          {icon}
        </div>
      )
    }
  }

  return (
    <>
      {icon}
    </>
  )
}

PlatformaticIcon.propTypes = {
  /**
   * iconName
   */
  iconName: PropTypes.string.isRequired,
  /**
   * color
   */
  color: PropTypes.oneOf(COLORS_ICON),
  /**
   * size
   */
  size: PropTypes.oneOf(SIZES),
  /**
   * onClick
   */
  onClick: PropTypes.func,
  /**
   * classes
   */
  classes: PropTypes.string,
  /**
   * tip
   */
  tip: PropTypes.string,
  /**
   * disabled
   */
  disabled: PropTypes.bool,
  /**
   * inactive
   */
  inactive: PropTypes.bool,
  /**
   * handleOverInternally
   */
  internalOverHandling: PropTypes.bool
}

export default PlatformaticIcon
