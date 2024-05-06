import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, MEDIUM, MAIN_DARK_BLUE } from '../constants'

const CircleDownloadIcon = ({
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
    case MEDIUM:
      icon = (
        <svg
          width={26}
          height={26}
          viewBox='0 0 26 26'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={className}
        >
          <circle cx='13' cy='13' r='12' stroke='none' strokeWidth={1.5} />
          <path d='M5.5 14.5L5.5 17.5C5.5 18.3284 6.17157 19 7 19L19 19C19.8284 19 20.5 18.3284 20.5 17.5L20.5 14.5' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <path d='M17.2048 11.1451L13.4168 15.1775L9.62869 11.1451' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M13.4166 14.3711L13.4166 5.5' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
        </svg>

      )
      break
    default:
      break
  }
  return icon
}

CircleDownloadIcon.propTypes = {
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

export default CircleDownloadIcon
