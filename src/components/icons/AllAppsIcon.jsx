import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const AllAppsIcon = ({
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
          <path d='M5 2L6.73205 3V5L5 6L3.26795 5V3L5 2Z' stroke='none' strokeLinejoin='round' />
          <path d='M5 10L6.73205 11V13L5 14L3.26795 13V11L5 10Z' stroke='none' strokeLinejoin='round' />
          <path d='M8 6L9.73205 7V9L8 10L6.26795 9V7L8 6Z' stroke='none' strokeLinejoin='round' />
          <path d='M2 6L3.73205 7V9L2 10' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M13.7319 6L11.9999 7V9L13.7319 10' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M11 2L12.7321 3V5L11 6L9.26795 5V3L11 2Z' stroke='none' strokeLinejoin='round' />
          <path d='M11 10L12.7321 11V13L11 14L9.26795 13V11L11 10Z' stroke='none' strokeLinejoin='round' />
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
          <path d='M7.5 3L10.0981 4.5V7.5L7.5 9L4.90192 7.5V4.5L7.5 3Z' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
          <path d='M7.5 15L10.0981 16.5V19.5L7.5 21L4.90192 19.5V16.5L7.5 15Z' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
          <path d='M12 9L14.5981 10.5V13.5L12 15L9.40192 13.5V10.5L12 9Z' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
          <path d='M3 9L5.59808 10.5V13.5L3 15' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M20.5977 9L17.9996 10.5V13.5L20.5977 15' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M16.5 3L19.0981 4.5V7.5L16.5 9L13.9019 7.5V4.5L16.5 3Z' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
          <path d='M16.5 15L19.0981 16.5V19.5L16.5 21L13.9019 19.5V16.5L16.5 15Z' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />

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
          <path d='M12.5 5L16.8301 7.5V12.5L12.5 15L8.16987 12.5V7.5L12.5 5Z' stroke='none' strokeWidth={2} strokeLinejoin='round' />
          <path d='M12.5 25L16.8301 27.5V32.5L12.5 35L8.16987 32.5V27.5L12.5 25Z' stroke='none' strokeWidth={2} strokeLinejoin='round' />
          <path d='M20 15L24.3301 17.5V22.5L20 25L15.6699 22.5V17.5L20 15Z' stroke='none' strokeWidth={2} strokeLinejoin='round' />
          <path d='M5 15L9.33013 17.5V22.5L5 25' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M34.3301 15L30 17.5V22.5L34.3301 25' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M27.5 5L31.8301 7.5V12.5L27.5 15L23.1699 12.5V7.5L27.5 5Z' stroke='none' strokeWidth={2} strokeLinejoin='round' />
          <path d='M27.5 25L31.8301 27.5V32.5L27.5 35L23.1699 32.5V27.5L27.5 25Z' stroke='none' strokeWidth={2} strokeLinejoin='round' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

AllAppsIcon.propTypes = {
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

export default AllAppsIcon
