import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const FolderIcon = ({
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
          <path d='M6.38197 3H3C2.44772 3 2 3.44772 2 4V12C2 12.5523 2.44772 13 3 13H13C13.5523 13 14 12.5523 14 12V6C14 5.44772 13.5523 5 13 5H8.61803C8.23926 5 7.893 4.786 7.72361 4.44721L7.27639 3.55279C7.107 3.214 6.76074 3 6.38197 3Z' stroke='none' strokeLinejoin='round' />
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
          <path d='M9.88197 4.5H4C3.44772 4.5 3 4.94772 3 5.5V18.5C3 19.0523 3.44772 19.5 4 19.5H20C20.5523 19.5 21 19.0523 21 18.5V8.5C21 7.94772 20.5523 7.5 20 7.5H12.618C12.2393 7.5 11.893 7.286 11.7236 6.94721L10.7764 5.05279C10.607 4.714 10.2607 4.5 9.88197 4.5Z' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
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
          <path d='M16.882 7.5H6C5.44772 7.5 5 7.94772 5 8.5V31.5C5 32.0523 5.44772 32.5 6 32.5H34C34.5523 32.5 35 32.0523 35 31.5V13.5C35 12.9477 34.5523 12.5 34 12.5H20.618C20.2393 12.5 19.893 12.286 19.7236 11.9472L17.7764 8.05279C17.607 7.714 17.2607 7.5 16.882 7.5Z' stroke='none' strokeWidth={2} strokeLinejoin='round' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

FolderIcon.propTypes = {
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

export default FolderIcon
