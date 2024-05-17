import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const ResourceIcon = ({
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
          <path d='M7 5V3C7 2.44772 6.55228 2 6 2H3C2.44772 2 2 2.44772 2 3V6C2 6.55228 2.44772 7 3 7H5.125' stroke='none' />
          <path d='M9 11.9167L9 13C9 13.5523 9.44771 14 10 14L13 14C13.5523 14 14 13.5523 14 13L14 10C14 9.44772 13.5523 9 13 9L10.875 9' stroke='none' />
          <path d='M11 7L13 7C13.5523 7 14 6.55228 14 6L14 3C14 2.44772 13.5523 2 13 2L10 2C9.44772 2 9 2.44772 9 3L9 4.5' stroke='none' />
          <path d='M5 9L3 9C2.44772 9 2 9.44772 2 10L2 13C2 13.5523 2.44771 14 3 14L6 14C6.55228 14 7 13.5523 7 13L7 11.5' stroke='none' />
          <rect x='5' y='5' width='6' height='7' rx='1' stroke='none' />
          <path d='M6.39355 6.40991H9.5' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M6.39355 8.37695H9.5' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M6.39355 10.3442H9.5' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
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
          <path d='M10.5 7.5V4C10.5 3.44772 10.0523 3 9.5 3H4C3.44772 3 3 3.44772 3 4V9.5C3 10.0523 3.44772 10.5 4 10.5H7.6875' stroke='none' strokeWidth={1.5} />
          <path d='M13.5 17.875L13.5 20C13.5 20.5523 13.9477 21 14.5 21L20 21C20.5523 21 21 20.5523 21 20L21 14.5C21 13.9477 20.5523 13.5 20 13.5L16.3125 13.5' stroke='none' strokeWidth={1.5} />
          <path d='M16.5 10.5L20 10.5C20.5523 10.5 21 10.0523 21 9.5L21 4C21 3.44772 20.5523 3 20 3L14.5 3C13.9477 3 13.5 3.44772 13.5 4L13.5 6.75' stroke='none' strokeWidth={1.5} />
          <path d='M7.5 13.5L4 13.5C3.44772 13.5 3 13.9477 3 14.5L3 20C3 20.5523 3.44771 21 4 21L9.5 21C10.0523 21 10.5 20.5523 10.5 20L10.5 17.25' stroke='none' strokeWidth={1.5} />
          <rect x='7.5' y='7.5' width='9' height='10.5' rx='1' stroke='none' strokeWidth={1.5} />
          <path d='M9.59033 9.61475H14.25' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M9.59033 12.5654H14.25' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M9.59033 15.5164H14.25' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
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
          <path d='M17.5 12.5V6C17.5 5.44772 17.0523 5 16.5 5H6C5.44772 5 5 5.44772 5 6V16.5C5 17.0523 5.44772 17.5 6 17.5H12.8125' stroke='none' strokeWidth={2} />
          <path d='M22.5 29.7917L22.5 34C22.5 34.5523 22.9477 35 23.5 35L34 35C34.5523 35 35 34.5523 35 34L35 23.5C35 22.9477 34.5523 22.5 34 22.5L27.1875 22.5' stroke='none' strokeWidth={2} />
          <path d='M27.5 17.5L34 17.5C34.5523 17.5 35 17.0523 35 16.5L35 6C35 5.44772 34.5523 5 34 5L23.5 5C22.9477 5 22.5 5.44772 22.5 6L22.5 12.5' stroke='none' strokeWidth={2} />
          <path d='M12.5 22.5L6 22.5C5.44772 22.5 5 22.9477 5 23.5L5 34C5 34.5523 5.44771 35 6 35L16.5 35C17.0523 35 17.5 34.5523 17.5 34L17.5 30' stroke='none' strokeWidth={2} />
          <rect x='12.5' y='12.5' width='15' height='17.5' rx='1' stroke='none' strokeWidth={2} />
          <path d='M15.9839 16.0249H23.75' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M15.9839 20.9424H23.75' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M15.9839 25.8606H23.75' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

ResourceIcon.propTypes = {
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

export default ResourceIcon
