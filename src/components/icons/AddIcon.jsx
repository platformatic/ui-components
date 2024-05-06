import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const AddIcon = ({
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
          <path d='M2 8H14' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M8 13.9999L8 1.99999' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
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
          <path d='M3 11.9999H20.9999' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M12 20.9999L12 3.00001' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
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
          <path d='M5 19.9999H34.9999' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M20 34.9999L20 5' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

AddIcon.propTypes = {
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

export default AddIcon
