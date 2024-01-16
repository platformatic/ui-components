import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const SlotIcon = ({ color, size, disabled, inactive }) => {
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
          <rect x={14} y={14} width={12} height={12} rx={1} transform='rotate(-180 14 14)' stroke='none' />
          <path d='M12 5.5L4 5.5L4 3.5L12 3.5L12 5.5Z' stroke='none' strokeLinejoin='round' />
          <rect x={10} y={9} width={2} height={2} transform='rotate(-180 10 9)' stroke='none' strokeLinejoin='round' />
          <rect x={10} y={12.5} width={2} height={2} transform='rotate(-180 10 12.5)' stroke='none' strokeLinejoin='round' />
          <path d='M5 5.5V8M5 8H8M5 8V10.5C5 11.0523 5.44772 11.5 6 11.5H8' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
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
          <rect x={21} y={21} width={18} height={18} rx={1} transform='rotate(-180 21 21)' stroke='none' strokeWidth={1.5} />
          <path d='M18 8.25L6 8.25L6 5.25L18 5.25L18 8.25Z' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
          <rect x={15} y={13.5} width={3} height={3} transform='rotate(-180 15 13.5)' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
          <rect x={15} y={18.75} width={3} height={3} transform='rotate(-180 15 18.75)' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
          <path d='M7.5 8.25V12M7.5 12H12M7.5 12V16.25C7.5 16.8023 7.94772 17.25 8.5 17.25H12' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
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
          <rect x={35} y={35} width={30} height={30} rx={1} transform='rotate(-180 35 35)' stroke='none' strokeWidth={2} />
          <path d='M30 13.75L10 13.75L10 8.75L30 8.75L30 13.75Z' stroke='none' strokeWidth={2} strokeLinejoin='round' />
          <rect x={25} y={22.5} width={5} height={5} transform='rotate(-180 25 22.5)' stroke='none' strokeWidth={2} strokeLinejoin='round' />
          <rect x={25} y={31.25} width={5} height={5} transform='rotate(-180 25 31.25)' stroke='none' strokeWidth={2} strokeLinejoin='round' />
          <path d='M12.5 13.75V20M12.5 20H20M12.5 20V27.75C12.5 28.3023 12.9477 28.75 13.5 28.75H20' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

SlotIcon.propTypes = {
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
SlotIcon.defaultProps = {
  color: MAIN_DARK_BLUE,
  size: MEDIUM,
  disabled: false,
  inactive: false
}

export default SlotIcon
