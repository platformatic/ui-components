import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const PreviewPRIcon = ({ color, size, disabled, inactive }) => {
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
          <path d='M6 12H2V2H10V6.5' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <circle cx='4.25' cy='9.25' r='0.75' stroke='none' />
          <circle cx='4.25' cy='4.75' r='0.75' stroke='none' />
          <path d='M4.2002 5.5L4.2002 8.5' stroke='none' />
          <path d='M7 9.24988C7 8.83566 7.33579 8.49988 7.75 8.49988' stroke='none' strokeLinecap='round' />
          <path d='M7.75 8.49988V4.74988H6.5' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <circle cx='10.5' cy='10.5' r='2.5' stroke='none' />
          <path d='M14 14L12.5 12.5' stroke='none' strokeLinecap='round' strokeLinejoin='round' />

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
          <path d='M9 18H3V3H15V9.75' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <circle cx='6.375' cy='13.875' r='1.125' stroke='none' strokeWidth={1.5} />
          <circle cx='6.375' cy='7.125' r='1.125' stroke='none' strokeWidth={1.5} />
          <path d='M6.2998 8.25L6.2998 12.75' stroke='none' strokeWidth={1.5} />
          <path d='M10.5 13.8749C10.5 13.2536 11.0037 12.7499 11.625 12.7499' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <path d='M11.625 12.7499V7.12488H9.75' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <circle cx='15.75' cy='15.75' r='3.75' stroke='none' strokeWidth={1.5} />
          <path d='M21 21L18.75 18.75' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />

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
          <path d='M15 30H5V5H25V16.25' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <circle cx='10.625' cy='23.125' r='1.875' stroke='none' strokeWidth={2} />
          <circle cx='10.625' cy='11.875' r='1.875' stroke='none' strokeWidth={2} />
          <path d='M10.5 13.75L10.5 21.25' stroke='none' strokeWidth={2} />
          <path d='M17.5 23.1248C17.5 22.0892 18.3395 21.2498 19.375 21.2498' stroke='none' strokeWidth={2} strokeLinecap='round' />
          <path d='M19.375 21.2498V11.8748H16.25' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <circle cx='26.25' cy='26.25' r='6.25' stroke='none' strokeWidth={2} />
          <path d='M35 35L31.25 31.25' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />

        </svg>
      )
      break

    default:
      break
  }
  return icon
}

PreviewPRIcon.propTypes = {
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
PreviewPRIcon.defaultProps = {
  color: MAIN_DARK_BLUE,
  size: MEDIUM,
  disabled: false,
inactive: false
}

export default PreviewPRIcon
