import * as React from 'react'
import styles from './Icons.module.css'
import { MEDIUM, LARGE, MAIN_DARK_BLUE, SMALL } from '../constants'

const AppListIcon = ({
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
          <path d='M5.5 6.5L2.5 4.85711L8 2L13.5 4.85711L11.4538 5.79253' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M9.9 5H6.5C5.94772 5 5.5 5.44772 5.5 6V10C5.5 10.5523 5.94772 11 6.5 11H9.9C10.4523 11 10.9 10.5523 10.9 10V6C10.9 5.44772 10.4523 5 9.9 5Z' stroke='none' strokeLinecap='round' />
          <rect x='6.40002' y='7.70001' width='0.9' height='0.9' rx='0.45' fill='none' className={filledClassName} />
          <rect x='6.40002' y='6.02014' width='0.9' height='0.9' rx='0.45' fill='none' className={filledClassName} />
          <path d='M7.90002 6.5H9.50012' stroke='none' strokeLinecap='round' />
          <path d='M7.90002 8.15002H9.50012' stroke='none' strokeLinecap='round' />
          <path d='M7.90002 9.5H8.50002' stroke='none' strokeLinecap='round' />
          <rect x='6.40002' y='9.04999' width='0.9' height='0.9' rx='0.45' fill='none' className={filledClassName} />
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
          <path d='M8.25 9.75L3.75 7.28567L12 3L20.25 7.28567L17.1807 8.6888' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M15.35 7.5H9.25C8.69772 7.5 8.25 7.94772 8.25 8.5V15.5C8.25 16.0523 8.69772 16.5 9.25 16.5H15.35C15.9023 16.5 16.35 16.0523 16.35 15.5V8.5C16.35 7.94772 15.9023 7.5 15.35 7.5Z' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <rect x='9.6001' y='11.55' width='1.35' height='1.35' rx='0.675' fill='none' className={filledClassName} />
          <rect x='9.6001' y='9.03015' width='1.35' height='1.35' rx='0.675' fill='none' className={filledClassName} />
          <path d='M11.8501 9.75H14.2502' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <path d='M11.8501 12.225H14.2502' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <path d='M11.8501 14.25H12.7501' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <rect x='9.6001' y='13.575' width='1.35' height='1.35' rx='0.675' fill='none' className={filledClassName} />

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
          <path d='M13.75 16.25L6.25 12.1428L20 5L33.75 12.1428L28.6345 14.4813' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M26.25 12.5H14.75C14.1977 12.5 13.75 12.9477 13.75 13.5V26.5C13.75 27.0523 14.1977 27.5 14.75 27.5H26.25C26.8023 27.5 27.25 27.0523 27.25 26.5V13.5C27.25 12.9477 26.8023 12.5 26.25 12.5Z' stroke='none' strokeWidth={2} strokeLinecap='round' />
          <rect x='16' y='19.25' width='2.25' height='2.25' rx='1.125' fill='none' className={filledClassName} />
          <rect x='16' y='15.0503' width='2.25' height='2.25' rx='1.125' fill='none' className={filledClassName} />
          <path d='M19.75 16.25H23.7502' stroke='none' strokeWidth={2} strokeLinecap='round' />
          <path d='M19.75 20.375H23.7502' stroke='none' strokeWidth={2} strokeLinecap='round' />
          <path d='M19.75 23.75H21.25' stroke='none' strokeWidth={2} strokeLinecap='round' />
          <rect x='16' y='22.625' width='2.25' height='2.25' rx='1.125' fill='none' className={filledClassName} />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

export default AppListIcon
