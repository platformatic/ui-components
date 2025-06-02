import * as React from 'react'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const UserComputerIcon = ({
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
          <rect x='6' y='6' width='8' height='5.33333' rx='1' stroke='none' />
          <rect x='8.66675' y='11.3333' width='2.66667' height='1.33333' stroke='none' />
          <path d='M7.33325 13.6667C7.33325 13.1145 7.78097 12.6667 8.33325 12.6667H11.6666C12.2189 12.6667 12.6666 13.1145 12.6666 13.6667V14.0001H7.33325V13.6667Z' stroke='none' />
          <path d='M4.75503 8.80811C3.12101 9.39558 2 10.6044 2 12.0002H5' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M9.85693 4.5C9.85693 3.11929 8.73765 2 7.35693 2C5.97622 2 4.85693 3.11929 4.85693 4.5C4.85693 4.90476 4.95312 5.28704 5.12389 5.62526' stroke='none' strokeLinecap='round' strokeLinejoin='round' />

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
          <rect x='9' y='9' width='12' height='8' rx='1.5' stroke='none' strokeWidth={1.5} />
          <rect x='13' y='17' width='4' height='2' stroke='none' strokeWidth={1.5} />
          <path d='M11 20.5C11 19.6716 11.6716 19 12.5 19H17.5C18.3284 19 19 19.6716 19 20.5V21H11V20.5Z' stroke='none' strokeWidth={1.5} />
          <path d='M7.13255 13.2119C4.68152 14.0931 3 15.9063 3 18H7.5' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M14.7856 6.75C14.7856 4.67893 13.1067 3 11.0356 3C8.96458 3 7.28564 4.67893 7.28564 6.75C7.28564 7.35713 7.42993 7.93057 7.68607 8.43788' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />

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
          <rect x='15' y='15' width='20' height='13.3333' rx='2.5' stroke='none' strokeWidth={2} />
          <rect x='21.6667' y='28.3333' width='6.66667' height='3.33333' stroke='none' strokeWidth={2} />
          <path d='M18.3333 34.1667C18.3333 32.786 19.4525 31.6667 20.8333 31.6667H29.1666C30.5473 31.6667 31.6666 32.786 31.6666 34.1667V35.0001H18.3333V34.1667Z' stroke='none' strokeWidth={2} />
          <path d='M11.8876 22.02C7.80253 23.4887 5 26.5107 5 30.0002H12.5' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M24.6426 11.25C24.6426 7.79822 21.8444 5 18.3926 5C14.9408 5 12.1426 7.79822 12.1426 11.25C12.1426 12.2619 12.383 13.2176 12.81 14.0631' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />

        </svg>
      )
      break

    default:
      break
  }
  return icon
}

export default UserComputerIcon
