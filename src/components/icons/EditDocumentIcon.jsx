import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const EditDocumentIcon = ({ color, size, disabled, inactive }) => {
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
          <path d='M10 6.8V3C10 2.44772 9.55228 2 9 2H3C2.44772 2 2 2.44771 2 3V10.6C2 11.1523 2.44772 11.6 3 11.6H6' stroke='none' strokeLinecap='round' />
          <path d='M3.66675 4.66675H8.11119' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M3.66675 6.80005H8.11119' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <path d='M3.66675 8.93335H8.11119' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <rect x='12.2073' y='7.27808' width='1.80753' height='6.62762' transform='rotate(45 12.2073 7.27808)' stroke='none' strokeLinejoin='round' />
          <path d='M8.79887 13.2427L7.52075 11.9646L6.88169 13.8818L8.79887 13.2427Z' stroke='none' strokeLinejoin='round' />
          <path d='M12.8463 6.63906C13.1992 6.28612 13.7715 6.28612 14.1244 6.63906V6.63906C14.4774 6.992 14.4774 7.56424 14.1244 7.91718L13.4854 8.55624L12.2072 7.27812L12.8463 6.63906Z' stroke='none' />

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
          <path d='M15 10.2V4C15 3.44772 14.5523 3 14 3H4C3.44772 3 3 3.44772 3 4V16.4C3 16.9523 3.44772 17.4 4 17.4H9' stroke='none' strokeWidth={1.5} strokeLinecap='round' />
          <path d='M5.5 7H12.1667' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M5.5 10.2H12.1667' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M5.5 13.3999H12.1667' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <rect x='18.311' y='10.917' width='2.7113' height='9.94143' transform='rotate(45 18.311 10.917)' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
          <path d='M13.1984 19.864L11.2812 17.9468L10.3227 20.8225L13.1984 19.864Z' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
          <path d='M19.5209 9.70711C19.9114 9.31658 20.5446 9.31658 20.9351 9.70711L21.4381 10.2101C21.8286 10.6006 21.8286 11.2338 21.4381 11.6243L20.228 12.8344L18.3108 10.9172L19.5209 9.70711Z' stroke='none' strokeWidth={1.5} />

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
          <path d='M25 17V6C25 5.44772 24.5523 5 24 5H6C5.44772 5 5 5.44772 5 6V28C5 28.5523 5.44772 29 6 29H15' stroke='none' strokeWidth={2} strokeLinecap='round' />
          <path d='M9.16675 11.6667H20.2779' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M9.16675 17H20.2779' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <path d='M9.16675 22.3333H20.2779' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <rect x='30.5183' y='18.1951' width='4.51883' height='16.5691' transform='rotate(45 30.5183 18.1951)' stroke='none' strokeWidth={2} strokeLinejoin='round' />
          <path d='M21.9975 33.1064L18.8022 29.9111L17.2046 34.7041L21.9975 33.1064Z' stroke='none' strokeWidth={2} strokeLinejoin='round' />
          <path d='M33.0063 15.7071C33.3968 15.3166 34.03 15.3166 34.4205 15.7071L36.2016 17.4882C36.5921 17.8787 36.5921 18.5119 36.2016 18.9024L33.7134 21.3906L30.5181 18.1953L33.0063 15.7071Z' stroke='none' strokeWidth={2} />

        </svg>
      )
      break

    default:
      break
  }
  return icon
}

EditDocumentIcon.propTypes = {
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
EditDocumentIcon.defaultProps = {
  color: MAIN_DARK_BLUE,
  size: MEDIUM,
  disabled: false,
inactive: false
}

export default EditDocumentIcon
