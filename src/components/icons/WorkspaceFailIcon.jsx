import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, EXTRA_LARGE, MAIN_DARK_BLUE } from '../constants'

const WorkspaceFailIcon = ({ color, size, disabled }) => {
  let className = `${styles.noShrinkForFlex} ` + styles[`${color}`]
  if (disabled) {
    className += ` ${styles.iconDisabled}`
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
          <rect x={2} y={2} width={5} height={5} rx={1} stroke='none' />
          <rect x={6} y={14} width={4} height='5.03496' rx={1} transform='rotate(-180 6 14)' stroke='none' />
          <rect x={14} y={14} width={6} height='5.03497' rx={1} transform='rotate(-180 14 14)' stroke='none' />
          <circle cx={11.5} cy={4.5} r={2.5} stroke='none' />
          <path d='M10.9624 5.23332L12.1707 3.89999' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M12.2332 5.17081L10.8999 3.96247' stroke='none' strokeLinecap='round' strokeLinejoin='round' />

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
          <rect x={3} y={3} width={7.5} height={7.5} rx={1} stroke='none' strokeWidth={1.5} />
          <rect x={9} y={21} width={6} height={7.55245} rx={1} transform='rotate(-180 9 21)' stroke='none' strokeWidth={1.5} />
          <rect x={21} y={21} width={9} height={7.55245} rx={1} transform='rotate(-180 21 21)' stroke='none' strokeWidth={1.5} />
          <circle cx={17.25} cy={6.75} r={3.75} stroke='none' strokeWidth={1.5} />
          <path d='M16.4436 7.84999L18.2561 5.85001' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M18.3498 7.75623L16.3499 5.94373' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
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
          <rect x={5} y={5} width={12.5} height={12.5} rx={1} stroke='none' strokeWidth={2} />
          <rect x={15} y={35} width={10} height={12.5874} rx={1} transform='rotate(-180 15 35)' stroke='none' strokeWidth={2} />
          <rect x={35} y={35} width={15} height={12.5874} rx={1} transform='rotate(-180 35 35)' stroke='none' strokeWidth={2} />
          <circle cx={28.75} cy={11.25} r={6.25} stroke='none' strokeWidth={2} />
          <path d='M27.4062 13.0833L30.4271 9.75' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M30.5833 12.927L27.25 9.9062' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
        </svg>
      )
      break

    case EXTRA_LARGE:
      icon = (
        <svg
          width={120}
          height={120}
          viewBox='0 0 120 120'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={className}
        >
          <rect x={15} y={15} width={37.5} height={37.5} rx={1} stroke='none' strokeWidth={6} />
          <rect x={45} y={105} width={30} height={37.7622} rx={1} transform='rotate(-180 45 105)' stroke='none' strokeWidth={6} />
          <rect x={105} y={105} width={45} height={37.7622} rx={1} transform='rotate(-180 105 105)' stroke='none' strokeWidth={6} />
          <circle cx={86.25} cy={33.75} r={18.75} stroke='none' strokeWidth={6} />
          <path d='M82.2188 39.2499L91.2812 29.25' stroke='none' strokeWidth={6} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M91.7499 38.781L81.75 29.7185' stroke='none' strokeWidth={6} strokeLinecap='round' strokeLinejoin='round' />

        </svg>
      )
      break

    default:
      break
  }
  return icon
}

WorkspaceFailIcon.propTypes = {
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
WorkspaceFailIcon.defaultProps = {
  color: MAIN_DARK_BLUE,
  size: MEDIUM,
  disabled: false
}

export default WorkspaceFailIcon
