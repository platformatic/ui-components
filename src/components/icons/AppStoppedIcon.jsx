import * as React from 'react'
import styles from './Icons.module.css'
import { SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const AppStoppedIcon = ({
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
          <path d='M2.5 5V10.8722L8 14M8 14L13.5 10.8722V5M8 14V11' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M4.5 6L2.5 4.85711L8 2L13.5 4.85711L11.4538 5.79253' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <circle cx='8' cy='7.5' r='3.5' stroke='none' />
          <rect x='6.5' y='6' width='3' height='3' rx='1' fill='none' className={filledClassName} />
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
          <path d='M3.75 7.5V16.3083L12 21M12 21L20.25 16.3083V7.5M12 21V16.5' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M6.75 9L3.75 7.28567L12 3L20.25 7.28567L17.1807 8.6888' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <circle cx='12' cy='11.25' r='5.25' stroke='none' strokeWidth={1.5} />
          <rect x='9.75' y='9' width='4.5' height='4.5' rx='1' fill='none' className={filledClassName} />
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
          <path d='M6.25 12.5V27.1806L20 35M20 35L33.75 27.1806V12.5M20 35V27.5' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M11.25 15L6.25 12.1428L20 5L33.75 12.1428L28.6345 14.4813' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <circle cx='20' cy='18.75' r='8.75' stroke='none' strokeWidth={2} />
          <rect x='16.25' y='15' width='7.5' height='7.5' rx='2' fill='none' className={filledClassName} />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

export default AppStoppedIcon
