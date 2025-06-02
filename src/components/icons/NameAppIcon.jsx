import * as React from 'react'
import styles from './Icons.module.css'
import { LARGE, MAIN_DARK_BLUE, MEDIUM, SMALL } from '../constants'

const NameAppIcon = ({
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
          <path d='M4.5 2.95996H3C2.44772 2.95996 2 3.40768 2 3.95996V9.63996C2 10.1922 2.44772 10.64 3 10.64H13C13.5523 10.64 14 10.1922 14 9.63996V3.95996C14 3.40768 13.5523 2.95996 13 2.95996H11.5' stroke='none' strokeLinecap='round' />
          <rect x='6' y='10.64' width='4' height='1.92' stroke='none' />
          <path d='M4 13.5601C4 13.0078 4.44772 12.5601 5 12.5601H11C11.5523 12.5601 12 13.0078 12 13.5601V14.0001H4V13.5601Z' stroke='none' />
          <path d='M8 2L8.44903 3.38197H9.90211L8.72654 4.23607L9.17557 5.61803L8 4.76393L6.82443 5.61803L7.27346 4.23607L6.09789 3.38197H7.55097L8 2Z' stroke='none' strokeLinejoin='round' />
          <path d='M5.5 7.5V8.5M4 7H12V9H4V7Z' stroke='none' strokeLinejoin='round' />
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
          <path d='M6.75 4.43994H4C3.44772 4.43994 3 4.88766 3 5.43994V14.9599C3 15.5122 3.44772 15.9599 4 15.9599H20C20.5523 15.9599 21 15.5122 21 14.9599V5.43994C21 4.88766 20.5523 4.43994 20 4.43994H17.25' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <rect x='9' y='15.96' width='6' height='2.88' stroke='none' strokeWidth={1.5} />
          <path d='M6 19.84C6 19.2877 6.44772 18.84 7 18.84H17C17.5523 18.84 18 19.2877 18 19.84V21H6V19.84Z' stroke='none' strokeWidth={1.5} />
          <path d='M12 3L12.6735 5.07295H14.8532L13.0898 6.3541L13.7634 8.42705L12 7.1459L10.2366 8.42705L10.9102 6.3541L9.14683 5.07295H11.3265L12 3Z' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
          <path d='M8.25 11.25V12.75M6 10.5H18V13.5H6V10.5Z' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />

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
          <path d='M11.25 7.40002H6C5.44772 7.40002 5 7.84774 5 8.40002V25.6C5 26.1523 5.44772 26.6 6 26.6H34C34.5523 26.6 35 26.1523 35 25.6V8.40002C35 7.84774 34.5523 7.40002 34 7.40002H28.75' stroke='none' strokeWidth={2} strokeLinecap='round' />
          <rect x='15' y='26.6' width='10' height='4.8' stroke='none' strokeWidth={2} />
          <path d='M10 32.4C10 31.8477 10.4477 31.4 11 31.4H29C29.5523 31.4 30 31.8477 30 32.4V35H10V32.4Z' stroke='none' strokeWidth={2} />
          <path d='M20 5L21.1226 8.45492H24.7553L21.8164 10.5902L22.9389 14.0451L20 11.9098L17.0611 14.0451L18.1836 10.5902L15.2447 8.45492H18.8774L20 5Z' stroke='none' strokeWidth={2} strokeLinejoin='round' />
          <path d='M13.75 17.5V22.5M10 17.5H30V22.5H10V17.5Z' stroke='none' strokeWidth={2} strokeLinejoin='round' />

        </svg>
      )
      break

    default:
      break
  }
  return icon
}

export default NameAppIcon
