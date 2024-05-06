import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, LARGE, MAIN_DARK_BLUE } from '../constants'

const ApplicationTypeIcon = ({
  color = MAIN_DARK_BLUE,
  size = LARGE,
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
          <rect x={17.5} y={15.0002} width={17.5} height={20} stroke='none' strokeWidth={2} strokeLinejoin='round' />
          <path d='M27.5 14.4447V10.0002H10V30.0002H17.5' stroke='none' strokeWidth={2} strokeLinejoin='round' />
          <path d='M10 22.5002H5V5.00021H22.5V8.8891' stroke='none' strokeWidth={2} strokeLinejoin='round' />
          <path d='M26.25 20.0002L27.6532 24.3189H32.1941L28.5204 26.9879L29.9237 31.3066L26.25 28.6375L22.5763 31.3066L23.9796 26.9879L20.3059 24.3189H24.8468L26.25 20.0002Z' stroke='none' strokeWidth={2} strokeLinejoin='round' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

ApplicationTypeIcon.propTypes = {
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

export default ApplicationTypeIcon
