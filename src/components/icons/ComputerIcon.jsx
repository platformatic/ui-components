import * as React from 'react'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const ComputerIcon = ({
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
          <rect x='2' y='2' width='12' height='8' rx='1' stroke='none' />
          <rect x='6' y='10' width='4' height='2' stroke='none' />
          <path d='M4 13C4 12.4477 4.44772 12 5 12H11C11.5523 12 12 12.4477 12 13V14H4V13Z' stroke='none' />
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
          <rect x='3' y='3' width='18' height='12' rx='1' stroke='none' strokeWidth={1.5} />
          <rect x='9' y='15' width='6' height='3' stroke='none' strokeWidth={1.5} />
          <path d='M6 19C6 18.4477 6.44772 18 7 18H17C17.5523 18 18 18.4477 18 19V21H6V19Z' stroke='none' strokeWidth={1.5} />
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
          <rect x='5' y='5' width='30' height='20' rx='1' stroke='none' strokeWidth={2} />
          <rect x='15' y='25' width='10' height='5' stroke='none' strokeWidth={2} />
          <path d='M10 31C10 30.4477 10.4477 30 11 30H29C29.5523 30 30 30.4477 30 31V35H10V31Z' stroke='none' strokeWidth={2} />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

export default ComputerIcon
