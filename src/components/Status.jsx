import React from 'react'
import PropTypes from 'prop-types'
import PlatformaticIcon from './PlatformaticIcon'
import { COLORS_ICON, TINY, SIZES, WHITE } from './constants'

function Status ({
  color = WHITE,
  status = '',
  size = TINY
}) {
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

export default Status
