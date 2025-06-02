import styles from './TooltipAbsolute.module.css'
import { useEffect, useState } from 'react'
import { DIRECTIONS, DIRECTION_LEFT, DIRECTION_BOTTOM, DIRECTION_TOP, DIRECTION_RIGHT, POSITION_START } from './constants'

const TooltipAbsolute = ({
  direction = DIRECTION_TOP,
  tooltipClassName = '',
  delay = 0,
  children,
  content = null,
  offset = 0,
  position = POSITION_START,
  visible = false,
  activeDependsOnVisible = false
}) => {
  let timeout
  const [active, setActive] = useState(activeDependsOnVisible ? visible : false)
  let componentClassName = tooltipClassName || styles.tooltipTipBaseClass
  componentClassName += ` ${styles.tooltipTip} ` + styles[`${position}`] + ' ' + styles[`${direction}`]

  const absoluteStyle = {}

  switch (direction) {
    case DIRECTION_BOTTOM:
      absoluteStyle.bottom = `calc(${offset}px * -1)`
      break
    case DIRECTION_RIGHT:
      absoluteStyle.left = `calc(100% + ${offset}px)`
      break
    case DIRECTION_LEFT:
      absoluteStyle.right = `calc(100% + ${offset}px)`
      break
    default:
      absoluteStyle.top = `calc(${offset}px * -1)`
      break
  }

  useEffect(() => {
    if (activeDependsOnVisible) {
      setActive(visible)
    }
  }, [activeDependsOnVisible, visible])

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
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >

      {children}
      {active && (
        <div className={componentClassName} style={{ ...absoluteStyle }}>
          {content}
        </div>
      )}
    </div>
  )
}

export default TooltipAbsolute
