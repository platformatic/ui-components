import * as React from 'react'
import styles from './Icons.module.css'
import { SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const FlamegraphsIcon = ({
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
          <rect x='2' y='11' width='12' height='3' stroke='none' strokeLinejoin='round' />
          <rect x='4' y='6' width='8' height='3' stroke='none' strokeLinejoin='round' />
          <rect x='6' y='2' width='4' height='2' stroke='none' strokeLinejoin='round' />
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
          <rect x='3' y='16.5' width='18' height='4.5' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
          <rect x='6' y='9' width='12' height='4.5' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
          <rect x='9' y='3' width='6' height='3' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
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
          <rect x='5' y='27.5' width='30' height='7.5' stroke='none' strokeWidth={2} strokeLinejoin='round' />
          <rect x='10' y='15' width='20' height='7.5' stroke='none' strokeWidth={2} strokeLinejoin='round' />
          <rect x='15' y='5' width='10' height='5' stroke='none' strokeWidth={2} strokeLinejoin='round' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

export default FlamegraphsIcon
