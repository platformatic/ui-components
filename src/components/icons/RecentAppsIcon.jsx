import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const RecentAppsIcon = ({ color, size, disabled, inactive }) => {
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
          <path d='M10.5 7L13.5311 8.75V12.25L10.5 14L7.46891 12.25V8.75L10.5 7Z' stroke='none' strokeLinejoin='round' />
          <path d='M11 5.5V4.5C11 3.94772 10.5523 3.5 10 3.5H3C2.44772 3.5 2 3.94772 2 4.5V10C2 10.5523 2.44772 11 3 11H6' stroke='none' strokeLinecap='round' />
          <path d='M2 5.75H11' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <line x1='3.75' y1='4.5' x2='3.75' y2='2.5' stroke='none' strokeLinecap='round' />
          <line x1='9' y1='4.5' x2='9' y2='2.5' stroke='none' strokeLinecap='round' />
          <rect x='3.5' y='6.5' width='1.5' height='1.5' rx='0.5' fill='none' className={filledClassName} />
          <rect x='3.5' y='8.75' width='1.5' height='1.5' rx='0.5' fill='none' className={filledClassName} />
          <rect x='5.75' y='6.5' width='1.5' height='1.5' rx='0.5' fill='none' className={filledClassName} />
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
          <path d='M15.75 10.5L20.2966 13.125V18.375L15.75 21L11.2034 18.375V13.125L15.75 10.5Z' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
          <path d='M16.5 8.25V6.25C16.5 5.69772 16.0523 5.25 15.5 5.25H4C3.44772 5.25 3 5.69772 3 6.25V15.5C3 16.0523 3.44772 16.5 4 16.5H9' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <path d='M3 8.625H16.5' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <line x1='5.625' y1='6.75' x2='5.625' y2='3.75' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <line x1='13.5' y1='6.75' x2='13.5' y2='3.75' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <rect x='5.25' y='9.75' width='2.25' height='2.25' rx='0.5' fill='none' className={filledClassName} />
          <rect x='5.25' y='13.125' width='2.25' height='2.25' rx='0.5' fill='none' className={filledClassName} />
          <rect x='8.625' y='9.75' width='2.25' height='2.25' rx='0.5' fill='none' className={filledClassName} />

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
          <path d='M26.25 17.5L33.8277 21.875V30.625L26.25 35L18.6723 30.625V21.875L26.25 17.5Z' stroke='none' strokeWidth={2} strokeLinejoin='round' />
          <path d='M27.5 13.75V9.75C27.5 9.19772 27.0523 8.75 26.5 8.75H6C5.44772 8.75 5 9.19772 5 9.75V26.5C5 27.0523 5.44772 27.5 6 27.5H15' stroke='none' strokeWidth={2} strokeLinecap='round' />
          <path d='M5 14.375H27.5' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <line x1='9.625' y1='11.5' x2='9.625' y2='6' stroke='none' strokeWidth={2} strokeLinecap='round' />
          <line x1='22.75' y1='11.5' x2='22.75' y2='6' stroke='none' strokeWidth={2} strokeLinecap='round' />
          <rect x='8.75' y='16.25' width='3.75' height='3.75' rx='0.5' fill='none' className={filledClassName} />
          <rect x='8.75' y='21.875' width='3.75' height='3.75' rx='0.5' fill='none' className={filledClassName} />
          <rect x='14.375' y='16.25' width='3.75' height='3.75' rx='0.5' fill='none' className={filledClassName} />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

RecentAppsIcon.propTypes = {
  /**
   * color of text, icon and borders
   */
  color: PropTypes.oneOf(COLORS_ICON),
  /**
   * Size
   */
  size: PropTypes.oneOf(SIZES),
  /**
   * disabled
   */
  disabled: PropTypes.bool,
  /**
   * inactive
   */
  inactive: PropTypes.bool
}
RecentAppsIcon.defaultProps = {
  color: MAIN_DARK_BLUE,
  size: MEDIUM,
  disabled: false,
  inactive: false
}

export default RecentAppsIcon
