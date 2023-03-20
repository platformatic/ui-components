
import PropTypes from 'prop-types'
import { COLORS_ICON } from './constants'
import { useState } from 'react'
import PlatformaticIcon from './PlatformaticIcon'
import ReactTooltip from 'react-tooltip'

function CopyAndPaste ({ id, value, tooltipLabel, iconColor, timeout }) {
  const [copied, setCopied] = useState(false)

  function copy () {
    navigator.clipboard.writeText(value)
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, timeout)
  }

  return !copied
    ? (<PlatformaticIcon size='medium' iconName='CopyPasteIcon' color={iconColor} onClick={() => copy()} />)
    : (
      <>
        <div data-tip={tooltipLabel} data-place='top'>
          <PlatformaticIcon size='medium' iconName='CircleCheckMarkIcon' color={iconColor} onClick={null} />
        </div>
        <ReactTooltip place='top' type='info' />
      </>
      )
}

CopyAndPaste.propTypes = {
  /**
   * id
   */
  id: PropTypes.string,
  /**
  /**
   * value
   */
  value: PropTypes.string,
  /**
   * tooltipLabel
   */
  tooltipLabel: PropTypes.string,
  /**
   * iconColor
   */
  iconColor: PropTypes.oneOf(COLORS_ICON),
  /**
   * timeout
   */
  timeout: PropTypes.number
}

CopyAndPaste.defaultProps = {
  value: 'app',
  tooltipLabel: 'Create your app now',
  iconColor: 'main-dark-blue',
  timeout: 1500
}

export default CopyAndPaste
