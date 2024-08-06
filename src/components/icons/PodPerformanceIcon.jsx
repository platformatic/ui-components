import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const PodPerformanceIcon = ({
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
        ><path d='M7.06325 14C4.26689 14 2 11.727 2 8.92311C2 6.11921 4.26689 3.84619 7.06325 3.84619C9.46576 3.84619 11.4775 5.52403 11.9965 7.77486' stroke='none' strokeLinecap='round' />
          <path d='M7.06286 3.84615V2M5.22168 2H8.90404' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M10.9837 5.02751L11.642 4.38226M10.9985 3.72217L12.2856 5.04235' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M3.33446 5.09739L2.69392 4.43439M2.03271 5.07666L3.35514 3.79212' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M8.67407 6.61512L7.06295 9.38435' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M10.5 9L8.33494 10.25V12.75L10.5 14L12.6651 12.75V10.25L10.5 9Z' stroke='none' strokeLinejoin='round' />
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
        ><path d='M10.5949 21.0001C6.40034 21.0001 3 17.5905 3 13.3847C3 9.17881 6.40034 5.76929 10.5949 5.76929C14.1986 5.76929 17.2162 8.28604 17.9947 11.6623' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <path d='M10.5943 5.76923V3M7.83252 3H13.3561' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M16.4754 7.54127L17.4628 6.57339M16.4976 5.58325L18.4281 7.56353' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M5.00145 7.64608L4.04064 6.65159M3.04883 7.61499L5.03246 5.68819' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M13.0114 9.9228L10.5947 14.0767' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M15.75 13.5L12.5024 15.375V19.125L15.75 21L18.9976 19.125V15.375L15.75 13.5Z' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
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
          <path d='M17.6581 35.0001C10.6672 35.0001 5 29.3176 5 22.3078C5 15.298 10.6672 9.61548 17.6581 9.61548C23.6644 9.61548 28.6936 13.8101 29.9911 19.4372' stroke='none' strokeWidth={2} strokeLinecap='round' />
          <path d='M17.6576 9.61538V5M13.0547 5H22.2606' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M27.4591 12.5688L29.1049 10.9556M27.4961 9.30542L30.7137 12.6059' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M8.33591 12.7435L6.73457 11.086M5.08154 12.6917L8.38759 9.48031' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M21.6859 16.5379L17.6581 23.461' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M26.25 22.5L20.8373 25.625V31.875L26.25 35L31.6627 31.875V25.625L26.25 22.5Z' stroke='none' strokeWidth={2} strokeLinejoin='round' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

PodPerformanceIcon.propTypes = {
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

export default PodPerformanceIcon
