import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const RecentAppsIcon = ({ color, size, disabled, inactive }) => {
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
          <path d='M12.5 2.95996H13C13.5523 2.95996 14 3.40768 14 3.95996V4M14 7V9.63996C14 10.1922 13.5523 10.64 13 10.64H3C2.44772 10.64 2 10.1922 2 9.63996V8.5' stroke='none' strokeLinecap='round' />
          <rect x='6' y='10.6399' width='4' height='1.92' stroke='none' />
          <path d='M4 13.5601C4 13.0078 4.44772 12.5601 5 12.5601H11C11.5523 12.5601 12 13.0078 12 13.5601V14.0001H4V13.5601Z' stroke='none' />
          <path d='M10 5.5L10.0025 5.48754M9.5 6.73131L9 9L10.5938 7.58359L12.7569 9L11.8875 6.73131L14 5.48754H11.3262L10.5 3L10.0025 5.48754M10.0025 5.48754L9 5.5' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <rect x='2' y='3.5' width='6' height='6' rx='1' stroke='none' />
          <path d='M2 4.83325H8' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <line x1='3.5' y1='3.16675' x2='3.5' y2='2.50008' stroke='none' strokeLinecap='round' />
          <line x1='6.16675' y1='3.16675' x2='6.16675' y2='2.50008' stroke='none' strokeLinecap='round' />
          <rect x='3.33325' y='5.5' width='1.33333' height='1.33333' rx='0.5' fill='none' />
          <rect x='3.33325' y='7.5' width='1.33333' height='1.33333' rx='0.5' fill='none' />
          <rect x='5.33325' y='5.5' width='1.33333' height='1.33333' rx='0.5' fill='none' />
          <rect x='5.33325' y='7.5' width='1.33333' height='1.33333' rx='0.5' fill='none' />

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
          <path d='M18 4.43994H20C20.5523 4.43994 21 4.88766 21 5.43994V6M21 10.5V14.9599C21 15.5122 20.5523 15.9599 20 15.9599H4C3.44772 15.9599 3 15.5122 3 14.9599V12.75' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <rect x='9' y='15.96' width='6' height='2.88' stroke='none' strokeWidth={1.5} />
          <path d='M6 19.8398C6 19.2876 6.44772 18.8398 7 18.8398H17C17.5523 18.8398 18 19.2876 18 19.8398V20.9998H6V19.8398Z' stroke='none' strokeWidth={1.5} />
          <path d='M15 8.25L15.0037 8.23131M14.25 10.097L13.5 13.5L15.8906 11.3754L19.1353 13.5L17.8313 10.097L21 8.23131H16.9894L15.75 4.5L15.0037 8.23131M15.0037 8.23131L13.5 8.25' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <rect x='3' y='5.25' width='9' height='9' rx='1' stroke='none' strokeWidth={1.5} />
          <path d='M3 7.25H12' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <line x1='5.25' y1='4.75' x2='5.25' y2='3.75' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <line x1='9.25' y1='4.75' x2='9.25' y2='3.75' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <rect x='5' y='8.25' width='2' height='2' rx='0.5' fill='none' />
          <rect x='5' y='11.25' width='2' height='2' rx='0.5' fill='none' />
          <rect x='8' y='8.25' width='2' height='2' rx='0.5' fill='none' />
          <rect x='8' y='11.25' width='2' height='2' rx='0.5' fill='none' />
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
          <path d='M29 7.3999H34C34.5523 7.3999 35 7.84762 35 8.3999V10M35 17.5V25.5999C35 26.1522 34.5523 26.5999 34 26.5999H6C5.44772 26.5999 5 26.1522 5 25.5999V21.25' stroke='none' strokeWidth={2} strokeLinecap='round' />
          <rect x='15' y='26.5999' width='10' height='4.8' stroke='none' strokeWidth={2} />
          <path d='M10 32.3999C10 31.8476 10.4477 31.3999 11 31.3999H29C29.5523 31.3999 30 31.8476 30 32.3999V34.9999H10V32.3999Z' stroke='none' strokeWidth={2} />
          <path d='M25 13.75L25.0062 13.7188M23.75 16.8283L22.5 22.5L26.4844 18.959L31.8922 22.5L29.7188 16.8283L35 13.7188H28.3156L26.25 7.5L25.0062 13.7188M25.0062 13.7188L22.5 13.75' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <rect x='5' y='8.75' width='15' height='15' rx='1' stroke='none' strokeWidth={2} />
          <path d='M5 12.083H20' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <line x1='9' y1='8.16699' x2='9' y2='6.00033' stroke='none' strokeWidth={2} strokeLinecap='round' />
          <line x1='15.667' y1='8.16699' x2='15.667' y2='6.00033' stroke='none' strokeWidth={2} strokeLinecap='round' />
          <rect x='8.33301' y='13.75' width='3.33333' height='3.33333' rx='0.5' fill='none' />
          <rect x='8.33301' y='18.75' width='3.33333' height='3.33333' rx='0.5' fill='none' />
          <rect x='13.333' y='13.75' width='3.33333' height='3.33333' rx='0.5' fill='none' />
          <rect x='13.333' y='18.75' width='3.33333' height='3.33333' rx='0.5' fill='none' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

RecentAppsIcon.propTypes = {
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
RecentAppsIcon.defaultProps = {
  color: MAIN_DARK_BLUE,
  size: MEDIUM,
  disabled: false,
  inactive: false
}

export default RecentAppsIcon
