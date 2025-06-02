import * as React from 'react'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const CLIIcon = ({
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
          <rect x='2' y='2' width='12' height='12' rx='1' stroke='none' />
          <path d='M2 5H14' stroke='none' />
          <circle cx='3.5' cy='3.5' r='0.5' fill='none' className={filledClassName} />
          <circle cx='5' cy='3.5' r='0.5' fill='none' className={filledClassName} />
          <circle cx='6.5' cy='3.5' r='0.5' fill='none' className={filledClassName} />
          <path d='M4 7H9' stroke='none' strokeLinecap='round' />
          <path d='M5 9H12' stroke='none' strokeLinecap='round' />
          <path d='M5 11H12' stroke='none' strokeLinecap='round' />
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
          <rect x='3' y='3' width='18' height='18' rx='1' stroke='none' strokeWidth={1.5} />
          <path d='M3 7.5H21' stroke='none' strokeWidth={1.5} />
          <circle cx='5.25' cy='5.25' r='0.75' fill='none' className={filledClassName} />
          <circle cx='7.5' cy='5.25' r='0.75' fill='none' className={filledClassName} />
          <circle cx='9.75' cy='5.25' r='0.75' fill='none' className={filledClassName} />
          <path d='M6 10.5H13.5' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <path d='M7.5 13.5H18' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <path d='M7.5 16.5H18' stroke='none' strokeWidth={1.5} strokeLinecap='round' />

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
          <rect x='5' y='5' width='30' height='30' rx='1' stroke='none' strokeWidth={2} />
          <path d='M5 12.5H35' stroke='none' strokeWidth={2} />
          <circle cx='8.75' cy='8.75' r='1.25' fill='none' className={filledClassName} />
          <circle cx='12.5' cy='8.75' r='1.25' fill='none' className={filledClassName} />
          <circle cx='16.25' cy='8.75' r='1.25' fill='none' className={filledClassName} />
          <path d='M10 17.5H22.5' stroke='none' strokeWidth={2} strokeLinecap='round' />
          <path d='M12.5 22.5H30' stroke='none' strokeWidth={2} strokeLinecap='round' />
          <path d='M12.5 27.5H30' stroke='none' strokeWidth={2} strokeLinecap='round' />

        </svg>
      )
      break

    default:
      break
  }
  return icon
}

export default CLIIcon
