'use strict'
import React from 'react'
import PropTypes from 'prop-types'
import PlatformaticIcon from './PlatformaticIcon'
import { COLORS_ICON } from './constants'

function Status ({ color, status }) {
  const className = `inline-flex items-center text-${color}`
  return (
    <div className={className}>
      <PlatformaticIcon iconName='CircleFullIcon' size='small' color={color} />
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
  status: PropTypes.string
}

Status.defaultProps = {
  color: 'white',
  status: ''
}

export default Status
