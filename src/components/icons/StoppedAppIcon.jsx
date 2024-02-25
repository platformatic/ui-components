import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const StoppedAppIcon = ({ color, size, disabled, inactive }) => {
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
          <path d='M7.5 2H3C2.44772 2 2 2.44772 2 3V9.34775C2 9.90004 2.44772 10.3478 3 10.3478H13C13.5523 10.3478 14 9.90004 14 9.34775V5.84783V3.04352C14 2.49124 13.5523 2.04352 13 2.04352H11.5' stroke='none' strokeLinecap='round' />
          <rect x='6' y='10.3477' width='4' height='2.08694' stroke='none' />
          <path d='M4 13.4348C4 12.8825 4.44772 12.4348 5 12.4348H11C11.5523 12.4348 12 12.8825 12 13.4348V14H4V13.4348Z' stroke='none' />
          <path d='M7.44287 4.67217H8.0786H8.71432L9.50012 2.04346L10.2859 4.67217H12.8288L10.7716 6.29681L11.5574 8.92553L9.50012 7.30089L7.44287 8.92553L8.22867 6.29681L7.5 6' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M6 5L6 7' stroke='none' strokeLinecap='round' />
          <path d='M4 5L4 7' stroke='none' strokeLinecap='round' />

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
          <path d='M11.25 3H4C3.44772 3 3 3.44771 3 4V14.5216C3 15.0739 3.44772 15.5216 4 15.5216H20C20.5523 15.5216 21 15.0739 21 14.5216V8.77175V4.06528C21 3.513 20.5523 3.06528 20 3.06528H17.25' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <rect x='9' y='15.5215' width='6' height='3.13041' stroke='none' strokeWidth={1.5} />
          <path d='M6 19.6521C6 19.0998 6.44772 18.6521 7 18.6521H17C17.5523 18.6521 18 19.0998 18 19.6521V20.9999H6V19.6521Z' stroke='none' strokeWidth={1.5} />
          <path d='M11.1641 7.00826H12.1176H13.0712L14.2499 3.06519L15.4286 7.00826H19.243L16.1571 9.44521L17.3358 13.3883L14.2499 10.9513L11.1641 13.3883L12.3428 9.44521L11.2498 9' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M9 7.5L9 10.5' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <path d='M6 7.5L6 10.5' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
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
          <path d='M18.75 5H6C5.44772 5 5 5.44771 5 6V24.8694C5 25.4217 5.44772 25.8694 6 25.8694H34C34.5523 25.8694 35 25.4217 35 24.8694V14.6196V6.1088C35 5.55652 34.5523 5.1088 34 5.1088H28.75' stroke='none' strokeWidth={2} strokeLinecap='round' />
          <rect x='15' y='25.8691' width='10' height='5.21734' stroke='none' strokeWidth={2} />
          <path d='M10 32.0869C10 31.5346 10.4477 31.0869 11 31.0869H29C29.5523 31.0869 30 31.5346 30 32.0869V34.9999H10V32.0869Z' stroke='none' strokeWidth={2} />
          <path d='M18.6069 11.6807H20.1962H21.7856L23.7501 5.10889L25.7146 11.6807H32.0718L26.9287 15.7423L28.8932 22.3141L23.7501 18.2525L18.6069 22.3141L20.5714 15.7423L18.7498 15.0002' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M15 12.5L15 17.5' stroke='none' strokeWidth={2} strokeLinecap='round' />
          <path d='M10 12.5L10 17.5' stroke='none' strokeWidth={2} strokeLinecap='round' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

StoppedAppIcon.propTypes = {
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
StoppedAppIcon.defaultProps = {
  color: MAIN_DARK_BLUE,
  size: MEDIUM,
  disabled: false,
  inactive: false
}

export default StoppedAppIcon
