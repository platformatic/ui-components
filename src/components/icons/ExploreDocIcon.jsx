import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const ExploreDocIcon = ({ color, size, disabled, inactive }) => {
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
          <path d='M3 5V3C3 2.44772 3.44772 2 4 2H12C12.5523 2 13 2.44772 13 3V13C13 13.5523 12.5523 14 12 14H3' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M5.08325 4H10.6388' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M10 6L11 6' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M10 9L11 9' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M8 12L11 12' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <circle cx={6} cy={8.5} r={2.5} stroke='none' />
          <path d='M4 10L1 13' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
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
          <path d='M4.5 7.5V4C4.5 3.44772 4.94772 3 5.5 3H18.5C19.0523 3 19.5 3.44772 19.5 4V20C19.5 20.5523 19.0523 21 18.5 21H4.5' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M7.625 6H15.9583' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M15 9L16.5 9' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M15 13.5L16.5 13.5' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M12 18L16.5 18' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <circle cx={9} cy={12.75} r={3.75} stroke='none' strokeWidth={1.5} />
          <path d='M6 15L1.5 19.5' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />

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
          <path d='M7.5 12.5V6C7.5 5.44772 7.94772 5 8.5 5H31.5C32.0523 5 32.5 5.44772 32.5 6V34C32.5 34.5523 32.0523 35 31.5 35H7.5' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M12.708 10H26.5969' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M25 15L27.5 15' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M25 22.5L27.5 22.5' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M20 30L27.5 30' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <circle cx={15} cy={21.25} r={6.25} stroke='none' strokeWidth={2} />
          <path d='M10 25L2.5 32.5' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />

        </svg>
      )
      break

    default:
      break
  }
  return icon
}

ExploreDocIcon.propTypes = {
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
ExploreDocIcon.defaultProps = {
  color: MAIN_DARK_BLUE,
  size: MEDIUM,
  disabled: false,
inactive: false
}

export default ExploreDocIcon
