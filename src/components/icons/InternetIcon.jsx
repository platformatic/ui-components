import * as React from 'react'
import styles from './Icons.module.css'
import { SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const InternetIcon = ({
  color = MAIN_DARK_BLUE,
  size = MEDIUM,
  disabled = false,
  inactive = false,
  addImportantToColor = false
}) => {
  let className = `${styles.svgClassName} `
  // this will be useful if the css is used inside some integrated part, like using icons inside other svg generator
  if (!addImportantToColor) {
    className += styles[`${color}`]
  } else {
    className += styles[`important-${color}`]
  }

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
          <path d='M2 8H14' stroke='none' strokeLinejoin='round' />
          <circle cx='8' cy='8' r='6' stroke='none' />
          <path d='M3 4C3.5 4.33333 4.8 5 8 5C11.2 5 12.8333 4.16667 13 4' stroke='none' strokeLinejoin='round' />
          <path d='M8 14C8.66667 13.4 10 11.84 10 8C10 4.16 8.33333 2.2 8 2' stroke='none' strokeLinejoin='round' />
          <path d='M8 14C7.33333 13.4 6 11.84 6 8C6 4.16 7.66667 2.2 8 2' stroke='none' strokeLinejoin='round' />
          <path d='M13 12C12.5 11.6667 11.2 11 8 11C4.8 11 3.16667 11.8333 3 12' stroke='none' strokeLinejoin='round' />
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
          <path d='M3 12H21' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
          <circle cx='12' cy='12' r='9' stroke='none' strokeWidth={1.5} />
          <path d='M4.5 6C5.25 6.5 7.2 7.5 12 7.5C16.8 7.5 19.25 6.25 19.5 6' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
          <path d='M12 21C13 20.1 15 17.76 15 12C15 6.24 12.5 3.3 12 3' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
          <path d='M12 21C11 20.1 9 17.76 9 12C9 6.24 11.5 3.3 12 3' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
          <path d='M19.5 18C18.75 17.5 16.8 16.5 12 16.5C7.2 16.5 4.75 17.75 4.5 18' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
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
          <path d='M5 20H35' stroke='none' strokeWidth={2} strokeLinejoin='round' />
          <circle cx='20' cy='20' r='15' stroke='none' strokeWidth={2} />
          <path d='M7.5 10C8.75 10.8333 12 12.5 20 12.5C28 12.5 32.0833 10.4167 32.5 10' stroke='none' strokeWidth={2} strokeLinejoin='round' />
          <path d='M20 35C21.6667 33.5 25 29.6 25 20C25 10.4 20.8333 5.5 20 5' stroke='none' strokeWidth={2} strokeLinejoin='round' />
          <path d='M20 35C18.3333 33.5 15 29.6 15 20C15 10.4 19.1667 5.5 20 5' stroke='none' strokeWidth={2} strokeLinejoin='round' />
          <path d='M32.5 30C31.25 29.1667 28 27.5 20 27.5C12 27.5 7.91667 29.5833 7.5 30' stroke='none' strokeWidth={2} strokeLinejoin='round' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

export default InternetIcon
