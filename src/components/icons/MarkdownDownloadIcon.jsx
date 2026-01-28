import * as React from 'react'
import styles from './Icons.module.css'
import { SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const MarkdownDownloadIcon = ({
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
          <path d='M11.5002 14V8M11.5002 14L9.32617 11.8031M11.5002 14L13.7352 11.7414' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M3 5H4.44324L5.96757 9.03125H6.03243L7.55676 5H9V11H7.86487V7.09473H7.81892L6.38649 10.9707H5.61351L4.18108 7.08008H4.13514V11H3V5Z' fill='none' />
          <path d='M8 2H2V12.5H7.5M8 2L10 3.5V4M8 2V4H10M10 9.5V4' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
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
          <path d='M17.2502 21V12M17.2502 21L13.9893 17.7047M17.2502 21L20.6028 17.6121' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M4.5 7.5H6.66487L8.95135 13.5469H9.04865L11.3351 7.5H13.5V16.5H11.7973V10.6421H11.7284L9.57973 16.4561H8.42027L6.27162 10.6201H6.2027V16.5H4.5V7.5Z' fill='none' />
          <path d='M12 3H3V18.75H11.25M12 3L15 5.25V6M12 3V6H15M15 14.25V6' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
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
          <path d='M28.7504 35V20M28.7504 35L23.3154 29.5078M28.7504 35L34.338 29.3535' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M7.5 12.5H11.1081L14.9189 22.5781H15.0811L18.8919 12.5H22.5V27.5H19.6622V17.7368H19.5473L15.9662 27.4268H14.0338L10.4527 17.7002H10.3378V27.5H7.5V12.5Z' fill='none' />
          <path d='M20 5H5V31.25H18.75M20 5L25 8.75V10M20 5V10H25M25 23.75V10' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

export default MarkdownDownloadIcon
