import * as React from 'react'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const HourglassIcon = ({
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
          <path d='M12 2H4V4H12V2Z' stroke='none' strokeLinejoin='round' />
          <path d='M4 12V14H12V12H4Z' stroke='none' strokeLinejoin='round' />
          <path d='M11 4V4C11 5.24949 10.3755 6.41631 9.3359 7.1094L6.6641 8.8906C5.62446 9.58369 5 10.7505 5 12V12' stroke='none' />
          <path d='M5 4V4C5 5.24949 5.62446 6.41631 6.6641 7.1094L9.3359 8.8906C10.3755 9.58369 11 10.7505 11 12V12' stroke='none' />
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
          <path d='M18 3H6V6H18V3Z' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
          <path d='M6 18V21H18V18H6Z' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
          <path d='M16.5 6V6C16.5 7.87423 15.5633 9.62446 14.0038 10.6641L9.99615 13.3359C8.43669 14.3755 7.5 16.1258 7.5 18V18' stroke='none' strokeWidth={1.5} />
          <path d='M7.5 6V6C7.5 7.87423 8.43669 9.62446 9.99615 10.6641L14.0038 13.3359C15.5633 14.3755 16.5 16.1258 16.5 18V18' stroke='none' strokeWidth={1.5} />
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
          <path d='M30 5H10V10H30V5Z' stroke='none' strokeWidth={2} strokeLinejoin='round' />
          <path d='M10 30V35H30V30H10Z' stroke='none' strokeWidth={2} strokeLinejoin='round' />
          <path d='M27.5 10V11.7889C27.5 13.795 26.4974 15.6684 24.8282 16.7812L15.1718 23.2188C13.5026 24.3316 12.5 26.205 12.5 28.2111V30' stroke='none' strokeWidth={2} />
          <path d='M12.5 10V11.7889C12.5 13.795 13.5026 15.6684 15.1718 16.7812L24.8282 23.2188C26.4974 24.3316 27.5 26.205 27.5 28.2111V30' stroke='none' strokeWidth={2} />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

export default HourglassIcon
