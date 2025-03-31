import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const RouteHistoryIcon = ({
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
          <rect x='6' y='7.33334' width='8' height='6.66667' rx='1' stroke='none' />
          <path d='M6 9.33334H14' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <line x1='7.5' y1='8.16666' x2='7.5' y2='6.49999' stroke='none' strokeLinecap='round' />
          <line x1='12.1665' y1='8.16666' x2='12.1665' y2='6.49999' stroke='none' strokeLinecap='round' />
          <rect x='7.3335' y='10' width='1.33333' height='1.33333' rx='0.5' fill='none' />
          <rect x='7.3335' y='12' width='1.33333' height='1.33333' rx='0.5' fill='none' />
          <rect x='9.3335' y='10' width='1.33333' height='1.33333' rx='0.5' fill='none' />
          <rect x='11.3335' y='10' width='1.33333' height='1.33333' rx='0.5' fill='none' />
          <rect x='9.3335' y='12' width='1.33333' height='1.33333' rx='0.5' fill='none' />
          <rect x='11.3335' y='12' width='1.33333' height='1.33333' rx='0.5' fill='none' />
          <circle cx='3' cy='5' r='1' transform='rotate(90 3 5)' stroke='none' />
          <circle cx='13' cy='3' r='1' transform='rotate(90 13 3)' stroke='none' />
          <path d='M12 3L10 3L7.5 3C6.94772 3 6.5 3.44772 6.5 4V4C6.5 4.55228 6.05228 5 5.5 5L4 5' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M10 6.5V6.5C10 5.67157 9.32843 5 8.5 5L4.5 5M5 8L5 6C5 5.44771 4.55229 5 4 5V5' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
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
          <rect x='9' y='11' width='12' height='10' rx='1' stroke='none' strokeWidth={1.5} />
          <path d='M9 14H21' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <line x1='11.25' y1='12.25' x2='11.25' y2='9.75' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <line x1='18.25' y1='12.25' x2='18.25' y2='9.75' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <rect x='11' y='15' width='2' height='2' rx='0.5' fill='none' />
          <rect x='11' y='18' width='2' height='2' rx='0.5' fill='none' />
          <rect x='14' y='15' width='2' height='2' rx='0.5' fill='none' />
          <rect x='17' y='15' width='2' height='2' rx='0.5' fill='none' />
          <rect x='14' y='18' width='2' height='2' rx='0.5' fill='none' />
          <rect x='17' y='18' width='2' height='2' rx='0.5' fill='none' />
          <circle cx='4.5' cy='7.5' r='1.5' transform='rotate(90 4.5 7.5)' stroke='none' strokeWidth={1.5} />
          <circle cx='19.5' cy='4.5' r='1.5' transform='rotate(90 19.5 4.5)' stroke='none' strokeWidth={1.5} />
          <path d='M18 4.5L15 4.5L10.75 4.5C10.1977 4.5 9.75 4.94772 9.75 5.5L9.75 6.5C9.75 7.05228 9.30228 7.5 8.75 7.5L6 7.5' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M15 9.75L15 9.5C15 8.39543 14.1046 7.5 13 7.5L6.75 7.5M7.5 12L7.5 9C7.5 8.17157 6.82843 7.49999 6 7.49999V7.49999' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
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
          <rect x='15' y='18.3333' width='20' height='16.6667' rx='1' stroke='none' strokeWidth={2} />
          <path d='M15 23.3333H35' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <line x1='19' y1='20.6667' x2='19' y2='16' stroke='none' strokeWidth={2} strokeLinecap='round' />
          <line x1='30.6665' y1='20.6667' x2='30.6665' y2='16' stroke='none' strokeWidth={2} strokeLinecap='round' />
          <rect x='18.3335' y='25' width='3.33333' height='3.33333' rx='0.5' fill='none' />
          <rect x='18.3335' y='30' width='3.33333' height='3.33333' rx='0.5' fill='none' />
          <rect x='23.3335' y='25' width='3.33333' height='3.33333' rx='0.5' fill='none' />
          <rect x='28.3335' y='25' width='3.33333' height='3.33333' rx='0.5' fill='none' />
          <rect x='23.3335' y='30' width='3.33333' height='3.33333' rx='0.5' fill='none' />
          <rect x='28.3335' y='30' width='3.33333' height='3.33333' rx='0.5' fill='none' />
          <circle cx='7.5' cy='12.5' r='2.5' transform='rotate(90 7.5 12.5)' stroke='none' strokeWidth={2} />
          <circle cx='32.5' cy='7.5' r='2.5' transform='rotate(90 32.5 7.5)' stroke='none' strokeWidth={2} />
          <path d='M30 7.5L25 7.5L17.25 7.5C16.6977 7.5 16.25 7.94772 16.25 8.5L16.25 11.5C16.25 12.0523 15.8023 12.5 15.25 12.5L10 12.5' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M25 16.25L25 14.5C25 13.3954 24.1046 12.5 23 12.5L11.25 12.5M12.5 20L12.5 14.5C12.5 13.3954 11.6046 12.5 10.5 12.5L10 12.5' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
        </svg>
      )
      break
    default:
      break
  }
  return icon
}

RouteHistoryIcon.propTypes = {
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

export default RouteHistoryIcon
