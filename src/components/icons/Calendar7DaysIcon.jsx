import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const Calendar7DaysIcon = ({ color, size, disabled, inactive }) => {
  let className = `${styles.svgClassName} ` + styles[`${color}`]
  if (disabled) {
    className += ` ${styles.iconDisabled}`
  }
  if (inactive) {
    className += ` ${styles.iconInactive}`
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
          <path d='M2 7H4M14 7H12' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <line x1={4.5} y1={5.5} x2={4.5} y2={2.5} stroke='none' strokeLinecap='round' />
          <line x1={11.5} y1={5.5} x2={11.5} y2={2.5} stroke='none' strokeLinecap='round' />
          <path d='M6.46691 13L9.65441 6.52L10.0294 7.1H5.65074L6.33456 6.47V8.29H5V6H11V6.87L8 13H6.46691Z' fill='none' className={filledClassName} />
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
          <rect x={3} y={6} width={18} height={15} rx={1} stroke='none' strokeWidth={1.5} />
          <path d='M3 10.5H6M21 10.5H18' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <line x1={6.75} y1={8.25} x2={6.75} y2={3.75} stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <line x1={17.25} y1={8.25} x2={17.25} y2={3.75} stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <path d='M9.70037 19.5L14.4816 9.78L15.0441 10.65H8.4761L9.50184 9.705V12.435H7.5V9H16.5V10.305L12 19.5H9.70037Z' fill='none' className={filledClassName} />
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
        ><rect x={5} y={10} width={30} height={25} rx={1} stroke='none' strokeWidth={2} />
          <path d='M5 17.5H10M35 17.5H30' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <line x1={11.5} y1={14} x2={11.5} y2={6} stroke='none' strokeWidth={2} strokeLinecap='round' />
          <line x1={29} y1={14} x2={29} y2={6} stroke='none' strokeWidth={2} strokeLinecap='round' />
          <path d='M16.1673 32.5L24.136 16.3L25.0735 17.75H14.1268L15.8364 16.175V20.725H12.5V15H27.5V17.175L20 32.5H16.1673Z' fill='none' className={filledClassName} />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

Calendar7DaysIcon.propTypes = {
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
Calendar7DaysIcon.defaultProps = {
  color: MAIN_DARK_BLUE,
  size: MEDIUM,
  disabled: false,
inactive: false
}

export default Calendar7DaysIcon
