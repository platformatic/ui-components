import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const StackablesPluginIcon = ({ color, size, disabled }) => {
  let className = `${styles.svgClassName} ` + styles[`${color}`]
  if (disabled) {
    className += ` ${styles.iconDisabled}`
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
          <path d='M5.67533 11.5745L2 9.71631' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M5.66943 13.4989V11.808' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M2 9.71643V12.1196L5.67533 13.9746L9 12.5' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M5.67533 9.06714L2 7.20898' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M5.66943 10.9916V9.30066' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M2 7.20911V9.61228L5.67533 11.4672L7 11' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M9.38344 4.66032L5.67533 6.55991L2 4.70176L3.83767 3.81234M9.38344 4.66032L7.52939 3.79163M9.38344 4.66032V5.85938' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M10.5 14C10.5 14.2761 10.7239 14.5 11 14.5C11.2761 14.5 11.5 14.2761 11.5 14L10.5 14ZM10.5 12L10.5 14L11.5 14L11.5 12L10.5 12Z' fill='white' />
          <path d='M9.5 7C9.5 6.72386 9.27614 6.5 9 6.5C8.72386 6.5 8.5 6.72386 8.5 7L9.5 7ZM9.5 9L9.5 7L8.5 7L8.5 9L9.5 9Z' fill='white' />
          <path d='M13.5 7C13.5 6.72386 13.2761 6.5 13 6.5C12.7239 6.5 12.5 6.72386 12.5 7L13.5 7ZM13.5 9L13.5 7L12.5 7L12.5 9L13.5 9Z' fill='white' />
          <path d='M11 12C12.6569 12 14 10.6569 14 9H8C8 10.6569 9.34315 12 11 12Z' stroke='none' strokeLinejoin='round' />
          <path d='M5.66943 8.48436V6.79346' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M2 4.7019V7.10507L5.67533 8.96004L7 8.5' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M3.8457 2.69214V4.07653' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <ellipse cx='5.57619' cy='2.69219' rx='1.73049' ry='0.692194' stroke='none' />
          <path d='M7.30667 4.07654C7.30667 4.45883 6.53191 4.76873 5.57619 4.76873C4.62047 4.76873 3.8457 4.45883 3.8457 4.07654' stroke='none' />
          <path d='M7.30664 2.69214V4.07653' stroke='none' strokeLinecap='round' strokeLinejoin='round' />

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
          <path d='M8.513 17.3617L3 14.5745' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M8.50439 20.2483V17.7119' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M3 14.5746V18.1793L8.513 20.9618L13.5 18.7499' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M8.513 13.6008L3 10.8136' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M8.50439 16.4874V13.951' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M3 10.8137V14.4185L8.513 17.2009L10.5 16.5001' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M14.0752 6.99055L8.513 9.83993L3 7.0527L5.7565 5.71858M14.0752 6.99055L11.2941 5.6875M14.0752 6.99055V8.78912' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M15.75 21C15.75 21.4142 16.0858 21.75 16.5 21.75C16.9142 21.75 17.25 21.4142 17.25 21L15.75 21ZM15.75 18L15.75 21L17.25 21L17.25 18L15.75 18Z' fill='white' />
          <path d='M14.25 10.5C14.25 10.0858 13.9142 9.75 13.5 9.75C13.0858 9.75 12.75 10.0858 12.75 10.5L14.25 10.5ZM14.25 13.5L14.25 10.5L12.75 10.5L12.75 13.5L14.25 13.5Z' fill='white' />
          <path d='M20.25 10.5C20.25 10.0858 19.9142 9.75 19.5 9.75C19.0858 9.75 18.75 10.0858 18.75 10.5L20.25 10.5ZM20.25 13.5L20.25 10.5L18.75 10.5L18.75 13.5L20.25 13.5Z' fill='white' />
          <path d='M16.5 18C18.9853 18 21 15.9853 21 13.5H12C12 15.9853 14.0147 18 16.5 18Z' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
          <path d='M8.50439 12.7265V10.1902' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M3 7.05286V10.6576L8.513 13.4401L10.5 12.75' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M5.76855 4.03833V6.11491' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <ellipse cx='8.36428' cy='4.03829' rx='2.59573' ry='1.03829' stroke='none' strokeWidth={1.5} />
          <path d='M10.96 6.11487C10.96 6.6883 9.79786 7.15316 8.36428 7.15316C6.9307 7.15316 5.76855 6.6883 5.76855 6.11487' stroke='none' strokeWidth={1.5} />
          <path d='M10.96 4.03833V6.11491' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />

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
          <path d='M14.1883 28.936L5 24.2906' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M14.1738 33.747V29.5198' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M5 24.2908V30.2987L14.1883 34.9361L22.5 31.2497' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M14.1883 22.6678L5 18.0225' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M14.1738 27.4787V23.2515' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M5 18.0226V24.0305L14.1883 28.6679L17.5 27.4998' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M23.4586 11.6508L14.1883 16.3997L5 11.7543L9.59416 9.5308M23.4586 11.6508L18.8235 9.479M23.4586 11.6508V14.6484' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M26.5 35C26.5 35.5523 26.9477 36 27.5 36C28.0523 36 28.5 35.5523 28.5 35L26.5 35ZM26.5 30L26.5 35L28.5 35L28.5 30L26.5 30Z' fill='white' />
          <path d='M23.5 17.5C23.5 16.9477 23.0523 16.5 22.5 16.5C21.9477 16.5 21.5 16.9477 21.5 17.5L23.5 17.5ZM23.5 22.5L23.5 17.5L21.5 17.5L21.5 22.5L23.5 22.5Z' fill='white' />
          <path d='M33.5 17.5C33.5 16.9477 33.0523 16.5 32.5 16.5C31.9477 16.5 31.5 16.9477 31.5 17.5L33.5 17.5ZM33.5 22.5L33.5 17.5L31.5 17.5L31.5 22.5L33.5 22.5Z' fill='white' />
          <path d='M27.5 30C31.6421 30 35 26.6421 35 22.5H20C20 26.6421 23.3579 30 27.5 30Z' stroke='none' strokeWidth={2} strokeLinejoin='round' />
          <path d='M14.1738 21.2108V16.9835' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M5 11.7545V17.7624L14.1883 22.3999L17.5 21.2498' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M9.61426 6.73047V10.1914' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <ellipse cx='13.9405' cy='6.73049' rx='4.32621' ry='1.73049' stroke='none' strokeWidth={2} />
          <path d='M18.2667 10.1914C18.2667 11.1471 16.3298 11.9219 13.9405 11.9219C11.5512 11.9219 9.61426 11.1471 9.61426 10.1914' stroke='none' strokeWidth={2} />
          <path d='M18.2666 6.73047V10.1914' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />

        </svg>
      )
      break

    default:
      break
  }
  return icon
}

StackablesPluginIcon.propTypes = {
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
  disabled: PropTypes.bool
}
StackablesPluginIcon.defaultProps = {
  color: MAIN_DARK_BLUE,
  size: MEDIUM,
  disabled: false
}

export default StackablesPluginIcon
