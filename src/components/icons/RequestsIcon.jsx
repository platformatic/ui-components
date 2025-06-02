import * as React from 'react'
import styles from './Icons.module.css'
import { SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const RequestsIcon = ({
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
          <path d='M14 5.5C14.2761 5.5 14.5 5.27614 14.5 5C14.5 4.72386 14.2761 4.5 14 4.5V5.5ZM2 5.5H14V4.5H2V5.5Z' fill='none' className={filledClassName} />
          <circle cx='3.5' cy='3.5' r='0.5' fill='none' className={filledClassName} />
          <circle cx='5' cy='3.5' r='0.5' fill='none' className={filledClassName} />
          <circle cx='6.5' cy='3.5' r='0.5' fill='none' className={filledClassName} />
          <path d='M6.5 12V7M6.5 7L5 8M6.5 7L8 8' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M9.5 7L9.5 12M9.5 12L11 11M9.5 12L8 11' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
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
          <path d='M21 8.25C21.4142 8.25 21.75 7.91421 21.75 7.5C21.75 7.08579 21.4142 6.75 21 6.75V8.25ZM3 8.25H21V6.75H3V8.25Z' fill='none' className={filledClassName} />
          <circle cx='5.25' cy='5.25' r='0.75' fill='none' className={filledClassName} />
          <circle cx='7.5' cy='5.25' r='0.75' fill='none' className={filledClassName} />
          <circle cx='9.75' cy='5.25' r='0.75' fill='none' className={filledClassName} />
          <path d='M9.75 18V10.5M9.75 10.5L7.5 12M9.75 10.5L12 12' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M14.25 10.5L14.25 18M14.25 18L16.5 16.5M14.25 18L12 16.5' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
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
          <path d='M35 13.5C35.5523 13.5 36 13.0523 36 12.5C36 11.9477 35.5523 11.5 35 11.5V13.5ZM5 13.5H35V11.5H5V13.5Z' fill='none' className={filledClassName} />
          <circle cx='8.75' cy='8.75' r='1.25' fill='none' className={filledClassName} />
          <circle cx='12.5' cy='8.75' r='1.25' fill='none' className={filledClassName} />
          <circle cx='16.25' cy='8.75' r='1.25' fill='none' className={filledClassName} />
          <path d='M16.25 30V17.5M16.25 17.5L12.5 20M16.25 17.5L20 20' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M23.75 17.5L23.75 30M23.75 30L27.5 27.5M23.75 30L20 27.5' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

export default RequestsIcon
