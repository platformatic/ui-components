import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const ApiCloudIcon = ({ color, size, disabled, inactive }) => {
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
          <path d='M4.37341 9.11943C3.0621 9.11943 2 8.05653 2 6.74602C2 5.43551 3.0621 4.37261 4.37261 4.37341C4.37261 3.0621 5.43551 2 6.74602 2C7.71497 2 8.54777 2.58041 8.9164 3.41322C8.98328 3.40685 9.05096 3.40366 9.11943 3.40366C10.2126 3.40366 11.1322 4.14331 11.4076 5.14889C11.5876 5.09634 11.7779 5.06768 11.9745 5.06768C13.0932 5.06768 14 5.97532 14 7.09395C14 8.21258 13.0932 9.11943 11.9745 9.11943' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M6 5.5V12H5.5' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M10 6V12H11' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M8 7V12' stroke='none' strokeLinecap='round' />
          <circle cx={4} cy={12} r={1} stroke='none' />
          <circle cx={12} cy={12} r={1} stroke='none' />
          <circle cx={8} cy={13} r={1} stroke='none' />
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
          <path d='M6.56011 13.6791C4.59315 13.6791 3 12.0848 3 10.119C3 8.15327 4.59315 6.55892 6.55892 6.56011C6.55892 4.59315 8.15327 3 10.119 3C11.5725 3 12.8217 3.87062 13.3746 5.11983C13.4749 5.11027 13.5764 5.10549 13.6791 5.10549C15.3189 5.10549 16.6982 6.21497 17.1115 7.72333C17.3814 7.64451 17.6668 7.60151 17.9618 7.60151C19.6397 7.60151 21 8.96298 21 10.6409C21 12.3189 19.6397 13.6791 17.9618 13.6791' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M9 8.25V18H8.25' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M15 9V18H16.5' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M12 10.5V18' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <circle cx={6} cy={18} r={1.5} stroke='none' strokeWidth={1.5} />
          <circle cx={18} cy={18} r={1.5} stroke='none' strokeWidth={1.5} />
          <circle cx={12} cy={19.5} r={1.5} stroke='none' strokeWidth={1.5} />
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
          <path d='M10.9335 22.7986C7.65526 22.7986 5 20.1413 5 16.865C5 13.5888 7.65526 10.9315 10.9315 10.9335C10.9315 7.65526 13.5888 5 16.865 5C19.2874 5 21.3694 6.45104 22.291 8.53304C22.4582 8.51712 22.6274 8.50916 22.7986 8.50916C25.5315 8.50916 27.8304 10.3583 28.5191 12.8722C28.969 12.7408 29.4447 12.6692 29.9363 12.6692C32.7329 12.6692 35 14.9383 35 17.7349C35 20.5315 32.7329 22.7986 29.9363 22.7986' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M15 13.75V30H13.75' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M25 15V30H27.5' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M20 17.5V30' stroke='none' strokeWidth={2} strokeLinecap='round' />
          <circle cx={10} cy={30} r={2.5} stroke='none' strokeWidth={2} />
          <circle cx={30} cy={30} r={2.5} stroke='none' strokeWidth={2} />
          <circle cx={20} cy={32.5} r={2.5} stroke='none' strokeWidth={2} />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

ApiCloudIcon.propTypes = {
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
ApiCloudIcon.defaultProps = {
  color: MAIN_DARK_BLUE,
  size: MEDIUM,
  disabled: false,
  inactive: false
}

export default ApiCloudIcon
