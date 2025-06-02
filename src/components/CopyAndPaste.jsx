import React, { useState } from 'react'
import { DIRECTION_TOP, MEDIUM, POSITION_CENTER, MAIN_DARK_BLUE } from './constants'
import PlatformaticIcon from './PlatformaticIcon'
import TooltipAbsolute from './TooltipAbsolute'
import Tooltip from './Tooltip'

function CopyAndPaste ({
  value = 'app',
  tooltipLabel = 'Create your app now',
  color = MAIN_DARK_BLUE,
  timeout = 1500,
  size = MEDIUM,
  tooltipClassName = '',
  position = POSITION_CENTER,
  internalOverHandling = false,
  tooltipFixed = false
}) {
  const [copied, setCopied] = useState(false)

  function copy () {
    navigator.clipboard.writeText(value)
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, timeout)
  }

  function renderTooltip () {
    if (tooltipFixed) {
      return (
        <Tooltip
          tooltipClassName={tooltipClassName}
          content={(<span>{tooltipLabel}</span>)}
          delay={100}
          direction={DIRECTION_TOP}
          offset={24}
          activeDependsOnVisible
          visible={copied}
          position={position}
        >
          <PlatformaticIcon
            size={size}
            iconName={!copied ? 'CopyPasteIcon' : 'CircleCheckMarkIcon'}
            color={color}
            onClick={() => !copied ? copy() : {}}
            internalOverHandling={internalOverHandling}
          />
        </Tooltip>
      )
    }
    return (
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
        <PlatformaticIcon
          size={size}
          iconName={!copied ? 'CopyPasteIcon' : 'CircleCheckMarkIcon'}
          color={color}
          onClick={() => !copied ? copy() : {}}
          internalOverHandling={internalOverHandling}
        />
      </TooltipAbsolute>
    )
  }

  return renderTooltip()
}

export default CopyAndPaste
