import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const DatabaseIcon = ({ color, size, disabled, inactive }) => {
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
          <path d='M8 6.8072C11.3137 6.8072 14 5.73107 14 4.4036C14 3.07613 11.3137 2 8 2C4.68629 2 2 3.07613 2 4.4036C2 5.73107 4.68629 6.8072 8 6.8072Z' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M14 8.08533C14 9.41275 11.3133 10.4889 8 10.4889C4.68667 10.4889 2 9.41275 2 8.08533' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M14 4.40356V11.5964C14 12.9238 11.3133 14 8 14C4.68667 14 2 12.9238 2 11.5964V4.40356' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
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
          <path d='M12 10.2108C16.9706 10.2108 21 8.59661 21 6.6054C21 4.61419 16.9706 3 12 3C7.02944 3 3 4.61419 3 6.6054C3 8.59661 7.02944 10.2108 12 10.2108Z' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M21 12.128C21 14.1191 16.97 15.7334 12 15.7334C7.03 15.7334 3 14.1191 3 12.128' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M21 6.60535V17.3945C21 19.3857 16.97 21 12 21C7.03 21 3 19.3857 3 17.3945V6.60535' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
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
          <path d='M20 17.018C28.2843 17.018 35 14.3277 35 11.009C35 7.69032 28.2843 5 20 5C11.7157 5 5 7.69032 5 11.009C5 14.3277 11.7157 17.018 20 17.018Z' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M35 20.2133C35 23.5319 28.2833 26.2223 20 26.2223C11.7167 26.2223 5 23.5319 5 20.2133' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M35 11.0089V28.9909C35 32.3095 28.2833 34.9999 20 34.9999C11.7167 34.9999 5 32.3095 5 28.9909V11.0089' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

DatabaseIcon.propTypes = {
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
DatabaseIcon.defaultProps = {
  color: MAIN_DARK_BLUE,
  size: MEDIUM,
  disabled: false,
  inactive: false
}

export default DatabaseIcon
