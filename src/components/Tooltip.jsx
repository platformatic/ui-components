'use strict'
import PropTypes from 'prop-types'
import styles from './Tooltip.module.css'
import { useEffect, useRef, useState } from 'react'
import { ALIGNMENT_CENTER, ALIGNMENT_LEFT, ALIGNMENTS } from './constants'

function Tooltip ({ tooltipClassName, text, visible, alignment }) {
  const ref = useRef(null)
  const alignmentClassName = styles[`${alignment}PltTooltip`]
  const [className, setClassName] = useState(normalClassName())

  useEffect(() => {
    if (visible) {
      setClassName(visibleClassName())
      if (ref.current) {
        if (alignment === ALIGNMENT_LEFT) {
          ref.current.style.marginLeft = '-0px'
        }
        if (alignment === ALIGNMENT_CENTER) {
          ref.current.style.marginLeft = '-' + ((ref.current.clientWidth / 2) - 12) + 'px'
        }
      }
    } else {
      setClassName(normalClassName())
    }
  }, [visible])

  function normalClassName () {
    return `${styles.pltTooltipText} ${tooltipClassName} ${alignmentClassName}`
  }

  function visibleClassName () {
    return `${normalClassName()} ${styles.pltTooltipTextVisible}`
  }

  return <span ref={ref} className={className}>{text}</span>
}

Tooltip.propTypes = {
  /**
   * text
   */
  text: PropTypes.string,
  /**
   * tooltipClassName
   */
  tooltipClassName: PropTypes.string,
  /**
   * visible
   */
  visible: PropTypes.bool,
  /**
   * alignment
   */
  alignment: PropTypes.oneOf(ALIGNMENTS)
}

Tooltip.defaultProps = {
  text: '',
  tooltipClassName: '',
  visible: false,
  alignment: ALIGNMENT_LEFT
}

export default Tooltip
