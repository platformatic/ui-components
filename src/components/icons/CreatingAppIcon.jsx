import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const CreatingAppIcon = ({
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
          <path d='M2.5 5V10.8722L8 14M8 14L13.5 10.8722V5M8 14V12.5' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M4.13695 5.79253L2.5 4.85711L8 2L13.5 4.85711L12 5.54285' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M5.69651 6.30385C6.18908 5.51796 7.03136 5 7.98768 5C9.50614 5 10.7371 6.30584 10.7371 7.91667C10.7371 8.20959 10.6964 8.49243 10.6206 8.75916M5.2763 7.43056C5.25129 7.58864 5.23828 7.75104 5.23828 7.91667C5.23828 9.5275 6.46923 10.8333 7.98768 10.8333C8.80886 10.8333 9.54594 10.4514 10.0497 9.84591' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M9.88892 7.84375L10.6071 8.79053L11.4996 8.02861' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M6.11621 8.12177L5.25281 7.32303L4.49988 8.23895' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
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
          <path d='M3.75 7.5V16.3083L12 21M12 21L20.25 16.3083V7.5M12 21V18.75' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M6.20542 8.6888L3.75 7.28567L12 3L20.25 7.28567L18 8.31427' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M8.54477 9.45577C9.28362 8.27693 10.547 7.5 11.9815 7.5C14.2592 7.5 16.1056 9.45875 16.1056 11.875C16.1056 12.3144 16.0446 12.7386 15.931 13.1387M7.91444 11.1458C7.87694 11.383 7.85742 11.6266 7.85742 11.875C7.85742 14.2912 9.70385 16.25 11.9815 16.25C13.2133 16.25 14.3189 15.6771 15.0746 14.7689' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M14.8335 11.7656L15.9108 13.1858L17.2495 12.0429' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M9.17432 12.1826L7.87922 10.9845L6.74982 12.3584' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />

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
          <path d='M6.25 12.4999V27.1805L20 35M20 35L33.75 27.1805V12.4999M20 35V31.2499' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M10.3424 14.4813L6.25 12.1428L20 5L33.75 12.1428L30 13.8571' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M14.2413 15.7596C15.4727 13.7949 17.5784 12.5 19.9692 12.5C23.7653 12.5 26.8427 15.7646 26.8427 19.7917C26.8427 20.524 26.7409 21.2311 26.5516 21.8979M13.1907 18.5764C13.1282 18.9716 13.0957 19.3776 13.0957 19.7917C13.0957 23.8187 16.1731 27.0833 19.9692 27.0833C22.0221 27.0833 23.8649 26.1286 25.1243 24.6148' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M24.7224 19.6094L26.518 21.9763L28.7492 20.0715' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M15.2903 20.3044L13.1318 18.3075L11.2495 20.5974' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />

        </svg>
      )
      break

    default:
      break
  }
  return icon
}

CreatingAppIcon.propTypes = {
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

export default CreatingAppIcon
