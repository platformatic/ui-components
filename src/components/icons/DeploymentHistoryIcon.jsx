import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE, EXTRA_MEDIUM } from '../constants'

const DeploymentHistoryIcon = ({
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
          <rect x='7' y='6' width='7' height='7' rx='1' stroke='none' />
          <path d='M10 8H12.5' stroke='none' strokeLinecap='round' />
          <path d='M10 9.5H12.5' stroke='none' strokeLinecap='round' />
          <path d='M10 11H12.5' stroke='none' strokeLinecap='round' />
          <path d='M7.2821 5L7.2821 4.98418C7.2821 4.78938 7.2252 4.59882 7.1184 4.43591L5.93956 2.63781C5.74213 2.33666 5.3007 2.33666 5.10327 2.63781L3.92443 4.43591C3.81763 4.59882 3.76073 4.78957 3.76073 4.98437C3.76073 6.36226 3.76073 6.82617 3.76073 7.03551L2 9.13364L4.11282 9.13364L4.46496 9.97289L5.72684 9.97289' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M3.76025 11.2322L3.76025 12.9107' stroke='none' strokeLinecap='round' strokeLinejoin='bevel' />
          <path d='M5.52197 12.0715L5.52197 13.75' stroke='none' strokeLinecap='round' strokeLinejoin='bevel' />
          <circle cx='8.5' cy='8' r='0.5' fill='none' className={filledClassName} />
          <circle cx='8.5' cy='9.5' r='0.5' fill='none' className={filledClassName} />
          <circle cx='8.5' cy='11' r='0.5' fill='none' className={filledClassName} />
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
          <rect x='10.5' y='9' width='10.5' height='10.5' rx='1' stroke='none' strokeWidth={1.5} />
          <path d='M15 12H18.75' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <path d='M15 14.25H18.75' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <path d='M15 16.5H18.75' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <path d='M10.9232 7.5L10.9232 7.32699C10.9232 7.13218 10.8663 6.94162 10.7594 6.77871L8.70027 3.63781C8.50284 3.33666 8.06141 3.33666 7.86397 3.63781L5.8048 6.77871C5.69799 6.94162 5.64109 7.13326 5.64109 7.32806C5.64109 9.51036 5.64109 10.2318 5.64109 10.5533L3 13.7005L6.16923 13.7005L6.69744 14.9593L8.59027 14.9593' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M5.64062 16.8481L5.64062 19.3659' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='bevel' />
          <path d='M8.2832 18.1072L8.2832 20.6249' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='bevel' />
          <circle cx='12.75' cy='12' r='0.75' fill='none' className={filledClassName} />
          <circle cx='12.75' cy='14.25' r='0.75' fill='none' className={filledClassName} />
          <circle cx='12.75' cy='16.5' r='0.75' fill='none' className={filledClassName} />
        </svg>
      )
      break
    case EXTRA_MEDIUM:
      icon = (
        <svg
          width={32}
          height={32}
          viewBox='0 0 32 32'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={className}
        >
          <rect x='14' y='12' width='14' height='14' rx='1' stroke='none' strokeWidth={1.5} />
          <path d='M20 16H25' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <path d='M20 19H25' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <path d='M20 22H25' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <path d='M14.5642 10L14.5642 9.66979C14.5642 9.47499 14.5073 9.28443 14.4005 9.12151L11.461 4.63781C11.2635 4.33666 10.8221 4.33666 10.6247 4.63781L7.68516 9.12151C7.57836 9.28443 7.52146 9.47505 7.52146 9.66985C7.52146 12.6583 7.52146 13.6376 7.52146 14.071L4 18.2673L8.22565 18.2673L8.92992 19.9458L11.4537 19.9458' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M7.521 22.4644L7.521 25.8214' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='bevel' />
          <path d='M11.0444 24.1431L11.0444 27.5001' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='bevel' />
          <circle cx='17' cy='16' r='1' fill='none' className={filledClassName} />
          <circle cx='17' cy='19' r='1' fill='none' className={filledClassName} />
          <circle cx='17' cy='22' r='1' fill='none' className={filledClassName} />
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
          <rect x='17.5' y='15' width='17.5' height='17.5' rx='1' stroke='none' strokeWidth={2} />
          <path d='M25 20H31.25' stroke='none' strokeWidth={2} strokeLinecap='round' />
          <path d='M25 23.75H31.25' stroke='none' strokeWidth={2} strokeLinecap='round' />
          <path d='M25 27.5H31.25' stroke='none' strokeWidth={2} strokeLinecap='round' />
          <path d='M18.2053 12.5L18.2053 12.0126C18.2053 11.8178 18.1484 11.6272 18.0416 11.4643L14.2217 5.63781C14.0243 5.33666 13.5828 5.33666 13.3854 5.63781L9.56553 11.4643C9.45872 11.6272 9.40182 11.819 9.40182 12.0138C9.40182 15.8069 9.40182 17.0434 9.40182 17.5888L5 22.8341L10.2821 22.8341L11.1624 24.9322L14.3171 24.9322' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M9.40039 28.0801L9.40039 32.2763' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='bevel' />
          <path d='M13.8047 30.1787L13.8047 34.375' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='bevel' />
          <circle cx='21.25' cy='20' r='1.25' fill='none' className={filledClassName} />
          <circle cx='21.25' cy='23.75' r='1.25' fill='none' className={filledClassName} />
          <circle cx='21.25' cy='27.5' r='1.25' fill='none' className={filledClassName} />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

DeploymentHistoryIcon.propTypes = {
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

export default DeploymentHistoryIcon
