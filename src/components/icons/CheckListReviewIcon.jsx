import * as React from 'react'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const CheckListReviewIcon = ({
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
          <path d='M11 3H12C12.5523 3 13 3.44772 13 4V9M5 3H4C3.44772 3 3 3.44771 3 4V13C3 13.5523 3.44772 14 4 14H8' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <rect x='5' y='2' width='6' height='2' rx='1' stroke='none' />
          <path d='M6 6L11 6' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M6 11L7 11' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M6 8.5L8 8.5' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <circle cx='2.5' cy='2.5' r='2.5' transform='matrix(-1 0 0 1 12 8)' stroke='none' />
          <path d='M11.5 12.5L13.5 14' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <circle cx='4.5' cy='6' r='0.5' className={filledClassName} />
          <circle cx='4.5' cy='8.5' r='0.5' className={filledClassName} />
          <circle cx='4.5' cy='11' r='0.5' className={filledClassName} />
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
          <path d='M16.5 4.5H18.5C19.0523 4.5 19.5 4.94772 19.5 5.5V13.5M7.5 4.5H5.5C4.94772 4.5 4.5 4.94772 4.5 5.5V20C4.5 20.5523 4.94772 21 5.5 21H12' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <rect x='7.5' y='3' width='9' height='3' rx='1' stroke='none' strokeWidth={1.5} />
          <path d='M9 9L16.5 9' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M9 16.5L10.5 16.5' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M9 12.75L12 12.75' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <circle cx='3.75' cy='3.75' r='3.75' transform='matrix(-1 0 0 1 18 12)' stroke='none' strokeWidth={1.5} />
          <path d='M17.25 18.75L20.25 21' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <circle cx='6.75' cy='9' r='0.75' className={filledClassName} />
          <circle cx='6.75' cy='12.75' r='0.75' className={filledClassName} />
          <circle cx='6.75' cy='16.5' r='0.75' className={filledClassName} />
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
          <path d='M27.5 7.5H31.5C32.0523 7.5 32.5 7.94772 32.5 8.5V22.5M12.5 7.5H8.5C7.94772 7.5 7.5 7.94772 7.5 8.5V34C7.5 34.5523 7.94772 35 8.5 35H20' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <rect x='12.5' y='5' width='15' height='5' rx='1' stroke='none' strokeWidth={2} />
          <path d='M15 15L27.5 15' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M15 27.5L17.5 27.5' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M15 21.25L20 21.25' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <circle cx='6.25' cy='6.25' r='6.25' transform='matrix(-1 0 0 1 30 20)' stroke='none' strokeWidth={2} />
          <path d='M28.75 31.25L33.75 35' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <circle cx='11.25' cy='15' r='1.25' className={filledClassName} />
          <circle cx='11.25' cy='21.25' r='1.25' className={filledClassName} />
          <circle cx='11.25' cy='27.5' r='1.25' className={filledClassName} />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

export default CheckListReviewIcon
