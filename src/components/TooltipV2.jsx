'use strict'
import PropTypes from 'prop-types'
import styles from './TooltipV2.module.css'
import { useEffect, useRef, useState } from 'react'
import { ALIGNMENT_LEFT, ALIGNMENTS } from './constants'

function TooltipV2 ({ tooltipClassName, text, visible, alignment, elementClassName }) {
  const ref = useRef(null)
  const alignmentClassName = styles[`${alignment}PltTooltip`]
  const [className, setClassName] = useState(normalClassName())

  useEffect(() => {
    if (visible) {
      setClassName(visibleClassName())
      if (ref.current) {
        console.log('elementClassName', elementClassName)
        const referenceBoundingClientRect = document.getElementsByClassName(elementClassName)[0]?.getBoundingClientRect()
        if (referenceBoundingClientRect) {
          const topPosition = referenceBoundingClientRect.y - (referenceBoundingClientRect.height)
          const leftPosition = referenceBoundingClientRect.x + (referenceBoundingClientRect.width / 2)
          ref.current.style.top = `${topPosition}px`
          ref.current.style.left = `${leftPosition}px`
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

TooltipV2.propTypes = {
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
  alignment: PropTypes.oneOf(ALIGNMENTS),
  /**
   * alignment
   */
  elementClassName: PropTypes.string
}

TooltipV2.defaultProps = {
  text: '',
  tooltipClassName: '',
  visible: false,
  alignment: ALIGNMENT_LEFT,
  elementClassName: ''
}

export default TooltipV2
