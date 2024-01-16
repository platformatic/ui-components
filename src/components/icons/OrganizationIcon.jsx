import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const OrganizationIcon = ({ color, size, disabled, inactive }) => {
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
          <rect x={2} y={11} width={3} height={3} stroke='none' strokeLinejoin='round' />
          <rect x={6.5} y={11} width={3} height={3} stroke='none' strokeLinejoin='round' />
          <rect x={11} y={11} width={3} height={3} stroke='none' strokeLinejoin='round' />
          <rect x={6} y={2} width={4} height={4} stroke='none' strokeLinejoin='round' />
          <path d='M8 6V8.5M8 8.5H4C3.44772 8.5 3 8.94772 3 9.5V11M8 8.5H12C12.5523 8.5 13 8.94772 13 9.5V11M8 8.5V11' stroke='none' />

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
          <rect x={3} y={16.5} width={4.5} height={4.5} stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
          <rect x={9.75} y={16.5} width={4.5} height={4.5} stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
          <rect x={16.5} y={16.5} width={4.5} height={4.5} stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
          <rect x={9} y={3} width={6} height={6} stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
          <path d='M12 9V12.75M12 12.75H5.5C4.94772 12.75 4.5 13.1977 4.5 13.75V16.5M12 12.75H18.5C19.0523 12.75 19.5 13.1977 19.5 13.75V16.5M12 12.75V16.5' stroke='none' strokeWidth={1.5} />
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
          <rect x={5} y={27.5} width={7.5} height={7.5} stroke='none' strokeWidth={2} strokeLinejoin='round' />
          <rect x={16.25} y={27.5} width={7.5} height={7.5} stroke='none' strokeWidth={2} strokeLinejoin='round' />
          <rect x={27.5} y={27.5} width={7.5} height={7.5} stroke='none' strokeWidth={2} strokeLinejoin='round' />
          <rect x={15} y={5} width={10} height={10} stroke='none' strokeWidth={2} strokeLinejoin='round' />
          <path d='M20 15V21.25M20 21.25H8.5C7.94772 21.25 7.5 21.6977 7.5 22.25V27.5M20 21.25H31.5C32.0523 21.25 32.5 21.6977 32.5 22.25V27.5M20 21.25V27.5' stroke='none' strokeWidth={2} />

        </svg>
      )
      break

    default:
      break
  }
  return icon
}

OrganizationIcon.propTypes = {
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
OrganizationIcon.defaultProps = {
  color: MAIN_DARK_BLUE,
  size: MEDIUM,
  disabled: false,
  inactive: false
}

export default OrganizationIcon
