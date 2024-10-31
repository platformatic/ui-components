import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const PodLogsIcon = ({
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
  const filledClassName = styles[`filled-${color}`]

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
          <path d='M8 2L13.1962 5V11L8 14L2.80385 11V5L8 2Z' stroke='none' strokeLinejoin='round' />
          <rect x='5' y='5' width='6' height='6' rx='1' stroke='none' />
          <path d='M5 7H11' stroke='none' />
          <circle cx='6.25' cy='6' r='0.25' fill='none' className={filledClassName} />
          <circle cx='7' cy='6' r='0.25' fill='none' className={filledClassName} />
          <circle cx='7.75' cy='6' r='0.25' fill='none' className={filledClassName} />
          <path d='M6.5 8.25H8.25' stroke='none' strokeLinecap='round' />
          <path d='M6.5 9.5H9.5' stroke='none' strokeLinecap='round' />

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
          <path d='M12 3L19.7942 7.5V16.5L12 21L4.20577 16.5V7.5L12 3Z' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
          <rect x='7.5' y='7.5' width='9' height='9' rx='1' stroke='none' strokeWidth={1.5} />
          <path d='M7.5 10.5H16.5' stroke='none' strokeWidth={1.5} />
          <circle cx='9.375' cy='9' r='0.375' fill='none' className={filledClassName} />
          <circle cx='10.5' cy='9' r='0.375' fill='none' className={filledClassName} />
          <circle cx='11.625' cy='9' r='0.375' fill='none' className={filledClassName} />
          <path d='M9.75 12.375H12.375' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <path d='M9.75 14.25H14.25' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
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
          <path d='M20 5L32.9904 12.5V27.5L20 35L7.00962 27.5V12.5L20 5Z' stroke='none' strokeWidth={2} strokeLinejoin='round' />
          <rect x='12.5' y='12.5' width='15' height='15' rx='2' stroke='none' strokeWidth={2} />
          <path d='M12.5 17.5H27.5' stroke='none' strokeWidth={2} />
          <circle cx='15.625' cy='15' r='0.625' fill='none' className={filledClassName} />
          <circle cx='17.5' cy='15' r='0.625' fill='none' className={filledClassName} />
          <circle cx='19.375' cy='15' r='0.625' fill='none' className={filledClassName} />
          <path d='M16.25 20.625H20.625' stroke='none' strokeWidth={2} strokeLinecap='round' />
          <path d='M16.25 23.75H23.75' stroke='none' strokeWidth={2} strokeLinecap='round' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

PodLogsIcon.propTypes = {
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

export default PodLogsIcon
