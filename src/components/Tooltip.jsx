import PropTypes from 'prop-types'
import styles from './Tooltip.module.css'
import { useEffect, useRef, useState } from 'react'
import { DIRECTIONS, DIRECTION_BOTTOM, DIRECTION_LEFT, DIRECTION_RIGHT, DIRECTION_TOP, POSITIONS, POSITION_CENTER, POSITION_END, POSITION_START } from './constants'

function Tooltip ({
  immediateActive = true,
  direction = DIRECTION_TOP,
  visible = false,
  activeDependsOnVisible = false,
  content = null,
  delay = 0,
  children,
  tooltipClassName = '',
  offset = 0,
  position = POSITION_CENTER
}) {
  let timeout
  // const [active, setActive] = useState(activeDependsOnVisible ? visible : false)
  const [active, setActive] = useState(immediateActive)
  let componentClassName = tooltipClassName || styles.tooltipTipBaseClass
  componentClassName += ` ${styles.tooltipTip} ` + styles[`${direction}`]
  if (direction === DIRECTION_BOTTOM || direction === DIRECTION_TOP) {
    componentClassName += ' ' + styles[`${position}`]
  }
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
      let leftPosition

      switch (direction) {
        case DIRECTION_BOTTOM:
          fixedStyle.top = `${referenceBoundingClientRect.y + referenceBoundingClientRect.height + offset}px`
          fixedStyle.left = `${referenceBoundingClientRect.x + (referenceBoundingClientRect.width / 2)}px`
          fixedStyle.transform = 'translateX(-50%)'
          switch (position) {
            case POSITION_END:
              fixedStyle.transform = 'translateX(0%)'
              fixedStyle.left = `${referenceBoundingClientRect.x + (referenceBoundingClientRect.width / 2) - 10}px`
              break
            case POSITION_START:
              fixedStyle.transform = 'translateX(-100%)'
              fixedStyle.left = `${referenceBoundingClientRect.x + (referenceBoundingClientRect.width / 2) + 10}px`
              break
            default:
              fixedStyle.transform = 'translateX(-50%)'
              break
          }
          break
        case DIRECTION_LEFT:
          fixedStyle.top = `${referenceBoundingClientRect.y + referenceBoundingClientRect.height / 2}px`
          leftPosition = referenceBoundingClientRect.x - (2 * referenceBoundingClientRect.width) + offset
          fixedStyle.left = `${leftPosition}px`
          break
        case DIRECTION_RIGHT:
          fixedStyle.top = `${referenceBoundingClientRect.y + referenceBoundingClientRect.height / 2}px`
          leftPosition = referenceBoundingClientRect.x + referenceBoundingClientRect.width + offset
          fixedStyle.left = `${leftPosition}px`
          break
        default:
          fixedStyle.top = `${referenceBoundingClientRect.y - referenceBoundingClientRect.height - offset}px`
          fixedStyle.left = `${referenceBoundingClientRect.x + (referenceBoundingClientRect.width / 2)}px`
          switch (position) {
            case POSITION_END:
              fixedStyle.transform = 'translateX(0%)'
              fixedStyle.left = `${referenceBoundingClientRect.x + (referenceBoundingClientRect.width / 2) - 10}px`
              break
            case POSITION_START:
              fixedStyle.transform = 'translateX(-100%)'
              fixedStyle.left = `${referenceBoundingClientRect.x + (referenceBoundingClientRect.width / 2) + 10}px`
              break
            default:
              fixedStyle.transform = 'translateX(-50%)'
              break
          }
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
   * immediateActive
   */
  immediateActive: PropTypes.bool,
  /**
   * activeDependsOnVisible
   */
  activeDependsOnVisible: PropTypes.bool,
  /**
   * offset
   */
  offset: PropTypes.number,
  /**
   * position
   */
  position: PropTypes.oneOf(POSITIONS)
}

export default Tooltip
