import * as React from 'react'
import styles from './Icons.module.css'
import { COLORS_ICON, LARGE, MAIN_DARK_BLUE, MEDIUM, SIZES, SMALL } from '../constants'

const RunningAppIcon = ({
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
          <path d='M10.5 7L13.5311 8.75V12.25L10.5 14L7.46891 12.25V8.75L10.5 7Z' stroke='none' strokeLinejoin='round' />
          <path d='M10 5.35553C9.67562 3.45026 8.0211 2 6.02882 2C5.56315 2 5.11593 2.07923 4.69984 2.22499M5.22306 10C3.38411 9.62564 2 7.99513 2 6.04041C2 5.49495 2.10778 4.97472 2.30315 4.5' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M8.57617 4.69189L10.2035 5.44076L10.9697 3.82463' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M3.5 5.23511L2.55318 3.71441L1.02417 4.64233' stroke='none' strokeLinecap='round' strokeLinejoin='round' />

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
          <path d='M15.75 10.5L20.2966 13.125V18.375L15.75 21L11.2034 18.375V13.125L15.75 10.5Z' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
          <path d='M15 8.03329C14.5134 5.17539 12.0316 3 9.04323 3C8.34472 3 7.6739 3.11885 7.04976 3.33748M7.83459 15C5.07616 14.4385 3 11.9927 3 9.06062C3 8.24242 3.16167 7.46209 3.45472 6.75' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M12.8643 7.03784L15.3052 8.16113L16.4546 5.73695' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M5.25 7.85254L3.82978 5.57149L1.53625 6.96337' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />

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
          <path d='M26.25 17.5L33.8277 21.875V30.625L26.25 35L18.6723 30.625V21.875L26.25 17.5Z' stroke='none' strokeWidth={2} strokeLinejoin='round' />
          <path d='M25 13.3888C24.1891 8.62565 20.0527 5 15.0721 5C13.9079 5 12.7898 5.19808 11.7496 5.56247M13.0576 25C8.46027 24.0641 5 19.9878 5 15.101C5 13.7374 5.26945 12.4368 5.75787 11.25' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M21.4404 11.7297L25.5087 13.6019L27.4243 9.56158' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M8.75 13.0879L6.38296 9.28614L2.56041 11.6059' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />

        </svg>
      )
      break

    default:
      break
  }
  return icon
}

export default RunningAppIcon
