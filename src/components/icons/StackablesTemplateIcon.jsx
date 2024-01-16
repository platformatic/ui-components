import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const StackablesTemplateIcon = ({ color, size, disabled, inactive }) => {
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
          <path d='M5.67533 11.5745L2 9.71631' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M5.66943 13.4989V11.808' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M5.67533 13.9746L2 12.1196V9.71643' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M5.67533 9.06714L2 7.20898' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M5.66943 10.9916V9.30066' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M5.67533 11.4672L2 9.61228V7.20911' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M7.52939 3.79163L9.38344 4.66032L5.67533 6.55991L2 4.70176L3.83767 3.81234' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M5.66943 8.48436V6.79346' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M5.67533 8.96004L2 7.10507V4.7019M9.5 4.7019V5.5' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M3.8457 2.69214V4.07653' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <ellipse cx='5.57619' cy='2.69219' rx='1.73049' ry='0.692194' stroke='none' />
          <path d='M7.30667 4.07654C7.30667 4.45883 6.53191 4.76873 5.57619 4.76873C4.62047 4.76873 3.8457 4.45883 3.8457 4.07654' stroke='none' />
          <path d='M7.30664 2.69214V4.07653' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <rect x='7' y='7' width='7' height='7' rx='1' stroke='none' strokeLinejoin='round' />
          <rect x='8.16699' y='8.16675' width='4.66667' height='1.16667' stroke='none' strokeLinejoin='round' />
          <rect x='8.16699' y='11.0833' width='1.75' height='1.75' stroke='none' strokeLinejoin='round' />
          <rect x='11.083' y='11.0833' width='1.75' height='1.75' stroke='none' strokeLinejoin='round' />

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
          <path d='M8.513 20.9618L3 18.1793V14.5746' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M8.513 13.6008L3 10.8136' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M8.50439 16.4874V13.951' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M8.513 17.2009L3 14.4185V10.8137' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M11.2941 5.6875L14.0752 6.99055L8.513 9.83993L3 7.0527L5.7565 5.71858' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M8.50439 12.7265V10.1902' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M8.513 13.4401L3 10.6576V7.05286M14.25 7.05286V8.25' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M5.76855 4.03833V6.11491' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <ellipse cx='8.36428' cy='4.03829' rx='2.59573' ry='1.03829' stroke='none' strokeWidth={1.5} />
          <path d='M10.96 6.11487C10.96 6.6883 9.79786 7.15316 8.36428 7.15316C6.9307 7.15316 5.76855 6.6883 5.76855 6.11487' stroke='none' strokeWidth={1.5} />
          <path d='M10.96 4.03833V6.11491' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <rect x='10.5' y='10.5' width='10.5' height='10.5' rx='1' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
          <rect x='12.2505' y='12.2501' width='7' height='1.75' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
          <rect x='12.25' y='16.625' width='2.625' height='2.625' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
          <rect x='16.625' y='16.625' width='2.625' height='2.625' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />

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
          <path d='M14.1883 34.9361L5 30.2987V24.2908' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M14.1883 22.6678L5 18.0225' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M14.1738 27.4787V23.2515' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M14.1883 28.6679L5 24.0305V18.0226' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M18.8235 9.479L23.4586 11.6508L14.1883 16.3997L5 11.7543L9.59416 9.5308' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M14.1738 21.2108V16.9835' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M14.1883 22.3999L5 17.7624V11.7545M23.75 11.7545V13.7498' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M9.61426 6.73047V10.1914' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <ellipse cx='13.9405' cy='6.73049' rx='4.32621' ry='1.73049' stroke='none' strokeWidth={2} />
          <path d='M18.2667 10.1914C18.2667 11.1471 16.3298 11.9219 13.9405 11.9219C11.5512 11.9219 9.61426 11.1471 9.61426 10.1914' stroke='none' strokeWidth={2} />
          <path d='M18.2666 6.73047V10.1914' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <rect x='17.5' y='17.5' width='17.5' height='17.5' rx='1' stroke='none' strokeWidth={2} strokeLinejoin='round' />
          <rect x='20.4175' y='20.4169' width='11.6667' height='2.91667' stroke='none' strokeWidth={2} strokeLinejoin='round' />
          <rect x='20.417' y='27.7083' width='4.375' height='4.375' stroke='none' strokeWidth={2} strokeLinejoin='round' />
          <rect x='27.708' y='27.7083' width='4.375' height='4.375' stroke='none' strokeWidth={2} strokeLinejoin='round' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

StackablesTemplateIcon.propTypes = {
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
  inactive: PropTypes.bool
}
StackablesTemplateIcon.defaultProps = {
  color: MAIN_DARK_BLUE,
  size: MEDIUM,
  disabled: false,
inactive: false
}

export default StackablesTemplateIcon
