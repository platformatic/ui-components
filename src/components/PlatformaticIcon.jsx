'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import Icons from './icons'
import styles from './PlatformaticIcon.module.css'

function PlatformaticIcon ({ iconName, color, onClick, size, classes, tip }) {
  let icon = <></>
  if (iconName) {
    icon = React.createElement(Icons[`${iconName}`], {
      color,
      size,
      tip
    })
    if (onClick) {
      let className = styles.cursorPointer
      if (classes) className += ` ${classes}`
      icon = (<span className={className} onClick={onClick}>{icon}</span>)
    }
  }
  return icon
}

PlatformaticIcon.propTypes = {
  /**
   * iconName
   */
  iconName: PropTypes.string.isRequired,
  /**
   * color
   */
  color: PropTypes.string,
  /**
   * size
   */
  size: PropTypes.string,
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
  color: 'green',
  size: 'small',
  onClick: () => {},
  classes: null,
  tip: ''
}

export default PlatformaticIcon
