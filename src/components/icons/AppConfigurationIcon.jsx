import * as React from 'react'
import styles from './Icons.module.css'
import { SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const AppConfigurationIcon = ({
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
          <rect x='5' y='5' width='6' height='6' rx='1' stroke='none' />
          <path d='M5 7H11' stroke='none' />
          <circle cx='6.25' cy='6' r='0.25' fill='none' className={filledClassName} />
          <circle cx='7' cy='6' r='0.25' fill='none' className={filledClassName} />
          <circle cx='7.75' cy='6' r='0.25' fill='none' className={filledClassName} />
          <path d='M6.5 8.25H8.25' stroke='none' strokeLinecap='round' />
          <path d='M6.5 9.5H9.5' stroke='none' strokeLinecap='round' />
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
          <rect x='7.5' y='7.5' width='9' height='9' rx='1' stroke='none' strokeWidth={1.5} />
          <path d='M7.5 10.5H16.5' stroke='none' strokeWidth={1.5} />
          <circle cx='9.375' cy='9' r='0.375' fill='none' className={filledClassName} />
          <circle cx='10.5' cy='9' r='0.375' fill='none' className={filledClassName} />
          <circle cx='11.625' cy='9' r='0.375' fill='none' className={filledClassName} />
          <path d='M9.75 12.375H12.375' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <path d='M9.75 14.25H14.25' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
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
          <path d='M6.25 12.4999V27.1805L20 35M20 35L33.75 27.1805V12.4999M20 35V27.4999' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M11.25 15L6.25 12.1428L20 5L33.75 12.1428L28.6345 14.4813' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <rect x='12.5' y='12.5' width='15' height='15' rx='1' stroke='none' strokeWidth={2} />
          <path d='M12.5 17.5H27.5' stroke='none' strokeWidth={2} />
          <circle cx='15.625' cy='15' r='0.625' fill='none' className={filledClassName} />
          <circle cx='17.5' cy='15' r='0.625' fill='none' className={filledClassName} />
          <circle cx='19.375' cy='15' r='0.625' fill='none' className={filledClassName} />
          <path d='M16.25 20.625H20.625' stroke='none' strokeWidth={2} strokeLinecap='round' />
          <path d='M16.25 23.75H23.75' stroke='none' strokeWidth={2} strokeLinecap='round' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

export default AppConfigurationIcon
