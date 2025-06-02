import * as React from 'react'
import styles from './Icons.module.css'
import { SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const CirclePlayIcon = ({
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
  const filledClassName = styles[`filled-${color}`]

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
          <circle cx='8' cy='8' r='6' stroke='none' />
          <path d='M7 10V6L10.5 8L7 10Z' fill='none' className={filledClassName} stroke='none' strokeLinejoin='round' />

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
          <circle cx='12' cy='12' r='9' stroke='none' strokeWidth={1.5} />
          <path d='M10.5 15V9L15.75 12L10.5 15Z' fill='none' className={filledClassName} stroke='none' strokeWidth={1.5} strokeLinejoin='round' />

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
          <circle cx='20' cy='20' r='15' stroke='none' strokeWidth={2} />
          <path d='M17.5 25V15L26.25 20L17.5 25Z' fill='none' className={filledClassName} stroke='none' strokeWidth={2} strokeLinejoin='round' />

        </svg>
      )
      break

    default:
      break
  }
  return icon
}

export default CirclePlayIcon
