import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const EntrypointIcon = ({ color, size, disabled, inactive }) => {
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
          <path d='M3.15354 5C4.15846 3.2066 6.03674 2 8.188 2C11.3979 2 14 4.68629 14 8C14 11.3137 11.3979 14 8.188 14C5.92177 14 3.95849 12.661 3 10.7075' stroke='none' strokeLinecap='round' />
          <path d='M2 7.89995H10.7272M10.7272 7.89995L8.54543 5.69995M10.7272 7.89995L8.54543 10.1' stroke='none' strokeLinecap='round' strokeLinejoin='round' />

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
          <path d='M4.73031 7.5C6.23769 4.80989 9.05511 3 12.282 3C17.0968 3 21 7.02944 21 12C21 16.9706 17.0968 21 12.282 21C8.88266 21 5.93773 18.9915 4.5 16.0613' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <path d='M3 11.85H16.0909M16.0909 11.85L12.8181 8.55005M16.0909 11.85L12.8181 15.15' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
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
          <path d='M7.88385 12.5C10.3962 8.01649 15.0918 5 20.47 5C28.4947 5 35 11.7157 35 20C35 28.2843 28.4947 35 20.47 35C14.8044 35 9.89621 31.6525 7.5 26.7688' stroke='none' strokeWidth={2} strokeLinecap='round' />
          <path d='M5 19.75H26.8181M26.8181 19.75L21.3636 14.25M26.8181 19.75L21.3636 25.25' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

EntrypointIcon.propTypes = {
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
EntrypointIcon.defaultProps = {
  color: MAIN_DARK_BLUE,
  size: MEDIUM,
  disabled: false,
  inactive: false
}

export default EntrypointIcon
