import React, { useState } from 'react'
import Icons from './icons'
import styles from './PlatformaticIcon.module.css'
import { MAIN_GREEN, SMALL } from './constants'

function PlatformaticIcon ({
  iconName = '',
  color = MAIN_GREEN,
  onClick = () => {},
  size = SMALL,
  classes = '',
  tip = '',
  disabled = false,
  inactive = false,
  internalOverHandling = false,
  ...rest
}) {
  const [hover, setHover] = useState(false)
  let icon = <></>
  if (iconName) {
    icon = React.createElement(Icons[`${iconName}`], {
      color,
      size,
      tip,
      disabled,
      inactive: internalOverHandling ? !hover : inactive,
      ...rest
    })
    if (onClick && !disabled) {
      let className = `${styles.cursorPointer} ${tip ? styles.pltTooltip : ''}`
      if (classes) className += ` ${classes}`
      icon = (
        <div
          className={className}
          onClick={onClick}
          onMouseOver={() => internalOverHandling && !disabled ? setHover(true) : {}}
          onMouseLeave={() => internalOverHandling && !disabled ? setHover(false) : {}}
        >
          {icon}
        </div>
      )
    }
  }

  return (
    <>
      {icon}
    </>
  )
}

export default PlatformaticIcon
