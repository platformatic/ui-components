import * as React from 'react'
import styles from './Icons.module.css'
import { SMALL, MAIN_DARK_BLUE, MEDIUM } from '../constants'

const CircleCopyPasteIcon = ({
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
          <path d='M7.3335 13.5V6.53746C7.3335 6.26132 7.55735 6.03746 7.8335 6.03746H11.0821C11.205 6.03746 11.3235 6.08269 11.4152 6.16453L13.8332 8.32396C13.9394 8.41882 14.0002 8.55448 14.0002 8.69689V13.5C14.0002 13.7761 13.7763 14 13.5002 14H7.8335C7.55735 14 7.3335 13.7761 7.3335 13.5Z' stroke='none' strokeLinecap='round' />
          <path d='M11.0835 8.82435V6.03746L14.0002 8.82435H11.0835Z' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M10.25 5.63936L8.49695 4.12196C8.40607 4.0433 8.28991 4 8.16972 4H6.17803H4.5C4.22386 4 4 4.22386 4 4.50001L4 11.1112C4.00001 11.3874 4.22386 11.6112 4.5 11.6112H6.91667' stroke='none' strokeLinecap='round' />
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
          <path d='M10.499 19.7504V9.30664C10.499 8.89243 10.8348 8.55664 11.249 8.55664H16.122C16.3063 8.55664 16.4841 8.62449 16.6215 8.74724L20.2486 11.9864C20.4079 12.1287 20.499 12.3322 20.499 12.5458V19.7504C20.499 20.1646 20.1632 20.5004 19.749 20.5004H11.249C10.8348 20.5004 10.499 20.1646 10.499 19.7504Z' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <path d='M16.124 12.737V8.55664L20.499 12.737H16.124Z' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M14.875 7.95903L12.2454 5.68293C12.1091 5.56495 11.9349 5.50001 11.7546 5.50001H8.76704H6.25C5.83579 5.50001 5.5 5.83579 5.5 6.25001L5.50001 16.1669C5.50001 16.5811 5.83579 16.9169 6.25001 16.9169H9.87501' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

export default CircleCopyPasteIcon
