import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const UserIcon = ({
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
          <path d='M8 10C4.68629 10 2 11.7909 2 14H14C14 11.7909 11.3137 10 8 10Z' stroke='none' strokeLinejoin='round' />
          <circle cx={8} cy={5} r={3} stroke='none' />

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
          <path d='M12 15C7.02944 15 3 17.6863 3 21H21C21 17.6863 16.9706 15 12 15Z' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
          <circle cx={12} cy={7.5} r={4.5} stroke='none' strokeWidth={1.5} />
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
          <path d='M20 25C11.7157 25 5 29.4772 5 35H35C35 29.4772 28.2843 25 20 25Z' stroke='none' strokeWidth={2} strokeLinejoin='round' />
          <circle cx={20} cy={12.5} r={7.5} stroke='none' strokeWidth={2} />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

UserIcon.propTypes = {
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

export default UserIcon
