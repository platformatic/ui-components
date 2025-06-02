import * as React from 'react'
import styles from './Icons.module.css'
import { SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const CircleArrowRightIcon = ({
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
          width={18}
          height={18}
          viewBox='0 0 18 18'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          transform='rotate(180)'
          className={className}
        >
          <circle cx={9} cy={9} r={8} stroke='none' />
          <path
            d='M10 5L6 9L10 13'
            stroke='none'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      )
      break
    case MEDIUM:
      icon = (
        <svg
          width={26}
          height={26}
          viewBox='0 0 26 26'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          transform='rotate(180)'
          className={className}
        >
          <circle cx={13} cy={13} r={12} fill='none' stroke='none' strokeWidth={1.5} />
          <path
            d='M14.5 7L8.5 13L14.5 19'
            stroke='none'
            strokeWidth={1.5}
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      )
      break

    case LARGE:
      icon = (
        <svg
          width={42}
          height={42}
          viewBox='0 0 42 42'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          transform='rotate(180)'
          className={className}
        >
          <circle cx={21} cy={21} r={20} fill='none' stroke='none' strokeWidth={2} />
          <path
            d='M23.5 11L13.5 21L23.5 31'
            stroke='none'
            strokeWidth={2}
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      )
      break
    default:
      break
  }
  return icon
}

export default CircleArrowRightIcon
