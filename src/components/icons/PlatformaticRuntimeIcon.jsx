import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const PlatformaticRuntimeIcon = ({ color, size, disabled }) => {
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
          <ellipse cx='7.92262' cy='8.73084' rx='4.92262' ry='4.93592' stroke='none' />
          <path d='M7.92237 3.79488V2M6.13232 2H9.71241' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M11.7341 4.94341L12.3742 4.31607M11.7485 3.67432L12.9998 4.95783' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M4.29733 5.01136L3.67458 4.36678M3.03174 4.99121L4.31743 3.74235' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M9.48891 6.48699L7.92254 9.17931' stroke='none' strokeLinecap='round' strokeLinejoin='round' />

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
          <ellipse cx='11.8839' cy='13.0963' rx='7.38393' ry='7.40387' stroke='none' strokeWidth={1.5} />
          <path d='M11.8838 5.69232V3M9.19873 3H14.5689' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M17.6012 7.41535L18.5613 6.47436M17.6228 5.51172L19.4997 7.43699' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M6.446 7.51704L5.51188 6.55017M4.54761 7.48682L6.47614 5.61353' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M14.2335 9.73073L11.8839 13.7692' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />

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
          <ellipse cx='19.8066' cy='21.8271' rx='12.3066' ry='12.3398' stroke='none' strokeWidth={2} />
          <path d='M19.8062 9.4872V5M15.3311 5H24.2813' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M29.3356 12.3588L30.9357 10.7904M29.3716 9.18604L32.4998 12.3948' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M10.7436 12.5279L9.1867 10.9165M7.57959 12.4775L10.7938 9.35539' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M23.7224 16.2177L19.8065 22.9485' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />

        </svg>
      )
      break

    default:
      break
  }
  return icon
}

PlatformaticRuntimeIcon.propTypes = {
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
PlatformaticRuntimeIcon.defaultProps = {
  color: MAIN_DARK_BLUE,
  size: MEDIUM,
  disabled: false
}

export default PlatformaticRuntimeIcon
