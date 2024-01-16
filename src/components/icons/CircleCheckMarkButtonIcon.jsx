import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, MEDIUM, MAIN_DARK_BLUE } from '../constants'

const CircleCheckMarkButtonIcon = ({ color, size, disabled, inactive }) => {
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
          <circle cx='13' cy='13' r='12' stroke='none' strokeWidth='1.5' />
          <path d='M7 13L12 17L19 9' stroke='none' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

CircleCheckMarkButtonIcon.propTypes = {
  /**
   * color of text, icon and borders
   */
  color: PropTypes.oneOf(COLORS_ICON),
  /**
   * Size
   */
  size: PropTypes.oneOf([MEDIUM])
}

CircleCheckMarkButtonIcon.defaultProps = {
  color: MAIN_DARK_BLUE,
  size: MEDIUM,
  disabled: false,
inactive: false
}

export default CircleCheckMarkButtonIcon
