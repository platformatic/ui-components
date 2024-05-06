import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const LogsRiskIcon = ({
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
          <path d='M6 12.5H3C2.44772 12.5 2 12.0523 2 11.5V3C2 2.44772 2.44772 2 3 2H13C13.5523 2 14 2.44772 14 3V10.5' stroke='none' strokeLinecap='round' />
          <path d='M2 5H14' stroke='none' />
          <circle cx='3.5' cy='3.5' r='0.5' fill='none' className={filledClassName} />
          <circle cx='5' cy='3.5' r='0.5' fill='none' className={filledClassName} />
          <circle cx='6.5' cy='3.5' r='0.5' fill='none' className={filledClassName} />
          <path d='M4 7H9' stroke='none' strokeLinecap='round' />
          <path d='M5 9H7' stroke='none' strokeLinecap='round' />
          <path d='M5 11H6' stroke='none' strokeLinecap='round' />
          <path d='M14 14H7L10.5 7L14 14Z' stroke='none' strokeLinejoin='round' />
          <path d='M10.5 9.5V11.5' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <circle cx='10.5002' cy='12.8334' r='0.291667' fill='none' className={filledClassName} />
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
          <path d='M9 18.75H4C3.44772 18.75 3 18.3023 3 17.75V4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4V15.75' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <path d='M3 7.5H21' stroke='none' strokeWidth={1.5} />
          <circle cx='5.25' cy='5.25' r='0.75' fill='none' className={filledClassName} />
          <circle cx='7.5' cy='5.25' r='0.75' fill='none' className={filledClassName} />
          <circle cx='9.75' cy='5.25' r='0.75' fill='none' className={filledClassName} />
          <path d='M6 10.5H13.5' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <path d='M7.5 13.5H10.5' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <path d='M7.5 16.5H9' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <path d='M21 21H10.5L15.75 10.5L21 21Z' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
          <path d='M15.75 14.25V17.25' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <circle cx='15.75' cy='19.25' r='0.4375' fill='none' className={filledClassName} />

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
          <path d='M15 31.25H6C5.44772 31.25 5 30.8023 5 30.25V6C5 5.44772 5.44772 5 6 5H34C34.5523 5 35 5.44772 35 6V26.25' stroke='none' strokeWidth={2} strokeLinecap='round' />
          <path d='M5 12.5H35' stroke='none' strokeWidth={2} />
          <circle cx='8.75' cy='8.75' r='1.25' fill='none' className={filledClassName} />
          <circle cx='12.5' cy='8.75' r='1.25' fill='none' className={filledClassName} />
          <circle cx='16.25' cy='8.75' r='1.25' fill='none' className={filledClassName} />
          <path d='M10 17.5H22.5' stroke='none' strokeWidth={2} strokeLinecap='round' />
          <path d='M12.5 22.5H17.5' stroke='none' strokeWidth={2} strokeLinecap='round' />
          <path d='M12.5 27.5H15' stroke='none' strokeWidth={2} strokeLinecap='round' />
          <path d='M35 35H17.5L26.25 17.5L35 35Z' stroke='none' strokeWidth={2} strokeLinejoin='round' />
          <path d='M26.25 23.75V28.75' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <circle cx='26.2502' cy='32.0834' r='0.729167' fill='none' className={filledClassName} />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

LogsRiskIcon.propTypes = {
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

export default LogsRiskIcon
