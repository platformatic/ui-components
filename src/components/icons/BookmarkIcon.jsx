import * as React from 'react'
import styles from './Icons.module.css'
import { SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const BookmarkIcon = ({
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
          <path d='M12.9714 3.02588H14V13.9999H8.64286C8.6 13.8809 8.42857 13.643 8.08571 13.643C7.74286 13.643 7.57143 13.8809 7.52857 13.9999H2V3.02588H2.98571' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M7.7129 12.4089H3.15625V2.9675C3.28991 2.645 3.98009 2 5.67152 2C7.36295 2 8.00453 2.63098 8.00453 2.63098C8.00453 2.63098 8.36906 2 10.0824 2C11.6134 2 12.6705 2.63098 12.6705 2.63098V12.4089H8.3326' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M8.04297 2.62451V12.4089' stroke='none' strokeLinecap='round' />
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
          <path d='M19.4571 4.53882H21V20.99985H12.96429C12.9 20.82135 12.64286 20.4645 12.12857 20.4645C11.61429 20.4645 11.35715 20.82135 11.29285 20.99985H3V4.53882H4.47856' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M11.56935 18.61335H4.73438V4.45125C4.93487 3.9675 5.97013 3 8.50728 3C11.04443 3 12.0068 3.94647 12.0068 3.94647C12.0068 3.94647 12.55359 3 15.1236 3C17.4201 3 19.00575 3.94647 19.00575 3.94647V18.61335H12.4989' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M12.06446 3.93676V18.61335' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
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
          <path d='M32.4285 7.5647H35V34.99975H21.60715C21.5 34.70225 21.07143 34.1075 20.21428 34.1075C19.35715 34.1075 18.92858 34.70225 18.82143 34.99975H5V7.5647H7.46428' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M19.28225 31.02225H7.89063V7.41875C8.22477 6.6125 9.95022 5 14.1788 5C18.40737 5 20.01133 6.57745 20.01133 6.57745C20.01133 6.57745 20.92265 5 25.206 5C29.0335 5 31.67625 6.57745 31.67625 6.57745V31.02225H20.8315' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M20.10742 6.56128V31.02225' stroke='none' strokeWidth={2} strokeLinecap='round' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

export default BookmarkIcon
