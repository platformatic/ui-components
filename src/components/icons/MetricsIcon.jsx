import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const MetricsIcon = ({ color, size, disabled, inactive }) => {
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
          <rect x={4} y={5} width={2} height={7} rx={0.5} stroke='none' />
          <rect x={8} y={8} width={2} height={4} rx={0.5} stroke='none' />
          <rect x={12} y={2} width={2} height={10} rx={0.5} stroke='none' />
          <path d='M2 2V14H14' stroke='none' strokeLinecap='round' strokeLinejoin='round' />

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
          <rect x={6} y={7.5} width={3} height={10.5} rx={0.5} stroke='none' strokeWidth={1.5} />
          <rect x={12} y={12} width={3} height={6} rx={0.5} stroke='none' strokeWidth={1.5} />
          <rect x={18} y={3} width={3} height={15} rx={0.5} stroke='none' strokeWidth={1.5} />
          <path d='M3 3V21H21' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
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
          <rect x={10} y={12.5} width={5} height={17.5} rx={0.5} stroke='none' strokeWidth={2} />
          <rect x={20} y={20} width={5} height={10} rx={0.5} stroke='none' strokeWidth={2} />
          <rect x={30} y={5} width={5} height={25} rx={0.5} stroke='none' strokeWidth={2} />
          <path d='M5 5V35H35' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

MetricsIcon.propTypes = {
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
MetricsIcon.defaultProps = {
  color: MAIN_DARK_BLUE,
  size: MEDIUM,
  disabled: false,
inactive: false
}

export default MetricsIcon
