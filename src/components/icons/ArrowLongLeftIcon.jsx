import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, SMALL, MEDIUM, LARGE, MAIN_DARK_BLUE } from '../constants'

const ArrowLongLeftIcon = ({ color, size }) => {
  const className = `${styles.noShrinkForFlex} ` + styles[`${color}`]
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
          <path d='M9.2 13L14 8.2M14 8.2L9.2 3.4M14 8.2L2 8.2' stroke='none' strokeLinecap='round' strokeLinejoin='round' transform='rotate(-180 8 8)' />
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
          <path d='M13.8 19.5L21 12.3M21 12.3L13.8 5.1M21 12.3L3 12.3' stroke='none' strokeWidth={1.5} strokeLinecap='round' strokeLinejoin='round' transform='rotate(-180 12 12)' />

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
          <path d='M23 32.5L35 20.5M35 20.5L23 8.5M35 20.5L5 20.5' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' transform='rotate(-180 20 20)' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

ArrowLongLeftIcon.propTypes = {
  /**
   * color of text, icon and borders
   */
  color: PropTypes.oneOf(COLORS_ICON),
  /**
   * Size
   */
  size: PropTypes.oneOf(SIZES)
}

ArrowLongLeftIcon.defaultProps = {
  color: MAIN_DARK_BLUE,
  size: MEDIUM
}

export default ArrowLongLeftIcon
