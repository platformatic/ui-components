'use strict'
import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { COLORS_ICON, DIRECTION_TOP, MEDIUM, SIZES } from './constants'
import PlatformaticIcon from './PlatformaticIcon'
import Tooltip from './Tooltip'

function CopyAndPaste ({ value, tooltipLabel, color, timeout, size, tooltipClassName }) {
  const [copied, setCopied] = useState(false)

  function copy () {
    navigator.clipboard.writeText(value)
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, timeout)
  }

  return !copied
    ? (<PlatformaticIcon size={size} iconName='CopyPasteIcon' color={color} onClick={() => copy()} />)
    : (
      <Tooltip
        tooltipClassName={tooltipClassName}
        content={(<span>{tooltipLabel}</span>)}
        delay={100}
        direction={DIRECTION_TOP}
        offset={44}
        activeDependsOnVisible
        visible={copied}
      >
        <PlatformaticIcon size={size} iconName='CircleCheckMarkIcon' color={color} onClick={null} />
      </Tooltip>
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
   * timeout
   */
  tooltipClassName: PropTypes.string
}

CopyAndPaste.defaultProps = {
  value: 'app',
  tooltipLabel: 'Create your app now',
  color: 'main-dark-blue',
  timeout: 1500,
  size: MEDIUM,
  tooltipClassName: ''
}

export default CopyAndPaste
