import * as React from 'react'
import styles from './Icons.module.css'
import { SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const SortIcon = ({
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
  const filledClassName = styles[`filled-${color}`]
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
          <path opacity='0.3' d='M5 7.41943L8 2.41943L11 7.41943H5Z' fill='none' className={filledClassName} stroke='none' strokeLinejoin='round' />
          <path opacity='0.3' d='M11 9.41943L8 14.4194L5 9.41943L11 9.41943Z' fill='none' className={filledClassName} stroke='none' strokeLinejoin='round' />
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
          <path opacity='0.3' d='M7.5 10.5L12 3L16.5 10.5H7.5Z' fill='none' className={filledClassName} stroke='none' strokeLinejoin='round' />
          <path opacity='0.3' d='M16.5 13.5L12 21L7.5 13.5L16.5 13.5Z' fill='none' className={filledClassName} stroke='none' strokeLinejoin='round' />
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
          <path opacity='0.3' d='M12.5 17.5L20 5L27.5 17.5H12.5Z' fill='none' className={filledClassName} stroke='none' strokeLinejoin='round' />
          <path opacity='0.3' d='M27.5 22.5L20 35L12.5 22.5L27.5 22.5Z' fill='none' className={filledClassName} stroke='none' strokeLinejoin='round' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

export default SortIcon
