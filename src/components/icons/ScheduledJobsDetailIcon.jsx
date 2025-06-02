import * as React from 'react'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const ScheduledJobsDetailIcon = ({
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
          <path d='M5.79744 11.0001C3.70017 11.0001 2 9.29539 2 7.19246C2 5.08953 3.70017 3.38477 5.79744 3.38477C7.40205 3.38477 8.77421 4.38268 9.33032 5.79334' stroke='currentColor' strokeLinecap='round' />
          <path d='M5.79715 3.38462V2M4.41626 2H7.17803' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M8.73768 4.271L9.23141 3.78706M8.74878 3.29199L9.71405 4.28213' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M3.00073 4.32316L2.52032 3.82592M2.02441 4.30762L3.01623 3.34422' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M7.00592 5.46146L5.79758 7.53839' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' />
          <circle cx='9.91667' cy='9.91667' r='2.91667' stroke='currentColor' />
          <path d='M14 14L12.25 12.25' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' />
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
          <path d='M8.69616 16.5002C5.55026 16.5002 3 13.9431 3 10.7887C3 7.63429 5.55026 5.07715 8.69616 5.07715C11.1031 5.07715 13.1613 6.57402 13.9955 8.69001' stroke='currentColor' strokeWidth={1.5} strokeLinecap='round' />
          <path d='M8.69584 5.07692V3M6.62451 3H10.7672' stroke='currentColor' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M13.1066 6.40601L13.8472 5.6801M13.1233 4.9375L14.5712 6.42271' stroke='currentColor' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M4.50109 6.48426L3.78048 5.73839M3.03662 6.46094L4.52434 5.01584' stroke='currentColor' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M10.5089 8.19268L8.69637 11.3081' stroke='currentColor' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <circle cx='14.875' cy='14.875' r='4.375' stroke='currentColor' strokeWidth={1.5} />
          <path d='M21 21L18.375 18.375' stroke='currentColor' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
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
          <path d='M14.4936 27.5004C9.25043 27.5004 5 23.2385 5 17.9811C5 12.7238 9.25043 8.46191 14.4936 8.46191C18.5051 8.46191 21.9355 10.9567 23.3258 14.4833' stroke='currentColor' strokeWidth={2} strokeLinecap='round' />
          <path d='M14.493 8.46154V5M11.0408 5H17.9452' stroke='currentColor' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M21.8443 10.677L23.0787 9.46716M21.8721 8.22949L24.2852 10.7048' stroke='currentColor' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M7.50206 10.8074L6.30105 9.5643M5.06128 10.7686L7.54082 8.36005' stroke='currentColor' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M17.5148 13.6541L14.4939 18.8465' stroke='currentColor' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <circle cx='24.7917' cy='24.7917' r='7.29167' stroke='currentColor' strokeWidth={2} />
          <path d='M35 35L30.625 30.625' stroke='currentColor' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

export default ScheduledJobsDetailIcon
