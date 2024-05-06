import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const AppEditIcon = ({
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
          <path d='M10 4L6.33013 2L2 4.5V9.5L4 11' stroke='none' strokeLinecap='round' strokeLinejoin='round' />
          <rect x='10.988' y='5.49731' width='2.11765' height='7.76471' transform='rotate(45 10.988 5.49731)' stroke='none' strokeLinejoin='round' />
          <path d='M6.99496 12.4852L5.49756 10.9878L4.74886 13.2339L6.99496 12.4852Z' stroke='none' strokeLinejoin='round' />
          <path d='M11.7782 4.70711C12.1688 4.31658 12.8019 4.31658 13.1925 4.70711L13.2756 4.7903C13.6662 5.18082 13.6662 5.81399 13.2756 6.20451L12.4854 6.99481L10.9879 5.4974L11.7782 4.70711Z' stroke='none' />

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
          <path d='M15 6L9.49519 3L3 6.75V14.25L6 16.5' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' />
          <rect x='16.4819' y='8.24609' width='3.17647' height='11.6471' transform='rotate(45 16.4819 8.24609)' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
          <path d='M10.4922 18.728L8.24609 16.4819L7.12304 19.8511L10.4922 18.728Z' stroke='none' strokeWidth={1.5} strokeLinejoin='round' />
          <path d='M18.0209 6.70711C18.4114 6.31658 19.0446 6.31658 19.4351 6.70711L20.267 7.539C20.6575 7.92952 20.6575 8.56269 20.267 8.95321L18.728 10.4922L16.4819 8.2461L18.0209 6.70711Z' stroke='none' strokeWidth={1.5} />

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
          <path d='M25 10L15.8253 5L5 11.25V23.75L10 27.5' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <rect x='27.47' y='13.7434' width='5.29412' height='19.4118' transform='rotate(45 27.47 13.7434)' stroke='none' strokeWidth={2} strokeLinejoin='round' />
          <path d='M17.4872 31.2132L13.7437 27.4697L11.8719 33.085L17.4872 31.2132Z' stroke='none' strokeWidth={2} strokeLinejoin='round' />
          <path d='M30.5063 10.7071C30.8968 10.3166 31.53 10.3166 31.9205 10.7071L34.2498 13.0364C34.6403 13.4269 34.6403 14.0601 34.2498 14.4506L31.2134 17.487L27.4699 13.7435L30.5063 10.7071Z' stroke='none' strokeWidth={2} />

        </svg>
      )
      break

    default:
      break
  }
  return icon
}

AppEditIcon.propTypes = {
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

export default AppEditIcon
