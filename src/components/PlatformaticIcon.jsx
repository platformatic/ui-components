'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import ReactTooltip from 'react-tooltip'
import Icons from './icons'
import styles from './PlatformaticIcon.module.css'
import { COLORS_ICON, MAIN_GREEN, SIZES, SMALL } from './constants'

function PlatformaticIcon ({ iconName, color, onClick, size, classes, tip, ...rest }) {
  let icon = <></>
  if (iconName) {
    icon = React.createElement(Icons[`${iconName}`], {
      color,
      size,
      tip,
      ...rest
    })
    if (onClick) {
      let className = styles.cursorPointer
      if (classes) className += ` ${classes}`
      icon = (<span className={className} onClick={onClick}>{icon}</span>)
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
  tip: PropTypes.string
}

PlatformaticIcon.defaultProps = {
  iconName: '',
  color: MAIN_GREEN,
  size: SMALL,
  onClick: () => {},
  classes: '',
  tip: ''
}

export default PlatformaticIcon
