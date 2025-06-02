import * as React from 'react'
import styles from './Icons.module.css'
import { SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const ExpandIcon = ({
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
          <path d='M9 2H14V7' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M8 4H3C2.44772 4 2 4.44772 2 5V13C2 13.5523 2.44772 14 3 14H11C11.5523 14 12 13.5523 12 13V8' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M13.5 2.5L8 8' stroke='none' strokeLinecap='round' strokeLinejoin='round' />

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
          <path d='M13.5 3H21V10.5' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M12 6H4C3.44772 6 3 6.44772 3 7V20C3 20.5523 3.44772 21 4 21H17C17.5523 21 18 20.5523 18 20V12' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M20.25 3.75L12 12' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />

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
          <path d='M22.5 5H35V17.5' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M20 10H6C5.44772 10 5 10.4477 5 11V34C5 34.5523 5.44772 35 6 35H29C29.5523 35 30 34.5523 30 34V20' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M33.75 6.25L20 20' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />

        </svg>
      )
      break

    default:
      break
  }
  return icon
}

export default ExpandIcon
