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
          <rect x='7' y='2' width='7' height='7' rx='1' stroke='none' />
          <path d='M7 3.75H14' stroke='none' />
          <circle cx='7.87516' cy='2.87492' r='0.291667' fill='none' />
          <circle cx='8.75016' cy='2.87492' r='0.291667' fill='none' />
          <circle cx='9.62516' cy='2.87492' r='0.291667' fill='none' />
          <path d='M8.1665 4.91675H11.0832' stroke='none' strokeLinecap='round' />
          <path d='M8.75 6.08325H12.8333' stroke='none' strokeLinecap='round' />
          <path d='M8.75 7.25H12.8333' stroke='none' strokeLinecap='round' />
          <path d='M9.46387 10.4998V11.9998L5.99977 13.9998L2.53566 11.9998V7.99984L5.39225 6.35059' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
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
          <rect x='10.5' y='3' width='10.5' height='10.5' rx='1' stroke='none' strokeWidth={1.5} />
          <path d='M10.5 5.625H21' stroke='none' strokeWidth={1.5} />
          <circle cx='11.8125' cy='4.3125' r='0.4375' fill='none' />
          <circle cx='13.125' cy='4.3125' r='0.4375' fill='none' />
          <circle cx='14.4375' cy='4.3125' r='0.4375' fill='none' />
          <path d='M12.25 7.375H16.625' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <path d='M13.125 9.125H19.25' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <path d='M13.125 10.875H19.25' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <path d='M14.1958 15.7498V17.9998L8.99965 20.9998L3.8035 17.9998V11.9998L8.08837 9.52588' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
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
          <rect x='17.5' y='5' width='17.5' height='17.5' rx='1' stroke='none' strokeWidth={2} />
          <path d='M17.5 9.375H35' stroke='none' strokeWidth={2} />
          <circle cx='19.6877' cy='7.18742' r='0.729167' fill='none' />
          <circle cx='21.8752' cy='7.18742' r='0.729167' fill='none' />
          <circle cx='24.0627' cy='7.18742' r='0.729167' fill='none' />
          <path d='M20.4165 12.2917H27.7082' stroke='none' strokeWidth={2} strokeLinecap='round' />
          <path d='M21.875 15.2083H32.0833' stroke='none' strokeWidth={2} strokeLinecap='round' />
          <path d='M21.875 18.125H32.0833' stroke='none' strokeWidth={2} strokeLinecap='round' />
          <path d='M23.6597 26.2496V29.9996L14.9994 34.9996L6.33916 29.9996V19.9996L13.4806 15.8765' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
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
