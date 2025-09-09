import * as React from 'react'
import styles from './Icons.module.css'
import { SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const LabIcon = ({
  color = MAIN_DARK_BLUE,
  size = MEDIUM
}) => {
  const className = `${styles.svgClassName} ` + styles[`${color}`]
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
          <path d='M3.69951 14H8H12.4162C13.1512 14 13.6351 13.2337 13.3191 12.5701L10.0971 5.80399C10.0332 5.66969 10 5.52281 10 5.37406V2H6.66667V5.34087C6.66667 5.51082 6.62336 5.67796 6.54082 5.82652L2.82536 12.5144C2.45506 13.1809 2.93703 14 3.69951 14Z' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M5.3335 2L11.3335 2' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M4.6665 9.19995H11.9998' stroke='none' />
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
          <path d='M4.69951 21H12H19.4162C20.1512 21 20.6351 20.2337 20.3191 19.5701L15.0971 8.60399C15.0332 8.46969 15 8.32281 15 8.17406V3H10V8.14087C10 8.31082 9.95669 8.47796 9.87416 8.62652L3.82536 19.5144C3.45506 20.1809 3.93703 21 4.69951 21Z' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M8 3L17 3' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M7 13.7999H18' stroke='none' strokeWidth={1.5} />
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
          <path d='M6.69951 35H20H33.4162C34.1512 35 34.6351 34.2337 34.3191 33.5701L25.0971 14.204C25.0332 14.0697 25 13.9228 25 13.7741V5H16.6667V13.7409C16.6667 13.9108 16.6234 14.078 16.5408 14.2265L5.82536 33.5144C5.45506 34.1809 5.93703 35 6.69951 35Z' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M13.3335 5L28.3335 5' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M11.6665 22.9999H29.9998' stroke='none' strokeWidth={2} />

        </svg>
      )
      break

    default:
      break
  }
  return icon
}

export default LabIcon
