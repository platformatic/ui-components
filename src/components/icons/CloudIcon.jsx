import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const CloudIcon = ({
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
          <path d='M4.01481 11.1923C2.89719 11.1626 2 10.2261 2 9.032C2 7.83788 2.92622 6.86983 4.06874 6.86983C4.13748 6.86983 4.20563 6.87355 4.27319 6.88036C4.68978 5.77915 5.71674 5 6.91852 5C8.20207 5 9.28652 5.88877 9.64089 7.11014C9.92474 6.95716 10.2459 6.87045 10.5873 6.87045C11.3748 6.87045 12.0593 7.33001 12.4089 8.00697C12.4308 8.00573 12.4527 8.00511 12.4747 8.00511C13.3167 8.00511 14 8.71861 14 9.59933C14 10.454 13.3564 11.1514 12.5481 11.1917V11.1935L4.01481 11.1923ZM4.01481 11.1923V11.1935' stroke='none' strokeWidth={1.02} strokeMiterlimit={10} strokeLinejoin='round' />
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
          <path d='M6.02222 16.7885C4.34578 16.7439 3 15.3392 3 13.548C3 11.7568 4.38933 10.3047 6.10311 10.3047C6.20622 10.3047 6.30844 10.3103 6.40978 10.3205C7.03467 8.66872 8.57511 7.5 10.3778 7.5C12.3031 7.5 13.9298 8.83316 14.4613 10.6652C14.8871 10.4357 15.3689 10.3057 15.8809 10.3057C17.0622 10.3057 18.0889 10.995 18.6133 12.0105C18.6462 12.0086 18.6791 12.0077 18.712 12.0077C19.9751 12.0077 21 13.0779 21 14.399C21 15.6811 20.0347 16.7271 18.8222 16.7875V16.7903L6.02222 16.7885ZM6.02222 16.7885V16.7903' stroke='none' strokeWidth={1.5} strokeMiterlimit={10} strokeLinejoin='round' />

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
          <path d='M10.037 27.9808C7.24296 27.9064 5 25.5653 5 22.58C5 19.5947 7.31556 17.1746 10.1719 17.1746C10.3437 17.1746 10.5141 17.1839 10.683 17.2009C11.7244 14.4479 14.2919 12.5 17.2963 12.5C20.5052 12.5 23.2163 14.7219 24.1022 17.7754C24.8119 17.3929 25.6148 17.1761 26.4681 17.1761C28.437 17.1761 30.1481 18.325 31.0222 20.0174C31.077 20.0143 31.1319 20.0128 31.1867 20.0128C33.2919 20.0128 35 21.7965 35 23.9983C35 26.1351 33.3911 27.8786 31.3704 27.9792V27.9839L10.037 27.9808ZM10.037 27.9808V27.9839' stroke='none' strokeWidth={2} strokeMiterlimit={10} strokeLinejoin='round' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

CloudIcon.propTypes = {
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

export default CloudIcon
