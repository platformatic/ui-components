import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const AddRouteIcon = ({
  color = MAIN_DARK_BLUE,
  size = MEDIUM,
  tip = '',
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
          data-tip={tip}
          className={className}
        >
          <path d='M10 5.35553C9.67562 3.45026 8.0211 2 6.02882 2C3.80376 2 2 3.80895 2 6.04041C2 7.99513 3.38411 9.62564 5.22306 10M6.02882 4V8M4 6L8 6.04041' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M5.5 13H13C13.5523 13 14 12.5523 14 12V11.5C14 10.9477 13.5523 10.5 13 10.5H9C8.44772 10.5 8 10.0523 8 9.5V9C8 8.44772 8.44772 8 9 8H12.5' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <circle cx='5' cy='13' r='1' fill='none' className={filledClassName} />
          <circle cx='13' cy='8' r='1' fill='none' className={filledClassName} />
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
          data-tip={tip}
        >
          <path d='M15 8.03329C14.5134 5.17539 12.0316 3 9.04323 3C5.70565 3 3 5.71343 3 9.06062C3 11.9927 5.07616 14.4385 7.83459 15M9.04323 6V12M6 9L12 9.06062' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M8.25 19.5H19.125C20.1605 19.5 21 18.6605 21 17.625V17.625C21 16.5895 20.1605 15.75 19.125 15.75H13.875C12.8395 15.75 12 14.9105 12 13.875V13.875C12 12.8395 12.8395 12 13.875 12H18.75' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <circle cx='7.5' cy='19.5' r='1.5' fill='none' className={filledClassName} />
          <circle cx='19.5' cy='12' r='1.5' fill='none' className={filledClassName} />
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
          data-tip={tip}
        >
          <path d='M25 13.3888C24.1891 8.62565 20.0527 5 15.0721 5C9.50941 5 5 9.52239 5 15.101C5 19.9878 8.46027 24.0641 13.0576 25M15.0721 10V20M10 15L20 15.101' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M13.75 32.5H33C34.1046 32.5 35 31.6046 35 30.5V28.25C35 27.1454 34.1046 26.25 33 26.25H22C20.8954 26.25 20 25.3546 20 24.25V22C20 20.8954 20.8954 20 22 20H31.25' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <circle cx='12.5' cy='32.5' r='2.5' fill='none' className={filledClassName} />
          <circle cx='32.5' cy='20' r='2.5' fill='none' className={filledClassName} />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

AddRouteIcon.propTypes = {
  /**
   * color of text, icon and borders
   */
  color: PropTypes.oneOf(COLORS_ICON),
  /**
   * Size
   */
  size: PropTypes.oneOf(SIZES),
  /**
   * tip
   */
  tip: PropTypes.string
}

export default AddRouteIcon
