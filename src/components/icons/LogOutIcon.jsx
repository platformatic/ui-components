import * as React from 'react'
import styles from './Icons.module.css'
import { SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const LogOutIcon = ({
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
          <path d='M8.38687 5.5V3C8.38687 2.44772 7.93915 2 7.38687 2H3C2.44772 2 2 2.44772 2 3V13C2 13.5523 2.44771 14 3 14H7.38687C7.93915 14 8.38687 13.5523 8.38687 13V11.5' stroke='none' strokeLinecap='round' />
          <path d='M10.7742 5.3031L14 8.33356L10.7742 11.364' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M13.3548 8.3335L6.25796 8.3335' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
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
          data-tip={tip}
          className={className}
        >
          <path d='M12.5803 8.25V4C12.5803 3.44772 12.1326 3 11.5803 3H4C3.44772 3 3 3.44772 3 4V20C3 20.5523 3.44772 21 4 21H11.5803C12.1326 21 12.5803 20.5523 12.5803 20V17.25' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <path d='M16.1611 7.95459L20.9999 12.5003L16.1611 17.046' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M20.0321 12.5003L9.38681 12.5003' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
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
          data-tip={tip}
          className={className}
        >
          <path d='M20.9672 13.75V6C20.9672 5.44772 20.5195 5 19.9672 5H6C5.44772 5 5 5.44772 5 6V34C5 34.5523 5.44772 35 6 35H19.9672C20.5195 35 20.9672 34.5523 20.9672 34V28.75' stroke='none' strokeWidth={2} strokeLinecap='round' />
          <path d='M26.9353 13.2577L34.9999 20.8338L26.9353 28.41' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M33.387 20.8338L15.6448 20.8338' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

export default LogOutIcon
