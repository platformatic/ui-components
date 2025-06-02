import * as React from 'react'
import styles from './Icons.module.css'
import { SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const CircleCheckMarkIcon = ({
  color = MAIN_DARK_BLUE,
  size = MEDIUM,
  checked = true,
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
          <circle cx={8} cy={8} r={6} stroke='none' />
          {checked && <path d='M5 8L7.5 10L11 6' stroke='none' strokeLinecap='round' strokeLinejoin='round' />}
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
          <circle cx={12} cy={12} r={9} stroke='none' strokeWidth={1.5} />
          {checked && <path d='M7.5 12L11.25 15L16.5 9' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />}
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
          <circle cx={20} cy={20} r={15} stroke='none' strokeWidth={2} />
          {checked && <path d='M12.5 20L18.75 25L27.5 15' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />}
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

export default CircleCheckMarkIcon
