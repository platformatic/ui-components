import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const PodServicesIcon = ({
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
          transform='rotate(270)'
        >
          <path d='M8 6.66506L6.75 6.66506L5.5 4.5L6.75 2.33494L9.25 2.33494L10.5 4.5L9.25 6.66506L8 6.66506ZM8 6.66506C8 7.44338 8 9 8 9' stroke='none' strokeLinejoin='round' />
          <rect x='5' y='9' width='5' height='3' transform='rotate(90 5 9)' stroke='none' strokeLinejoin='round' />
          <rect x='9.5' y='9' width='5' height='3' transform='rotate(90 9.5 9)' stroke='none' strokeLinejoin='round' />
          <rect x='14' y='9' width='5' height='3' transform='rotate(90 14 9)' stroke='none' strokeLinejoin='round' />
          <path d='M5.5 4.5L3.5 4.5L3.5 9' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M10.5 4.5L12.5 4.5L12.5 9' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
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
          transform='rotate(270)'
        >
          <path d='M12 9.9976L10.125 9.9976L8.25 6.75L10.125 3.5024L13.875 3.5024L15.75 6.75L13.875 9.9976L12 9.9976ZM12 9.9976C12 11.1651 12 13.5 12 13.5' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
          <rect x='7.5' y='13.5' width='7.5' height='4.5' transform='rotate(90 7.5 13.5)' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
          <rect x='14.25' y='13.5' width='7.5' height='4.5' transform='rotate(90 14.25 13.5)' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
          <rect x='21' y='13.5' width='7.5' height='4.5' transform='rotate(90 21 13.5)' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
          <path d='M8.25 6.75L5.25 6.75L5.25 13.5' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M15.75 6.75L18.75 6.75L18.75 13.5' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
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
          transform='rotate(270)'

        >
          <path d='M20 16.6627L16.875 16.6627L13.75 11.25L16.875 5.83734L23.125 5.83734L26.25 11.25L23.125 16.6627L20 16.6627ZM20 16.6627C20 18.6084 20 22.5 20 22.5' stroke='none' strokeWidth={2} strokeLinejoin='round' />
          <rect x='12.5' y='22.5' width='12.5' height='7.5' transform='rotate(90 12.5 22.5)' stroke='none' strokeWidth={2} strokeLinejoin='round' />
          <rect x='23.75' y='22.5' width='12.5' height='7.5' transform='rotate(90 23.75 22.5)' stroke='none' strokeWidth={2} strokeLinejoin='round' />
          <rect x='35' y='22.5' width='12.5' height='7.5' transform='rotate(90 35 22.5)' stroke='none' strokeWidth={2} strokeLinejoin='round' />
          <path d='M13.75 11.25L8.75 11.25L8.75 22.5' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M26.25 11.25L31.25 11.25L31.25 22.5' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

PodServicesIcon.propTypes = {
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

export default PodServicesIcon
