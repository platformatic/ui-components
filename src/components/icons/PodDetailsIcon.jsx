import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const PodDetailsIcon = ({
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
          <path d='M8.81982 5.6875L7.84555 5.125L5.89699 4L1.99987 6.25V10.75L5.89699 13L6.87127 12.4375' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M6 7H12' stroke='none' strokeLinecap='round' />
          <path d='M7 9H13' stroke='none' strokeLinecap='round' />
          <path d='M8 11H14' stroke='none' strokeLinecap='round' />
          <circle cx='4.39697' cy='7' r='0.5' fill='none' />
          <circle cx='5.39697' cy='9' r='0.5' fill='none' />
          <circle cx='6.39697' cy='11' r='0.5' fill='none' />
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
          <path d='M13.23 8.53125L11.7686 7.6875L8.84573 6L3.00006 9.375V16.125L8.84573 19.5L10.3071 18.6562' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M9 10.5H18' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <path d='M10.5 13.5H19.5' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <path d='M12 16.5H21' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <circle cx='6.5957' cy='10.5' r='0.75' fill='none' />
          <circle cx='8.0957' cy='13.5' r='0.75' fill='none' />
          <circle cx='9.5957' cy='16.5' r='0.75' fill='none' />
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
          <path d='M22.0498 14.2188L19.6141 12.8125L14.7427 10L4.99993 15.625V26.875L14.7427 32.5L17.1784 31.0938' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M15 17.5H30' stroke='none' strokeWidth={2} strokeLinecap='round' />
          <path d='M17.5 22.5H32.5' stroke='none' strokeWidth={2} strokeLinecap='round' />
          <path d='M20 27.5H35' stroke='none' strokeWidth={2} strokeLinecap='round' />
          <circle cx='10.9927' cy='17.5' r='1.25' fill='none' />
          <circle cx='13.4927' cy='22.5' r='1.25' fill='none' />
          <circle cx='15.9927' cy='27.5' r='1.25' fill='none' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

PodDetailsIcon.propTypes = {
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

export default PodDetailsIcon
