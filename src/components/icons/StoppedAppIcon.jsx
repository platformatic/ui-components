import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const StoppedAppIcon = ({
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
          <path d='M10.5 7L13.5311 8.75V12.25L10.5 14L7.46891 12.25V8.75L10.5 7Z' stroke='none' strokeLinejoin='round' />
          <path d='M10 5.35553C9.67562 3.45026 8.0211 2 6.02882 2C3.80376 2 2 3.80895 2 6.04041C2 7.99513 3.38411 9.62564 5.22306 10' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <rect x='5' y='5' width='2' height='2' fill='none' className={filledClassName} stroke='none' strokeLinejoin='round' />

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
          <path d='M15 8.03329C14.5134 5.17539 12.0316 3 9.04323 3C5.70565 3 3 5.71343 3 9.06062C3 11.9927 5.07616 14.4385 7.83459 15' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <rect x='7.5' y='7.5' width='3' height='3' fill='none' className={filledClassName} stroke='none' strokeWidth={1.5} strokeLinejoin='round' />

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
          <path d='M25 13.3888C24.1891 8.62565 20.0527 5 15.0721 5C9.50941 5 5 9.52239 5 15.101C5 19.9878 8.46027 24.0641 13.0576 25' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <rect x='12.5' y='12.5' width='5' height='5' fill='none' className={filledClassName} stroke='none' strokeWidth={2} strokeLinejoin='round' />

        </svg>
      )
      break

    default:
      break
  }
  return icon
}

StoppedAppIcon.propTypes = {
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

export default StoppedAppIcon
