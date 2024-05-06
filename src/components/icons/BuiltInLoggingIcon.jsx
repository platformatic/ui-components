import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const BuiltInLoggingIcon = ({
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
  const filledClassName = styles[`filled-${color}`]

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
          <rect x='7' y='2' width='7' height='7' rx='1' stroke='none' />
          <path d='M7 3.75H14' stroke='none' />
          <circle cx='7.87516' cy='2.87492' r='0.291667' fill='none' className={filledClassName} />
          <circle cx='8.75016' cy='2.87492' r='0.291667' fill='none' className={filledClassName} />
          <circle cx='9.62516' cy='2.87492' r='0.291667' fill='none' className={filledClassName} />
          <path d='M8.1665 4.91675H11.0832' stroke='none' strokeLinecap='round' />
          <path d='M8.75 6.08325H12.8333' stroke='none' strokeLinecap='round' />
          <path d='M8.75 7.25H12.8333' stroke='none' strokeLinecap='round' />
          <path d='M5.5 6H3C2.44772 6 2 6.44772 2 7V10.3333C2 10.8856 2.44772 11.3333 3 11.3333H9.16667C9.6269 11.3333 10 10.9602 10 10.5V10.5' stroke='none' strokeLinecap='round' />
          <rect x='4.6665' y='11.3333' width='2.66667' height='1.33333' stroke='none' />
          <path d='M3.3335 13.6667C3.3335 13.1145 3.78121 12.6667 4.3335 12.6667H7.66683C8.21911 12.6667 8.66683 13.1145 8.66683 13.6667V14.0001H3.3335V13.6667Z' stroke='none' />
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
          <rect x='10.5' y='3' width='10.5' height='10.5' rx='1' stroke='none' strokeWidth={1.5} />
          <path d='M10.5 5.625H21' stroke='none' strokeWidth={1.5} />
          <circle cx='11.8125' cy='4.3125' r='0.4375' fill='none' className={filledClassName} />
          <circle cx='13.125' cy='4.3125' r='0.4375' fill='none' className={filledClassName} />
          <circle cx='14.4375' cy='4.3125' r='0.4375' fill='none' className={filledClassName} />
          <path d='M12.25 7.375H16.625' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <path d='M13.125 9.125H19.25' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <path d='M13.125 10.875H19.25' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <path d='M8.25 9H4C3.44772 9 3 9.44772 3 10V16C3 16.5523 3.44772 17 4 17H14C14.5523 17 15 16.5523 15 16V15.75' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <rect x='7' y='17' width='4' height='2' stroke='none' strokeWidth={1.5} />
          <path d='M5 20C5 19.4477 5.44772 19 6 19H12C12.5523 19 13 19.4477 13 20V21H5V20Z' stroke='none' strokeWidth={1.5} />
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
          <rect x='17.5' y='5' width='17.5' height='17.5' rx='1' stroke='none' strokeWidth={2} />
          <path d='M17.5 9.375H35' stroke='none' strokeWidth={2} />
          <circle cx='19.6877' cy='7.18742' r='0.729167' fill='none' className={filledClassName} />
          <circle cx='21.8752' cy='7.18742' r='0.729167' fill='none' className={filledClassName} />
          <circle cx='24.0627' cy='7.18742' r='0.729167' fill='none' className={filledClassName} />
          <path d='M20.4165 12.2917H27.7082' stroke='none' strokeWidth={2} strokeLinecap='round' />
          <path d='M21.875 15.2083H32.0833' stroke='none' strokeWidth={2} strokeLinecap='round' />
          <path d='M21.875 18.125H32.0833' stroke='none' strokeWidth={2} strokeLinecap='round' />
          <path d='M13.75 15H6C5.44772 15 5 15.4477 5 16V27.3333C5 27.8856 5.44772 28.3333 6 28.3333H24C24.5523 28.3333 25 27.8856 25 27.3333V26.25' stroke='none' strokeWidth={2} strokeLinecap='round' />
          <rect x='11.6665' y='28.3333' width='6.66667' height='3.33333' stroke='none' strokeWidth={2} />
          <path d='M8.3335 32.6667C8.3335 32.1145 8.78121 31.6667 9.3335 31.6667H20.6668C21.2191 31.6667 21.6668 32.1145 21.6668 32.6667V35.0001H8.3335V32.6667Z' stroke='none' strokeWidth={2} />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

BuiltInLoggingIcon.propTypes = {
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

export default BuiltInLoggingIcon
