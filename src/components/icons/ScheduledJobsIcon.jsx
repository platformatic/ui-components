import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const ScheduledJobsIcon = ({
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
          <path d='M6.92237 3.79488V2M5.13232 2H8.71241' stroke='white' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M10.7341 4.94389L11.3742 4.31656M10.7485 3.6748L11.9998 4.95832' stroke='white' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M3.29733 5.01136L2.67458 4.36678M2.03174 4.99121L3.31743 3.74235' stroke='white' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M5 6.5L7 9' stroke='white' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M6.92262 13.8718C4.20393 13.8718 2 11.6619 2 8.93592C2 6.20988 4.20393 4 6.92262 4C8.81506 4 10.4581 5.07076 11.282 6.64102' stroke='white' strokeLinecap='round' />
          <path d='M9.5 12.5H12.5M9.5 11H12.5M9.5 9.5H12.5' stroke='white' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M8 9V13C8 13.5523 8.44772 14 9 14H13C13.5523 14 14 13.5523 14 13V9C14 8.44772 13.5523 8 13 8H11H9C8.44772 8 8 8.44772 8 9Z' stroke='white' strokeLinecap='round' strokeLinejoin='round' />
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
          <path d='M10.3836 5.69232V3M7.69849 3H13.0686' stroke='white' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M16.1012 7.41535L17.0613 6.47436M16.1228 5.51172L17.9997 7.43699' stroke='white' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M4.946 7.51656L4.01188 6.54968M3.04761 7.48633L4.97614 5.61304' stroke='white' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M7.5 9.75L10.5 13.5' stroke='white' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M10.3839 20.8077C6.3059 20.8077 3 17.4929 3 13.4039C3 9.31483 6.3059 6 10.3839 6C13.2226 6 15.6871 7.60614 16.9229 9.96153' stroke='white' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M14.25 18.75H18.75M14.25 16.5H18.75M14.25 14.25H18.75' stroke='white' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M12 13V20C12 20.5523 12.4477 21 13 21H20C20.5523 21 21 20.5523 21 20V13C21 12.4477 20.5523 12 20 12H16.5H13C12.4477 12 12 12.4477 12 13Z' stroke='white' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
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
          <path d='M17.3059 9.4872V5M12.8308 5H21.781' stroke='white' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M26.8354 12.3583L28.4354 10.7899M26.8713 9.18555L29.9995 12.3943' stroke='white' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M8.24333 12.5279L6.68646 10.9165M5.07935 12.4775L8.29357 9.35539' stroke='white' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M12.5 16.25L17.5 22.5' stroke='white' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M17.3066 34.6796C10.5098 34.6796 5 29.1549 5 22.3398C5 15.5247 10.5098 10 17.3066 10C22.0376 10 26.1452 12.6769 28.2049 16.6026' stroke='white' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M23.75 31.25H31.25M23.75 27.5H31.25M23.75 23.75H31.25' stroke='white' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M20 21V34C20 34.5523 20.4477 35 21 35H34C34.5523 35 35 34.5523 35 34V21C35 20.4477 34.5523 20 34 20H27.5H21C20.4477 20 20 20.4477 20 21Z' stroke='white' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

ScheduledJobsIcon.propTypes = {
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

export default ScheduledJobsIcon
