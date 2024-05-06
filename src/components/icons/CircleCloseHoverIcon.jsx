import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, MEDIUM, MAIN_DARK_BLUE } from '../constants'

const CircleCloseHoverIcon = ({
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
          width={24}
          height={24}
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={className}
        >
          <circle
            cx={12}
            cy={12}
            r={11.25}
            fill='none'
            fillOpacity={0.2}
            stroke='none'
            strokeWidth={1.5}
          />
          <path
            d='M6 6L18 18'
            stroke='none'
            strokeWidth={1.5}
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M6 18L18 6'
            stroke='none'
            strokeWidth={1.5}
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      )
      break
    default:
      break
  }
  return icon
}

CircleCloseHoverIcon.propTypes = {
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

export default CircleCloseHoverIcon
