import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const CircleStopIcon = ({
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
          <circle cx='8' cy='8' r='6' stroke='none' />
          <rect x='6' y='6' width='4' height='4' rx='1' fill='none' className={filledClassName} />

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
          <circle cx='12' cy='12' r='9' stroke='none' strokeWidth={1.5} />
          <rect x='9' y='9.00006' width='6' height='6' rx='1' fill='none' className={filledClassName} />

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
          <circle cx='20' cy='20' r='15' stroke='none' strokeWidth={2} />
          <rect x='14.9998' y='15.0001' width='10' height='10' rx='1' fill='none' className={filledClassName} />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

CircleStopIcon.propTypes = {
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

export default CircleStopIcon
