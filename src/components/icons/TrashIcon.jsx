import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const TrashIcon = ({
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
          <path d='M4.08381 6.50611C4.03861 5.92502 4.49795 5.42857 5.0808 5.42857H10.9192C11.502 5.42857 11.9614 5.92502 11.9162 6.50611L11.4051 13.0775C11.3646 13.5982 10.9303 14 10.4081 14H5.59191C5.0697 14 4.63541 13.5982 4.59492 13.0775L4.08381 6.50611Z' stroke='none' />
          <path d='M4 3.71429L12 3.71429' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M9.60015 3.71429C9.60015 2.76751 8.8838 2 8.00015 2C7.11649 2 6.40015 2.76751 6.40015 3.71429' stroke='none' />
          <path d='M5.6001 7.14285L6.4001 12.2857M10.4001 7.14285L10.0001 12.2857M8.0001 7.14285V12.2857' stroke='none' strokeLinecap='round' strokeLinejoin='round' />

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
          <path d='M6.08381 9.2204C6.03861 8.63931 6.49795 8.14286 7.0808 8.14286H16.9192C17.502 8.14286 17.9614 8.63931 17.9162 9.2204L17.0717 20.0775C17.0313 20.5982 16.597 21 16.0748 21H7.92524C7.40303 21 6.96875 20.5982 6.92825 20.0775L6.08381 9.2204Z' stroke='none' strokeWidth={1.5} />
          <path d='M6 5.57143L18 5.57143' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M14.4001 5.57143C14.4001 4.15127 13.3256 3 12.0001 3C10.6746 3 9.6001 4.15127 9.6001 5.57143' stroke='none' strokeWidth={1.5} />
          <path d='M8.40015 10.7143L9.60015 18.4286M15.6001 10.7143L15.0001 18.4286M12.0001 10.7143V18.4286' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
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
          <path d='M10.0838 14.649C10.0386 14.0679 10.498 13.5714 11.0808 13.5714H28.9192C29.5021 13.5714 29.9614 14.0679 29.9162 14.649L28.4051 34.0775C28.3646 34.5982 27.9303 35 27.4081 35H12.5919C12.0697 35 11.6354 34.5982 11.5949 34.0775L10.0838 14.649Z' stroke='none' strokeWidth={2} />
          <path d='M10 9.28571L30 9.28571' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M24.0002 9.28571C24.0002 6.91878 22.2094 5 20.0002 5C17.7911 5 16.0002 6.91878 16.0002 9.28571' stroke='none' strokeWidth={2} />
          <path d='M14.0002 17.8571L16.0002 30.7143M26.0002 17.8571L25.0002 30.7143M20.0002 17.8571V30.7143' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />

        </svg>
      )
      break

    default:
      break
  }
  return icon
}

TrashIcon.propTypes = {
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

export default TrashIcon
