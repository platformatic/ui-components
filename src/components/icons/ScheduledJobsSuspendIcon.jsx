import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const ScheduledJobsSuspendIcon = ({
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
          <path d='M5.79744 11.0001C3.70017 11.0001 2 9.29539 2 7.19246C2 5.08953 3.70017 3.38477 5.79744 3.38477C7.0807 3.38477 8.21529 4.02301 8.90271 5.00018L9.20135 5.50009' stroke='currentColor' strokeLinecap='round' />
          <path d='M5.79739 3.38462V2M4.4165 2H7.17828' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M8.73792 4.271L9.23166 3.78706M8.74902 3.29199L9.71429 4.28213' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M3.00073 4.32316L2.52032 3.82592M2.02441 4.30762L3.01623 3.34422' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M7.00592 5.46146L5.79758 7.53839' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M14 10.5C14 12.433 12.433 14 10.5 14C8.567 14 7 12.433 7 10.5C7 8.567 8.567 7 10.5 7C12.433 7 14 8.567 14 10.5Z' stroke='currentColor' strokeLinejoin='round' />
          <path d='M11.5 9.5H9.5V11.5H11.5V9.5Z' fill='currentColor' stroke='currentColor' strokeLinejoin='round' />
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
          <path d='M8.69616 16.5002C5.55026 16.5002 3 13.9431 3 10.7887C3 7.63429 5.55026 5.07715 8.69616 5.07715C10.621 5.07715 12.3229 6.03451 13.3541 7.50027L13.802 8.25014' stroke='currentColor' strokeWidth={1.5} strokeLinecap='round' />
          <path d='M8.69609 5.07692V3M6.62476 3H10.7674' stroke='currentColor' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M13.1069 6.40601L13.8475 5.6801M13.1235 4.9375L14.5714 6.42271' stroke='currentColor' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M4.50109 6.48426L3.78048 5.73839M3.03662 6.46094L4.52434 5.01584' stroke='currentColor' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M10.5089 8.1917L8.69637 11.3071' stroke='currentColor' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M21 15.75C21 18.6495 18.6495 21 15.75 21C12.8505 21 10.5 18.6495 10.5 15.75C10.5 12.8505 12.8505 10.5 15.75 10.5C18.6495 10.5 21 12.8505 21 15.75Z' stroke='currentColor' strokeWidth={1.5} strokeLinejoin='round' />
          <path d='M17.25 14.25H14.25V17.25H17.25V14.25Z' fill='currentColor' stroke='currentColor' strokeWidth={1.5} strokeLinejoin='round' />
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
          <path d='M14.4936 27.5004C9.25043 27.5004 5 23.2385 5 17.9811C5 12.7238 9.25043 8.46191 14.4936 8.46191C17.7017 8.46191 20.5382 10.0575 22.2568 12.5005L23.0034 13.7502' stroke='currentColor' strokeWidth={2} strokeLinecap='round' />
          <path d='M14.4935 8.46154V5M11.0413 5H17.9457' stroke='currentColor' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M21.8448 10.678L23.0791 9.46814M21.8726 8.23047L24.2857 10.7058' stroke='currentColor' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M7.50181 10.8084L6.3008 9.56528M5.06104 10.7695L7.54057 8.36103' stroke='currentColor' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M17.5148 13.6541L14.4939 18.8465' stroke='currentColor' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M35 26.25C35 31.0825 31.0825 35 26.25 35C21.4175 35 17.5 31.0825 17.5 26.25C17.5 21.4175 21.4175 17.5 26.25 17.5C31.0825 17.5 35 21.4175 35 26.25Z' stroke='currentColor' strokeWidth={2} strokeLinejoin='round' />
          <path d='M28.75 23.75H23.75V28.75H28.75V23.75Z' fill='currentColor' stroke='currentColor' strokeWidth={2} strokeLinejoin='round' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

ScheduledJobsSuspendIcon.propTypes = {
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

export default ScheduledJobsSuspendIcon
