import * as React from 'react'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const TableIcon = ({
  color = MAIN_DARK_BLUE,
  size = MEDIUM,
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
          <path d='M2 5V4C2 2.89543 2.89543 2 4 2H12C13.1046 2 14 2.89543 14 4V5M2 5H6M2 5V8M14 5H10M14 5V8M6 5V14M6 5H10M6 14H4C2.89543 14 2 13.1046 2 12V11M6 14H10M10 5V14M10 14H12C13.1046 14 14 13.1046 14 12V11M2 8H14M2 8V11M14 8V11M2 11H14' stroke='none' />

        </svg>
      )
      break
    case MEDIUM:
      icon = (
        <svg
          width={24}
          height={24}
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={className}
        >
          <path d='M3 7.5V6C3 4.34315 4.34315 3 6 3H18C19.6569 3 21 4.34315 21 6V7.5M3 7.5H9M3 7.5V12M21 7.5H15M21 7.5V12M9 7.5V21M9 7.5H15M9 21H6C4.34315 21 3 19.6569 3 18V16.5M9 21H15M15 7.5V21M15 21H18C19.6569 21 21 19.6569 21 18V16.5M3 12H21M3 12V16.5M21 12V16.5M3 16.5H21' stroke='none' strokeWidth={1.5} />
        </svg>
      )
      break
    case LARGE:
      icon = (
        <svg
          width={40}
          height={40}
          viewBox='0 0 40 40'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={className}
        >
          <path d='M5 12.5V9C5 6.79086 6.79086 5 9 5H31C33.2091 5 35 6.79086 35 9V12.5M5 12.5H15M5 12.5V20M35 12.5H25M35 12.5V20M15 12.5V35M15 12.5H25M15 35H9C6.79086 35 5 33.2091 5 31V27.5M15 35H25M25 12.5V35M25 35H31C33.2091 35 35 33.2091 35 31V27.5M5 20H35M5 20V27.5M35 20V27.5M5 27.5H35' stroke='none' strokeWidth={2} />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

export default TableIcon
