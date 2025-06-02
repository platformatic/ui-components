import * as React from 'react'
import styles from './Icons.module.css'
import { SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const PodMetricsIcon = ({
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
          <path d='M5.5 7H4.5C4.22386 7 4 7.22386 4 7.5V12C4 12.2761 4.22386 12.5 4.5 12.5H5.5C5.77614 12.5 6 12.2761 6 12V7.5C6 7.22386 5.77614 7 5.5 7Z' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M10 6.5V4.5C10 4.22386 9.77614 4 9.5 4H8.5C8.22386 4 8 4.22386 8 4.5V8' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M12 6.5V2.5C12 2.22386 12.2239 2 12.5 2H13.5C13.7761 2 14 2.22386 14 2.5V8' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M2 2V14H8' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M11 8L8.40192 9.5V12.5L11 14L13.5981 12.5V9.5L11 8Z' stroke='none' strokeLinejoin='round' />
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
          <path d='M8.5 10.5H6.5C6.22386 10.5 6 10.7239 6 11V18.25C6 18.5261 6.22386 18.75 6.5 18.75H8.5C8.77614 18.75 9 18.5261 9 18.25V11C9 10.7239 8.77614 10.5 8.5 10.5Z' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M15 9.75V6.5C15 6.22386 14.7761 6 14.5 6H12.5C12.2239 6 12 6.22386 12 6.5V12' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M18 9.75V3.5C18 3.22386 18.2239 3 18.5 3H20.5C20.7761 3 21 3.22386 21 3.5V12' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M3 3V21H12' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M16.5 12L12.6029 14.25V18.75L16.5 21L20.3971 18.75V14.25L16.5 12Z' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
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
        ><path d='M14.5 17.5H10.5C10.2239 17.5 10 17.7239 10 18V30.75C10 31.0261 10.2239 31.25 10.5 31.25H14.5C14.7761 31.25 15 31.0261 15 30.75V18C15 17.7239 14.7761 17.5 14.5 17.5Z' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M25 16.25V10.5C25 10.2239 24.7761 10 24.5 10H20.5C20.2239 10 20 10.2239 20 10.5V20' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M30 16.25V5.5C30 5.22386 30.2239 5 30.5 5H34.5C34.7761 5 35 5.22386 35 5.5V20' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M5 5V35H20' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M27.5 20L21.0048 23.75V31.25L27.5 35L33.9952 31.25V23.75L27.5 20Z' stroke='none' strokeWidth={2} strokeLinejoin='round' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

export default PodMetricsIcon
