import * as React from 'react'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const ComputerInIcon = ({
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
          <path d='M14 3.5V3C14 2.44772 13.5523 2 13 2H3C2.44772 2 2 2.44772 2 3V9C2 9.55228 2.44772 10 3 10H13C13.5523 10 14 9.55228 14 9V8.5' stroke='none' strokeLinecap='round' />
          <path d='M14 6L6 6M6 6L8 8M6 6L8 4' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
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
          <path d='M21 5.25V4C21 3.44772 20.5523 3 20 3H4C3.44772 3 3 3.44772 3 4V14C3 14.5523 3.44772 15 4 15H20C20.5523 15 21 14.5523 21 14V12.75' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <path d='M21 9L9 9M9 9L12 12M9 9L12 6' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
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
          <path d='M35 8.75V6C35 5.44772 34.5523 5 34 5H6C5.44772 5 5 5.44772 5 6V24C5 24.5523 5.44772 25 6 25H34C34.5523 25 35 24.5523 35 24V21.25' stroke='none' strokeWidth={2} strokeLinecap='round' />
          <path d='M35 15L15 15M15 15L20 20M15 15L20 10' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
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

export default ComputerInIcon
