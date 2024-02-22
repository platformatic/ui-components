import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const CreateAppIcon = ({ color, size, disabled, inactive }) => {
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
          <path d='M9.5 2.04346L10.2858 4.67217H12.8287L10.7714 6.29681L11.5572 8.92553L9.5 7.30089L7.44275 8.92553L8.22855 6.29681L6.1713 4.67217H8.7142L9.5 2.04346Z' stroke='none' strokeLinejoin='round' />
          <path d='M5 5.30444V8.02181' stroke='none' strokeLinecap='round' />
          <path d='M6.25 6.66309L3.75 6.66309' stroke='none' strokeLinecap='round' />
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
          <path d='M14.25 3.06519L15.4287 7.00826L19.243 7.00826L16.1572 9.44521L17.3359 13.3883L14.25 10.9513L11.1641 13.3883L12.3428 9.44521L9.25695 7.00826L13.0713 7.00826L14.25 3.06519Z' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
          <path d='M7.5 7.95654V12.0326' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <path d='M9.375 9.99463L5.625 9.99463' stroke='none' strokeWidth={1.5} strokeLinecap='round' />

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
          <path d='M23.75 5.10889L25.7145 11.6807H32.0717L26.9286 15.7423L28.8931 22.3141L23.75 18.2525L18.6069 22.3141L20.5714 15.7423L15.4283 11.6807H21.7855L23.75 5.10889Z' stroke='none' strokeWidth={2} strokeLinejoin='round' />
          <path d='M12.5 13.261V20.0544' stroke='none' strokeWidth={2} strokeLinecap='round' />
          <path d='M15.625 16.6577L9.375 16.6577' stroke='none' strokeWidth={2} strokeLinecap='round' />

        </svg>
      )
      break

    default:
      break
  }
  return icon
}

CreateAppIcon.propTypes = {
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
CreateAppIcon.defaultProps = {
  color: MAIN_DARK_BLUE,
  size: MEDIUM,
  disabled: false,
  inactive: false
}

export default CreateAppIcon
