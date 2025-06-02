import * as React from 'react'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const ImportIcon = ({
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
          <path d='M8 5L8 9.5M8 9.5L9.5 8.16667M8 9.5L6.5 8.16667' stroke='white' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M13.6635 7.61495C13.874 7.34085 14 6.99244 14 6.61313C14 5.72977 13.3167 5.01413 12.4747 5.01413C12.4527 5.01413 12.4308 5.01475 12.4089 5.01599C12.0593 4.33701 11.3748 3.87607 10.5873 3.87607C10.2459 3.87607 9.92474 3.96304 9.64089 4.11648C9.28652 2.89144 8.20207 2 6.91852 2C5.71674 2 4.68978 2.78149 4.27319 3.886C4.20563 3.87917 4.13748 3.87544 4.06874 3.87544C2.92622 3.87544 2 4.8464 2 6.0441C2 6.49092 2.12487 6.90178 2.33947 7.24286' stroke='white' strokeWidth={1.02} stroke-miterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M5 6.5H3.67188V11.1935H12.5V6.5H11' stroke='white' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M7 11V13M9.5 11V13' stroke='white' />
          <path d='M5.9999 12.7422H10.3999V13.9035H5.9999V12.7422Z' stroke='white' strokeLinejoin='round' />
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
          <path d='M12 7.5L12 14.25M12 14.25L14.25 12.25M12 14.25L9.75 12.25' stroke='white' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M20.4953 11.4224C20.811 11.0113 21 10.4887 21 9.9197C21 8.59465 19.9751 7.52119 18.712 7.52119C18.6791 7.52119 18.6462 7.52213 18.6133 7.52399C18.0889 6.50551 17.0622 5.8141 15.8809 5.8141C15.3689 5.8141 14.8871 5.94455 14.4613 6.17471C13.9298 4.33716 12.3031 3 10.3778 3C8.57511 3 7.03467 4.17223 6.40978 5.82901C6.30844 5.81876 6.20622 5.81317 6.10311 5.81317C4.38933 5.81317 3 7.2696 3 9.06615C3 9.73638 3.1873 10.3527 3.5092 10.8643' stroke='white' strokeWidth={1.5} stroke-miterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M7.5 9.75H5.50781V16.7903H18.75V9.75H16.5' stroke='white' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M10.5 16.5V19.5M14.25 16.5V19.5' stroke='white' strokeWidth={1.5} />
          <path d='M8.99985 19.1094H15.5999V20.8513H8.99985V19.1094Z' stroke='white' strokeWidth={1.5} strokeLinejoin='round' />
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
          <path d='M20 12.5L20 23.75M20 23.75L23.75 20.4167M20 23.75L16.25 20.4167' stroke='white' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M34.1588 19.0374C34.685 18.3521 35 17.4811 35 16.5328C35 14.3244 33.2919 12.5353 31.1867 12.5353C31.1319 12.5353 31.077 12.5369 31.0222 12.54C30.1481 10.8425 28.437 9.69016 26.4681 9.69016C25.6148 9.69016 24.8119 9.90759 24.1022 10.2912C23.2163 7.2286 20.5052 5 17.2963 5C14.2919 5 11.7244 6.95372 10.683 9.71501C10.5141 9.69793 10.3437 9.68861 10.1719 9.68861C7.31556 9.68861 5 12.116 5 15.1103C5 16.2273 5.31217 17.2544 5.84867 18.1072' stroke='white' strokeWidth={2} stroke-miterlimit='10' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M12.5 16.25H9.17969V27.9839H31.25V16.25H27.5' stroke='white' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M17.5 27.5V32.5M23.75 27.5V32.5' stroke='white' strokeWidth={2} />
          <path d='M14.9998 31.8516H25.9998V34.7548H14.9998V31.8516Z' stroke='white' strokeWidth={2} strokeLinejoin='round' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

export default ImportIcon
