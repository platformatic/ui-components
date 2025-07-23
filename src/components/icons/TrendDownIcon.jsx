import * as React from 'react'
import styles from './Icons.module.css'
import { SMALL, MAIN_DARK_BLUE } from '../constants'

const TrendDownIcon = ({
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
          <path d='M2.66602 2.25L5.83487 8.1916C6.20065 8.87744 7.1748 8.90203 7.57471 8.2355L8.77521 6.23467C9.1712 5.5747 10.1331 5.59072 10.5069 6.26352L14.666 13.75M14.666 13.75L11.166 12.75M14.666 13.75V9.75' stroke='white' strokeLinecap='round' strokeLinejoin='round' />
        </svg>
      )
      break
    default:
      break
  }
  return icon
}

export default TrendDownIcon
