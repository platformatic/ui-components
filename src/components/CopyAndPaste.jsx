
import PropTypes from 'prop-types'
import { COLORS_ICON, MEDIUM, SIZES } from './constants'
import { useState } from 'react'
import PlatformaticIcon from './PlatformaticIcon'
import ReactTooltip from 'react-tooltip'

function CopyAndPaste ({ value, tooltipLabel, color, timeout, size }) {
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
      <>
        <span data-tip={tooltipLabel} data-place='top'>
          <PlatformaticIcon size={size} iconName='CircleCheckMarkIcon' color={color} onClick={null} />
        </span>
        <ReactTooltip place='top' type='info' />
      </>
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
  timeout: PropTypes.number
}

CopyAndPaste.defaultProps = {
  value: 'app',
  tooltipLabel: 'Create your app now',
  color: 'main-dark-blue',
  timeout: 1500,
  size: MEDIUM
}

export default CopyAndPaste
