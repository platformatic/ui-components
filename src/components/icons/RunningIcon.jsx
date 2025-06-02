import * as React from 'react'
import styles from './Icons.module.css'
import { SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const RunningIcon = ({
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
          <path d='M4.05141 5.23517C4.89581 3.88792 6.33972 3 7.97913 3C10.5822 3 12.6924 5.23858 12.6924 8C12.6924 8.50216 12.6226 8.98702 12.4928 9.44428M3.33104 7.16667C3.28818 7.43767 3.26587 7.71607 3.26587 8C3.26587 10.7614 5.37607 13 7.97913 13C9.38685 13 10.6504 12.3453 11.5141 11.3073' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M11.2388 7.875L12.47 9.49804L14 8.1919' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M4.771 8.35156L3.29088 6.9823L2.00014 8.55246' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
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
          <path d='M6.077 7.85276C7.34359 5.83189 9.50946 4.5 11.9686 4.5C15.8732 4.5 19.0385 7.85786 19.0385 12C19.0385 12.7532 18.9338 13.4805 18.739 14.1664M4.99643 10.75C4.93214 11.1565 4.89868 11.5741 4.89868 12C4.89868 16.1421 8.06398 19.5 11.9686 19.5C14.0802 19.5 15.9755 18.518 17.271 16.9609' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M16.8582 11.8125L18.705 14.2471L21 12.2879' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M7.15649 12.5275L4.93632 10.4736L3.00022 12.8288' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />

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
          <path d='M10.1282 13.0879C12.2392 9.71981 15.8489 7.5 19.9475 7.5C26.4551 7.5 31.7306 13.0964 31.7306 20C31.7306 21.2554 31.5562 22.4676 31.2316 23.6107M8.32723 17.9167C8.22008 18.5942 8.16431 19.2902 8.16431 20C8.16431 26.9036 13.4398 32.5 19.9475 32.5C23.4668 32.5 26.6257 30.8633 28.7848 28.2682' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M28.0969 19.6875L31.175 23.7451L34.9999 20.4798' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M11.9275 20.879L8.22721 17.4559L5.00036 21.3813' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

export default RunningIcon
