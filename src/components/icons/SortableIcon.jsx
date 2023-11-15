import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const SortableIcon = ({ color, size, disabled }) => {
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
          <path d='M10 3.2H14V12.8H10M10 3.2L11.1429 2M10 3.2L11.1429 4.4M10 12.8L11.1429 11.6M10 12.8L11.1429 14' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <rect x={2} y={7} width={6} height={2} stroke='none' strokeLinejoin='round' />
          <rect x={2} y={12} width={6} height={2} stroke='none' strokeLinejoin='round' />
          <rect x={2} y={2} width={6} height={2} stroke='none' strokeLinejoin='round' />
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
          <path d='M15 4.8H21V19.2H15M15 4.8L16.7143 3M15 4.8L16.7143 6.6M15 19.2L16.7143 17.4M15 19.2L16.7143 21' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <rect x={3} y={10.5} width={9} height={3} stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
          <rect x={3} y={18} width={9} height={3} stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
          <rect x={3} y={3} width={9} height={3} stroke='none' strokeWidth={1.5} strokeLinejoin='round' />

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
          <path d='M25 8H35V32H25M25 8L27.8571 5M25 8L27.8571 11M25 32L27.8571 29M25 32L27.8571 35' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <rect x={5} y={17.5} width={15} height={5} stroke='none' strokeWidth={2} strokeLinejoin='round' />
          <rect x={5} y={30} width={15} height={5} stroke='none' strokeWidth={2} strokeLinejoin='round' />
          <rect x={5} y={5} width={15} height={5} stroke='none' strokeWidth={2} strokeLinejoin='round' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

SortableIcon.propTypes = {
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
SortableIcon.defaultProps = {
  color: MAIN_DARK_BLUE,
  size: MEDIUM,
  disabled: false
}

export default SortableIcon
