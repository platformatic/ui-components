import * as React from 'react'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const PodDetailsIcon = ({
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
          <path d='M8 2L13.1962 5V11L8 14L2.80385 11V5L8 2Z' stroke='none' strokeLinejoin='round' />
          <circle cx='7.5' cy='7.5' r='2.5' stroke='none' />
          <path d='M9.5 9.5L10.6172 10.6172' stroke='none' strokeLinecap='round' strokeLinejoin='round' />

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
          <path d='M12 3L19.7942 7.5V16.5L12 21L4.20577 16.5V7.5L12 3Z' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
          <circle cx='11.25' cy='11.25' r='3.75' stroke='none' strokeWidth={1.5} />
          <path d='M14.25 14.25L15.9258 15.9258' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />

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
          <path d='M20 5L32.9904 12.5V27.5L20 35L7.00962 27.5V12.5L20 5Z' stroke='none' strokeWidth={2} strokeLinejoin='round' />
          <circle cx='18.75' cy='18.75' r='6.25' stroke='none' strokeWidth={2} />
          <path d='M23.75 23.75L26.543 26.543' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />

        </svg>
      )
      break

    default:
      break
  }
  return icon
}

export default PodDetailsIcon
