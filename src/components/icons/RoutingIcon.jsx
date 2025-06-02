import * as React from 'react'
import styles from './Icons.module.css'
import { SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const RoutingIcon = ({
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
          <circle cx='3' cy='5' r='1' transform='rotate(90 3 5)' stroke='none' />
          <circle cx='13' cy='3' r='1' transform='rotate(90 13 3)' stroke='none' />
          <circle cx='13' cy='8' r='1' transform='rotate(90 13 8)' stroke='none' />
          <circle cx='13' cy='13' r='1' transform='rotate(90 13 13)' stroke='none' />
          <path d='M12 3L10 3L7.5 3C6.94772 3 6.5 3.44772 6.5 4V4C6.5 4.55228 6.05228 5 5.5 5L4 5' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M12 13L9.75002 13C8.64545 13 7.75002 12.1046 7.75002 11L7.75002 7C7.75002 5.89543 6.85459 5 5.75002 5L4.5 5M12 8L7.00001 8C6.17158 8 5.50001 7.32843 5.50001 6.5V6.5C5.50001 5.67157 4.82843 5 4 5V5' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
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
          <circle cx='4.5' cy='7.5' r='1.5' transform='rotate(90 4.5 7.5)' stroke='none' strokeWidth={1.5} />
          <circle cx='19.5' cy='4.5' r='1.5' transform='rotate(90 19.5 4.5)' stroke='none' strokeWidth={1.5} />
          <circle cx='19.5' cy='12' r='1.5' transform='rotate(90 19.5 12)' stroke='none' strokeWidth={1.5} />
          <circle cx='19.5' cy='19.5' r='1.5' transform='rotate(90 19.5 19.5)' stroke='none' strokeWidth={1.5} />
          <path d='M18 4.5L15 4.5L10.75 4.5C10.1977 4.5 9.75 4.94772 9.75 5.5L9.75 6.5C9.75 7.05228 9.30228 7.5 8.75 7.5L6 7.5' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M18 19.5L13.625 19.5C12.5205 19.5 11.625 18.6046 11.625 17.5L11.625 9.5C11.625 8.39543 10.7296 7.5 9.62503 7.5L6.75 7.5M18 12L10.25 12C9.14545 12 8.25002 11.1046 8.25001 10L8.25001 9.49999C8.25001 8.39543 7.35458 7.5 6.25002 7.5L6 7.5' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
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
          <circle cx='7.5' cy='12.5' r='2.5' transform='rotate(90 7.5 12.5)' stroke='none' strokeWidth={2} />
          <circle cx='32.5' cy='7.5' r='2.5' transform='rotate(90 32.5 7.5)' stroke='none' strokeWidth={2} />
          <circle cx='32.5' cy='20' r='2.5' transform='rotate(90 32.5 20)' stroke='none' strokeWidth={2} />
          <circle cx='32.5' cy='32.5' r='2.5' transform='rotate(90 32.5 32.5)' stroke='none' strokeWidth={2} />
          <path d='M30 7.5L25 7.5L18.25 7.5C17.1454 7.5 16.25 8.39543 16.25 9.5L16.25 10.5C16.25 11.6046 15.3546 12.5 14.25 12.5L10 12.5' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M30 32.5L21.3751 32.5C20.2705 32.5 19.3751 31.6046 19.3751 30.5L19.375 14.5C19.375 13.3954 18.4796 12.5 17.375 12.5L11.25 12.5M30 20L15.75 20C14.6455 20 13.75 19.1046 13.75 18L13.75 14.5C13.75 13.3954 12.8546 12.5 11.75 12.5L10 12.5' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
        </svg>
      )
      break
    default:
      break
  }
  return icon
}

export default RoutingIcon
