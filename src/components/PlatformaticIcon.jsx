'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import ReactTooltip from 'react-tooltip'
import Icons from './icons'
import styles from './PlatformaticIcon.module.css'
import { COLORS_ICON, MAIN_GREEN, SIZES, SMALL } from './constants'

function PlatformaticIcon ({
  iconName,
  color,
  onClick,
  size,
  classes,
  tip,
  disabled,
  ...rest
}) {
  let icon = <></>
  if (iconName) {
    icon = React.createElement(Icons[`${iconName}`], {
      color,
      size,
      tip,
      disabled,
      ...rest
    })
    if (onClick && !disabled) {
      let className = styles.cursorPointer
      if (classes) className += ` ${classes}`
      icon = (<div className={className} onClick={onClick}>{icon}</div>)
    }
  }
  return (
    <>
      {icon}
      {tip && <ReactTooltip place='top' type='info' />}
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
  disabled: PropTypes.bool
}

PlatformaticIcon.defaultProps = {
  iconName: '',
  color: MAIN_GREEN,
  size: SMALL,
  onClick: () => {},
  classes: '',
  tip: '',
  disabled: false
}

export default PlatformaticIcon
