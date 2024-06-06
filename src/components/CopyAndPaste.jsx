'use strict'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { COLORS_ICON, DIRECTION_TOP, MEDIUM, SIZES, POSITIONS, POSITION_CENTER, MAIN_DARK_BLUE } from './constants'
import PlatformaticIcon from './PlatformaticIcon'
import TooltipAbsolute from './TooltipAbsolute'

function CopyAndPaste ({
  value = 'app',
  tooltipLabel = 'Create your app now',
  color = MAIN_DARK_BLUE,
  timeout = 1500,
  size = MEDIUM,
  tooltipClassName = '',
  position = POSITION_CENTER,
  internalOverHandling = false
}) {
  const [copied, setCopied] = useState(false)

  function copy () {
    navigator.clipboard.writeText(value)
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, timeout)
  }

  return !copied
    ? (<PlatformaticIcon size={size} iconName='CopyPasteIcon' color={color} onClick={() => copy()} internalOverHandling={internalOverHandling} />)
    : (
      <TooltipAbsolute
        tooltipClassName={tooltipClassName}
        content={(<span>{tooltipLabel}</span>)}
        delay={100}
        direction={DIRECTION_TOP}
        offset={44}
        activeDependsOnVisible
        visible={copied}
        position={position}
      >
        <PlatformaticIcon size={size} iconName='CircleCheckMarkIcon' color={color} onClick={null} />
      </TooltipAbsolute>
      )
}

CopyAndPaste.propTypes = {
  /**
   * value
   */
  value: PropTypes.string,
  /**
   * tooltipLabel
   */
  tooltipLabel: PropTypes.string,
  /**
   * size
   */
  size: PropTypes.oneOf(SIZES),
  /**
   * color
   */
  color: PropTypes.oneOf(COLORS_ICON),
  /**
   * timeout
   */
  timeout: PropTypes.number,
  /**
   * internalOverHandling
   */
  internalOverHandling: PropTypes.bool,
  /**
   * timeout
   */
  tooltipClassName: PropTypes.string,
  /**
   * position
   */
  position: PropTypes.oneOf(POSITIONS)
}

export default CopyAndPaste
