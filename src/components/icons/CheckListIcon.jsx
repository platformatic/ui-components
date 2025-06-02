import * as React from 'react'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE, EXTRA_MEDIUM } from '../constants'

const CheckListIcon = ({
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
          <path d='M11 3H12C12.5523 3 13 3.44772 13 4V13C13 13.5523 12.5523 14 12 14H4C3.44772 14 3 13.5523 3 13V4C3 3.44771 3.44772 3 4 3H5' stroke='none' />
          <rect x={5} y={2} width={6} height={2} rx={1} stroke='none' />
          <path d='M9 7L11 7' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M9 12L11 12' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M5 6.5L6 7.5L7.5 6' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M9 9.5L11 9.5' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M5 9L6 10L7.5 8.5' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M5 11.5L6 12.5L7.5 11' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
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
          <path d='M16.5 4.5H18.5C19.0523 4.5 19.5 4.94772 19.5 5.5V20C19.5 20.5523 19.0523 21 18.5 21H5.5C4.94772 21 4.5 20.5523 4.5 20V5.5C4.5 4.94772 4.94772 4.5 5.5 4.5H7.5' stroke='none' strokeWidth={1.5} />
          <rect x={7.5} y={3} width={9} height={3} rx={1} stroke='none' strokeWidth={1.5} />
          <path d='M13.5 10.5L16.5 10.5' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M13.5 18L16.5 18' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M7.5 9.75L9 11.25L11.25 9' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M13.5 14.25L16.5 14.25' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M7.5 13.5L9 15L11.25 12.75' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M7.5 17.25L9 18.75L11.25 16.5' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />

        </svg>
      )
      break
    case EXTRA_MEDIUM:
      icon = (
        <svg
          width={32}
          height={32}
          viewBox='0 0 32 32'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={className}
        >
          <path d='M22 5.99951H25C25.5523 5.99951 26 6.44723 26 6.99951V26.9995C26 27.5518 25.5523 27.9995 25 27.9995H7C6.44772 27.9995 6 27.5518 6 26.9995V6.99951C6 6.44723 6.44772 5.99951 7 5.99951H10' stroke='none' strokeWidth={1.5} />
          <rect x='10' y='3.99951' width='12' height='4' rx='1' stroke='none' strokeWidth={1.5} />
          <path d='M18 13.9995L22 13.9995' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M18 23.9995L22 23.9995' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M10 12.9995L12 14.9995L15 11.9995' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M18 18.9995L22 18.9995' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M10 17.9995L12 19.9995L15 16.9995' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M10 22.9995L12 24.9995L15 21.9995' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
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
          <path d='M27.5 7.5H31.5C32.0523 7.5 32.5 7.94772 32.5 8.5V34C32.5 34.5523 32.0523 35 31.5 35H8.5C7.94772 35 7.5 34.5523 7.5 34V8.5C7.5 7.94772 7.94772 7.5 8.5 7.5H12.5' stroke='none' strokeWidth={2} />
          <rect x={12.5} y={5} width={15} height={5} rx={1} stroke='none' strokeWidth={2} />
          <path d='M22.5 17.5L27.5 17.5' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M22.5 30L27.5 30' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M12.5 16.25L15 18.75L18.75 15' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M22.5 23.75L27.5 23.75' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M12.5 22.5L15 25L18.75 21.25' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M12.5 28.75L15 31.25L18.75 27.5' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

export default CheckListIcon
