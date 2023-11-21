import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const Calendar1DayIcon = ({ color, size, disabled }) => {
  let className = `${styles.svgClassName} ` + styles[`${color}`]
  if (disabled) {
    className += ` ${styles.iconDisabled}`
  }
  const filledClassName = styles[`filled-${color}`]

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
          <rect x={2} y={4} width={12} height={10} rx={1} stroke='none' />
          <path d='M2 7H5M14 7H11' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <line x1={4.5} y1={5.5} x2={4.5} y2={2.5} stroke='none' strokeLinecap='round' />
          <line x1={11.5} y1={5.5} x2={11.5} y2={2.5} stroke='none' strokeLinecap='round' />
          <path d='M7.59712 13V6.5L8.21223 7.09L7.59712 8H7.5L6.5 9V7L7.5 6H9V13H7.59712Z' fill='none' className={filledClassName} />
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
          <rect x={3} y={6} width={18} height={15} rx={1} stroke='none' strokeWidth={2} />
          <path d='M3 10.5H7.5M21 10.5H16.5' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <line x1={6.75} y1={8.25} x2={6.75} y2={3.75} stroke='none' strokeWidth={2} strokeLinecap='round' />
          <line x1={17.25} y1={8.25} x2={17.25} y2={3.75} stroke='none' strokeWidth={2} strokeLinecap='round' />
          <path d='M11.3957 19.5V9.75L12.3183 10.635L11.3957 12H11.25L9.75 13.5V10.5L11.25 9H13.5V19.5H11.3957Z' fill='none' className={filledClassName} />

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
          <rect x={5} y={10} width={30} height={25} rx={1} stroke='none' strokeWidth={2} />
          <path d='M5 17.5H12.5M35 17.5H27.5' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <line x1={11.5} y1={14} x2={11.5} y2={6} stroke='none' strokeWidth={2} strokeLinecap='round' />
          <line x1={29} y1={14} x2={29} y2={6} stroke='none' strokeWidth={2} strokeLinecap='round' />
          <path d='M18.9928 32.5V16.25L20.5306 17.725L18.9928 20H18.75L16.25 22.5V17.5L18.75 15H22.5V32.5H18.9928Z' fill='none' className={filledClassName} />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

Calendar1DayIcon.propTypes = {
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
Calendar1DayIcon.defaultProps = {
  color: MAIN_DARK_BLUE,
  size: MEDIUM,
  disabled: false
}

export default Calendar1DayIcon
