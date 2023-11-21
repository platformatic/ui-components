import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MAIN_DARK_BLUE, MEDIUM } from '../constants'

const CircleRestartIcon = ({ color, size, disabled }) => {
  let className = `${styles.svgClassName} ` + styles[`${color}`]
  if (disabled) {
    className += ` ${styles.iconDisabled}`
  }
  let icon = <></>

  switch (size) {
    case SMALL:
      icon = (
        <svg
          width={18}
          height={18}
          viewBox='0 0 18 18'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={className}
        >
          <circle cx='9' cy='9' r='8' stroke='none' />
          <path d='M5.05117 6.23517C5.89557 4.88792 7.33948 4 8.97888 4C11.5819 4 13.6921 6.23858 13.6921 9C13.6921 9.50216 13.6224 9.98702 13.4925 10.4443M4.33079 8.16667C4.28793 8.43767 4.26562 8.71607 4.26562 9C4.26562 11.7614 6.37582 14 8.97888 14C10.3866 14 11.6502 13.3453 12.5138 12.3073' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M12.2388 8.87502L13.47 10.4981L15 9.19192' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M5.771 9.35161L4.29088 7.98235L3.00014 9.5525' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
        </svg>
      )
      break

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
          <path d='M7.07675 8.85276C8.34335 6.83189 10.5092 5.5 12.9683 5.5C16.8729 5.5 20.0382 8.85786 20.0382 13C20.0382 13.7532 19.9335 14.4805 19.7388 15.1664M5.99619 11.75C5.9319 12.1565 5.89844 12.5741 5.89844 13C5.89844 17.1421 9.06373 20.5 12.9683 20.5C15.0799 20.5 16.9753 19.518 18.2707 17.9609' stroke='none' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M17.8574 12.8125L19.7043 15.2471L21.9992 13.2879' stroke='none' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M8.15723 13.5273L5.93706 11.4735L4.00095 13.8287' stroke='none' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

CircleRestartIcon.propTypes = {
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
  disabled: PropTypes.bool
}
CircleRestartIcon.defaultProps = {
  color: MAIN_DARK_BLUE,
  size: SMALL,
  disabled: false
}

export default CircleRestartIcon
