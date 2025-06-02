import * as React from 'react'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const EntryIcon = ({
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
          <path d='M6.96787 12.3747L6.96787 13C6.96787 13.5523 7.41558 14 7.96787 14L12.3547 14C12.907 14 13.3547 13.5523 13.3547 13L13.3547 3C13.3547 2.44772 12.907 2 12.3547 2L7.96787 2C7.41558 2 6.96787 2.44772 6.96787 3L6.96787 3.3747' stroke='none' strokeLinecap='round' />
          <path d='M6.65698 4.87469L9.88284 7.90515L6.65698 10.9356' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M1.9999 7.6665L9.09678 7.6665' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
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
          <path d='M10.4519 18.562L10.4519 20C10.4519 20.5523 10.8996 21 11.4519 21L19.0322 21C19.5845 21 20.0322 20.5523 20.0322 20L20.0322 4C20.0322 3.44772 19.5845 3 19.0322 3L11.4519 3C10.8996 3 10.4519 3.44772 10.4519 4L10.4519 5.06204' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <path d='M9.98535 7.31201L14.8241 11.8577L9.98535 16.4034' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M3.00009 11.4998L13.6454 11.4998' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />

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
          <path d='M17.4198 30.9367L17.4198 34C17.4198 34.5523 17.8675 35 18.4198 35L32.387 35C32.9392 35 33.387 34.5523 33.387 34L33.387 6C33.387 5.44772 32.9392 5 32.387 5L18.4198 5C17.8675 5 17.4198 5.44772 17.4198 6L17.4198 8.43674' stroke='none' strokeWidth={2} strokeLinecap='round' />
          <path d='M16.6426 12.1868L24.7072 19.7629L16.6426 27.3391' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M4.99999 19.1663L22.7422 19.1663' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

export default EntryIcon
