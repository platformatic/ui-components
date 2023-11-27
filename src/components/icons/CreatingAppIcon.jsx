import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, LARGE, MAIN_DARK_BLUE, MEDIUM, SIZES, SMALL } from '../constants'

const CreatingAppIcon = ({ color, size, disabled }) => {
  let className = `${styles.svgClassName} ` + styles[`${color}`]
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
          <path d='M5.03863 3.67641C5.67194 2.66596 6.75489 2 7.98447 2C9.9368 2 11.5195 3.67896 11.5195 5.75007C11.5195 6.12669 11.4671 6.49035 11.3698 6.8333M4.49834 5.12506C4.46619 5.32831 4.44946 5.53712 4.44946 5.75007C4.44946 7.82117 6.03214 9.50013 7.98447 9.50013C9.04028 9.50013 9.98799 9.00911 10.6357 8.23057' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M8 3.5L8.44903 4.88197H9.90211L8.72654 5.73607L9.17557 7.11803L8 6.26393L6.82443 7.11803L7.27346 5.73607L6.09789 4.88197H7.55097L8 3.5Z' stroke='none' strokeLinejoin='round' />
          <path d='M10.4287 5.65625L11.3522 6.87355L12.4996 5.89393' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M5.57812 6.01367L4.46802 4.98671L3.49995 6.16435' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M4 2.95996H3C2.44772 2.95996 2 3.40768 2 3.95996V9.63996C2 10.1922 2.44772 10.64 3 10.64H13C13.5523 10.64 14 10.1922 14 9.63996V3.95996C14 3.40768 13.5523 2.95996 13 2.95996H12' stroke='none' strokeLinecap='round' />
          <rect x='6' y='10.6399' width='4' height='1.92' stroke='none' />
          <path d='M4 13.5601C4 13.0078 4.44772 12.5601 5 12.5601H11C11.5523 12.5601 12 13.0078 12 13.5601V14.0001H4V13.5601Z' stroke='none' />
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
          <path d='M7.55782 5.51461C8.50779 3.99893 10.1322 3 11.9766 3C14.9051 3 17.2791 5.51844 17.2791 8.6251C17.2791 9.19004 17.2006 9.73552 17.0545 10.2499M6.74739 7.68758C6.69917 7.99247 6.67407 8.30568 6.67407 8.6251C6.67407 11.7318 9.04809 14.2502 11.9766 14.2502C13.5603 14.2502 14.9819 13.5137 15.9535 12.3459' stroke='none' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M12 5.5L12.6735 7.57295H14.8532L13.0898 8.8541L13.7634 10.9271L12 9.6459L10.2366 10.9271L10.9102 8.8541L9.14683 7.57295H11.3265L12 5.5Z' stroke='none' strokeWidth='1.5' strokeLinejoin='round' />
          <path d='M15.6431 8.48462L17.0282 10.3106L18.7495 8.84114' stroke='none' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M8.36719 9.02051L6.70203 7.48006L5.24992 9.24652' stroke='none' strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M6 4.43994H4C3.44772 4.43994 3 4.88766 3 5.43994V14.9599C3 15.5122 3.44772 15.9599 4 15.9599H20C20.5523 15.9599 21 15.5122 21 14.9599V5.43994C21 4.88766 20.5523 4.43994 20 4.43994H18' stroke='none' strokeWidth='1.5' strokeLinecap='round' />
          <rect x='9' y='15.96' width='6' height='2.88' stroke='none' strokeWidth='1.5' />
          <path d='M6 19.8398C6 19.2876 6.44772 18.8398 7 18.8398H17C17.5523 18.8398 18 19.2876 18 19.8398V20.9998H6V19.8398Z' stroke='none' strokeWidth='1.5' />

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
          <path d='M12.5965 9.19102C14.1797 6.66489 16.8871 5 19.9611 5C24.8419 5 28.7986 9.19741 28.7986 14.3752C28.7986 15.3167 28.6677 16.2259 28.4243 17.0832M11.2457 12.8126C11.1654 13.3208 11.1235 13.8428 11.1235 14.3752C11.1235 19.5529 15.0802 23.7503 19.9611 23.7503C22.6006 23.7503 24.9698 22.5228 26.5892 20.5764' stroke='none' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M19.7 9L20.8225 12.4549H24.4552L21.5163 14.5902L22.6389 18.0451L19.7 15.9098L16.761 18.0451L17.8836 14.5902L14.9447 12.4549H18.5774L19.7 9Z' stroke='none' strokeWidth='2' strokeLinejoin='round' />
          <path d='M26.072 14.1409L28.3806 17.1841L31.2494 14.7351' stroke='none' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M13.9453 15.0342L11.1701 12.4668L8.74987 15.4109' stroke='none' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M10 7.3999H6C5.44772 7.3999 5 7.84762 5 8.3999V25.5999C5 26.1522 5.44772 26.5999 6 26.5999H34C34.5523 26.5999 35 26.1522 35 25.5999V8.3999C35 7.84762 34.5523 7.3999 34 7.3999H30' stroke='none' strokeWidth='2' strokeLinecap='round' />
          <rect x='15' y='26.5999' width='10' height='4.8' stroke='none' strokeWidth='2' />
          <path d='M10 32.3999C10 31.8476 10.4477 31.3999 11 31.3999H29C29.5523 31.3999 30 31.8476 30 32.3999V34.9999H10V32.3999Z' stroke='none' strokeWidth='2' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

CreatingAppIcon.propTypes = {
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
CreatingAppIcon.defaultProps = {
  color: MAIN_DARK_BLUE,
  size: MEDIUM,
  disabled: false
}

export default CreatingAppIcon
