import * as React from 'react'
import styles from './Icons.module.css'
import { SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const ScalerHistoryIcon = ({
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
        ><path d='M7.99996 7L5.21537 8.60769V11.8231L7.99996 13.4307L10.7846 11.8231V8.60769L7.99996 7Z' stroke='none' strokeLinejoin='round' />
          <path d='M11.2154 7L14 8.60769V11.8231L11.2154 13.4307' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M10 6.8V3C10 2.44772 9.55228 2 9 2H3C2.44772 2 2 2.44771 2 3V10.6C2 11.1523 2.44772 11.6 3 11.6H4' stroke='none' strokeLinecap='round' />
          <path d='M4 4H8.44444' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M4 6H7' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M4 9H5' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
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
        ><path d='M11.9999 10.5L7.82305 12.9115V17.7346L11.9999 20.1461L16.1768 17.7346V12.9115L11.9999 10.5Z' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
          <path d='M16.8231 10.5L21 12.9115V17.7346L16.8231 20.1461' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M15 10.2V4C15 3.44772 14.5523 3 14 3H4C3.44772 3 3 3.44772 3 4V16.4C3 16.9523 3.44772 17.4 4 17.4H6' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <path d='M6 6H12.6667' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M6 9H10.5' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M6 13.5H7.5' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
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
        ><path d='M20.0001 17.5L13.0387 21.5192V29.5576L20.0001 33.5769L26.9616 29.5576V21.5192L20.0001 17.5Z' stroke='none' strokeWidth={2} strokeLinejoin='round' />
          <path d='M28.0388 17.5L35.0002 21.5192V29.5576L28.0388 33.5769' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M25 17V6C25 5.44772 24.5523 5 24 5H6C5.44772 5 5 5.44772 5 6V28C5 28.5523 5.44772 29 6 29H10' stroke='none' strokeWidth={2} strokeLinecap='round' />
          <path d='M10 10H21.1111' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M10 15H17.5' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M10 22.5H12.5' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

export default ScalerHistoryIcon
