import * as React from 'react'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const CollapseSquareIcon = ({
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
          <path d='M13 8L8 8L8 3' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M6 4H3C2.44772 4 2 4.44772 2 5V13C2 13.5523 2.44772 14 3 14H11C11.5523 14 12 13.5523 12 13V10' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M8.5 7.5L14 2' stroke={color} strokeLinecap='round' strokeLinejoin='round' />
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
          <path d='M19.5 12L12 12L12 4.5' stroke={color} strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M9 6H4C3.44772 6 3 6.44772 3 7V20C3 20.5523 3.44772 21 4 21H17C17.5523 21 18 20.5523 18 20V15' stroke={color} strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M12.75 11.25L21 3' stroke={color} strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />

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
          <path d='M32.5 20L20 20L20 7.5' stroke={color} strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M15 10H6C5.44772 10 5 10.4477 5 11V34C5 34.5523 5.44772 35 6 35H29C29.5523 35 30 34.5523 30 34V25' stroke={color} strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M21.25 18.75L35 5' stroke={color} strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

export default CollapseSquareIcon
