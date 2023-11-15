import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const FoldersIcon = ({ color, size, disabled }) => {
  let className = `${styles.noShrinkForFlex} ` + styles[`${color}`]
  if (disabled) {
    className += ` ${styles.iconDisabled}`
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
          <path d='M11 7.5V4.6C11 4.04772 10.5523 3.6 10 3.6H7.13566C6.74776 3.6 6.39484 3.37567 6.2302 3.02443L6.0198 2.57557C5.85516 2.22433 5.50224 2 5.11434 2H3C2.44772 2 2 2.44772 2 3V9C2 9.55228 2.44772 10 3 10H5' stroke='none' strokeLinejoin='round' />
          <path d='M8.11434 6H6C5.44772 6 5 6.44772 5 7V13C5 13.5523 5.44772 14 6 14H13C13.5523 14 14 13.5523 14 13V8.6C14 8.04772 13.5523 7.6 13 7.6H10.1357C9.74776 7.6 9.39484 7.37567 9.2302 7.02443L9.0198 6.57557C8.85516 6.22433 8.50224 6 8.11434 6Z' stroke='none' strokeLinejoin='round' />
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
          <path d='M16.5 11.25V6.4C16.5 5.84772 16.0523 5.4 15.5 5.4H10.3857C9.99776 5.4 9.64484 5.17567 9.4802 4.82443L8.8948 3.57557C8.73016 3.22433 8.37724 3 7.98934 3H4C3.44772 3 3 3.44772 3 4V14C3 14.5523 3.44772 15 4 15H7.5' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
          <path d='M12.4893 9H8.5C7.94772 9 7.5 9.44772 7.5 10V20C7.5 20.5523 7.94772 21 8.5 21H20C20.5523 21 21 20.5523 21 20V12.4C21 11.8477 20.5523 11.4 20 11.4H14.8857C14.4978 11.4 14.1448 11.1757 13.9802 10.8244L13.3948 9.57557C13.2302 9.22433 12.8772 9 12.4893 9Z' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
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
          <path d='M27.5 18.75V10C27.5 9.44772 27.0523 9 26.5 9H16.8857C16.4978 9 16.1448 8.77567 15.9802 8.42443L14.6448 5.57557C14.4802 5.22433 14.1272 5 13.7393 5H6C5.44772 5 5 5.44772 5 6V24C5 24.5523 5.44772 25 6 25H12.5' stroke='none' strokeWidth={2} strokeLinejoin='round' />
          <path d='M21.2393 15H13.5C12.9477 15 12.5 15.4477 12.5 16V34C12.5 34.5523 12.9477 35 13.5 35H34C34.5523 35 35 34.5523 35 34V20C35 19.4477 34.5523 19 34 19H24.3857C23.9978 19 23.6448 18.7757 23.4802 18.4244L22.1448 15.5756C21.9802 15.2243 21.6272 15 21.2393 15Z' stroke='none' strokeWidth={2} strokeLinejoin='round' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

FoldersIcon.propTypes = {
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
  disabled: PropTypes.bool
}
FoldersIcon.defaultProps = {
  color: MAIN_DARK_BLUE,
  size: MEDIUM,
  disabled: false
}

export default FoldersIcon
