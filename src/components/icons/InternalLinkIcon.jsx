import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const InternalLinkIcon = ({
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
          <path d='M14 5V4C14 2.89543 13.1046 2 12 2H4C2.89543 2 2 2.89543 2 4V12C2 13.1046 2.89543 14 4 14H12C13.1046 14 14 13.1046 14 12V11' stroke='none' strokeLinecap='round' />
          <path d='M6 8H14M14 8L11.5 5.5M14 8L11.5 10.5' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
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
          <path d='M21 7.5V5C21 3.89543 20.1046 3 19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V16.5' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <path d='M9 12H21M21 12L17.25 8.25M21 12L17.25 15.75' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
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
          <path d='M35 12.5V7C35 5.89543 34.1046 5 33 5H7C5.89543 5 5 5.89543 5 7V33C5 34.1046 5.89543 35 7 35H33C34.1046 35 35 34.1046 35 33V27.5' stroke='none' strokeWidth={2} strokeLinecap='round' />
          <path d='M15 20H35M35 20L28.75 13.75M35 20L28.75 26.25' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

InternalLinkIcon.propTypes = {
  /**
   * color of text, icon and borders
   */
  color: PropTypes.oneOf(COLORS_ICON),
  /**
   * Size
   */
  size: PropTypes.oneOf(SIZES),
  /**
   * disabled
   */
  disabled: PropTypes.bool,
  /**
   * inactive
   */
  inactive: PropTypes.bool,
  /**
   * addImportantToColor
   */
  addImportantToColor: PropTypes.bool
}

export default InternalLinkIcon
