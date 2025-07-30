import * as React from 'react'
import styles from './Icons.module.css'
import { SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const TechIcon = ({
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
          height={17}
          viewBox='0 0 16 17'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={className}
        >
          <rect x='5' y='5.5' width='6' height='6' stroke='none' strokeLinejoin='round' />
          <path d='M6 5.5V2.5' stroke='none' strokeLinecap='round' />
          <path d='M8 5.5V2.5' stroke='none' strokeLinecap='round' />
          <path d='M10 5.5V2.5' stroke='none' strokeLinecap='round' />
          <path d='M6 14.5V11.5' stroke='none' strokeLinecap='round' />
          <path d='M8 14.5V11.5' stroke='none' strokeLinecap='round' />
          <path d='M10 14.5V11.5' stroke='none' strokeLinecap='round' />
          <path d='M5 10.5L2 10.5' stroke='none' strokeLinecap='round' />
          <path d='M5 8.5L2 8.5' stroke='none' strokeLinecap='round' />
          <path d='M5 6.5L2 6.5' stroke='none' strokeLinecap='round' />
          <path d='M14 10.5L11 10.5' stroke='none' strokeLinecap='round' />
          <path d='M14 8.5L11 8.5' stroke='none' strokeLinecap='round' />
          <path d='M14 6.5L11 6.5' stroke='none' strokeLinecap='round' />
        </svg>
      )
      break
    case MEDIUM:
      icon = (
        <svg
          width={24}
          height={25}
          viewBox='0 0 24 25'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={className}
        >
          <rect x='7.5' y='8.25' width='9' height='9' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
          <path d='M9 8.25V3.75' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <path d='M12 8.25V3.75' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <path d='M15 8.25V3.75' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <path d='M9 21.75V17.25' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <path d='M12 21.75V17.25' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <path d='M15 21.75V17.25' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <path d='M7.5 15.75L3 15.75' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <path d='M7.5 12.75L3 12.75' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <path d='M7.5 9.75L3 9.75' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <path d='M21 15.75L16.5 15.75' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <path d='M21 12.75L16.5 12.75' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <path d='M21 9.75L16.5 9.75' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
        </svg>
      )
      break
    case LARGE:
      icon = (
        <svg
          width={40}
          height={41}
          viewBox='0 0 40 41'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={className}
        >
          <rect x='12.5' y='13.75' width='15' height='15' stroke='none' strokeWidth={2} strokeLinejoin='round' />
          <path d='M15 13.75V6.25' stroke='none' strokeWidth={2} strokeLinecap='round' />
          <path d='M20 13.75V6.25' stroke='none' strokeWidth={2} strokeLinecap='round' />
          <path d='M25 13.75V6.25' stroke='none' strokeWidth={2} strokeLinecap='round' />
          <path d='M15 36.25V28.75' stroke='none' strokeWidth={2} strokeLinecap='round' />
          <path d='M20 36.25V28.75' stroke='none' strokeWidth={2} strokeLinecap='round' />
          <path d='M25 36.25V28.75' stroke='none' strokeWidth={2} strokeLinecap='round' />
          <path d='M12.5 26.25L5 26.25' stroke='none' strokeWidth={2} strokeLinecap='round' />
          <path d='M12.5 21.25L5 21.25' stroke='none' strokeWidth={2} strokeLinecap='round' />
          <path d='M12.5 16.25L5 16.25' stroke='none' strokeWidth={2} strokeLinecap='round' />
          <path d='M35 26.25L27.5 26.25' stroke='none' strokeWidth={2} strokeLinecap='round' />
          <path d='M35 21.25L27.5 21.25' stroke='none' strokeWidth={2} strokeLinecap='round' />
          <path d='M35 16.25L27.5 16.25' stroke='none' strokeWidth={2} strokeLinecap='round' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

export default TechIcon
