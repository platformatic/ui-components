'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import PlatformaticIcon from './PlatformaticIcon'
import { COLORS_ICON, EXTRA_SMALL, SIZES, WHITE } from './constants'

function Status ({ color, status, size }) {
  const className = `inline-flex items-center text-${color}`
  return (
    <div className={className}>
      <PlatformaticIcon iconName='CircleFullIcon' size={size} color={color} />
      <span className='ml-2'>{status}</span>
    </div>
  )
}

Status.propTypes = {
  /**
   * color
   */
  color: PropTypes.oneOf(COLORS_ICON),
  /**
   * status
   */
  status: PropTypes.string,
  /**
   * Size
   */
  size: PropTypes.oneOf(SIZES)
  
}

Status.defaultProps = {
  color: WHITE,
  status: '',
  size: EXTRA_SMALL
}

export default Status
