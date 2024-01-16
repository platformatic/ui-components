import * as React from 'react'
import PropTypes from 'prop-types'
import styles from './Icons.module.css'
import { COLORS_ICON, SIZES, LARGE, MAIN_DARK_BLUE } from '../constants'

const ImportApplicationIcon = ({ color, size, disabled, inactive }) => {
  let className = `${styles.svgClassName} ` + styles[`${color}`]
  if (disabled) {
    className += ` ${styles.iconDisabled}`
  }
  if (inactive) {
    className += ` ${styles.iconInactive}`
  }
  let icon = <></>

  switch (size) {
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
          <path d='M34 5.00021H6C5.44772 5.00021 5 5.44793 5 6.00021V24.0002C5 24.5525 5.44772 25.0002 6 25.0002H34C34.5523 25.0002 35 24.5525 35 24.0002V6.00021C35 5.44793 34.5523 5.00021 34 5.00021Z' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
          <rect x={15} y={25.0002} width={10} height={5} stroke='none' strokeWidth={2} />
          <path d='M10 31.0002C10 30.4479 10.4477 30.0002 11 30.0002H29C29.5523 30.0002 30 30.4479 30 31.0002V35.0002H10V31.0002Z' stroke='none' strokeWidth={2} />
          <path d='M26.25 8.75021L27.6532 13.0689H32.1941L28.5204 15.7379L29.9237 20.0566L26.25 17.3875L22.5763 20.0566L23.9796 15.7379L20.3059 13.0689H24.8468L26.25 8.75021Z' stroke='none' strokeWidth={2} strokeLinejoin='round' />
          <path d='M22.5 15.0002H10M10 15.0002L15 10.0002M10 15.0002L15 20.0002' stroke='none' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
        </svg>
      )
      break

    default:
      break
  }
  return icon
}

ImportApplicationIcon.propTypes = {
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
ImportApplicationIcon.defaultProps = {
  color: MAIN_DARK_BLUE,
  size: LARGE,
  disabled: false,
  inactive: false
}

export default ImportApplicationIcon
