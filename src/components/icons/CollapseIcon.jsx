import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const CollapseIcon = ({
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
          <path d='M13.1426 7.14258L8.85686 7.14258L8.85686 2.85686' stroke='white' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M14.0004 2L9.28613 6.71429' stroke='white' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M2.85742 8.85742L7.14314 8.85742L7.14314 13.1431' stroke='white' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M6.71429 9.28613L2 14.0004' stroke='white' strokeLinecap='round' strokeLinejoin='round' />
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
          <path d='M19.7139 10.7144L13.2853 10.7144L13.2853 4.28578' stroke='white' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M21.0001 3L13.9287 10.0714' stroke='white' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M4.28613 13.2856L10.7147 13.2856L10.7147 19.7142' stroke='white' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M10.0714 13.9287L3 21.0001' stroke='white' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />

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
          <path d='M32.8574 17.8569L22.1431 17.8569L22.1431 7.14265' stroke='white' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M35.0006 5L23.2148 16.7857' stroke='white' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M7.14355 22.1431L17.8578 22.1431L17.8578 32.8574' stroke='white' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M16.7857 23.2144L5 35.0001' stroke='white' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

CollapseIcon.propTypes = {
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

export default CollapseIcon
