import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const ScalerDetailsIcon = ({
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
        ><path d='M10.7847 5.5V3.60769L8.00008 2L5.21548 3.60769V6.82306L6.21865 7.40224' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <circle cx='9.91667' cy='9.91667' r='2.91667' stroke='none' />
          <path d='M14 14L12.25 12.25' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M11.2154 2L14 3.60769V6.82306L13.3039 7.22498' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M4.78467 2L2.00008 3.60769V6.82306L4.78467 8.43074' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
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
        ><path d='M16.1768 8.25V5.41153L11.9999 3L7.82298 5.41153V10.2346L9.32773 11.1034' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <circle cx='14.875' cy='14.875' r='4.375' stroke='none' strokeWidth={1.5} />
          <path d='M21 21L18.375 18.375' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M16.8231 3L21 5.41153V10.2346L19.9558 10.8375' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M7.17676 3L2.99987 5.41153V10.2346L7.17676 12.6461' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
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
        ><path d='M26.9614 13.75V9.01921L19.9999 5L13.0385 9.01921V17.0576L15.5464 18.5056' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <circle cx='24.7917' cy='24.7917' r='7.29167' stroke='none' strokeWidth={2} />
          <path d='M35 35L30.625 30.625' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M28.0385 5L35 9.01921V17.0576L33.2596 18.0624' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M11.9614 5L4.99995 9.01921V17.0576L11.9614 21.0769' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

ScalerDetailsIcon.propTypes = {
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

export default ScalerDetailsIcon
