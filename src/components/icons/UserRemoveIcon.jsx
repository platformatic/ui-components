import * as React from 'react'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const UserRemoveIcon = ({
  color = MAIN_DARK_BLUE,
  size = MEDIUM,
  tip = '',
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
          data-tip={tip}
          className={className}
        >
          <path d='M7 10.0553C4.16229 10.3727 2 12.018 2 14H8' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <circle cx={8} cy={5} r={3} stroke='none' />
          <circle cx={11} cy={11} r={3} stroke='none' />
          <path d='M10 10L12 12' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M10 12L12 10' stroke='none' strokeLinecap='round' strokeLinejoin='round' />

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
          data-tip={tip}
          className={className}
        >
          <path d='M10.5 15.083C6.24343 15.559 3 18.027 3 21H12' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <circle cx={12} cy={7.5} r={4.5} stroke='none' strokeWidth={1.5} />
          <circle cx={16.5} cy={16.5} r={4.5} stroke='none' strokeWidth={1.5} />
          <path d='M15 15L18 18' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M15 18L18 15' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
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
          data-tip={tip}
          className={className}
        >
          <path d='M17.5 25.1383C10.4057 25.9317 5 30.045 5 35H20' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <circle cx={20} cy={12.5} r={7.5} stroke='none' strokeWidth={2} />
          <circle cx={27.5} cy={27.5} r={7.5} stroke='none' strokeWidth={2} />
          <path d='M25 25L30 30' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M25 30L30 25' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

export default UserRemoveIcon
