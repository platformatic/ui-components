import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const RestartIcon = ({ color, size, disabled, inactive }) => {
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
          <path d='M11.1765 9.05884V11.8824H14' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M7.64706 13.2941C4.52827 13.2941 2 10.7658 2 7.64706C2 4.52827 4.52827 2 7.64706 2C10.7658 2 13.2941 4.52827 13.2941 7.64706C13.2941 8.35328 13.1645 9.02922 12.9277 9.65238C12.6843 10.2929 12.3277 10.8777 11.8824 11.3823' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
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
          <path d='M16.7646 13.5883V17.8236H20.9999' stroke='none' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M11.4706 19.9412C6.79241 19.9412 3 16.1488 3 11.4706C3 6.79241 6.79241 3 11.4706 3C16.1488 3 19.9412 6.79241 19.9412 11.4706C19.9412 12.5299 19.7467 13.5438 19.3916 14.4786C19.0265 15.4394 18.4916 16.3166 17.8235 17.0735' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
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
          <path d='M27.9412 22.647V29.7059H35' stroke='none' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M19.1176 33.2353C11.3207 33.2353 5 26.9146 5 19.1176C5 11.3207 11.3207 5 19.1176 5C26.9146 5 33.2353 11.3207 33.2353 19.1176C33.2353 20.8832 32.9112 22.573 32.3193 24.1309C31.7108 25.7324 30.8193 27.1944 29.7059 28.4559' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

RestartIcon.propTypes = {
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
RestartIcon.defaultProps = {
  color: MAIN_DARK_BLUE,
  size: MEDIUM,
  disabled: false,
  inactive: false
}

export default RestartIcon
