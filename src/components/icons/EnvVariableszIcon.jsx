import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const EnvVariableszIcon = ({
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
          <path d='M7 8H12' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M7 11H12' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M2 5V12C2 13.1046 2.89543 14 4 14H12C13.1046 14 14 13.1046 14 12V5M2 5V4C2 2.89543 2.89543 2 4 2H12C13.1046 2 14 2.89543 14 4V5M2 5H14' stroke='none' strokeLinejoin='round' />
          <circle cx='3.5' cy='3.5' r='0.5' fill='none' className={filledClassName} />
          <circle cx='5' cy='3.5' r='0.5' fill='none' className={filledClassName} />
          <circle cx='6.5' cy='3.5' r='0.5' fill='none' className={filledClassName} />
          <path d='M4.65051 7L4.9899 7.58203H5.00606L5.34949 7H5.97576L5.35758 8L6 9H5.35758L5.00606 8.40625H4.9899L4.63838 9H4L4.63434 8L4.0202 7H4.65051Z' fill='none' className={filledClassName} />
          <path d='M4.65051 10L4.9899 10.582H5.00606L5.34949 10H5.97576L5.35758 11L6 12H5.35758L5.00606 11.4062H4.9899L4.63838 12H4L4.63434 11L4.0202 10H4.65051Z' fill='none' className={filledClassName} />
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
          <path d='M10.5 12H18' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M10.5 16.5H18' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M3 7.5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V7.5M3 7.5V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V7.5M3 7.5H21' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
          <circle cx='5.25' cy='5.25' r='0.75' fill='none' className={filledClassName} />
          <circle cx='7.5' cy='5.25' r='0.75' fill='none' className={filledClassName} />
          <circle cx='9.75' cy='5.25' r='0.75' fill='none' className={filledClassName} />
          <path d='M6.97576 10.5L7.48485 11.373H7.50909L8.02424 10.5H8.96364L8.03636 12L9 13.5H8.03636L7.50909 12.6094H7.48485L6.95758 13.5H6L6.95152 12L6.0303 10.5H6.97576Z' fill='none' className={filledClassName} />
          <path d='M6.97576 15L7.48485 15.873H7.50909L8.02424 15H8.96364L8.03636 16.5L9 18H8.03636L7.50909 17.1094H7.48485L6.95758 18H6L6.95152 16.5L6.0303 15H6.97576Z' fill='none' className={filledClassName} />
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
          <path d='M17.5 20H30' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M17.5 27.5H30' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M5 12.5V31C5 33.2091 6.79086 35 9 35H31C33.2091 35 35 33.2091 35 31V12.5M5 12.5V9C5 6.79086 6.79086 5 9 5H31C33.2091 5 35 6.79086 35 9V12.5M5 12.5H35' stroke='none' strokeWidth={2} strokeLinejoin='round' />
          <circle cx='8.75' cy='8.75' r='1.25' fill='none' className={filledClassName} />
          <circle cx='12.5' cy='8.75' r='1.25' fill='none' className={filledClassName} />
          <circle cx='16.25' cy='8.75' r='1.25' fill='none' className={filledClassName} />
          <path d='M11.6263 17.5L12.4747 18.9551H12.5152L13.3737 17.5H14.9394L13.3939 20L15 22.5H13.3939L12.5152 21.0156H12.4747L11.596 22.5H10L11.5859 20L10.0505 17.5H11.6263Z' fill='none' className={filledClassName} />
          <path d='M11.6263 25L12.4747 26.4551H12.5152L13.3737 25H14.9394L13.3939 27.5L15 30H13.3939L12.5152 28.5156H12.4747L11.596 30H10L11.5859 27.5L10.0505 25H11.6263Z' fill='none' className={filledClassName} />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

EnvVariableszIcon.propTypes = {
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

export default EnvVariableszIcon
