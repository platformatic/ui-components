import * as React from 'react'
import styles from './Icons.module.css'
import { SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const PodSignalsIcon = ({
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
          <path d='M8.01795 6.35413L6.2859 7.35413V9.35413L8.01795 10.3541L9.75 9.35413V7.35413L8.01795 6.35413Z' stroke='none' strokeLinejoin='round' />
          <path d='M12.1169 4.11709C13.2763 5.11966 14 6.54093 14 8.11709C14 9.69326 13.2763 11.1145 12.1169 12.1171M3.88308 12.1171C2.72365 11.1145 2 9.69326 2 8.11709C2 6.47853 2.78208 5.00736 4.02282 4' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M10.3519 5.15155C11.3508 5.81802 12 6.89802 12 8.11699C12 9.33596 11.3508 10.416 10.3519 11.0824M5.6481 11.0824C4.64924 10.416 4 9.33596 4 8.11699C4 6.86433 4.68563 5.75841 5.73174 5.09723' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
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
          <path d='M12.0269 9.35413L9.42885 10.8541V13.8541L12.0269 15.3541L14.625 13.8541V10.8541L12.0269 9.35413Z' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
          <path d='M18.1754 6.17564C19.9145 7.67949 21 9.8114 21 12.1756C21 14.5399 19.9145 16.6718 18.1754 18.1756M5.82463 18.1756C4.08548 16.6718 3 14.5399 3 12.1756C3 9.71779 4.17313 7.51105 6.03424 6' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M15.5278 7.72735C17.0261 8.72706 18 10.3471 18 12.1755C18 14.004 17.0261 15.624 15.5278 16.6237M8.47216 16.6237C6.97385 15.624 6 14.004 6 12.1755C6 10.2965 7.02844 8.63765 8.59761 7.64587' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
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
          <path d='M20.0449 15.3541L15.7147 17.8541V22.8541L20.0449 25.3541L24.375 22.8541V17.8541L20.0449 15.3541Z' stroke='none' strokeWidth={2} strokeLinejoin='round' />
          <path d='M30.2923 10.2927C33.1909 12.7992 35 16.3523 35 20.2927C35 24.2331 33.1909 27.7863 30.2923 30.2927M9.70771 30.2927C6.80913 27.7863 5 24.2331 5 20.2927C5 16.1963 6.95521 12.5184 10.0571 10' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M25.8797 12.8788C28.3769 14.545 30 17.245 30 20.2925C30 23.3399 28.3769 26.0399 25.8797 27.7061M14.1203 27.7061C11.6231 26.0399 10 23.3399 10 20.2925C10 17.1608 11.7141 14.396 14.3293 12.743' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

export default PodSignalsIcon
