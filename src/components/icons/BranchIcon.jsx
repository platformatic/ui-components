import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const BranchIcon = ({
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
          <circle cx='3.8001' cy='4.8' r='1.8' transform='rotate(90 3.8001 4.8)' stroke='none' />
          <circle cx='12.2' cy='4.8' r='1.8' transform='rotate(90 12.2 4.8)' stroke='none' />
          <line x1='10.3999' y1='4.69995' x2='5.5999' y2='4.69995' stroke='none' />
          <circle cx='11.8001' cy='10.8' r='1.8' transform='rotate(90 11.8001 10.8)' stroke='none' />
          <path d='M6 5V5C7.10457 5 8 5.89543 8 7L8 9C8 10.1046 8.89543 11 10 11V11' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
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
          <circle cx='5.6999' cy='7.2' r='2.7' transform='rotate(90 5.6999 7.2)' stroke='none' strokeWidth={1.5} />
          <circle cx='18.3' cy='7.2' r='2.7' transform='rotate(90 18.3 7.2)' stroke='none' strokeWidth={1.5} />
          <line x1='15.6001' y1='7.05005' x2='8.4001' y2='7.05005' stroke='none' strokeWidth={1.5} />
          <circle cx='17.6999' cy='16.1999' r='2.7' transform='rotate(90 17.6999 16.1999)' stroke='none' strokeWidth={1.5} />
          <path d='M8.99951 7.49988V7.49988C10.6564 7.49988 11.9995 8.84303 11.9995 10.4999L11.9995 13.4999C11.9995 15.1567 13.3427 16.4999 14.9995 16.4999V16.4999' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
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
          <circle cx='9.5' cy='12' r='4.5' transform='rotate(90 9.5 12)' stroke='none' strokeWidth={2} />
          <circle cx='30.5' cy='12' r='4.5' transform='rotate(90 30.5 12)' stroke='none' strokeWidth={2} />
          <line x1='26' y1='11.5' x2='14' y2='11.5' stroke='none' strokeWidth={2} />
          <circle cx='29.5' cy='26.9999' r='4.5' transform='rotate(90 29.5 26.9999)' stroke='none' strokeWidth={2} />
          <path d='M14.9995 12.4999V12.4999C17.7609 12.4999 19.9995 14.7385 19.9995 17.4999L19.9995 22.4999C19.9995 25.2613 22.2381 27.4999 24.9995 27.4999V27.4999' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

BranchIcon.propTypes = {
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

export default BranchIcon
