import * as React from 'react'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const BellIcon = ({
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
          <path d='M8 2C5.79086 2 4 3.62806 4 5.63636V9.5L2 12H14L12 9V5.63636C12 3.62806 10.2091 2 8 2Z' stroke='none' strokeLinejoin='round' />
          <path d='M10 12C10 13.1046 9.10457 14 8 14C6.89543 14 6 13.1046 6 12' stroke='none' />
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
          <path d='M12 3C8.68629 3 6 5.44208 6 8.45455V14.25L3 18H21L18 13.5V8.45455C18 5.44208 15.3137 3 12 3Z' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
          <path d='M15 18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18' stroke='none' strokeWidth={1.5} />
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
          <path d='M20 5C14.4772 5 10 9.07014 10 14.0909V23.75L5 30H35L30 22.5V14.0909C30 9.07014 25.5228 5 20 5Z' stroke='none' strokeWidth={2} strokeLinejoin='round' />
          <path d='M25 30C25 32.7614 22.7614 35 20 35C17.2386 35 15 32.7614 15 30' stroke='none' strokeWidth={2} />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

export default BellIcon
