import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const UploadFileIcon = ({
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
          <path d='M10 6.5V5.14655C10 5.00414 9.93927 4.86848 9.83305 4.77362L6.86956 2.12707C6.77792 2.04523 6.65937 2 6.53651 2H2.5C2.22386 2 2 2.22386 2 2.5V11.055C2 11.3312 2.22386 11.555 2.5 11.555H8.5' stroke='none' strokeLinecap='round' />
          <path d='M6.5 5.34426V2L10 5.34426H6.5Z' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M11 14V8M11 8L8.5 10M11 8L13.5 10' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
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
          <path d='M15 9.75V7.60791C15 7.4655 14.9393 7.32984 14.833 7.23498L10.2332 3.12707C10.1416 3.04523 10.023 3 9.90014 3H3.5C3.22386 3 3 3.22386 3 3.5V16.8326C3 17.1087 3.22386 17.3326 3.5 17.3326H12.75' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <path d='M9.75 8.0164V3L15 8.0164H9.75Z' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M16.5 21V12M16.5 12L12.75 15M16.5 12L20.25 15' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
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
          <path d='M25 16.25V12.5306C25 12.3882 24.9393 12.2526 24.833 12.1577L16.9605 5.12707C16.8688 5.04523 16.7503 5 16.6274 5H5.5C5.22386 5 5 5.22386 5 5.5V28.3876C5 28.6637 5.22386 28.8876 5.5 28.8876H21.25' stroke='none' strokeWidth={2} strokeLinecap='round' />
          <path d='M16.25 13.3607V5L25 13.3607H16.25Z' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M27.5 35V20M27.5 20L21.25 25M27.5 20L33.75 25' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

UploadFileIcon.propTypes = {
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

export default UploadFileIcon
