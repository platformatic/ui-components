import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const AddEnvVariableIcon = ({
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
          <path d='M8 9.5V14H14V9.5M8 9.5V8H14V9.5M8 9.5H14' stroke='none' strokeLinejoin='round' />
          <path d='M10.6505 10.75L10.9899 11.332H11.0061L11.3495 10.75H11.9758L11.3576 11.75L12 12.75H11.3576L11.0061 12.1562H10.9899L10.6384 12.75H10L10.6343 11.75L10.0202 10.75H10.6505Z' fill='none' className={filledClassName} />
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
          <path d='M12 14.25V21H21V14.25M12 14.25V12H21V14.25M12 14.25H21' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
          <path d='M15.9758 16.125L16.4848 16.998H16.5091L17.0242 16.125H17.9636L17.0364 17.625L18 19.125H17.0364L16.5091 18.2344H16.4848L15.9576 19.125H15L15.9515 17.625L15.0303 16.125H15.9758Z' fill='none' className={filledClassName} />
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
          <path d='M20 23.75V35H35V23.75M20 23.75V20H35V23.75M20 23.75H35' stroke='none' strokeWidth={2} strokeLinejoin='round' />
          <path d='M26.6263 26.875L27.4747 28.3301H27.5152L28.3737 26.875H29.9394L28.3939 29.375L30 31.875H28.3939L27.5152 30.3906H27.4747L26.596 31.875H25L26.5859 29.375L25.0505 26.875H26.6263Z' fill='none' className={filledClassName} />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

AddEnvVariableIcon.propTypes = {
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

export default AddEnvVariableIcon
