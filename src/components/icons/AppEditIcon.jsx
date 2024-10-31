import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const AppEditIcon = ({
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
          <path d='M2.5 5V10.8722L8 14M8 14L13.5 10.8722V5M8 14V10' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M11.6398 5.82342L13.5 4.85711L8 2L2.5 4.85711L5.25 6.28567' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <rect x='8.75085' y='5.49182' width='1.4029' height='5.14397' transform='rotate(45 8.75085 5.49182)' stroke='none' strokeLinejoin='round' />
          <path d='M6.1054 10.1213L5.1134 9.12927L4.6174 10.6173L6.1054 10.1213Z' stroke='none' strokeLinejoin='round' />
          <path d='M9.24668 4.996C9.52061 4.72207 9.96474 4.72207 10.2387 4.996V4.996C10.5126 5.26993 10.5126 5.71407 10.2387 5.988L9.74268 6.484L8.75068 5.492L9.24668 4.996Z' stroke='none' />
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
          <path d='M3.75 7.5V16.3083L12 21M12 21L20.25 16.3083V7.5M12 21V15' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M17.4598 8.73514L20.25 7.28567L12 3L3.75 7.28567L7.875 9.42851' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <rect x='13.1262' y='8.23779' width='2.10435' height='7.71595' transform='rotate(45 13.1262 8.23779)' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
          <path d='M9.15817 15.1818L7.67017 13.6938L6.92617 15.9258L9.15817 15.1818Z' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
          <path d='M13.9069 7.45711C14.2974 7.06658 14.9306 7.06658 15.3211 7.45711L15.3949 7.53089C15.7854 7.92142 15.7854 8.55458 15.3949 8.94511L14.614 9.726L13.126 8.238L13.9069 7.45711Z' stroke='none' strokeWidth={1.5} />
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
          <path d='M6.25 12.5V27.1806L20 35M20 35L33.75 27.1806V12.5M20 35V25' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M29.0996 14.5586L33.75 12.1428L20 5L6.25 12.1428L13.125 15.7142' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <rect x='21.8771' y='13.7296' width='3.50725' height='12.8599' transform='rotate(45 21.8771 13.7296)' stroke='none' strokeWidth={2} strokeLinejoin='round' />
          <path d='M15.2636 25.3031L12.7836 22.8231L11.5436 26.5431L15.2636 25.3031Z' stroke='none' strokeWidth={2} strokeLinejoin='round' />
          <path d='M23.6496 11.9571C24.0401 11.5666 24.6733 11.5666 25.0638 11.9571L26.1296 13.0229C26.5201 13.4134 26.5201 14.0466 26.1296 14.4371L24.3567 16.21L21.8767 13.73L23.6496 11.9571Z' stroke='none' strokeWidth={2} />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

AppEditIcon.propTypes = {
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

export default AppEditIcon
