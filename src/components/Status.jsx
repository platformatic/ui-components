import React from 'react'
import PlatformaticIcon from './PlatformaticIcon'
import { TINY, WHITE } from './constants'

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

export default Status
