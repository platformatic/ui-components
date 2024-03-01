import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const AppConfigurationIcon = ({ color, size, disabled, inactive }) => {
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
          <path d='M11 5.5V3C11 2.44772 10.5523 2 10 2H3C2.44772 2 2 2.44772 2 3V10C2 10.5523 2.44772 11 3 11H5.5' stroke='none' strokeLinecap='round' />
          <path d='M2 4.25H11' stroke='none' />
          <circle cx='3.125' cy='3.125' r='0.375' fill='none' className={filledClassName} />
          <circle cx='4.25' cy='3.125' r='0.375' fill='none' className={filledClassName} />
          <circle cx='5.375' cy='3.125' r='0.375' fill='none' className={filledClassName} />
          <path d='M3.5 5.75H7.25' stroke='none' strokeLinecap='round' />
          <path d='M4.25 7.25H7.5' stroke='none' strokeLinecap='round' />
          <path d='M4.25 8.75H6' stroke='none' strokeLinecap='round' />
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
          <path d='M26.25 17.5L33.8277 21.875V30.625L26.25 35L18.6723 30.625V21.875L26.25 17.5Z' stroke='none' strokeWidth={2} strokeLinejoin='round' />
          <path d='M27.5 13.75V6C27.5 5.44772 27.0523 5 26.5 5H6C5.44772 5 5 5.44772 5 6V26.5C5 27.0523 5.44772 27.5 6 27.5H13.75' stroke='none' strokeWidth={2} strokeLinecap='round' />
          <path d='M5 10.625H27.5' stroke='none' strokeWidth={2} />
          <circle cx='7.8125' cy='7.8125' r='0.9375' fill='none' className={filledClassName} />
          <circle cx='10.625' cy='7.8125' r='0.9375' fill='none' className={filledClassName} />
          <circle cx='13.4375' cy='7.8125' r='0.9375' fill='none' className={filledClassName} />
          <path d='M8.75 14.375H18.125' stroke='none' strokeWidth={2} strokeLinecap='round' />
          <path d='M10.625 18.125H18.75' stroke='none' strokeWidth={2} strokeLinecap='round' />
          <path d='M10.625 21.875H15' stroke='none' strokeWidth={2} strokeLinecap='round' />

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
          <path d='M26.25 17.5L33.8277 21.875V30.625L26.25 35L18.6723 30.625V21.875L26.25 17.5Z' stroke='white' strokeWidth={2} strokeLinejoin='round' />
          <path d='M27.5 13.75V6C27.5 5.44772 27.0523 5 26.5 5H6C5.44772 5 5 5.44772 5 6V26.5C5 27.0523 5.44772 27.5 6 27.5H13.75' stroke='white' strokeWidth={2} strokeLinecap='round' />
          <path d='M5 10.625H27.5' stroke='white' strokeWidth={2} />
          <circle cx='7.8125' cy='7.8125' r='0.9375' fill='white' />
          <circle cx='10.625' cy='7.8125' r='0.9375' fill='white' />
          <circle cx='13.4375' cy='7.8125' r='0.9375' fill='white' />
          <path d='M8.75 14.375H18.125' stroke='white' strokeWidth={2} strokeLinecap='round' />
          <path d='M10.625 18.125H18.75' stroke='white' strokeWidth={2} strokeLinecap='round' />
          <path d='M10.625 21.875H15' stroke='white' strokeWidth={2} strokeLinecap='round' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

AppConfigurationIcon.propTypes = {
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
AppConfigurationIcon.defaultProps = {
  color: MAIN_DARK_BLUE,
  size: MEDIUM,
  disabled: false,
  inactive: false
}

export default AppConfigurationIcon
