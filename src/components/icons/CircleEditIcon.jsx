import * as React from 'react'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MAIN_DARK_BLUE, MEDIUM } from '../constants'

const CircleEditIcon = ({
  color = MAIN_DARK_BLUE,
  size = SMALL,
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
          width={18}
          height={18}
          viewBox='0 0 18 18'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={className}
        >
          <circle cx='9' cy='9' r='8' stroke='none' />
          <rect x='11.0552' y='5.50607' width='2.11765' height='7.76471' transform='rotate(45 11.0552 5.50607)' stroke='none' strokeLinejoin='round' />
          <path d='M7.06234 12.494L5.56494 10.9966L4.81624 13.2427L7.06234 12.494Z' stroke='none' strokeLinejoin='round' />
          <path d='M11.8456 4.71577C12.2362 4.32525 12.8693 4.32525 13.2598 4.71577L13.343 4.79896C13.7336 5.18949 13.7336 5.82265 13.343 6.21318L12.5527 7.00347L11.0553 5.50607L11.8456 4.71577Z' stroke='none' />

        </svg>
      )
      break

    case MEDIUM:
      icon = (
        <svg
          width={26}
          height={26}
          viewBox='0 0 26 26'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={className}
        >
          <circle cx='13' cy='13' r='12' stroke='none' strokeWidth={1.5} />
          <rect x='16.083' y='7.75977' width='3.17647' height='11.6471' transform='rotate(45 16.083 7.75977)' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
          <path d='M10.0928 18.2402L7.84668 15.9941L6.72363 19.3633L10.0928 18.2402Z' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
          <path d='M17.2684 6.57238C17.8542 5.98659 18.804 5.98659 19.3898 6.57238L19.5145 6.69716C20.1003 7.28295 20.1003 8.2327 19.5145 8.81848L18.3291 10.0039L16.083 7.75782L17.2684 6.57238Z' stroke='none' strokeWidth={1.5} />

        </svg>
      )
      break

    default:
      break
  }
  return icon
}

export default CircleEditIcon
