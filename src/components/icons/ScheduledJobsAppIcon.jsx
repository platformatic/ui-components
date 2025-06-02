import * as React from 'react'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const ScheduledJobsAppIcon = ({
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
          <path d='M14 8.5L10.5 6.75L7 8.5M14 8.5V12.25L10.5 14M14 8.5L10.5 10.25M10.5 14L7 12.25V8.5M10.5 14V10.25M7 8.5L10.5 10.25' stroke='white' strokeLinejoin='round' />
          <path d='M5.79744 11C3.70017 11 2 9.2952 2 7.19227C2 5.08934 3.70017 3.38458 5.79744 3.38458C7.40205 3.38458 8.77421 4.3825 9.33032 5.79316' stroke='white' strokeLinecap='round' />
          <path d='M5.79739 3.38462V2M4.4165 2H7.17828' stroke='white' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M8.73792 4.27069L9.23166 3.78676M8.74902 3.29169L9.71429 4.28182' stroke='white' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M3.00073 4.32292L2.52032 3.82567M2.02441 4.30737L3.01623 3.34397' stroke='white' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M7.00592 5.46146L5.79758 7.53839' stroke='white' strokeLinecap='round' strokeLinejoin='round' />
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
          <path d='M21 12.75L15.75 10.125L10.5 12.75M21 12.75V18.375L15.75 21M21 12.75L15.75 15.375M15.75 21L10.5 18.375V12.75M15.75 21V15.375M10.5 12.75L15.75 15.375' stroke='white' strokeWidth={1.5} strokeLinejoin='round' />
          <path d='M8.69616 16.5C5.55026 16.5 3 13.9428 3 10.7884C3 7.63405 5.55026 5.0769 8.69616 5.0769C11.1031 5.0769 13.1613 6.57378 13.9955 8.68977' stroke='white' strokeWidth={1.5} strokeLinecap='round' />
          <path d='M8.69584 5.07692V3M6.62451 3H10.7672' stroke='white' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M13.1064 6.40601L13.847 5.6801M13.123 4.9375L14.571 6.42271' stroke='white' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M4.50109 6.48444L3.78048 5.73857M3.03662 6.46112L4.52434 5.01602' stroke='white' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M10.5086 8.19219L8.69612 11.3076' stroke='white' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
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
          <path d='M35 21.25L26.25 16.875L17.5 21.25M35 21.25V30.625L26.25 35M35 21.25L26.25 25.625M26.25 35L17.5 30.625V21.25M26.25 35V25.625M17.5 21.25L26.25 25.625' stroke='white' strokeWidth={2} strokeLinejoin='round' />
          <path d='M14.4936 27.4999C9.25043 27.4999 5 23.238 5 17.9807C5 12.7234 9.25043 8.46149 14.4936 8.46149C18.5051 8.46149 21.9355 10.9563 23.3258 14.4829' stroke='white' strokeWidth={2} strokeLinecap='round' />
          <path d='M14.4932 8.46154V5M11.041 5H17.9454' stroke='white' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M21.8443 10.6766L23.0787 9.4668M21.8721 8.22913L24.2852 10.7045' stroke='white' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M7.50181 10.8074L6.3008 9.56424M5.06104 10.7685L7.54057 8.35999' stroke='white' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M17.5146 13.6537L14.4937 18.846' stroke='white' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
        </svg>
      )
      break
    default:
      break
  }
  return icon
}

export default ScheduledJobsAppIcon
