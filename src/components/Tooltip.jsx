'use strict'
import PropTypes from 'prop-types'
import styles from './Tooltip.module.css'
import { useEffect, useRef, useState } from 'react'
import { DIRECTIONS, DIRECTION_BOTTOM, DIRECTION_LEFT, DIRECTION_RIGHT, DIRECTION_TOP } from './constants'

function Tooltip ({
  direction = DIRECTION_TOP,
  visible = false,
  activeDependsOnVisible = false,
  content = null,
  delay = 0,
  children = null,
  tooltipClassName = '',
  offset = 0
}) {
  let timeout
  const [active, setActive] = useState(activeDependsOnVisible ? visible : false)
  // const [active, setActive] = useState(true)
  let componentClassName = tooltipClassName || styles.tooltipTipBaseClass
  componentClassName += ` ${styles.tooltipTip} ` + styles[`${direction}`]
  const fixedStyle = { top: '0px', left: '0px' }
  const wrapperRef = useRef()

  useEffect(() => {
    if (activeDependsOnVisible) {
      setActive(visible)
    }
  }, [activeDependsOnVisible, visible])

  if (wrapperRef.current) {
    const referenceBoundingClientRect = wrapperRef.current.getBoundingClientRect()
    if (referenceBoundingClientRect) {
      let topPosition
      let leftPosition

      switch (direction) {
        case DIRECTION_BOTTOM:
          topPosition = referenceBoundingClientRect.y - (referenceBoundingClientRect.height) - offset
          fixedStyle.top = `${topPosition}px`
          // fixedStyle.bottom = `calc(${offset}px *-1)`
          break
        case DIRECTION_RIGHT:
        case DIRECTION_LEFT:
          leftPosition = referenceBoundingClientRect.x + referenceBoundingClientRect.width + offset
          fixedStyle.left = `${leftPosition}px`
          break
        default:
          fixedStyle.top = `${referenceBoundingClientRect.y - referenceBoundingClientRect.height - offset}px`
          fixedStyle.left = `${referenceBoundingClientRect.x + (referenceBoundingClientRect.width / 2)}px`
          fixedStyle.transform = 'translateX(-50%)'
          break
      }
    }
  }

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true)
    }, delay)
  }

  const hideTip = () => {
    clearInterval(timeout)
    setActive(false)
  }

  return (
    <div
      className={styles.tooltipWrapper}
      onMouseEnter={!activeDependsOnVisible ? showTip : () => {}}
      onMouseLeave={!activeDependsOnVisible ? hideTip : () => {}}
      ref={el => { wrapperRef.current = el }}
    >
      {children}
      {active && (
        <div className={componentClassName} style={{ ...fixedStyle }}>
          {content}
        </div>
      )}
    </div>
  )
}

Tooltip.propTypes = {
  /**
   * direction
   */
  direction: PropTypes.oneOf(DIRECTIONS),
  /**
   * content
   */
  content: PropTypes.node,
  /**
   * children
   */
  children: PropTypes.node,
  /**
   * tooltipClassName
   */
  tooltipClassName: PropTypes.string,
  /**
   * delay
   */
  delay: PropTypes.number,
  /**
   * visible
   */
  visible: PropTypes.bool,
  /**
   * activeDependsOnVisible
   */
  activeDependsOnVisible: PropTypes.bool,
  /**
   * offset
   */
  offset: PropTypes.number
}

export default Tooltip
