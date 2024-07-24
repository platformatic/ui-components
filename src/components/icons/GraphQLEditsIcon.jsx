import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const GraphQLEditsIcon = ({
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
  const filledClassName = styles[`filled-${color}`]

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
          <rect x='11.376' y='6.36633' width='1.9323' height='7.0851' transform='rotate(45 11.376 6.36633)' stroke='none' strokeLinejoin='round' />
          <path d='M7.73304 12.7427L6.3667 11.3763L5.68353 13.4259L7.73304 12.7427Z' stroke='none' strokeLinejoin='round' />
          <path d='M12.0595 5.68317C12.4368 5.30587 13.0485 5.30587 13.4258 5.68317V5.68317C13.8032 6.06048 13.8032 6.67221 13.4258 7.04951L12.7427 7.73268L11.3763 6.36634L12.0595 5.68317Z' stroke='none' />
          <circle cx='5' cy='2' r='1' fill='none' className={filledClassName} />
          <circle cx='5' cy='9' r='1' fill='none' className={filledClassName} />
          <path d='M2 7V4L5 2M2 7L5 9L8 7M2 7H8M2 7L5 2M5 2L8 4V7M5 2L8 7' stroke='none' />
          <circle cx='8' cy='4' r='1' fill='none' className={filledClassName} />
          <circle cx='8' cy='7' r='1' fill='none' className={filledClassName} />
          <circle cx='2' cy='7' r='1' fill='none' className={filledClassName} />
          <circle cx='2' cy='4' r='1' fill='none' className={filledClassName} />
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
          <rect x='17.064' y='9.54956' width='2.89845' height='10.6276' transform='rotate(45 17.064 9.54956)' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
          <path d='M11.5988 19.114L9.54932 17.0645L8.52456 20.1387L11.5988 19.114Z' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
          <path d='M18.4067 8.20711C18.7972 7.81658 19.4304 7.81658 19.8209 8.20711L20.4562 8.84241C20.8467 9.23293 20.8467 9.8661 20.4562 10.2566L19.1138 11.599L17.0643 9.54951L18.4067 8.20711Z' stroke='none' strokeWidth={1.5} />
          <circle cx='7.5' cy='3' r='1.5' fill='none' className={filledClassName} />
          <circle cx='7.5' cy='13.5' r='1.5' fill='none' className={filledClassName} />
          <path d='M3 10.5V6L7.5 3M3 10.5L7.5 13.5L12 10.5M3 10.5H12M3 10.5L7.5 3M7.5 3L12 6V10.5M7.5 3L12 10.5' stroke='none' strokeWidth={1.5} />
          <circle cx='12' cy='6' r='1.5' fill='none' className={filledClassName} />
          <circle cx='12' cy='10.5' r='1.5' fill='none' className={filledClassName} />
          <circle cx='3' cy='10.5' r='1.5' fill='none' className={filledClassName} />
          <circle cx='3' cy='6' r='1.5' fill='none' className={filledClassName} />
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
          <rect x='28.4404' y='15.9159' width='4.83075' height='17.7127' transform='rotate(45 28.4404 15.9159)' stroke='none' strokeWidth={2} strokeLinejoin='round' />
          <path d='M19.3319 31.8567L15.916 28.4408L14.2081 33.5646L19.3319 31.8567Z' stroke='none' strokeWidth={2} strokeLinejoin='round' />
          <path d='M31.1493 13.2071C31.5399 12.8166 32.173 12.8166 32.5636 13.2071L34.5652 15.2087C34.9557 15.5993 34.9557 16.2324 34.5652 16.623L31.8564 19.3317L28.4406 15.9159L31.1493 13.2071Z' stroke='none' strokeWidth={2} />
          <circle cx='12.5' cy='5' r='2.5' fill='none' className={filledClassName} />
          <circle cx='12.5' cy='22.5' r='2.5' fill='none' className={filledClassName} />
          <path d='M5 17.5V10L12.5 5M5 17.5L12.5 22.5L20 17.5M5 17.5H20M5 17.5L12.5 5M12.5 5L20 10V17.5M12.5 5L20 17.5' stroke='none' strokeWidth={2} />
          <circle cx='20' cy='10' r='2.5' fill='none' className={filledClassName} />
          <circle cx='20' cy='17.5' r='2.5' fill='none' className={filledClassName} />
          <circle cx='5' cy='17.5' r='2.5' fill='none' className={filledClassName} />
          <circle cx='5' cy='10' r='2.5' fill='none' className={filledClassName} />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

GraphQLEditsIcon.propTypes = {
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

export default GraphQLEditsIcon
