import * as React from 'react'
import styles from './Icons.module.css'
import { SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE, EXTRA_MEDIUM } from '../constants'

const AppDetailsIcon = ({
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
          <path d='M2.5 5V10.8722L8 14M8 14L13.5 10.8722V5M8 14V10.8722' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M4 5.71428L2.5 4.85711L8 2L13.5 4.85711L11.625 5.71428' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <circle cx='7.58333' cy='7.08333' r='2.08333' stroke='none' />
          <path d='M10.5 10L9.25 8.75' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
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
          <path d='M3.75 7.5V16.3083L12 21M12 21L20.25 16.3083V7.5M12 21V16.3083' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M6 8.57142L3.75 7.28567L12 3L20.25 7.28567L17.4375 8.57142' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <circle cx='11.375' cy='10.625' r='3.125' stroke='none' strokeWidth={1.5} />
          <path d='M15.75 15L13.875 13.125' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />

        </svg>
      )
      break
    case EXTRA_MEDIUM:
      icon = (
        <svg
          width={32}
          height={32}
          viewBox='0 0 32 32'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={className}
        >
          <path d='M21.3205 12V9L12.6603 4L4 9V19L10.6602 22.8452' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <circle cx='18.4935' cy='19.8333' r='5.83333' stroke='none' strokeWidth={1.5} />
          <path d='M26.6602 28L23.1602 24.5' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
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
          <path d='M6.25 12.5V27.1806L20 35M20 35L33.75 27.1806V12.5M20 35V27.1806' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M10 14.2857L6.25 12.1428L20 5L33.75 12.1428L29.0625 14.2857' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <circle cx='18.9583' cy='17.7083' r='5.20833' stroke='none' strokeWidth={2} />
          <path d='M26.25 25L23.125 21.875' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />

        </svg>
      )
      break

    default:
      break
  }
  return icon
}

export default AppDetailsIcon
