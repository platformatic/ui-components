import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const CalendarIcon = ({ color, size, disabled, inactive }) => {
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
          <path d='M2 7H14' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <line x1={4.5} y1={5.5} x2={4.5} y2={2.5} stroke='none' strokeLinecap='round' />
          <line x1={11.5} y1={5.5} x2={11.5} y2={2.5} stroke='none' strokeLinecap='round' />
          <rect x={4} y={8} width={2} height={2} rx={0.5} fill='none' className={filledClassName} />
          <rect x={4} y={11} width={2} height={2} rx={0.5} fill='none' className={filledClassName} />
          <rect x={7} y={8} width={2} height={2} rx={0.5} fill='none' className={filledClassName} />
          <rect x={10} y={8} width={2} height={2} rx={0.5} fill='none' className={filledClassName} />
          <rect x={7} y={11} width={2} height={2} rx={0.5} fill='none' className={filledClassName} />
          <rect x={10} y={11} width={2} height={2} rx={0.5} fill='none' className={filledClassName} />
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
          <path d='M3 10.5H21' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <line x1={6.75} y1={8.25} x2={6.75} y2={3.75} stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <line x1={17.25} y1={8.25} x2={17.25} y2={3.75} stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <rect x={6} y={12} width={3} height={3} rx={0.5} fill='none' className={filledClassName} />
          <rect x={6} y={16.5} width={3} height={3} rx={0.5} fill='none' className={filledClassName} />
          <rect x={10.5} y={12} width={3} height={3} rx={0.5} fill='none' className={filledClassName} />
          <rect x={15} y={12} width={3} height={3} rx={0.5} fill='none' className={filledClassName} />
          <rect x={10.5} y={16.5} width={3} height={3} rx={0.5} fill='none' className={filledClassName} />
          <rect x={15} y={16.5} width={3} height={3} rx={0.5} fill='none' className={filledClassName} />
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
          <path d='M5 17.5H35' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <line x1={11.5} y1={14} x2={11.5} y2={6} stroke='none' strokeWidth={2} strokeLinecap='round' />
          <line x1={29} y1={14} x2={29} y2={6} stroke='none' strokeWidth={2} strokeLinecap='round' />
          <rect x={10} y={20} width={5} height={5} rx={0.5} fill='none' className={filledClassName} />
          <rect x={10} y={27.5} width={5} height={5} rx={0.5} fill='none' className={filledClassName} />
          <rect x={17.5} y={20} width={5} height={5} rx={0.5} fill='none' className={filledClassName} />
          <rect x={25} y={20} width={5} height={5} rx={0.5} fill='none' className={filledClassName} />
          <rect x={17.5} y={27.5} width={5} height={5} rx={0.5} fill='none' className={filledClassName} />
          <rect x={25} y={27.5} width={5} height={5} rx={0.5} fill='none' className={filledClassName} />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

CalendarIcon.propTypes = {
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
CalendarIcon.defaultProps = {
  color: MAIN_DARK_BLUE,
  size: MEDIUM,
  disabled: false,
  inactive: false
}

export default CalendarIcon
