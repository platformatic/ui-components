import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const PullRequestIcon = ({
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
          <circle cx={3.8} cy={12.2} r={1.8} stroke='none' />
          <circle cx={3.8} cy={3.8} r={1.8} stroke='none' />
          <line x1={3.69995} y1={5.59998} x2={3.69995} y2={10.4} stroke='none' />
          <circle cx={12.1999} cy={12.2} r={1.8} stroke='none' />
          <path d='M12.2 10.4V4.80005C12.2 4.24776 11.7522 3.80005 11.2 3.80005H9.19995' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M10.4001 2L8.6001 3.8L10.4001 5.6' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
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
          <circle cx={5.7} cy={18.3} r={2.7} stroke='none' strokeWidth={1.5} />
          <circle cx={5.7} cy={5.7} r={2.7} stroke='none' strokeWidth={1.5} />
          <line x1={5.55005} y1={8.40002} x2={5.55005} y2={15.6} stroke='none' strokeWidth={1.5} />
          <ellipse cx={18.2999} cy={18.3} rx={2.7} ry={2.7} stroke='none' strokeWidth={1.5} />
          <path d='M18.2998 15.6V6.69995C18.2998 6.14767 17.8521 5.69995 17.2998 5.69995H13.7998' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M15.5999 3L12.8999 5.7L15.5999 8.4' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />

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
          <circle cx={9.5} cy={30.5} r={4.5} stroke='none' strokeWidth={2} />
          <circle cx={9.5} cy={9.5} r={4.5} stroke='none' strokeWidth={2} />
          <line x1={9} y1={14} x2={9} y2={26} stroke='none' strokeWidth={2} />
          <ellipse cx={30.4998} cy={30.5} rx={4.5} ry={4.5} stroke='none' strokeWidth={2} />
          <path d='M30.4998 26V10.5C30.4998 9.94772 30.052 9.5 29.4998 9.5H22.9998' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M26 5L21.5 9.5L26 14' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />

        </svg>
      )
      break

    default:
      break
  }
  return icon
}

PullRequestIcon.propTypes = {
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

export default PullRequestIcon
