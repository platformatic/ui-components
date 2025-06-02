import * as React from 'react'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const AddUserIcon = ({
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
          <path d='M7 10.0554C4.16229 10.3728 2 12.0181 2 14.0001H8' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <circle cx='8' cy='5' r='3' stroke='none' />
          <circle cx='11' cy='11' r='3' stroke='none' />
          <path d='M9.58569 11H12.4141' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M11 12.4143L11 9.58588' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
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
          <path d='M10.5 15.083C6.24343 15.5591 3 18.0271 3 21H12' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <circle cx='12' cy='7.5' r='4.5' stroke='none' strokeWidth={1.5} />
          <circle cx='16.5' cy='16.5' r='4.5' stroke='none' strokeWidth={1.5} />
          <path d='M14.3787 16.5H18.6213' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M16.5 18.6213L16.5 14.3787' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
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
          <path d='M17.5 25.1382C10.4057 25.9316 5 30.0449 5 34.9999H20' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <circle cx='20' cy='12.5' r='7.5' stroke='none' strokeWidth={2} />
          <circle cx='27.5' cy='27.5' r='7.5' stroke='none' strokeWidth={2} />
          <path d='M23.9644 27.5H31.0354' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M27.5 31.0356L27.5 23.9646' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

export default AddUserIcon
