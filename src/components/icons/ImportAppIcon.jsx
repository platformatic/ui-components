import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const ImportAppIcon = ({
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
          <path d='M10.5 7L13.5311 8.75V12.25L10.5 14L7.46891 12.25V8.75L10.5 7Z' stroke='none' strokeLinejoin='round' />
          <path d='M7 10V10C6.44772 10 6 9.55228 6 9L6 5M6 5L8 6.5M6 5L4 6.5' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M5.33333 12L2 12L2 2L12 2L12 6' stroke='none' strokeLinecap='round' strokeLinejoin='round' />

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
          <path d='M10.5 15L10 15C9.44772 15 9 14.5523 9 14L9 7.5M9 7.5L12 9.75M9 7.5L6 9.75' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M8 18L3 18L3 3L18 3L18 9' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />

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
          <path d='M17.5 25L16 25C15.4477 25 15 24.5523 15 24L15 12.5M15 12.5L20 16.25M15 12.5L10 16.25' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M13.3333 30L5 30L5 5L30 5L30 15' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

ImportAppIcon.propTypes = {
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

export default ImportAppIcon
