import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const ImportAppIcon = ({ color, size, disabled, inactive }) => {
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
          <path d='M13 2H3C2.44772 2 2 2.44772 2 3V9C2 9.55228 2.44772 10 3 10H13C13.5523 10 14 9.55228 14 9V3C14 2.44772 13.5523 2 13 2Z' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <rect x='6' y='10' width='4' height='2' stroke='none' />
          <path d='M4 13C4 12.4477 4.44772 12 5 12H11C11.5523 12 12 12.4477 12 13V14H4V13Z' stroke='none' />
          <path d='M10.5 3.5L11.0613 5.22746H12.8776L11.4082 6.29508L11.9695 8.02254L10.5 6.95492L9.03054 8.02254L9.59182 6.29508L8.12236 5.22746H9.93871L10.5 3.5Z' stroke='none' strokeLinejoin='round' />
          <path d='M9 6H4M4 6L6 4M4 6L6 8' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
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
          <path d='M20 3H4C3.44772 3 3 3.44772 3 4V14C3 14.5523 3.44772 15 4 15H20C20.5523 15 21 14.5523 21 14V4C21 3.44772 20.5523 3 20 3Z' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <rect x='9' y='15' width='6' height='3' stroke='none' strokeWidth={1.5} />
          <path d='M6 19C6 18.4477 6.44772 18 7 18H17C17.5523 18 18 18.4477 18 19V21H6V19Z' stroke='none' strokeWidth={1.5} />
          <path d='M15.75 5.25L16.5919 7.84119H19.3165L17.1123 9.44263L17.9542 12.0338L15.75 10.4324L13.5458 12.0338L14.3877 9.44263L12.1835 7.84119H14.9081L15.75 5.25Z' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
          <path d='M13.5 9H6M6 9L9 6M6 9L9 12' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
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
          <path d='M34 5H6C5.44772 5 5 5.44772 5 6V24C5 24.5523 5.44772 25 6 25H34C34.5523 25 35 24.5523 35 24V6C35 5.44772 34.5523 5 34 5Z' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <rect x='15' y='25' width='10' height='5' stroke='none' strokeWidth={2} />
          <path d='M10 31C10 30.4477 10.4477 30 11 30H29C29.5523 30 30 30.4477 30 31V35H10V31Z' stroke='none' strokeWidth={2} />
          <path d='M26.25 8.75L27.6532 13.0686H32.1941L28.5204 15.7377L29.9237 20.0564L26.25 17.3873L22.5763 20.0564L23.9796 15.7377L20.3059 13.0686H24.8468L26.25 8.75Z' stroke='none' strokeWidth={2} strokeLinejoin='round' />
          <path d='M22.5 15H10M10 15L15 10M10 15L15 20' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
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
ImportAppIcon.defaultProps = {
  color: MAIN_DARK_BLUE,
  size: MEDIUM,
  disabled: false,
  inactive: false
}

export default ImportAppIcon
