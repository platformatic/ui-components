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
          <path d='M2 5V10.8722L7.5 14M7.5 14V8.00001M7.5 14L9.5 13M13 8.5V5' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M7.5 7.71423L2 4.85711L7.5 2L13 4.85711L7.5 7.71423Z' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M10.5 9L12.5 10V13.5M12.5 13.5L11 12M12.5 13.5L14 12' stroke='none' strokeLinecap='round' strokeLinejoin='round' />

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
          <path d='M3 7.5V16.3083L11.25 21M11.25 21V12M11.25 21L14.25 19.5M19.5 12.75V7.5' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M11.25 11.5713L3 7.28567L11.25 3L19.5 7.28567L11.25 11.5713Z' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M15.75 13.5L18.75 15V20.25M18.75 20.25L16.5 18M18.75 20.25L21 18' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
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
          <path d='M5 12.5V27.1806L18.75 35M18.75 35V20M18.75 35L23.75 32.5M32.5 21.25V12.5' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M18.75 19.2856L5 12.1428L18.75 5L32.5 12.1428L18.75 19.2856Z' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M26.25 22.5L31.25 25V33.75M31.25 33.75L27.5 30M31.25 33.75L35 30' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
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
