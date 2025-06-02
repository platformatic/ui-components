import * as React from 'react'
import styles from './Icons.module.css'
import { MAIN_DARK_BLUE, SMALL } from '../constants'

const EyeOpenedIcon = ({
  color = MAIN_DARK_BLUE,
  size = SMALL,
  disabled = false,
  inactive = false
}) => {
  let className = `${styles.svgClassName} ` + styles[`${color}`]
  if (disabled) {
    className += ` ${styles.iconDisabled}`
  }
  if (inactive) {
    className += ` ${styles.iconInactive}`
  }
  let icon = <></>

  switch (size) {
    case SMALL:
      icon = (
        <svg
          width={16}
          height={16}
          viewBox='0 0 16 16'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={className}
        >
          <ellipse cx='8' cy='8' rx='6' ry='3' stroke='none' />
          <ellipse cx='8' cy='7.88462' rx='3' ry='2.88462' stroke='none' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

export default EyeOpenedIcon
